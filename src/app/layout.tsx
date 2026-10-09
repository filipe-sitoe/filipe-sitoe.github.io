import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import { geistMono, geistSans } from "@/lib/fonts";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const title = `${site.name} | ${site.role}`;

// Enables the scroll reveal styles before the first paint. If the app script never
// starts (e.g. it fails to load), the content is shown again after a few seconds.
const revealScript = `document.documentElement.dataset.js="";setTimeout(function(){if(!window.__revealReady)document.documentElement.removeAttribute("data-js")},6000)`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.fullName, url: siteUrl }],
  creator: site.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0e",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="min-h-dvh bg-background font-sans text-foreground antialiased">
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
        {children}
      </body>
    </html>
  );
}
