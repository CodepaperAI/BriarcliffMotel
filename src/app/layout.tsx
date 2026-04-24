import type { Metadata, Viewport } from "next";

import { CallPill } from "@/components/call-pill";
import { BookingDock, MotionRoot, SiteFooter, SiteHeader } from "@/components/marketing";
import { ScrollProgress } from "@/components/scroll-progress";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { TawkWidget } from "@/components/tawk-widget";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { SITE_URL, siteSettings } from "@/lib/content/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteSettings.name} | North Conway, NH`,
    template: `%s | ${siteSettings.name}`,
  },
  description:
    "Briarcliff Motel is a beautifully renovated North Conway inn with affordable family lodging, mountain views, and easy access to White Mountain attractions, shopping, restaurants, and ski areas.",
  applicationName: siteSettings.name,
  icons: {
    icon: "/briarcliff/images/logo.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#1c3f36",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dawn-brilliance">
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
            <CallPill />
            <TawkWidget />
            <ThemeSwitcher />
          </MotionRoot>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
