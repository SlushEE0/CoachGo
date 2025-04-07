import { createBrowserClient } from "@supabase/ssr";

import SECRETS from "../env/vars";

export function browserClient() {
  return createBrowserClient(
    SECRETS.PUB_SUPABASE_URL,
    SECRETS.PUB_SUPABASE_ANON_KEY
  );
}
