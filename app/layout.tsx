import type { Metadata } from "next";
import { Geist, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";
import { content } from "@/data/content";
import { en } from "@/data/en";

import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdallah-dridi.me"),
  title: en.seo.title,
  description: en.seo.description,
  alternates: {
    canonical: "/",
    languages: {
      en: "/#en",
      fr: "/#fr",
    },
  },
  openGraph: {
    title: en.seo.title,
    description: en.seo.description,
    url: "https://abdallah-dridi.me",
    siteName: content.identity.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: en.seo.title,
    description: en.seo.description,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSerif.variable} ${geist.variable} ${jetBrainsMono.variable}`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
