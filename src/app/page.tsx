"use server";

import { permanentRedirect, redirect } from "next/navigation";

export default async function Home() {
  permanentRedirect("/landing");

  return <h1>Redirecting ...</h1>;
}
