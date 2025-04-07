"use server";

import { createClient, OAuthResponse } from "@supabase/supabase-js";

import SECRETS from "../env/vars";

// Create a single supabase client for interacting with your database
// export const supabase = createClient(
//   "https://mfjvnzzzdlykmznphiey.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1manZuenp6ZGx5a216bnBoaWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4MDM4OTgsImV4cCI6MjA1OTM3OTg5OH0.1u_AuD4QS16FqJuH3CjA49eIVyBzMvXlSr_SxlrBVNA"
// );

const client = createClient(
  SECRETS.PUB_SUPABASE_URL,
  SECRETS.PUB_SUPABASE_ANON_KEY
);

export async function getServerClient() {
  return createClient(SECRETS.PUB_SUPABASE_URL, SECRETS.PUB_SUPABASE_ANON_KEY);
}

/**
 * Get the Google OAuth link for authentication.
 * @returns The Google OAuth link and any error encountered.
 */
export async function getGoogleOAuthLink(): Promise<OAuthResponse> {
  const res = await client.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `/api/auth/gsi`
    }
  });

  if (res.error) {
    console.error(
      `[AUTH] #${res.error.code} ${res.error.message || "<no message>"}`
    );
  }

  return res;
}
