import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/shadcn/card";
import { Label } from "@/components/shadcn/label";
import Providers from "./Providers";

import { FONTS } from "@/lib/fonts";
import { browserClient } from "@/lib/supabase/client";
import SignUpForm from "./SignUpForm";

export default function SignUp() {
  const createUser = async function (email: string, password: string) {
    "use server";

    const { data, error } = await browserClient().auth.signUp({
      email,
      password
    });
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
              <Providers />
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
