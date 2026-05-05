import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bath,
  BedDouble,
  Coffee,
  Map,
  MapPin,
  Mountain,
  Phone,
  Plane,
  ShoppingBag,
  Snowflake,
  Sparkles,
  SunMedium,
  Thermometer,
  TicketPercent,
  Trees,
  UtensilsCrossed,
  Waves,
  Wifi,
  WashingMachine,
  Clock3,
  CarFront,
} from "lucide-react";

import { BentoGrid } from "@/components/bento-grid";
import { EditorialList } from "@/components/editorial-list";
import { FeatureStrip } from "@/components/feature-strip";
import { HeroParallax } from "@/components/hero-parallax";
import { HeroShowcase } from "@/components/hero-showcase";
import { HeroTitle } from "@/components/hero-title";
import { HorizontalScroller } from "@/components/horizontal-scroller";
import { MagneticButton } from "@/components/magnetic-button";
import { MotionFeatures, Reveal, RevealChild, RevealStagger } from "@/components/reveal";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/structured-data";
import {
  BOOKING_URL,
  footerLinks,
  homeAmenityHighlights,
  imageManifest,
  roomFeatures,
  siteSettings,
} from "@/lib/content/site";
import type {
  ActionLink,
  DetailPageContent,
  HighlightCard,
  HomePageContent,
  IconName,
  SeoLandingPageContent,
} from "@/lib/content/types";

export function MotionRoot({ children }: { children: ReactNode }) {
  return <MotionFeatures>{children}</MotionFeatures>;
}

const imagePresentation: Record<
  string,
  {
    frameClassName?: string;
    imageClassName?: string;
  }
> = {
  logo: {
    frameClassName: "bg-[var(--surface-card)] p-1.5",
    imageClassName: "object-contain",
  },
  "room-bed-1": {
    frameClassName: "aspect-[3/4] bg-[var(--color-paper-strong)] p-4",
    imageClassName: "object-contain",
  },
  "room-bed-2": {
    frameClassName: "aspect-[3/4] bg-[var(--color-paper-strong)] p-4",
    imageClassName: "object-contain",
  },
  "room-bed-3": {
    frameClassName: "aspect-[3/4] bg-[var(--color-paper-strong)] p-4",
    imageClassName: "object-contain",
  },
  "bathroom-1": {
    frameClassName: "aspect-[3/4] bg-[var(--color-paper-strong)] p-4",
    imageClassName: "object-contain",
  },
  "bathroom-2": {
    frameClassName: "aspect-[3/4] bg-[var(--color-paper-strong)] p-4",
    imageClassName: "object-contain",
  },
  "bathroom-3": {
    frameClassName: "aspect-[3/4] bg-[var(--color-paper-strong)] p-4",
    imageClassName: "object-contain",
  },
};

const iconMap = {
  bed: BedDouble,
  bath: Bath,
  mountain: Mountain,
  wifi: Wifi,
  coffee: Coffee,
  fridge: Sparkles,
  car: CarFront,
  climate: Thermometer,
  pool: Waves,
  sparkles: Sparkles,
  utensils: UtensilsCrossed,
  shopping: ShoppingBag,
  map: Map,
  phone: Phone,
  clock: Clock3,
  plane: Plane,
  ticket: TicketPercent,
  trees: Trees,
  snow: Snowflake,
  sun: SunMedium,
  washing: WashingMachine,
} satisfies Record<IconName, ComponentType<{ className?: string }>>;

function getImage(imageId: string) {
  const asset = imageManifest.find((item) => item.id === imageId);
  if (!asset) {
    throw new Error(`Unknown image id: ${imageId}`);
  }
  return asset;
}

function getImagePresentation(imageId: string) {
  return imagePresentation[imageId] ?? {};
}

function linkClass(variant: ActionLink["variant"] = "primary") {
  if (variant === "secondary") {
    return "inline-flex items-center justify-center rounded-full border border-white/55 bg-[var(--surface-glass)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] shadow-[0_14px_34px_rgba(15,18,15,0.18)] backdrop-blur-md transition hover:bg-[var(--color-accent-soft)] hover:border-[var(--color-accent)]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
  }

  return "inline-flex items-center justify-center rounded-full border border-[var(--color-accent-deep)]/10 bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] shadow-[0_18px_40px_rgba(199,154,82,0.32)] transition hover:bg-[var(--color-accent-deep)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]";
}

function SmartLink({
  href,
  children,
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const isExternal = external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        className={className}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

export { SiteHeader } from "@/components/site-header";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/8 bg-[var(--color-ink)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.35fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="font-[family-name:var(--font-display)] text-3xl">{siteSettings.name}</p>
          <p className="max-w-xl text-sm leading-7 text-white/85">
            A beautifully renovated North Conway inn with affordable lodging, family-friendly hospitality,
            mountain views, and direct access to the experiences that define the Mt. Washington Valley.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">Visit</p>
          <p className="text-sm leading-7 text-white/85">{siteSettings.address}</p>
          <p className="text-sm leading-7 text-white/85">{siteSettings.access} · front desk {siteSettings.officeHours}</p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">Contact</p>
          <a className="block text-sm text-white/85 hover:text-white" href={`tel:+16033565584`}>
            Front Desk {siteSettings.frontDesk}
          </a>
          <a className="block text-sm text-white/85 hover:text-white" href={`tel:+18003384291`}>
            Toll Free {siteSettings.tollFree}
          </a>
          <a className="block text-sm text-white/85 hover:text-white" href={`mailto:${siteSettings.email}`}>
            {siteSettings.email}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-4 py-5 text-sm text-white/80 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {footerLinks.map((item) => (
            <Link key={item.href} className="link-underline hover:text-white" href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <p>{siteSettings.address}</p>
      </div>
    </footer>
  );
}

export function BookingDock() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <div className="pointer-events-auto flex w-full max-w-md items-center gap-3 rounded-full border border-[var(--color-forest)]/15 bg-[var(--surface-glass)] p-2 shadow-[0_18px_40px_rgba(20,20,20,0.16)] backdrop-blur-xl">
        <MagneticButton className="flex min-w-0 flex-1">
          <SmartLink
            className="inline-flex w-full min-w-0 items-center justify-center rounded-full border border-[var(--color-accent-deep)]/10 bg-[var(--color-accent)] px-4 py-3 text-sm font-semibold text-[var(--color-ink)] shadow-[0_14px_30px_rgba(199,154,82,0.28)] transition hover:bg-[var(--color-accent-deep)] hover:text-white"
            external
            href={BOOKING_URL}
          >
            Book Now
          </SmartLink>
        </MagneticButton>
        <SmartLink
          className="inline-flex min-w-0 items-center justify-center rounded-full border border-black/10 bg-[var(--surface-card)] px-4 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-black/5"
          href="tel:+16033565584"
        >
          Call
        </SmartLink>
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <RevealStagger className="max-w-3xl space-y-4" stagger={0.09}>
      <RevealChild as="span" className="block">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-forest)]">{eyebrow}</p>
      </RevealChild>
      <RevealChild as="div">
        <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl">
          {title}
        </h2>
      </RevealChild>
      <RevealChild as="div">
        <p className="text-lg leading-8 text-[var(--color-ink-soft)]">{description}</p>
      </RevealChild>
    </RevealStagger>
  );
}

function Hero({
  eyebrow,
  title,
  description,
  imageId,
  imageIds,
  actions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  imageId: string;
  imageIds?: string[];
  actions: ActionLink[];
}) {
  const overlay = (
    <>
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-[linear-gradient(180deg,transparent_0%,rgba(10,12,9,0.55)_100%)]" />
      <div className="absolute inset-y-0 left-0 w-[55%] bg-[linear-gradient(90deg,rgba(10,12,9,0.35)_0%,transparent_100%)]" />
    </>
  );

  const content = (
    <RevealStagger className="max-w-xl space-y-4" stagger={0.12} delay={0.25}>
      <RevealChild as="span" className="block">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/90 [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">{eyebrow}</p>
      </RevealChild>
      <HeroTitle
        text={title}
        className="font-[family-name:var(--font-display)] text-[1.75rem] leading-[1.05] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)] sm:text-4xl sm:leading-[1.0] lg:text-5xl lg:leading-[1.0]"
      />
      {description ? (
        <RevealChild as="div">
          <p className="max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">{description}</p>
        </RevealChild>
      ) : null}
      <RevealChild as="div" className="flex flex-wrap gap-3 pt-2">
        {actions.map((action) => {
          const link = (
            <SmartLink
              key={`${action.href}-${action.label}`}
              className={linkClass(action.variant)}
              external={action.external}
              href={action.href}
            >
              {action.label}
            </SmartLink>
          );
          return action.variant === "secondary" ? (
            link
          ) : (
            <MagneticButton key={`${action.href}-${action.label}`}>{link}</MagneticButton>
          );
        })}
      </RevealChild>
    </RevealStagger>
  );

  if (imageIds && imageIds.length > 1) {
    const slides = imageIds.map((id) => {
      const image = getImage(id);
      return { src: image.src, alt: image.alt };
    });
    return (
      <HeroShowcase slides={slides} overlay={overlay}>
        {content}
      </HeroShowcase>
    );
  }

  const image = getImage(imageId);

  return (
    <HeroParallax src={image.src} alt={image.alt} overlay={overlay}>
      <div className="relative mx-auto flex min-h-[78svh] max-w-7xl items-end px-4 pt-24 pb-44 sm:min-h-[80svh] sm:px-6 sm:pt-28 sm:pb-36 lg:min-h-[82svh] lg:px-8 lg:py-28">
        {content}
      </div>
    </HeroParallax>
  );
}

function ImageCard({ card }: { card: HighlightCard }) {
  const image = card.imageId ? getImage(card.imageId) : null;
  const presentation = card.imageId ? getImagePresentation(card.imageId) : {};
  const Icon = card.icon ? iconMap[card.icon] : null;
  const content = (
    <article className="group overflow-hidden rounded-[2rem] border border-black/8 bg-[var(--surface-card)] shadow-[0_18px_50px_rgba(31,36,31,0.08)] transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:shadow-[0_28px_80px_rgba(28,63,54,0.14)]">
      {image ? (
        <div
          className={`relative overflow-hidden ${
            presentation.frameClassName ?? "aspect-[4/3]"
          }`}
        >
          <Image
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            src={image.src}
            className={`${presentation.imageClassName ?? "object-cover"} [filter:brightness(1.08)_saturate(1.04)] transition duration-700 group-hover:scale-105`}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_10%,rgba(19,22,20,0.28)_100%)]" />
        </div>
      ) : (
        <div className="flex h-24 items-center px-7 pt-6">
          {Icon ? (
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-sand)] text-[var(--color-forest)]">
              <Icon className="h-6 w-6" />
            </div>
          ) : null}
        </div>
      )}
      <div className="space-y-3 p-7">
        <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]">{card.title}</h3>
        <p className="text-base leading-7 text-[var(--color-ink-soft)]">{card.description}</p>
      </div>
    </article>
  );

  if (card.href) {
    return (
      <SmartLink className="block" external={card.external} href={card.href}>
        {content}
      </SmartLink>
    );
  }

  return content;
}

function FeatureGrid({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: Array<{ title: string; description: string; icon: IconName; href?: string; imageId?: string }>;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      {items.some((item) => item.imageId) ? (
        <BentoGrid
          items={items.map((item) => {
            const image = getImage(item.imageId as string);
            return {
              title: item.title,
              description: item.description,
              href: item.href,
              imageSrc: image.src,
              imageAlt: image.alt,
            };
          })}
        />
      ) : (
        <EditorialList
          items={items.map((item) => ({
            title: item.title,
            description: item.description,
            icon: iconMap[item.icon],
            href: item.href,
          }))}
        />
      )}
    </section>
  );
}

function SplitSection({
  eyebrow,
  title,
  description,
  bullets,
  imageId,
  imageRight,
}: {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  imageId: string;
  imageRight?: boolean;
}) {
  const image = getImage(imageId);
  const presentation = getImagePresentation(imageId);

  return (
    <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
      <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${imageRight ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <Reveal
          x={imageRight ? 24 : -24}
          y={0}
          className={`relative overflow-hidden rounded-[2rem] ${
            presentation.frameClassName ?? "aspect-[4/3]"
          }`}
        >
          <Image
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            src={image.src}
            className={presentation.imageClassName ?? "object-cover"}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(20,23,20,0.18)_100%)]" />
        </Reveal>
        <RevealStagger className="space-y-6" stagger={0.09}>
          <RevealChild as="span" className="block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-forest)]">{eyebrow}</p>
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
            <ul className="grid gap-3">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-2xl border border-black/8 bg-[var(--surface-card)] px-5 py-4 text-sm font-medium text-[var(--color-ink)] shadow-[0_14px_36px_rgba(31,36,31,0.05)]"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </RevealChild>
        </RevealStagger>
      </div>
    </section>
  );
}

function CtaSection({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action: ActionLink;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative overflow-hidden rounded-[2.25rem] bg-[var(--color-forest)] px-6 py-10 text-white shadow-[0_28px_80px_rgba(28,63,54,0.3)] sm:px-10 lg:px-12 lg:py-14">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_55%)]" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/88">{eyebrow}</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight sm:text-5xl">{title}</h2>
            <p className="text-lg leading-8 text-white/88">{description}</p>
          </div>
          <SmartLink className={linkClass(action.variant ?? "primary")} external={action.external} href={action.href}>
            {action.label}
          </SmartLink>
        </div>
      </div>
    </section>
  );
}

export function HomeTemplate({ page }: { page: HomePageContent }) {
  const introImage = getImage("briarcliff-sign");
  const amenitiesImage = getImage("rooms-pool");
  const amenityHighlights = homeAmenityHighlights;

  const breadcrumbs = breadcrumbJsonLd([{ name: "Home", path: "/" }]);

  return (
    <>
      <script {...jsonLdScriptProps(breadcrumbs)} />
      <Hero {...page.hero} />

      <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative min-h-[25rem] overflow-hidden rounded-[2.25rem] shadow-[0_28px_80px_rgba(31,36,31,0.14)] lg:min-h-[32rem]">
            <Image
              alt={introImage.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src={introImage.src}
              className="object-cover object-[50%_28%] [filter:brightness(1.08)_saturate(1.04)]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_38%,rgba(18,21,18,0.30)_100%)]" />
          </div>

          <div className="space-y-7">
            <SectionHeading {...page.intro} />
            <div className="grid gap-3">
              {page.intro.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="rounded-[1.4rem] border border-black/8 bg-[var(--surface-glass-deep)] px-5 py-4 text-sm font-medium text-[var(--color-ink)] shadow-[0_16px_40px_rgba(31,36,31,0.05)] backdrop-blur-sm"
                >
                  {bullet}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[var(--color-cream)]">
        <FeatureStrip
          eyebrow={page.roomsPreview.eyebrow}
          title={page.roomsPreview.title}
          description={page.roomsPreview.description}
          imageSrc={getImage(page.roomsPreview.cards[0]?.imageId ?? "room-porch-view").src}
          imageAlt={getImage(page.roomsPreview.cards[0]?.imageId ?? "room-porch-view").alt}
          cards={page.roomsPreview.cards.map((card) => ({
            title: card.title,
            description: card.description,
          }))}
          action={page.roomsPreview.action}
        />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        <div className="overflow-hidden rounded-[2.5rem] border border-[var(--color-ink)]/8 bg-[var(--color-cream-soft)] text-[var(--color-ink)] shadow-[0_28px_80px_rgba(31,36,31,0.10)]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <div className="relative min-h-[24rem] lg:min-h-[36rem]">
              <Image
                alt={amenitiesImage.alt}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                src={amenitiesImage.src}
                className="object-cover [filter:brightness(1.08)_saturate(1.04)]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(31,26,20,0.18)_100%)]" />
            </div>

            <div className="relative flex flex-col justify-between gap-8 bg-[var(--color-cream-soft)] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-forest)]">
                    {page.amenitiesPreview.eyebrow}
                  </p>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent-deep)]/30 bg-[var(--color-accent)]/14 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-deep)]">
                    <Waves className="h-3.5 w-3.5" />
                    Pool season · Jun 15 – Labor Day
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl">
                  {page.amenitiesPreview.title}
                </h2>
                <p className="text-lg leading-8 text-[var(--color-ink-soft)]">{page.amenitiesPreview.description}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {amenityHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-[var(--color-ink)]/8 bg-[var(--color-sand-soft)] px-4 py-4"
                  >
                    <p className="text-sm font-semibold text-[var(--color-ink)]">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[var(--color-sand-soft)]">
        <FeatureStrip
          imageRight
          eyebrow={page.areaPreview.eyebrow}
          title={page.areaPreview.title}
          description={page.areaPreview.description}
          imageSrc={getImage(page.areaPreview.cards[0]?.imageId ?? "area-hero").src}
          imageAlt={getImage(page.areaPreview.cards[0]?.imageId ?? "area-hero").alt}
          cards={page.areaPreview.cards.map((card) => ({
            title: card.title,
            description: card.description,
          }))}
          action={page.areaPreview.action}
        />
      </div>

      <div className="bg-[var(--color-cream-soft)]">
        <FeatureStrip
          eyebrow={page.packagesPreview.eyebrow}
          title={page.packagesPreview.title}
          description={page.packagesPreview.description}
          imageSrc={getImage(page.packagesPreview.cards[0]?.imageId ?? "specials-hero").src}
          imageAlt={getImage(page.packagesPreview.cards[0]?.imageId ?? "specials-hero").alt}
          cards={page.packagesPreview.cards.map((card) => ({
            title: card.title,
            description: card.description,
          }))}
          action={page.packagesPreview.action}
        />
      </div>

      <CtaSection {...page.finalCta} />
    </>
  );
}

export function DetailPageTemplate({ page }: { page: DetailPageContent }) {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: page.meta.title, path: page.meta.path },
  ]);
  return (
    <>
      <script {...jsonLdScriptProps(breadcrumbs)} />
      <Hero {...page.hero} />

      <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading eyebrow={page.intro.eyebrow} title={page.intro.title} description={page.intro.description} />
      </section>

      {page.splitSections?.map((section) => (
        <SplitSection key={section.title} {...section} />
      ))}

      {page.featureSections?.map((section) => (
        <FeatureGrid key={section.title} {...section} />
      ))}

      {page.cardSections?.map((section) => {
        const withImages = section.cards.filter((card) => card.imageId);
        const useScroller = withImages.length >= 6;

        return (
          <section key={section.title} className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
            <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
            {useScroller ? (
              <HorizontalScroller
                items={withImages.map((card) => {
                  const image = getImage(card.imageId as string);
                  return {
                    title: card.title,
                    description: card.description,
                    imageSrc: image.src,
                    imageAlt: image.alt,
                  };
                })}
              />
            ) : (
              <RevealStagger className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3" stagger={0.06}>
                {section.cards.map((card) => (
                  <RevealChild key={card.title} y={18}>
                    <ImageCard card={card} />
                  </RevealChild>
                ))}
              </RevealStagger>
            )}
          </section>
        );
      })}

      <CtaSection {...page.cta} />
    </>
  );
}

export function SeoPageTemplate({ page }: { page: SeoLandingPageContent }) {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: page.meta.title, path: page.meta.path },
  ]);
  return (
    <>
      <script {...jsonLdScriptProps(breadcrumbs)} />
      <Hero {...page.hero} />

      <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading eyebrow="Why Briarcliff" title={page.intro.title} description={page.intro.description} />
          <div className="grid gap-5">
            {page.supportSections.map((section) => (
              <article
                key={section.title}
                className="rounded-[2rem] border border-black/8 bg-[var(--surface-card)] p-6 shadow-[0_18px_50px_rgba(31,36,31,0.06)]"
              >
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]">{section.title}</h2>
                <p className="mt-3 text-base leading-7 text-[var(--color-ink-soft)]">{section.description}</p>
                <ul className="mt-5 grid gap-3">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-2xl bg-[var(--color-sand)] px-4 py-3 text-sm font-medium text-[var(--color-ink)]"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Keep exploring"
          title="Move from search into planning"
          description="Each landing page is designed to lead naturally into the core Briarcliff pages and then into direct booking."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {page.proofCards.map((card) => (
            <ImageCard key={card.title} card={card} />
          ))}
        </div>
      </section>

      <FeatureGrid
        eyebrow="Stay details"
        title="Core Briarcliff facts that stay consistent across every landing page"
        description="These proof points come directly from the official website and reinforce the same motel identity across the SEO route set."
        items={roomFeatures.slice(0, 6)}
      />

      <CtaSection {...page.cta} />
    </>
  );
}
