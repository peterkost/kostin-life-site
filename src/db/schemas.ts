import { sqliteTable as table } from "drizzle-orm/sqlite-core";
import * as t from "drizzle-orm/sqlite-core";

export const listeningHistory = table(
  "listening_history",
  {
    id: t
      .text("id")
      .notNull()
      .references(() => songMetadata.id),
    timestamp: t.text("timestamp").notNull(),
  },
  (table) => ({
    pk: t.primaryKey({ columns: [table.id, table.timestamp] }),
  }),
);

export const songMetadata = table("song_metadata", {
  id: t.text().primaryKey(),
  name: t.text().notNull(),
  artistId: t.text().notNull(),
  albumId: t.text().notNull(),
  url: t.text().notNull(),
});

export const spotifyAuth = table("spotify_auth", {
  id: t.text().primaryKey(),
  refreshToken: t.text("refresh_token").notNull(),
  updatedAt: t.integer("updated_at").notNull(),
});

export const weeklyMostPlayed = table("weekly_most_played", {
  id: t.text().notNull().unique(),
  playCount: t.integer().notNull(),
});
