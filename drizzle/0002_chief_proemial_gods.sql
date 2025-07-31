CREATE TABLE `weekly_most_played` (
	`id` text NOT NULL,
	`playCount` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `weekly_most_played_id_unique` ON `weekly_most_played` (`id`);