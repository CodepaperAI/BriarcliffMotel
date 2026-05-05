import type { Metadata, Viewport } from "next";

import { BookingDock, MotionRoot, SiteFooter, SiteHeader } from "@/components/marketing";
import { ScrollProgress } from "@/components/scroll-progress";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { TawkWidget } from "@/components/tawk-widget";
import { fontBody, fontDisplay } from "@/lib/fonts";
import { SITE_URL, siteSettings } from "@/lib/content/site";
import {
  jsonLdScriptProps,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/structured-data";

import "./globals.css";

const SITE_DESCRIPTION =
  "Briarcliff Motel is a beautifully renovated North Conway, NH inn with affordable family lodging, mountain views, a heated outdoor pool, and direct access to White Mountain attractions, ski areas, restaurants, and 100+ premium outlet stores.";
const DEFAULT_OG_IMAGE = "/briarcliff/images/motel-porch-summer.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteSettings.name} | North Conway, NH`,
    template: `%s | ${siteSettings.name}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: siteSettings.name,
  authors: [{ name: siteSettings.name, url: SITE_URL }],
  creator: siteSettings.name,
  publisher: siteSettings.name,
  category: "travel",
  keywords: [
    "North Conway motel",
    "North Conway NH lodging",
    "White Mountains motel",
    "Mt Washington Valley lodging",
    "family motel North Conway",
    "ski lodging White Mountains",
    "outlets North Conway hotel",
    siteSettings.name,
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [
        { url: "/blog/feed.xml", title: `${siteSettings.name} Journal` },
      ],
    },
  },
  openGraph: {
    type: "website",
    siteName: siteSettings.name,
    locale: "en_US",
    url: SITE_URL,
    title: `${siteSettings.name} | North Conway, NH`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${siteSettings.name} — North Conway, NH`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteSettings.name} | North Conway, NH`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/briarcliff/images/logo.jpg",
    apple: "/briarcliff/images/logo.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#1c3f36",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <head>
        <script {...jsonLdScriptProps(organizationJsonLd)} />
        <script {...jsonLdScriptProps(websiteJsonLd)} />
      </head>
      <body className="font-[family-name:var(--font-body)]">
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[var(--color-ink)]"
          href="#main-content"
        >
          Skip to content
        </a>
        <SmoothScrollProvider>
          <MotionRoot>
            <ScrollProgress />
            <SiteHeader />
            <main id="main-content" className="pb-28">
              {children}
            </main>
            <SiteFooter />
            <BookingDock />
            <TawkWidget />
          </MotionRoot>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
