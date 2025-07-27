CREATE TABLE `listening_history` (
	`id` text NOT NULL,
	`timestamp` text NOT NULL,
	PRIMARY KEY(`id`, `timestamp`),
	FOREIGN KEY (`id`) REFERENCES `song_metadata`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `song_metadata` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`artistId` text NOT NULL,
	`albumId` text NOT NULL,
	`url` text NOT NULL
);
