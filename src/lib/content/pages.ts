import type { DetailPageContent, HomePageContent } from "@/lib/content/types";
import {
  BOOKING_URL,
  airportDistances,
  attractions,
  bookingCta,
  commonAreaAmenities,
  directionsByOrigin,
  packageHighlights,
  roomFeatures,
  siteSettings,
  summerActivities,
  winterActivities,
} from "@/lib/content/core";

export const homePage: HomePageContent = {
  meta: {
    title: "Briarcliff Motel | North Conway NH Near the White Mountains",
    description:
      "Renovated North Conway motel with mountain views, a heated outdoor pool, and family-friendly rooms. Minutes from outlets, restaurants, and ski areas.",
    path: "/",
    imageId: "home-hero",
  },
  hero: {
    eyebrow: "North Conway, New Hampshire",
    title: "A renovated North Conway stay at the foot of the White Mountains",
    description:
      "Mountain-view rooms, a heated outdoor pool, and quick access to outlets, dining, and the ski resorts.",
    imageId: "home-hero",
    imageIds: [
      "home-hero",
      "rooms-pool",
      "area-hero",
      "room-king-teal",
      "wildcat",
    ],
    actions: [
      { label: "Book Now", href: BOOKING_URL, external: true, variant: "primary" },
      { label: "Explore Rooms", href: "/rooms-amenities", variant: "secondary" },
    ],
  },
  intro: {
    eyebrow: "Why stay here",
    title: "A quieter North Conway base, built for easy days out",
    description:
      "Clean, comfortable, family-friendly — and positioned for everything the Mt. Washington Valley is known for.",
    bullets: [
      "In the heart of North Conway and the Mt. Washington Valley",
      "Recently renovated, family-friendly guest rooms",
      "Minutes from outlet shopping, restaurants, ski areas, and attractions",
      "Mountain views, outdoor heated pool, and porch-room options",
    ],
  },
  roomsPreview: {
    eyebrow: "Rooms & amenities",
    title: "Rooms built around a simple, comfortable stay",
    description:
      "Porch rooms, mountain views, and the everyday details that make day trips easier.",
    cards: [
      {
        title: "Porch & mountain-view rooms",
        description: "Semi-private screened porches paired with mountain-facing views.",
        imageId: "room-porch-view",
      },
      {
        title: "Standard in-room comforts",
        description: "Mini-fridge, coffee maker, Wi-Fi, private bath, and individual climate control.",
        imageId: "room-bed-2",
      },
      {
        title: "Renovated bathrooms",
        description: "Recently refreshed baths, with larger layouts in select rooms.",
        imageId: "bathroom-1",
      },
    ],
    action: { label: "See Rooms & Amenities", href: "/rooms-amenities" },
  },
  amenitiesPreview: {
    eyebrow: "Property highlights",
    title: "Heated pool, mountain views, and easy on-site extras",
    description:
      "A practical home base for shopping, dining, family outings, and ski days.",
  },
  areaPreview: {
    eyebrow: "About the area",
    title: "The Valley is part of the stay",
    description:
      "Named attractions, outlet shopping, summer trails, and winter recreation — all within a short drive.",
    cards: [
      {
        title: "Family attractions",
        description: "Story Land, Santa's Village, the Conway Scenic Railroad, and the Cog Railway.",
        imageId: "mount-washington",
      },
      {
        title: "Dining & shopping",
        description: "North Conway's Main Street restaurants and the Settlers Green outlets.",
        imageId: "area-hero",
      },
      {
        title: "Ski access",
        description: "Attitash, Cranmore, and six more alpine mountains within a half-hour.",
        imageId: "wildcat",
      },
    ],
    action: { label: "Explore the Area", href: "/about-the-area" },
  },
  packagesPreview: {
    eyebrow: "Special packages",
    title: "Real savings, no fine-print gimmicks",
    description:
      "Seasonal promos, an off-season three-for-two offer, and a local dining discount.",
    cards: [
      {
        title: "Seasonal promotions",
        description: "Call the front desk for current offers during your travel dates.",
        imageId: "specials-hero",
      },
      {
        title: "Stay 2, get the 3rd free",
        description: "Off-season, two-queen room with balcony, November through May (excludes holidays).",
        imageId: "home-hero",
      },
      {
        title: "Dining & shopping extras",
        description: "10% off at Priscilla's Country Kitchen; Settlers Green VIP coupon books at the desk.",
        imageId: "room-porch-interior",
      },
    ],
    action: { label: "View Special Packages", href: "/special-packages" },
  },
  finalCta: bookingCta,
};

export const detailPages: Record<string, DetailPageContent> = {
  rooms: {
    meta: {
      title: "Rooms & Amenities | Briarcliff Motel North Conway",
      description:
        "Non-smoking rooms with screened porches, mountain views, renovated bathrooms, Wi-Fi, mini-fridge, and a heated outdoor pool.",
      path: "/rooms-amenities",
      imageId: "rooms-pool",
    },
    hero: {
      eyebrow: "Rooms & amenities",
      title: "Comfortable rooms with mountain character",
      description:
        "Non-smoking, recently renovated, with porch options and direct parking-lot access.",
      imageId: "rooms-pool",
      imageIds: [
        "rooms-pool",
        "room-king-teal",
        "room-two-queens-snowflake",
        "room-king-medallion",
        "room-porch-view",
      ],
      actions: [
        { label: "Book Now", href: BOOKING_URL, external: true, variant: "primary" },
        { label: "See Special Packages", href: "/special-packages", variant: "secondary" },
      ],
    },
    intro: {
      eyebrow: "Stay details",
      title: "Clean, comfortable, affordable",
      description:
        "Rooms built around a relaxed, family-ready stay — no frills, no surprises.",
    },
    splitSections: [
      {
        eyebrow: "Room highlights",
        title: "Porches, mountain views, and larger baths in select rooms",
        description:
          "Screened porches, Valley-facing views, and extra living space in select room types.",
        bullets: [
          "Semi-private screened porches",
          "Mountain-view rooms",
          "Larger bathrooms in select rooms",
          "Small table and chairs",
        ],
        imageId: "room-porch-view",
      },
      {
        eyebrow: "Renovated baths",
        title: "Brighter, cleaner bathroom spaces",
        description:
          "Recently renovated baths with private tub/shower — a step up from the roadside motel standard.",
        bullets: [
          "Recently renovated",
          "Private bath with full tub/shower",
          "Clean, bright finishes",
        ],
        imageId: "bathroom-2",
        imageRight: true,
      },
    ],
    featureSections: [
      {
        eyebrow: "Room features",
        title: "What's in every room",
        description: "The standard setup across all guest rooms.",
        items: roomFeatures,
      },
      {
        eyebrow: "On the property",
        title: "Shared amenities for every guest",
        description:
          "Simple, useful extras that keep the stay approachable.",
        items: commonAreaAmenities,
      },
    ],
    cardSections: [
      {
        eyebrow: "Room gallery",
        title: "A look inside",
        description: "From two-queen family setups to king rooms with classic New England character.",
        cards: [
          {
            title: "Two-queen room",
            description: "Nordic-pattern bedding and framed mountain prints — a solid pick for families.",
            imageId: "room-two-queens-snowflake",
          },
          {
            title: "Sitting area",
            description: "Table, armchairs, TV, and mini-fridge in the same two-queen layout.",
            imageId: "room-two-queens-sitting",
          },
          {
            title: "King room",
            description: "King bed, Nordic bedding, and quick access to the private bath.",
            imageId: "room-king-nordic",
          },
          {
            title: "King with coastal accents",
            description: "Teal quilted bedspread and coastal wall art for a brighter feel.",
            imageId: "room-king-teal",
          },
          {
            title: "Entry and dresser",
            description: "Wall-mounted TV, dresser, and mini-fridge for low-friction stays.",
            imageId: "room-entry-dresser",
          },
          {
            title: "King suite",
            description: "Larger king room with medallion bedding, wingback chairs, and bright windows.",
            imageId: "room-king-medallion",
          },
          {
            title: "Two beds, floral",
            description: "A second two-bed layout with soft blue floral bedding and a bold accent wall.",
            imageId: "room-two-beds-floral",
          },
          {
            title: "Renovated vanity",
            description: "A freshly renovated sink and vanity area.",
            imageId: "bathroom-1",
          },
          {
            title: "Bathroom detail",
            description: "Brighter, cleaner finishes throughout.",
            imageId: "bathroom-2",
          },
          {
            title: "Tub and shower",
            description: "Full tub-and-shower in every renovated bath.",
            imageId: "bathroom-3",
          },
        ],
      },
    ],
    cta: bookingCta,
  },
  specials: {
    meta: {
      title: "Special Packages | Briarcliff Motel North Conway",
      description:
        "Seasonal promotions, an off-season stay-2-get-3rd-free offer, a 10% Priscilla's Country Kitchen discount, and Settlers Green coupon books.",
      path: "/special-packages",
      imageId: "specials-hero",
    },
    hero: {
      eyebrow: "Special packages",
      title: "Real savings for value-minded stays",
      description:
        "Seasonal offers, off-season value, a local dining discount, and shopping extras at the front desk.",
      imageId: "specials-hero",
      imageIds: [
        "specials-hero",
        "rooms-pool",
        "area-hero",
        "room-king-teal",
        "home-hero",
      ],
      actions: [
        { label: "Book Now", href: BOOKING_URL, external: true, variant: "primary" },
        { label: "Call the Front Desk", href: "tel:+16033565584", variant: "secondary" },
      ],
    },
    intro: {
      eyebrow: "Current offers",
      title: "Four simple ways to save",
      description:
        "No flash deals, no hidden bundles — just the offers we publish.",
    },
    featureSections: [
      {
        eyebrow: "Current specials",
        title: "What to look for",
        description: "A short list, easy to scan.",
        items: packageHighlights,
      },
    ],
    splitSections: [
      {
        eyebrow: "Off-season value",
        title: "Stay 2 nights, the 3rd is free",
        description:
          "Off-season offer on two-queen rooms with a balcony, November through May — excluding holiday and vacation weeks.",
        bullets: [
          "Off-season only",
          "Two queen beds with balcony",
          "November through May",
          "Excludes holiday and vacation weeks",
        ],
        imageId: "specials-hero",
      },
    ],
    cardSections: [
      {
        eyebrow: "Extras around town",
        title: "Pair your stay with local perks",
        description: "Two partners we're proud of — right on Main Street.",
        cards: [
          {
            title: "Priscilla's Country Kitchen",
            description: "10% off dining, two minutes from the front desk.",
            icon: "utensils",
            href: "https://www.priscillaseatery.com/",
            external: true,
          },
          {
            title: "Settlers Green extras",
            description: "Pick up VIP coupon books at the front desk for your shopping day.",
            icon: "shopping",
            href: "https://www.settlersgreen.com/couponbook",
            external: true,
          },
          {
            title: "Call to inquire",
            description: "Seasonal packages rotate — call the desk for what's active on your dates.",
            icon: "phone",
          },
        ],
      },
    ],
    cta: bookingCta,
  },
  area: {
    meta: {
      title: "About the Area | Briarcliff Motel North Conway",
      description:
        "Explore the Mt. Washington Valley — dining, outlets, family attractions, and four-season recreation within minutes of the motel.",
      path: "/about-the-area",
      imageId: "area-hero",
    },
    hero: {
      eyebrow: "About the area",
      title: "In the heart of the Mt. Washington Valley",
      description:
        "Dining, shopping, family attractions, and four seasons of White Mountains recreation — all minutes from the front desk.",
      imageId: "area-hero",
      imageIds: [
        "area-hero",
        "mount-washington",
        "wildcat",
        "attraction-cog-railway",
        "attraction-conway-scenic",
      ],
      actions: [
        { label: "Book Now", href: BOOKING_URL, external: true, variant: "primary" },
        { label: "Get Directions", href: "/directions", variant: "secondary" },
      ],
    },
    intro: {
      eyebrow: "North Conway base camp",
      title: "Everything connects here",
      description:
        "Attractions, restaurants, shops, and mountain recreation — all reachable within a short drive.",
    },
    featureSections: [
      {
        eyebrow: "Nearby attractions",
        title: "Places worth a visit",
        description: "The anchor stops that shape a White Mountains trip.",
        items: attractions,
      },
      {
        eyebrow: "Summer recreation",
        title: "Warm-weather days in the Valley",
        description: "A broad mix, not a single trip style.",
        items: summerActivities,
      },
      {
        eyebrow: "Winter recreation",
        title: "Beyond the ski lift",
        description: "Skiing is central — but the Valley does more than that.",
        items: winterActivities,
      },
    ],
    splitSections: [
      {
        eyebrow: "Dining & shopping",
        title: "Easy to fill a trip without overplanning",
        description:
          "Main Street restaurants walkable from town, plus outlet shopping and locally owned shops a few minutes out.",
        bullets: [
          "Main Street dining in North Conway",
          "Premium outlets and local shops",
          "Pairs naturally with attraction and ski days",
        ],
        imageId: "mount-washington",
      },
      {
        eyebrow: "Winter focus",
        title: "Ski country within reach",
        description:
          "A strong base camp for winter trips — Cranmore, Attitash, and the wider White Mountains lineup.",
        bullets: [
          "Attitash Mountain Resort",
          "Cranmore Mountain Resort",
          "Eight alpine mountains within a half-hour drive",
          "Four cross-country areas with grooming and rentals",
        ],
        imageId: "wildcat",
        imageRight: true,
      },
    ],
    cta: bookingCta,
  },
  directions: {
    meta: {
      title: "Directions | Briarcliff Motel North Conway",
      description:
        "GPS address, driving routes from Boston, Hartford, and the Maritimes, and airport distances to the nearest hubs.",
      path: "/directions",
      imageId: "directions-hero",
    },
    hero: {
      eyebrow: "Directions",
      title: "Getting here",
      description:
        "GPS address, route guidance, and airport distances to plan a simple arrival.",
      imageId: "directions-hero",
      imageIds: [
        "directions-aerial",
        "area-hero",
        "home-hero",
        "mount-washington",
        "directions-hero",
      ],
      actions: [
        { label: "Book Now", href: BOOKING_URL, external: true, variant: "primary" },
        { label: "Call Front Desk", href: "tel:+16033565584", variant: "secondary" },
      ],
    },
    intro: {
      eyebrow: "Arrival details",
      title: "Address, routes, and airport times — all in one place",
      description:
        "Built to scan quickly on mobile while you're on the road.",
    },
    splitSections: [
      {
        eyebrow: "GPS",
        title: "Use our street address",
        description:
          "Point your GPS here for the most reliable arrival.",
        bullets: [
          siteSettings.gpsAddress,
          "Front desk open during office hours",
          "Late-arrival arrangements available on request",
        ],
        imageId: "directions-map",
      },
      {
        eyebrow: "Aerial view",
        title: "First time here? Take a look from above",
        description:
          "An aerial reference of the property helps first-time guests orient themselves on arrival.",
        bullets: [
          "Aerial reference of the property",
          "Useful for first-time North Conway visitors",
          "Pairs with the driving routes below",
        ],
        imageId: "directions-aerial",
        imageRight: true,
      },
    ],
    featureSections: [
      {
        eyebrow: "Road directions",
        title: "Driving in",
        description: "Turn-by-turn from the most common origins.",
        items: directionsByOrigin,
      },
      {
        eyebrow: "Airport distances",
        title: "Flying in",
        description: "Estimated drive times from the nearest hubs.",
        items: airportDistances,
      },
    ],
    cta: bookingCta,
  },
};
