"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { m, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

import { BOOKING_URL, imageManifest, navItems, siteSettings } from "@/lib/content/site";
import { headerImagePresentation } from "@/components/site-header.presentation";

function headerLinkClass() {
  return "inline-flex items-center justify-center rounded-full border border-[var(--color-accent-deep)]/10 bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)] shadow-[0_10px_24px_rgba(199,154,82,0.28)] transition hover:bg-[var(--color-accent-deep)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]";
}

function getLogo() {
  const asset = imageManifest.find((item) => item.id === "logo");
  if (!asset) throw new Error("Missing logo image in manifest");
  return asset;
}

const SCROLL_THRESHOLD = 80;

export function SiteHeader() {
  const logo = getLogo();
  const presentation = headerImagePresentation;
  const { scrollY } = useScroll();

  const logoSize = useTransform(scrollY, [0, 140], [48, 36]);
  const paddingY = useTransform(scrollY, [0, 140], [14, 6]);

  const [isScrolled, setIsScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > SCROLL_THRESHOLD);
  });

  const headerClass = `fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
    isScrolled
      ? "border-b border-black/5 bg-[var(--surface-glass)] backdrop-blur-xl shadow-[0_14px_30px_rgba(18,20,16,0.12)]"
      : "border-b border-transparent bg-black/40 backdrop-blur-xl"
  }`;

  const brandColor = isScrolled ? "text-[var(--color-ink)]" : "text-white";
  const eyebrowColor = isScrolled ? "text-[var(--color-muted)]" : "text-white";
  const navLinkColor = isScrolled
    ? "text-[var(--color-ink)] font-medium hover:bg-black/5"
    : "text-white font-semibold hover:bg-white/15";

  const whiteForcedStyle = isScrolled ? undefined : { color: "#ffffff" };
  const whiteEyebrowStyle = isScrolled ? undefined : { color: "rgba(255,255,255,0.96)" };
  const underlineColor = isScrolled ? "bg-[var(--color-accent-deep)]" : "bg-white";
  const mobileBtnClass = isScrolled
    ? "border-black/10 bg-[var(--surface-card)] text-[var(--color-ink)]"
    : "border-white/40 bg-black/30 text-white backdrop-blur-md";
  const scrimClass = `pointer-events-none absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(6,8,6,0.45)_0%,rgba(6,8,6,0.30)_45%,rgba(6,8,6,0.10)_75%,transparent_100%)] transition-opacity duration-500 ${
    isScrolled ? "opacity-0" : "opacity-100"
  }`;

  const whiteTextShadow = isScrolled ? undefined : "0 2px 14px rgba(0, 0, 0, 0.85)";
  const whiteTextShadowStrong = isScrolled ? undefined : "0 2px 18px rgba(0, 0, 0, 0.9)";

  return (
    <m.header className={headerClass}>
      <div aria-hidden="true" className={scrimClass} />
      <m.div
        className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        style={{ paddingTop: paddingY, paddingBottom: paddingY }}
      >
        <Link className="flex min-w-0 items-center gap-3" href="/">
          <m.div
            className={`relative overflow-hidden rounded-2xl border border-black/10 shadow-sm ${
              presentation.frameClassName ?? "bg-[var(--surface-card)]"
            }`}
            style={{ width: logoSize, height: logoSize }}
          >
            <Image
              alt={logo.alt}
              fill
              sizes="48px"
              src={logo.src}
              className={presentation.imageClassName ?? "object-cover"}
            />
          </m.div>
          <div className="min-w-0">
            <p
              className={`truncate font-[family-name:var(--font-display)] text-xl transition-colors duration-500 ${brandColor}`}
              style={{ textShadow: whiteTextShadowStrong, ...whiteForcedStyle }}
            >
              {siteSettings.name}
            </p>
            <p
              className={`truncate text-xs uppercase tracking-[0.22em] transition-colors duration-500 ${eyebrowColor}`}
              style={{ textShadow: whiteTextShadow, ...whiteEyebrowStyle }}
            >
              North Conway, NH
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.slice(0, -1).map((item) => (
            <Link
              key={item.href}
              className={`group relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)] ${navLinkColor}`}
              href={item.href}
              style={{ textShadow: whiteTextShadow, ...whiteForcedStyle }}
            >
              <span className="relative">
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 transition-[transform,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 ${underlineColor}`}
                />
              </span>
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className={headerLinkClass()}
          >
            Book Now
          </a>
        </nav>

        <details className="group lg:hidden">
          <summary
            className={`flex cursor-pointer list-none items-center justify-center rounded-full border p-3 shadow-sm transition-colors duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)] ${mobileBtnClass}`}
          >
            <Menu className="h-5 w-5" />
          </summary>
          <div className="absolute right-4 top-[4.5rem] w-[min(22rem,calc(100vw-2rem))] rounded-3xl border border-black/10 bg-[var(--color-paper)] p-4 shadow-[0_24px_60px_rgba(20,20,20,0.16)]">
            <div className="flex flex-col gap-2">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-[var(--color-accent)] px-4 py-3 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-accent-deep)] hover:text-white"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-ink)] hover:bg-black/5"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </div>
        </details>
      </m.div>
    </m.header>
  );
}
