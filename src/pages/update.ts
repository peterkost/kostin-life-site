export const prerender = false;
import { updateWeeklyPlayed } from "../api/spotify.ts";

export async function GET(context) {
  const runtime = context.locals.runtime;
  await updateWeeklyPlayed(runtime.env);
  return new Response("Some body");
}
