import * as app from "../dist/_worker.js/index.js";
import { saveRecentlyPlayed, updateWeeklyPlayed } from "./api/spotify.ts";

export default {
  fetch: app.default.fetch,
  pageMap: app.pageMap,
  async scheduled(
    controller: ScheduledController,
    env: Env,
    ctx: ExecutionContext,
  ) {
    await saveRecentlyPlayed(env);
    // await updateWeeklyPlayed(env);
  },
};
