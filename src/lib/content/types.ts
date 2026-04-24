export type SourcePage = "home" | "rooms" | "specials" | "area" | "directions";

export type IconName =
  | "bed"
  | "bath"
  | "mountain"
  | "wifi"
  | "coffee"
  | "fridge"
  | "car"
  | "climate"
  | "pool"
  | "sparkles"
  | "utensils"
  | "shopping"
  | "map"
  | "phone"
  | "clock"
  | "plane"
  | "ticket"
  | "trees"
  | "snow"
  | "sun"
  | "washing";

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type ActionLink = {
  label: string;
  href: string;
  external?: boolean;
  variant?: "primary" | "secondary";
};

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  imageId: string;
};

export type ImageAsset = {
  id: string;
  src: string;
  alt: string;
  sourcePage: SourcePage;
  usage: string[];
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: IconName;
  href?: string;
  imageId?: string;
};

export type HighlightCard = {
  title: string;
  description: string;
  imageId?: string;
  icon?: IconName;
  href?: string;
  external?: boolean;
};

export type HeroBlock = {
  eyebrow: string;
  title: string;
  description: string;
  imageId: string;
  imageIds?: string[];
  actions: ActionLink[];
};

export type CtaBlock = {
  eyebrow: string;
  title: string;
  description: string;
  action: ActionLink;
};

export type HomePageContent = {
  meta: PageMeta;
  hero: HeroBlock;
  intro: {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
  };
  roomsPreview: {
    eyebrow: string;
    title: string;
    description: string;
    cards: HighlightCard[];
    action: ActionLink;
  };
  amenitiesPreview: {
    eyebrow: string;
    title: string;
    description: string;
  };
  areaPreview: {
    eyebrow: string;
    title: string;
    description: string;
    cards: HighlightCard[];
    action: ActionLink;
  };
  packagesPreview: {
    eyebrow: string;
    title: string;
    description: string;
    cards: HighlightCard[];
    action: ActionLink;
  };
  finalCta: CtaBlock;
};

export type DetailPageContent = {
  meta: PageMeta;
  hero: HeroBlock;
  intro: {
    eyebrow: string;
    title: string;
    description: string;
  };
  splitSections?: Array<{
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
    imageId: string;
    imageRight?: boolean;
  }>;
  featureSections?: Array<{
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureItem[];
  }>;
  cardSections?: Array<{
    eyebrow: string;
    title: string;
    description: string;
    cards: HighlightCard[];
  }>;
  cta: CtaBlock;
};

export type SeoLandingPageContent = {
  slug: string;
  meta: PageMeta;
  hero: HeroBlock;
  intro: {
    title: string;
    description: string;
  };
  supportSections: Array<{
    title: string;
    description: string;
    bullets: string[];
  }>;
  proofCards: HighlightCard[];
  cta: CtaBlock;
};
