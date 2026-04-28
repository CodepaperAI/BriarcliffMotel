import Image from "next/image";

import { Reveal, RevealChild, RevealStagger } from "@/components/reveal";

type FeatureStripCard = {
  title: string;
  description: string;
};

type FeatureStripProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  cards: FeatureStripCard[];
  action: { label: string; href: string; external?: boolean };
  imageRight?: boolean;
};

/**
 * Full-bleed alternating preview strip for the home page. Replaces the 3-up
 * card teaser pattern with a single editorial row: large image on one side,
 * eyebrow + title + description + a clean list of mini-entries on the other.
 * Rows alternate image-left and image-right based on imageRight.
 */
export function FeatureStrip({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  cards,
  action,
  imageRight,
}: FeatureStripProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div
        className={`grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 ${
          imageRight ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal
          x={imageRight ? 24 : -24}
          y={0}
          className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[3/4] lg:aspect-[4/5]"
        >
          <Image
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            src={imageSrc}
            className="object-cover [filter:brightness(1.08)_saturate(1.04)]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(17,20,17,0.36)_100%)]" />
        </Reveal>

        <RevealStagger className="space-y-7" stagger={0.09}>
          <RevealChild as="div" className="flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--color-accent-deep)]" aria-hidden="true" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-forest)]">
              {eyebrow}
            </p>
          </RevealChild>
          <RevealChild as="div">
            <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl">
              {title}
            </h2>
          </RevealChild>
          <RevealChild as="div">
            <p className="text-lg leading-8 text-[var(--color-ink-soft)]">{description}</p>
          </RevealChild>

          <RevealChild as="div">
            <ul className="divide-y divide-[var(--color-ink)]/10 border-y border-[var(--color-ink)]/10">
              {cards.map((card) => (
                <li
                  key={card.title}
                  className="group py-5 transition-colors duration-500 hover:text-[var(--color-ink)]"
                >
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-ink)]">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-[var(--color-ink-soft)]">{card.description}</p>
                </li>
              ))}
            </ul>
          </RevealChild>

          <RevealChild as="div">
            <a
              href={action.href}
              {...(action.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-forest)]"
            >
              <span className="relative">
                {action.label}
                <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-100 bg-[var(--color-forest)] transition-transform duration-500 group-hover:scale-x-0" />
              </span>
              <span
                aria-hidden="true"
                className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-forest)]/25 text-[var(--color-forest)] transition-all duration-500 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-ink)]"
              >
                →
              </span>
            </a>
          </RevealChild>
        </RevealStagger>
      </div>
    </section>
  );
}
