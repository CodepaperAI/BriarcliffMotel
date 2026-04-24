import Image from "next/image";

import { RevealChild, RevealStagger } from "@/components/reveal";

type BentoItem = {
  title: string;
  description: string;
  href?: string;
  imageSrc: string;
  imageAlt: string;
};

/**
 * Asymmetric bento layout. On xl screens the first item is large (2×2),
 * every 5th item becomes a 2-col wide strip, and the rest fill naturally.
 * On md, two equal columns. Mobile is single column with editorial rhythm.
 */
export function BentoGrid({ items }: { items: BentoItem[] }) {
  return (
    <RevealStagger
      className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 md:auto-rows-[18rem] xl:grid-cols-4 xl:auto-rows-[17rem]"
      stagger={0.06}
    >
      {items.map((item, index) => {
        const isHero = index === 0;
        const isWide = !isHero && (index % 5 === 4);
        const spanClass = isHero
          ? "xl:col-span-2 xl:row-span-2"
          : isWide
            ? "xl:col-span-2"
            : "";

        const body = (
          <>
            <Image
              alt={item.imageAlt}
              fill
              sizes={
                isHero
                  ? "(min-width: 1280px) 50vw, (min-width: 768px) 50vw, 100vw"
                  : isWide
                    ? "(min-width: 1280px) 50vw, (min-width: 768px) 50vw, 100vw"
                    : "(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
              }
              src={item.imageSrc}
              className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_28%,rgba(15,18,15,0.28)_62%,rgba(15,18,15,0.78)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-7">
              <div className="max-w-md space-y-2 text-white">
                <h3
                  className={`font-[family-name:var(--font-display)] leading-tight ${
                    isHero ? "text-3xl sm:text-4xl" : "text-2xl"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`leading-6 text-white/80 ${isHero ? "text-base" : "text-sm"} ${
                    isHero ? "" : "line-clamp-3"
                  }`}
                >
                  {item.description}
                </p>
              </div>
              {item.href ? (
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur-sm transition-all duration-500 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-ink)]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              ) : null}
            </div>
          </>
        );

        const baseClass =
          "group relative isolate h-full w-full overflow-hidden rounded-[1.75rem] bg-[var(--color-ink)] shadow-[0_22px_60px_rgba(31,36,31,0.14)] transition-[box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_34px_90px_rgba(28,63,54,0.22)]";
        const cellClass = `min-h-[16rem] md:min-h-0 ${spanClass}`;

        if (item.href) {
          return (
            <RevealChild key={item.title} y={18} className={cellClass}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.title} — open location in Google Maps`}
                className={`${baseClass} block`}
              >
                {body}
              </a>
            </RevealChild>
          );
        }

        return (
          <RevealChild key={item.title} y={18} className={cellClass}>
            <article className={baseClass}>{body}</article>
          </RevealChild>
        );
      })}
    </RevealStagger>
  );
}
