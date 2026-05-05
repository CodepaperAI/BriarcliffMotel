import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import { Reveal, RevealChild, RevealStagger } from "@/components/reveal";
import { ContactForm } from "./contact-form";
import {
  BOOKING_URL,
  imageManifest,
  siteSettings,
  SITE_URL,
} from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Send a question to ${siteSettings.name} in North Conway, NH — availability, group bookings, special requests, or just say hi. Front desk replies within 24 hours.`,
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: `Contact | ${siteSettings.name}`,
    description: `Reach the front desk at ${siteSettings.name} — North Conway, NH.`,
    url: `${SITE_URL}/contact`,
    siteName: siteSettings.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Contact | ${siteSettings.name}`,
    description: `Reach the front desk at ${siteSettings.name}.`,
  },
};

function getImage(id: string) {
  const asset = imageManifest.find((item) => item.id === id);
  if (!asset) throw new Error(`Missing image: ${id}`);
  return asset;
}

export default function ContactPage() {
  const heroImage = getImage("motel-entrance-classic");
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteSettings.address)}`;

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${SITE_URL}#organization`,
    name: siteSettings.name,
    url: SITE_URL,
    image: `${SITE_URL}/briarcliff/images/logo.jpg`,
    telephone: siteSettings.frontDesk,
    email: siteSettings.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2304 White Mountain Highway",
      addressLocality: "North Conway",
      addressRegion: "NH",
      postalCode: "03860",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "22:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Reservations",
        telephone: siteSettings.frontDesk,
        email: siteSettings.email,
        availableLanguage: ["English"],
        areaServed: "US",
      },
      {
        "@type": "ContactPoint",
        contactType: "Customer service",
        telephone: siteSettings.tollFree,
        availableLanguage: ["English"],
      },
    ],
  };

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            alt={heroImage.alt}
            src={heroImage.src}
            fill
            priority
            sizes="100vw"
            className="object-cover [filter:brightness(1.05)_saturate(1.04)]"
          />
          <div className="absolute inset-x-0 bottom-0 h-[60%] bg-[linear-gradient(180deg,transparent_0%,rgba(10,12,9,0.6)_100%)]" />
          <div className="absolute inset-y-0 left-0 w-[55%] bg-[linear-gradient(90deg,rgba(10,12,9,0.4)_0%,transparent_100%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[60svh] max-w-7xl items-end px-4 pt-32 pb-20 sm:min-h-[64svh] sm:px-6 sm:pt-36 sm:pb-24 lg:min-h-[68svh] lg:px-8 lg:pt-44 lg:pb-28">
          <RevealStagger className="max-w-xl space-y-4" stagger={0.1} delay={0.15}>
            <RevealChild as="span" className="block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/90 [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">
                Get in touch
              </p>
            </RevealChild>
            <RevealChild as="div">
              <h1 className="font-[family-name:var(--font-display)] text-[2rem] leading-[1.05] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)] sm:text-4xl sm:leading-[1.0] lg:text-5xl">
                We&apos;d love to hear from you.
              </h1>
            </RevealChild>
            <RevealChild as="div">
              <p className="max-w-lg text-base leading-7 text-white/90 drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)] sm:text-lg">
                Questions about availability, group stays, or planning your time in the valley — drop us a note and we&apos;ll get back within a day.
              </p>
            </RevealChild>
          </RevealStagger>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-32 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-40 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-14">
          <Reveal className="space-y-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-forest)]">
                Visit · Call · Write
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-tight text-[var(--color-ink)] sm:text-4xl">
                The front desk, on the line.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[var(--color-ink-soft)]">
                Stephanie and the team read every message. For same-day questions or last-minute stays, calling is fastest.
              </p>
            </div>

            <ul className="space-y-4">
              <li>
                <a
                  href={mapHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-black/8 bg-[var(--surface-card)] p-4 transition hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-cream-soft)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-forest-deep)]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      Address
                    </span>
                    <span className="mt-1 block text-[15px] leading-6 text-[var(--color-ink)]">
                      {siteSettings.address}
                    </span>
                    <span className="mt-1 inline-block text-xs font-semibold text-[var(--color-forest)] transition-colors group-hover:text-[var(--color-accent-deep)]">
                      Open in Google Maps →
                    </span>
                  </span>
                </a>
              </li>

              <li className="flex items-start gap-4 rounded-2xl border border-black/8 bg-[var(--surface-card)] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-forest-deep)]">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="min-w-0 space-y-1.5">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    Phone
                  </span>
                  <a
                    className="block text-[15px] text-[var(--color-ink)] hover:text-[var(--color-accent-deep)]"
                    href={`tel:${siteSettings.frontDesk.replace(/[^+0-9]/g, "")}`}
                  >
                    Front desk · {siteSettings.frontDesk}
                  </a>
                  <a
                    className="block text-[15px] text-[var(--color-ink)] hover:text-[var(--color-accent-deep)]"
                    href={`tel:${siteSettings.tollFree.replace(/[^+0-9]/g, "")}`}
                  >
                    Toll free · {siteSettings.tollFree}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 rounded-2xl border border-black/8 bg-[var(--surface-card)] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-forest-deep)]">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="min-w-0 space-y-1">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    Email
                  </span>
                  <a
                    className="block text-[15px] text-[var(--color-ink)] hover:text-[var(--color-accent-deep)]"
                    href={`mailto:${siteSettings.email}`}
                  >
                    {siteSettings.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 rounded-2xl border border-black/8 bg-[var(--surface-card)] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-forest-deep)]">
                  <Clock3 className="h-5 w-5" />
                </span>
                <div className="min-w-0 space-y-1">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    Front desk hours
                  </span>
                  <p className="text-[15px] leading-6 text-[var(--color-ink)]">
                    8 AM – 10 PM · daily
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">
                    {siteSettings.lateArrival}
                  </p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-start gap-6 rounded-[2rem] border border-black/8 bg-[var(--surface-card)] p-8 shadow-[0_18px_50px_rgba(31,36,31,0.06)] sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-forest)]">
                  Ready to book?
                </p>
                <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)] sm:text-3xl">
                  Skip the wait — reserve your room directly.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/rooms-amenities"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-[var(--surface-card)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-black/5"
                >
                  Browse rooms
                </Link>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-accent-deep)]/10 bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] shadow-[0_14px_30px_rgba(199,154,82,0.28)] transition hover:bg-[var(--color-accent-deep)] hover:text-white"
                >
                  Book now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
