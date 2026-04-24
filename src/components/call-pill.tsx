import { Phone } from "lucide-react";

import { siteSettings } from "@/lib/content/site";

export function CallPill() {
  return (
    <a
      href={siteSettings.ownerDirectTelHref}
      aria-label={`Call Briarcliff Motel at ${siteSettings.ownerDirect}`}
      className="fixed bottom-28 left-4 z-[60] inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/35 bg-[var(--pill-primary-bg)] px-4 py-3 text-sm font-semibold text-[var(--pill-primary-text)] shadow-[0_18px_44px_rgba(18,34,29,0.3)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] sm:bottom-6 sm:left-6"
    >
      <Phone className="h-4 w-4" />
      <span className="hidden sm:inline">Call {siteSettings.ownerDirect}</span>
      <span className="sm:hidden">Call</span>
    </a>
  );
}
