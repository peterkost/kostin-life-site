import type { APIContext, APIRoute } from "astro";
import { drizzle } from "drizzle-orm/d1";
import { eq, desc } from "drizzle-orm";
import * as schema from "../../db/schemas";

export const GET: APIRoute = async ({
  params,
  request,
  locals,
}: APIContext) => {
  const env = locals.runtime.env;

  const db = drizzle(env.DB, { schema });

  const lastPlayed = await db
    .select({
      title: schema.songMetadata.name,
      artist: schema.songMetadata.artistId,
      timestamp: schema.listeningHistory.timestamp,
      url: schema.songMetadata.url,
    })
    .from(schema.listeningHistory)
    .innerJoin(
      schema.songMetadata,
      eq(schema.listeningHistory.id, schema.songMetadata.id),
    )
    .orderBy(desc(schema.listeningHistory.timestamp))
    .limit(10);

  return new Response(
    JSON.stringify({
      lastPlayed,
    }),
  );
};

export const prerender = false;
