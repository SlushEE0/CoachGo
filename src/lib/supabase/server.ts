import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export async function getServerClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.PUB_SUPABASE_URL!,
    process.env.PUB_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch (e) {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
            console.error(e);
          }
        }
      }
    }
  );
}
