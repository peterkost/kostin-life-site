PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_weekly_most_played` (
	`id` text PRIMARY KEY NOT NULL,
	`playCount` integer NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_weekly_most_played`("id", "playCount") SELECT "id", "playCount" FROM `weekly_most_played`;--> statement-breakpoint
DROP TABLE `weekly_most_played`;--> statement-breakpoint
ALTER TABLE `__new_weekly_most_played` RENAME TO `weekly_most_played`;--> statement-breakpoint
PRAGMA foreign_keys=ON;