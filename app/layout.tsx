import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AppSweep — A clearer way to uninstall Mac apps",
  description:
    "Review app files, background services, caches, and containers before removing them from your Mac.",
  icons: {
    icon: "/appsweep-icon.png",
    apple: "/appsweep-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
