import { siteSettings, SITE_URL } from "@/lib/content/site";

const ORG_ID = `${SITE_URL}#organization`;
const WEBSITE_ID = `${SITE_URL}#website`;

const STREET_ADDRESS = "2304 White Mountain Highway";
const CITY = "North Conway";
const REGION = "NH";
const POSTAL_CODE = "03860";
const COUNTRY = "US";

// Approximate coordinates for 2304 White Mountain Hwy, North Conway, NH.
const LATITUDE = 44.0539;
const LONGITUDE = -71.1234;

const SOCIAL_PROFILES: string[] = [
  // Add Facebook / Instagram / TripAdvisor URLs here when available — they boost knowledge-graph entity confidence.
];

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": ORG_ID,
  name: siteSettings.name,
  alternateName: "Briarcliff",
  url: SITE_URL,
  logo: `${SITE_URL}/briarcliff/images/logo.jpg`,
  image: `${SITE_URL}/briarcliff/images/motel-porch-summer.jpg`,
  description:
    "Beautifully renovated North Conway inn with affordable family lodging, mountain views, a heated outdoor pool, and easy access to White Mountain attractions.",
  telephone: siteSettings.frontDesk,
  email: siteSettings.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: STREET_ADDRESS,
    addressLocality: CITY,
    addressRegion: REGION,
    postalCode: POSTAL_CODE,
    addressCountry: COUNTRY,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: LATITUDE,
    longitude: LONGITUDE,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "22:00",
    },
  ],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Heated outdoor pool", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Mountain views", value: true },
    { "@type": "LocationFeatureSpecification", name: "Children welcome", value: true },
    { "@type": "LocationFeatureSpecification", name: "Non-smoking", value: true },
  ],
  sameAs: SOCIAL_PROFILES.length > 0 ? SOCIAL_PROFILES : undefined,
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteSettings.address)}`,
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

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: siteSettings.name,
  description:
    "A beautifully renovated North Conway inn — affordable family lodging in the Mt. Washington Valley.",
  publisher: { "@id": ORG_ID },
  inLanguage: "en-US",
};

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function jsonLdScriptProps(value: unknown) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(value) },
  };
}
