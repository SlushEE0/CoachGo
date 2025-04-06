import { Geist, Geist_Mono, Open_Sans } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const openSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans"
});

export const FONTS = {
  openSans: openSans.className,
  geistMono: geistMono.className,
  geistSans: geistSans.className
};
