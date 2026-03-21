import type { Metadata } from "next";
import type { ReactNode } from "react";

import { CustomCursor } from "@/components/custom-cursor";
import { FilmGrain } from "@/components/film-grain";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://abdallah-dridi.me"),
  title: "Abdallah Dridi | Systems, Signal, and Security",
  description:
    "Editorial portfolio of Abdallah Dridi, a cybersecurity engineering student focused on blue-team thinking, cloud labs, vulnerability tracking, and packet inspection.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Abdallah Dridi | Systems, Signal, and Security",
    description:
      "Cybersecurity engineering, blue-team attention, and real work across cloud labs, scanning, vulnerability tracking, and packet inspection.",
    url: "https://abdallah-dridi.me",
    siteName: "Abdallah Dridi",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdallah Dridi | Systems, Signal, and Security",
    description:
      "Cybersecurity engineering, blue-team attention, and real work across cloud labs, scanning, vulnerability tracking, and packet inspection."
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="site-backdrop" />
          <FilmGrain />
          <Navbar />
          <CustomCursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}
