import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { drizzle, DrizzleD1Database } from "drizzle-orm/d1";
import { listeningHistory, songMetadata, spotifyAuth } from "../db/schemas";

import type { AccessToken } from "@spotify/web-api-ts-sdk";

export const saveRecentlyPlayed = async (env: Env) => {
  const db = drizzle(env.DB);
  const token = await getToken(db, env);

  const sdk = SpotifyApi.withAccessToken(env.SPOTIFY_CLIENT_ID, token);

  const recentlyPlayed = await sdk.player.getRecentlyPlayedTracks(50);

  console.log("Fetched", recentlyPlayed.total);

  // TODO: get last played song from DB

  recentlyPlayed.items.forEach(async (item) => {
    const { track, played_at } = item;

    console.log("Saving", track.name);

    await db
      .insert(songMetadata)
      .values({
        id: track.id,
        name: track.name,
        artistId: track.artists[0]?.id,
        albumId: track.album.id,
        url: track.external_urls.spotify,
      })
      .onConflictDoNothing();

    await db
      .insert(listeningHistory)
      .values({
        id: track.id,
        timestamp: played_at,
      })
      .onConflictDoNothing();
  });
};

const getToken = async (
  db: DrizzleD1Database<Record<string, never>> & { $client: D1Database },
  env: Env,
) => {
  console.log("Refreshing token");
  const rows = await db
    .select()
    .from(spotifyAuth)
    .where(spotifyAuth.id.equals("default"))
    .limit(1)
    .all();

  const currentRefreshToken = rows[0].refreshToken;

  const body = new URLSearchParams();
  body.append("grant_type", "refresh_token");
  body.append("refresh_token", currentRefreshToken);

  const basicAuth = btoa(
    `${env.SPOTIFY_CLIENT_SECRET}:${env.SPOTIFY_CLIENT_SECRET}`,
  );

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Token refresh failed: ${response.status} ${errorText}`);
  }

  const data = await response.json();

  await db
    .insert(spotifyAuth)
    .values({
      id: "default",
      refreshToken: data.refresh_token ?? currentRefreshToken,
      updatedAt: Date.now(),
    })
    .onConflictDoNothing();

  return {
    ...data,
    refresh_token: data.refresh_token ?? currentRefreshToken,
  } as AccessToken;
};
