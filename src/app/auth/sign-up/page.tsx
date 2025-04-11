import { toast } from "sonner";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/shadcn/card";
import Providers from "./Providers";

import { FONTS } from "@/lib/fonts";
import { getServerClient } from "@/lib/supabase/server";
import { getGoogleOAuthLink } from "@/lib/auth";
import SignUpForm from "./SignUpForm";
import { toLogged } from "@/lib/helpers";

export default function SignUp() {
  const createUser = async function (email: string, password: string) {
    "use server";

    const res = await getServerClient().auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `/dashboard`
      }
    });

    return res;
  };

  const generateGoogleOAuthLink = async function () {
    "use server";

    return getGoogleOAuthLink();
  };

  return (
    <div
      className={
        FONTS.openSans +
        " flex min-h-screen flex-col items-center justify-center p-4"
      }>
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Hello!</CardTitle>
            <CardDescription>Create an account to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <div id="providers" className="flex gap-4 mb-6 justify-center">
              <Providers getGoogleOAuthLink={generateGoogleOAuthLink} />
            </div>
            <SignUpForm {...{ createUser }} />
          </CardContent>
        </Card>
        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
          By clicking continue, you agree to our{" "}
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
}
