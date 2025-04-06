import type { Metadata } from "next";

import { SidebarProvider } from "@/components/shadcn/sidebar";
import Navbar from "@/components/Navbar";

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
      <body className={"dark"}>
        <SidebarProvider>
          <main className="w-full ${openSans.className} antialiased">
            <Navbar />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
