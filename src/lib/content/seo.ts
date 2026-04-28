import type { SeoLandingPageContent } from "@/lib/content/types";
import { BOOKING_URL, bookingCta, footerLinks } from "@/lib/content/core";

export const seoLandingPages: SeoLandingPageContent[] = [
  {
    slug: "north-conway-nh-motel",
    meta: {
      title: "North Conway NH Motel | Briarcliff Motel",
      description:
        "Renovated family motel in the heart of North Conway — mountain views, a heated pool, and minutes from dining, outlets, and ski areas.",
      path: "/north-conway-nh-motel",
      imageId: "home-hero",
    },
    hero: {
      eyebrow: "North Conway lodging",
      title: "A North Conway motel that feels like a proper base camp",
      description:
        "Renovated rooms, mountain views, and easy access to the Valley's busiest attractions.",
      imageId: "home-hero",
      imageIds: ["home-hero", "rooms-pool", "mount-washington", "room-king-teal", "wildcat"],
      actions: [
        { label: "Book Now", href: BOOKING_URL, external: true, variant: "primary" },
        { label: "See Rooms", href: "/rooms-amenities", variant: "secondary" },
      ],
    },
    intro: {
      title: "North Conway access, mountain-motel calm",
      description:
        "Central to everything — without the high-traffic, high-priced feel of a big resort.",
    },
    supportSections: [
      {
        title: "In the heart of North Conway",
        description: "Walkable to Main Street, quick to outlets, ski areas, and attractions.",
        bullets: [
          "Short drive to the Settlers Green outlets",
          "Minutes to restaurants and ski areas",
          "Central to every White Mountain attraction",
        ],
      },
      {
        title: "Affordable, family-friendly",
        description: "Clean, comfortable, and welcoming to kids.",
        bullets: [
          "Children always welcome",
          "Clean and comfortable rooms",
          "Recently renovated throughout",
        ],
      },
      {
        title: "Room features built for real trips",
        description: "Everything you need, nothing you won't use.",
        bullets: [
          "Mini-fridge and coffee maker",
          "Free Wi-Fi",
          "Porch and mountain-view rooms available",
        ],
      },
    ],
    proofCards: [
      { title: "Rooms & Amenities", description: "Explore room types and property amenities.", href: "/rooms-amenities", icon: "bed" },
      { title: "Special Packages", description: "Current direct-booking offers and seasonal deals.", href: "/special-packages", icon: "ticket" },
      { title: "About the Area", description: "Dining, outlets, and the Valley's attractions.", href: "/about-the-area", icon: "map" },
    ],
    cta: bookingCta,
  },
  {
    slug: "lodging-near-white-mountains",
    meta: {
      title: "Lodging Near White Mountains | Briarcliff Motel",
      description:
        "White Mountains lodging from North Conway — renovated rooms, mountain views, a heated pool, and four-season access across the Valley.",
      path: "/lodging-near-white-mountains",
      imageId: "mount-washington",
    },
    hero: {
      eyebrow: "White Mountains lodging",
      title: "A White Mountains base for busy days and quiet evenings",
      description:
        "North Conway access, mountain views, and renovated rooms — affordable lodging with real mountain character.",
      imageId: "mount-washington",
      imageIds: ["mount-washington", "wildcat", "home-hero", "rooms-pool"],
      actions: [
        { label: "Book Now", href: BOOKING_URL, external: true, variant: "primary" },
        { label: "Explore the Area", href: "/about-the-area", variant: "secondary" },
      ],
    },
    intro: {
      title: "A White Mountains trip starts with a simple, comfortable stay",
      description:
        "Central to attractions, views from the property, practical room features — no fluff.",
    },
    supportSections: [
      {
        title: "Central to the White Mountain attractions",
        description: "The anchor stops are all within a short drive.",
        bullets: [
          "Mt. Washington Auto Road",
          "Mount Washington Cog Railway",
          "Story Land and Santa's Village",
        ],
      },
      {
        title: "The mountains don't stop at the parking lot",
        description: "The setting shapes the rooms and the grounds.",
        bullets: [
          "Mountain views in select rooms",
          "Heated outdoor pool with mountain views",
          "Semi-private screened porches available",
        ],
      },
      {
        title: "Easy North Conway convenience",
        description: "Dining, shopping, and trip logistics stay simple.",
        bullets: [
          "Short drive to the Settlers Green outlets",
          "Minutes to restaurants and ski areas",
          "Affordable, family-friendly",
        ],
      },
    ],
    proofCards: [
      { title: "Area highlights", description: "Named attractions and seasonal recreation.", href: "/about-the-area", icon: "mountain" },
      { title: "Room comforts", description: "What's in every room and on the property.", href: "/rooms-amenities", icon: "bed" },
      { title: "Travel planning", description: "Directions, airport times, and arrival tips.", href: "/directions", icon: "map" },
    ],
    cta: bookingCta,
  },
  {
    slug: "hotel-near-cranmore-mountain",
    meta: {
      title: "Hotel Near Cranmore Mountain | Briarcliff Motel",
      description:
        "Affordable North Conway stay five minutes from Cranmore Mountain Resort — renovated rooms, family-friendly, full tub/shower, individual climate control.",
      path: "/hotel-near-cranmore-mountain",
      imageId: "room-bed-3",
    },
    hero: {
      eyebrow: "Cranmore access",
      title: "A short drive from Cranmore Mountain Resort",
      description:
        "North Conway lodging that keeps ski days, dining, and shopping in the same easy orbit.",
      imageId: "room-bed-3",
      imageIds: ["attraction-cranmore", "wildcat", "winter-skiing", "rooms-pool", "room-king-teal"],
      actions: [
        { label: "Book Now", href: BOOKING_URL, external: true, variant: "primary" },
        { label: "About the Area", href: "/about-the-area", variant: "secondary" },
      ],
    },
    intro: {
      title: "Keep the ski trip simple",
      description:
        "Quick to the slopes, quick to Main Street — no resort-fee runaround.",
    },
    supportSections: [
      {
        title: "North Conway convenience",
        description: "Shopping, restaurants, and attractions stay close to your ski plan.",
        bullets: [
          "Heart of North Conway",
          "Minutes to restaurants and ski areas",
          "Short drive to outlet shopping",
        ],
      },
      {
        title: "Built for family ski travel",
        description: "Affordable, renovated, welcoming — not resort-priced.",
        bullets: [
          "Children always welcome",
          "Affordable nightly rates",
          "Recently renovated rooms",
        ],
      },
      {
        title: "Post-ski comforts that matter",
        description: "The small details that make a ski day end well.",
        bullets: [
          "Mini-fridge and coffee maker",
          "Full tub and shower",
          "Individual heat and AC",
        ],
      },
    ],
    proofCards: [
      { title: "See rooms", description: "Porches, mountain views, and standard features.", href: "/rooms-amenities", icon: "bed" },
      { title: "Travel details", description: "Directions and arrival planning.", href: "/directions", icon: "map" },
      { title: "Packages", description: "Current direct-booking offers.", href: "/special-packages", icon: "ticket" },
    ],
    cta: bookingCta,
  },
  {
    slug: "hotel-near-attitash-mountain",
    meta: {
      title: "Hotel Near Attitash Mountain | Briarcliff Motel",
      description:
        "North Conway lodging for Attitash Mountain Resort visitors — affordable, family-friendly rooms with Wi-Fi, full bath, and direct parking access.",
      path: "/hotel-near-attitash-mountain",
      imageId: "room-bed-1",
    },
    hero: {
      eyebrow: "Attitash access",
      title: "A simple motel stay for Attitash visitors",
      description:
        "North Conway lodging that supports a ski-focused trip without overcomplicating the stay.",
      imageId: "room-bed-1",
      imageIds: ["attraction-attitash", "wildcat", "winter-skiing", "rooms-pool", "room-king-teal"],
      actions: [
        { label: "Book Now", href: BOOKING_URL, external: true, variant: "primary" },
        { label: "See Rooms", href: "/rooms-amenities", variant: "secondary" },
      ],
    },
    intro: {
      title: "Affordable ski lodging, North Conway convenience",
      description:
        "Renovated rooms, family-friendly feel, quick access to Attitash and the wider ski lineup.",
    },
    supportSections: [
      {
        title: "Minutes to ski areas",
        description: "Short drives from the motel to the main Valley ski resorts.",
        bullets: [
          "North Conway location",
          "Minutes to the ski areas",
          "Central to the White Mountain attractions",
        ],
      },
      {
        title: "Comfort after the mountain",
        description: "Practical, easy-to-use rooms for a recreation trip.",
        bullets: [
          "Free Wi-Fi",
          "Private bath with full tub and shower",
          "Direct room access from your parking space",
        ],
      },
      {
        title: "Family-friendly by design",
        description: "Welcoming to kids and easy on the budget.",
        bullets: [
          "Children always welcome",
          "Clean, comfortable rooms",
          "Recently renovated",
        ],
      },
    ],
    proofCards: [
      { title: "Explore the area", description: "Attractions, dining, and four-season recreation.", href: "/about-the-area", icon: "map" },
      { title: "View amenities", description: "Pool, common-area extras, and room features.", href: "/rooms-amenities", icon: "pool" },
      { title: "Plan your arrival", description: "Directions and airport distances.", href: "/directions", icon: "plane" },
    ],
    cta: bookingCta,
  },
  {
    slug: "lodging-near-kancamagus-highway",
    meta: {
      title: "Lodging Near Kancamagus Highway | Briarcliff Motel",
      description:
        "North Conway lodging for Kancamagus Highway trips — renovated rooms, mountain views, and quick access to attractions, dining, and shopping.",
      path: "/lodging-near-kancamagus-highway",
      imageId: "room-table",
    },
    hero: {
      eyebrow: "North Conway lodging",
      title: "A home base for White Mountains scenic driving",
      description:
        "North Conway stays with mountain views, renovated rooms, and quick access to dining and shopping.",
      imageId: "room-table",
      imageIds: ["mount-washington", "attraction-cog-railway", "room-king-teal", "home-hero"],
      actions: [
        { label: "Book Now", href: BOOKING_URL, external: true, variant: "primary" },
        { label: "Explore the Area", href: "/about-the-area", variant: "secondary" },
      ],
    },
    intro: {
      title: "Scenic drives still need a comfortable base",
      description:
        "Quick to the Kancamagus, quick back to dinner — central to everything.",
    },
    supportSections: [
      {
        title: "North Conway convenience",
        description: "Everything stays simple before and after the drive.",
        bullets: [
          "Heart of North Conway",
          "Short drive to the Settlers Green outlets",
          "Minutes to restaurants",
        ],
      },
      {
        title: "Mountain-setting details",
        description: "Small touches that keep the stay tied to the landscape.",
        bullets: [
          "Mountain-view rooms available",
          "Semi-private screened porches in select rooms",
          "Heated outdoor pool with mountain views",
        ],
      },
      {
        title: "Comfort without resort pricing",
        description: "Practical, renovated, and fair value.",
        bullets: [
          "Clean and comfortable rooms",
          "Recently renovated",
          "Family-friendly",
        ],
      },
    ],
    proofCards: [
      { title: "Room details", description: "Gallery and standard room features.", href: "/rooms-amenities", icon: "bed" },
      { title: "Attractions", description: "Valley highlights and seasonal picks.", href: "/about-the-area", icon: "mountain" },
      { title: "Direct booking", description: "Go straight to the booking engine.", href: BOOKING_URL, external: true, icon: "ticket" },
    ],
    cta: bookingCta,
  },
  {
    slug: "fall-foliage-lodging-north-conway",
    meta: {
      title: "Fall Foliage Lodging North Conway | Briarcliff Motel",
      description:
        "Fall-foliage lodging in North Conway — mountain views, porch-style rooms, and quick access to the Valley's scenic routes and attractions.",
      path: "/fall-foliage-lodging-north-conway",
      imageId: "directions-aerial",
    },
    hero: {
      eyebrow: "Fall in North Conway",
      title: "Mountain character for foliage trips",
      description:
        "Mountain views, porch-style rooms, and central North Conway access — the Valley at peak color.",
      imageId: "directions-aerial",
      imageIds: ["directions-aerial", "attraction-cog-railway", "attraction-conway-scenic", "mount-washington"],
      actions: [
        { label: "Book Now", href: BOOKING_URL, external: true, variant: "primary" },
        { label: "Get Directions", href: "/directions", variant: "secondary" },
      ],
    },
    intro: {
      title: "A fall trip works best when the base is scenic and easy",
      description:
        "Views from the property, walkable to Main Street, minutes from every scenic route.",
    },
    supportSections: [
      {
        title: "Mountain views and porch appeal",
        description: "Rooms that feel connected to the landscape.",
        bullets: [
          "Screened porches in select rooms",
          "Mountain-view rooms available",
          "Heated outdoor pool with mountain views",
        ],
      },
      {
        title: "North Conway access",
        description: "Central location — quick to dining, shopping, and scenic drives.",
        bullets: [
          "Heart of North Conway",
          "Close to shopping and restaurants",
          "Central to the White Mountain attractions",
        ],
      },
      {
        title: "Comfortable and affordable",
        description: "Clean, renovated, welcoming to families.",
        bullets: [
          "Clean, comfortable rooms",
          "Affordable nightly rates",
          "Children always welcome",
        ],
      },
    ],
    proofCards: [
      { title: "Room photos", description: "See our renovated rooms and baths.", href: "/rooms-amenities", icon: "bed" },
      { title: "Explore the Valley", description: "Attractions, dining, shopping, and seasonal picks.", href: "/about-the-area", icon: "map" },
      { title: "Book directly", description: "Reserve through our booking engine.", href: BOOKING_URL, external: true, icon: "ticket" },
    ],
    cta: bookingCta,
  },
  {
    slug: "ski-lodging-north-conway-nh",
    meta: {
      title: "Ski Lodging North Conway NH | Briarcliff Motel",
      description:
        "Ski lodging in North Conway — renovated, affordable, family-friendly rooms close to Cranmore, Attitash, and the wider White Mountains winter lineup.",
      path: "/ski-lodging-north-conway-nh",
      imageId: "wildcat",
    },
    hero: {
      eyebrow: "North Conway ski stays",
      title: "Ski lodging built around comfort and location",
      description:
        "Close to Cranmore, Attitash, and the wider White Mountains lineup — affordable, renovated, family-friendly.",
      imageId: "wildcat",
      imageIds: ["wildcat", "winter-skiing", "attraction-cranmore", "attraction-attitash", "winter-snow-tubing"],
      actions: [
        { label: "Book Now", href: BOOKING_URL, external: true, variant: "primary" },
        { label: "View Area Activities", href: "/about-the-area", variant: "secondary" },
      ],
    },
    intro: {
      title: "A practical ski-trip base — no inflated resort pricing",
      description:
        "Affordable, renovated, and well-placed for ski days and everything around them.",
    },
    supportSections: [
      {
        title: "Minutes to ski areas",
        description: "Quick to the lift, quick back to a hot shower.",
        bullets: [
          "Five minutes to Cranmore",
          "Close to Attitash, Wildcat, and Black Mountain",
          "Minutes to restaurants and shopping",
        ],
      },
      {
        title: "Winter recreation beyond the slopes",
        description: "Plenty to do on non-ski days.",
        bullets: [
          "Snowshoeing and snowmobiling",
          "Sleigh rides and ice skating",
          "Snow tubing and dog sledding",
        ],
      },
      {
        title: "Room comforts for ski travelers",
        description: "Exactly what you want after a full day outside.",
        bullets: [
          "Mini-fridge and coffee maker",
          "Full tub and shower",
          "Individual heat and AC",
        ],
      },
    ],
    proofCards: [
      { title: "Rooms & Amenities", description: "Winter-ready room details.", href: "/rooms-amenities", icon: "bed" },
      { title: "Special Packages", description: "Direct-booking offers before you choose dates.", href: "/special-packages", icon: "ticket" },
      { title: "Directions", description: "Drive-time and airport distance estimates.", href: "/directions", icon: "plane" },
    ],
    cta: bookingCta,
  },
];

export const allRoutePaths = [
  "/",
  "/rooms-amenities",
  "/special-packages",
  "/about-the-area",
  "/directions",
  ...seoLandingPages.map((page) => page.meta.path),
];

export { footerLinks };
