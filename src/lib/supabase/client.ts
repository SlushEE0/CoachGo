import { createBrowserClient } from "@supabase/ssr";

export function getBrowserClient() {
  return createBrowserClient(
    process.env.PUB_SUPABASE_URL!,
    process.env.PUB_SUPABASE_ANON_KEY!
  );
}
