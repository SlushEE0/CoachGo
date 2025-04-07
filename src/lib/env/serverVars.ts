import { getSrvVars } from "./vars";

let serverVars: ReturnType<typeof getSrvVars> | null = null;

export default async function SERVER_VARS() {
  if (!serverVars) {
    serverVars = await getSrvVars();
  }

  return serverVars;
}
