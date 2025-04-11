import "server-only";

import { OAuthResponse } from "@supabase/supabase-js";

import { getServerClient } from "./supabase/server";

/**
 * Get the Google OAuth link for authentication.
 * @returns The Google OAuth link and any error encountered.
 */
export async function getGoogleOAuthLink(): Promise<OAuthResponse> {
  const supabase = await getServerClient();

  const res = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `http://localhost:3000/api/auth/callback`
    }
  });

  if (res.error) {
    console.error(
      `[AUTH] #${res.error.code} ${res.error.message || "<no message>"}`
    );
  }

  return res;
}
