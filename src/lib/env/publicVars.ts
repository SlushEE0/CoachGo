import { getPubVars } from "./vars";

let pubVars: Awaited<ReturnType<typeof getPubVars>> | null = null;

export default async function PUBLIC_VARS() {
  if (!pubVars) {
    pubVars = await getPubVars();
  }

  return pubVars;
}
