"use client";

import { FormEvent, MouseEvent, useRef } from "react";
import { toast } from "sonner";

import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";

type props = {
  createUser: (email: string, password: string) => Promise<void>;
};

export default function SignUpForm({ createUser }: props) {
  const validateForm = function (e: FormEvent<HTMLFormElement>) {
    const emailInput =
      e.currentTarget.querySelector<HTMLInputElement>("#email");
    const passwordInput =
      e.currentTarget.querySelector<HTMLInputElement>("#password");

    const email = emailInput?.value!;
    const pass = emailInput?.value!;

    console.log("FORM SUBMITTED", email, pass);

    let valid = true;
    if (!email) {
      toast.error("Please enter an email address");
      return;
    }
    if (!pass) {
      toast("Please enter an password");
      return;
    }
    if (!email.includes("@") && !email.includes(".")) {
      toast("Please enter a valid email address");
      return;
    }
    if (pass.length < 8) {
      toast("Password must be at least 8 characters long");
      return;
    }
  };

  const onFormSubmit = function (formData: FormData) {
    // toast("SUUUUPER NURDS");
  };

  return (
    <form action={onFormSubmit} onSubmit={validateForm}>
      <div className="grid gap-6">
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 px-2 bg-card text-muted-foreground">
            Or continue with
          </span>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="text" placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button
            type="submit"
            className="w-full text-foreground border-primary">
            Sign Up
          </Button>
        </div>
        <div className="text-center text-sm">
          Already have an account?{" "}
          <a href="#" className="underline underline-offset-4">
            Sign In
          </a>
        </div>
      </div>
    </form>
  );
}
