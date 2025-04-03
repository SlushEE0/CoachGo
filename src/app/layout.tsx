import type { Metadata } from "next";

import { openSans } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "CoachGo",
  description: "Specialized coaching made for YOU"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased dark`}>{children}</body>
    </html>
  );
}
