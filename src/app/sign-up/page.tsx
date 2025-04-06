import { Link } from "lucide-react";

import { Button } from "@/components/shadcn/button";

import { supabase } from "@/lib/supabase";
import { FONTS } from "@/lib/fonts";
import { Input } from "@/components/shadcn/input";

export default function SignUp() {
  async function handleEmailSignUp(e: React.FormEvent) {
    e.preventDefault();
  }

  async function handleSocialSignUp(provider: "google" | "apple") {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });

      if (error) throw error;
    } catch (err: any) {}
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md text-card-foreground space-y-8 bg-card p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h1 className={FONTS.openSans + " text-3xl font-semibold"}>
            Create an account
          </h1>
          <p className="mt-2 text-muted-foreground">Sign up to get started</p>
        </div>

        <form className={FONTS.openSans + " space-y-4"}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-muted-foreground">
              Email
            </label>
            <Input
              id="email"
              type="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-muted-foreground">
              Password
            </label>
            <Input
              id="password"
              type="password"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              placeholder="Create a password"
            />
          </div>

          <Button
            variant={"outline"}
            type="submit"
            className="w-full text-foreground mt-8">
            Sign Up
          </Button>
        </form>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-muted-foreground  hover:bg-gray-50">
            <span className="sr-only">Sign up with Google</span>
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
              <path
                d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                fill="currentColor"
              />
            </svg>
            Google
          </button>

          <button className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-muted-foreground  hover:bg-gray-50">
            <span className="sr-only">Sign up with Apple</span>
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
              <path
                d="M16.125,3c-2.987,0-3.938,1.44-5.875,1.44S7.238,3,4.875,3s-4.5,2.5-4.5,8c0,7,4,13,5.125,13s2.375-1,4.125-1s3,1,4.125,1s5.125-6.5,5.125-13C18.75,5.5,19.125,3,16.125,3z M12,2c0.731,0,1.522-0.8,2.25-0.8c0.475,0,1.888,0.1,2.625,1.6c-2.068,0-2.681,1.998-2.681,2c-0.05,0.002-2.194,0-2.194,0s0-0.96-0.75-1.8C10.519,2.2,11.269,2,12,2z"
                fill="currentColor"
              />
            </svg>
            Apple
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:text-blue-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
