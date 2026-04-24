"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ScrollerItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

/**
 * Seconds for the track to complete one full cycle.
 * Higher = slower drift. 60s gives a calm, readable pace for ~10 cards.
 */
const MARQUEE_DURATION_S = 60;

export function HorizontalScroller({ items }: { items: ScrollerItem[] }) {
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const listener = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  // Duplicate the items once — the -50% translate loops seamlessly when the
  // track is exactly 2x the content width.
  const loopItems = [...items, ...items];

  const shouldAnimate = !prefersReducedMotion && items.length > 1;

  return (
    <div
      className="mt-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,#000_6%,#000_94%,transparent_100%)]">
        <div
          className="flex gap-5 will-change-transform"
          style={{
            width: "max-content",
            animation: shouldAnimate
              ? `briarcliff-marquee ${MARQUEE_DURATION_S}s linear infinite`
              : undefined,
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {loopItems.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              aria-hidden={index >= items.length ? "true" : undefined}
              className="group relative isolate flex w-[78vw] shrink-0 flex-col overflow-hidden rounded-[1.75rem] bg-[var(--color-ink)] shadow-[0_22px_60px_rgba(31,36,31,0.14)] sm:w-[26rem]"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 640px) 26rem, 78vw"
                  src={item.imageSrc}
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_38%,rgba(15,18,15,0.42)_72%,rgba(15,18,15,0.86)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 space-y-2 p-6 text-white sm:p-7">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-white/78">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
          {prefersReducedMotion
            ? "Scroll horizontally to explore"
            : isPaused
              ? "Paused — move cursor away to resume"
              : "Continuously scrolling · hover to pause"}
        </p>
      </div>

      <style>{`
        @keyframes briarcliff-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </div>
  );
}
