import * as app from "../dist/_worker.js/index.js";
import { saveRecentlyPlayed } from "./api/spotify.js";

export default {
  ...app,
  async scheduled(
    controller: ScheduledController,
    env: Env,
    ctx: ExecutionContext,
  ) {
    console.log("Running Spotify CRON");
    await saveRecentlyPlayed(env);
  },
};
