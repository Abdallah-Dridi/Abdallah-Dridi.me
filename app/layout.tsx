import type { Metadata } from "next";
import { Bebas_Neue, EB_Garamond, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { CustomCursor } from "@/components/custom-cursor";
import { FilmGrain } from "@/components/film-grain";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";

import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdallah-dridi.me"),
  title: "Abdallah Dridi — Cybersecurity Engineering",
  description:
    "Portfolio of Abdallah Dridi, a cybersecurity engineering student seeking a six-month end-of-studies internship in France from February 2027.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/#en",
      fr: "/#fr",
    },
  },
  openGraph: {
    title: "Abdallah Dridi — Cybersecurity Engineering",
    description:
      "Security that runs itself. Cybersecurity engineering across SOC, cloud, DevSecOps, and evidence-based AI security.",
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
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bebasNeue.variable} ${ebGaramond.variable} ${jetBrainsMono.variable}`}
      >
        <Providers>
          <FilmGrain />
          <Navbar />
          <CustomCursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}
