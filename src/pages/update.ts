export const prerender = false;
import { updateWeeklyPlayed } from "../api/spotify.ts";

export async function GET(context) {
  const runtime = context.locals.runtime;
  console.log(runtime.db);

  await updateWeeklyPlayed(env);
  return new Response("Some body");
}
