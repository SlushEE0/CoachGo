import { NextResponse } from "next/server";
import { getServerClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get("next") ?? "/";

  console.log(request.url);

  if (code) {
    const supabase = await getServerClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    console.log(data);
    console.log(error);

    if (!error) {
      // const forwardedHost = request.headers.get("x-forwarded-host"); // original origin before load balancer
      // const isLocalEnv = process.env.NODE_ENV === "development";
      // if (isLocalEnv) {
      //   // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
      //   return NextResponse.redirect(`${origin}${next}`);
      // } else if (forwardedHost) {
      //   return NextResponse.redirect(`https://${forwardedHost}${next}`);
      // } else {
      //   return NextResponse.redirect(`${origin}${next}`);
      // }

      return NextResponse.redirect(`${origin}/landing`);
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
