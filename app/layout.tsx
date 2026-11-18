import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { Providers } from "@/components/providers";
import { content } from "@/data/content";
import { en } from "@/data/en";

import "./globals.css";

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

export const viewport: Viewport = {
  themeColor: "#CFCCC4",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/archivo/archivo-latin-wdth-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/redaction/redaction-70-latin-400-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
