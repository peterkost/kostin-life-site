CREATE TABLE `spotify_auth` (
	`id` text PRIMARY KEY NOT NULL,
	`refresh_token` text NOT NULL,
	`updated_at` integer NOT NULL
);
