"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { type AuthResponse } from "@supabase/supabase-js";

import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";

type Props = {
  createUser: (email: string, pass: string) => Promise<AuthResponse>;
};

export default function SignUpForm({ createUser }: Props) {
  const [isDisabled, SETisDisabled] = useState(true);
  const [isPasswordVisible, SETisPasswordVisible] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const getFormInputs = function (formData?: FormData) {
    let email = "";
    let pass = "";

    email = formData
      ? formData.get("email")?.toString()!
      : emailRef.current?.value!;
    pass = formData
      ? formData.get("password")?.toString()!
      : passRef.current?.value!;

    email = email.trim().toLowerCase();
    pass = pass.trim();

    return { email, pass };
  };

  const formValidate = function (email: string, pass: string, notify = true) {
    let valid = true;

    if (!email || (!email.includes("@") && !email.includes("."))) {
      notify
        ? toast.error("Please enter an email address", {
            style: {
              background: "var(--destructive)"
            }
          })
        : null;

      valid = false;
    }

    if (!pass || pass.length < 8) {
      notify
        ? toast.error("Password must be 8 characters long", {
            style: {
              background: "var(--destructive)"
            }
          })
        : null;

      valid = false;
    }

    SETisDisabled(!valid);
    console.log("[formValidate]", { email, pass, valid }, notify);
    return valid;
  };

  const formChange = function () {
    const { email, pass } = getFormInputs();

    formValidate(email, pass, false);
  };

  const formSumbit = async function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { email, pass } = getFormInputs();

    if (!formValidate(email, pass)) return;

    const { data, error } = await createUser(email, pass);

    if (!error) {
      console.log("[formAction] create user", { email, pass });

      toast.success("User created successfully");
    }
  };

  useEffect(() => {
    formChange();
  }, []);

  return (
    <form onSubmit={formSumbit} onChange={formChange}>
      <div className="grid gap-6">
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 px-2 bg-card text-muted-foreground">
            Or continue with
          </span>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="text"
              placeholder="m@example.com"
              ref={emailRef}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <div className="flex items-center justify-between gap-2">
              <Input
                id="password"
                type={isPasswordVisible ? "text" : "password"}
                ref={passRef}
              />
              <Button
                variant={"outline"}
                className="aspect-square"
                onClick={() => SETisPasswordVisible(!isPasswordVisible)}
                type="button">
                {isPasswordVisible ? <EyeOff /> : <Eye />}
              </Button>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full text-foreground border-primary bg-primary data-[disabled=true]:bg-primary/50 "
            data-disabled={isDisabled}>
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
