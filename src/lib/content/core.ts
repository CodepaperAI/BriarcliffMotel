import type {
  CtaBlock,
  FeatureItem,
  ImageAsset,
  NavItem,
} from "@/lib/content/types";

export const SITE_URL = "https://www.briarcliffmotel.com";
export const BOOKING_URL =
  "https://reservation.asiwebres.com/v5/RoomAvailability.aspx?id=48c5169172b34af5b89f14e537c1eb4b";

export const siteSettings = {
  name: "Briarcliff Motel",
  tagline: "A Beautifully Renovated North Conway Inn",
  address: "2304 White Mountain Highway, North Conway, NH 03860",
  gpsAddress: "2304 White Mountain Highway, North Conway, NH 03860",
  frontDesk: "1-603-356-5584",
  tollFree: "1-800-338-4291",
  email: "info@briarcliffmotel.com",
  access: "Open 24/7",
  officeHours: "8 AM-10 PM EST",
  lateArrival:
    "We will be more than happy to make special arrangements for your late arrival. Our office closes at 10:00 PM.",
  bookingUrl: BOOKING_URL,
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Rooms & Amenities", href: "/rooms-amenities" },
  { label: "Special Packages", href: "/special-packages" },
  { label: "About the Area", href: "/about-the-area" },
  { label: "Directions", href: "/directions" },
  { label: "Contact", href: "/contact" },
  { label: "Book Now", href: BOOKING_URL, external: true },
];

export const imageManifest: ImageAsset[] = [
  {
    id: "logo",
    src: "/briarcliff/images/logo.jpg",
    alt: "Briarcliff Motel logo",
    sourcePage: "home",
    usage: ["header", "footer"],
  },
  {
    id: "home-hero",
    src: "/briarcliff/images/motel-porch-summer.jpg",
    alt: "Briarcliff Motel front porch with hanging flower baskets and a vibrant summer flower bed",
    sourcePage: "home",
    usage: ["home.hero", "seo.north-conway", "seo.white-mountains"],
  },
  {
    id: "motel-entrance-classic",
    src: "/briarcliff/images/motel-entrance.jpg",
    alt: "Briarcliff Motel exterior in North Conway",
    sourcePage: "home",
    usage: ["home.hero"],
  },
  {
    id: "briarcliff-sign",
    src: "/briarcliff/images/briarcliff-sign.jpg",
    alt: "Briarcliff Motel roadside sign with AAA Approved badge framed by orange daylilies",
    sourcePage: "home",
    usage: ["home.intro", "seo.north-conway"],
  },
  {
    id: "rooms-pool",
    src: "/briarcliff/images/pool-briarcliff.jpg",
    alt: "Outdoor heated pool with White Mountains views at Briarcliff Motel",
    sourcePage: "rooms",
    usage: ["rooms.hero", "home.amenities", "seo.fall-foliage"],
  },
  {
    id: "room-porch-view",
    src: "/briarcliff/images/porch-rooms-view.jpg",
    alt: "Mountain view from a screened porch room",
    sourcePage: "rooms",
    usage: ["rooms.gallery", "home.rooms", "seo.ski"],
  },
  {
    id: "room-table",
    src: "/briarcliff/images/single-table.jpg",
    alt: "Guest room with table and chairs",
    sourcePage: "rooms",
    usage: ["rooms.gallery", "seo.kancamagus"],
  },
  {
    id: "room-porch-interior",
    src: "/briarcliff/images/porch-inside.jpg",
    alt: "Interior view of a screened porch guest room",
    sourcePage: "rooms",
    usage: ["rooms.gallery", "home.rooms"],
  },
  {
    id: "room-bed-1",
    src: "/briarcliff/images/bed.jpg",
    alt: "Queen guest room at Briarcliff Motel",
    sourcePage: "rooms",
    usage: ["rooms.gallery", "seo.attitash"],
  },
  {
    id: "room-bed-2",
    src: "/briarcliff/images/double-room.jpg",
    alt: "Guest room with two queen beds",
    sourcePage: "rooms",
    usage: ["rooms.gallery", "home.rooms"],
  },
  {
    id: "room-bed-3",
    src: "/briarcliff/images/bed-2.jpg",
    alt: "Renovated Briarcliff guest room",
    sourcePage: "rooms",
    usage: ["rooms.gallery", "seo.cranmore"],
  },
  {
    id: "room-two-queens-snowflake",
    src: "/briarcliff/images/room-two-queens-snowflake.jpg",
    alt: "Two queen beds with Nordic snowflake bedding and framed White Mountains prints",
    sourcePage: "rooms",
    usage: ["rooms.gallery", "home.rooms"],
  },
  {
    id: "room-two-queens-sitting",
    src: "/briarcliff/images/room-two-queens-sitting.jpg",
    alt: "Sitting area with table, armchairs, TV and dresser inside a Briarcliff two-queen room",
    sourcePage: "rooms",
    usage: ["rooms.gallery"],
  },
  {
    id: "room-king-nordic",
    src: "/briarcliff/images/room-king-nordic.jpg",
    alt: "King bed with blue Nordic-pattern bedding in a renovated Briarcliff guest room",
    sourcePage: "rooms",
    usage: ["rooms.gallery"],
  },
  {
    id: "room-king-teal",
    src: "/briarcliff/images/room-king-teal.jpg",
    alt: "King bed with teal quilted bedspread and coastal-style wall art",
    sourcePage: "rooms",
    usage: ["rooms.gallery"],
  },
  {
    id: "room-entry-dresser",
    src: "/briarcliff/images/room-entry-dresser.jpg",
    alt: "Room entry area with wall-mounted TV, dresser and mini-fridge at Briarcliff Motel",
    sourcePage: "rooms",
    usage: ["rooms.gallery"],
  },
  {
    id: "room-king-medallion",
    src: "/briarcliff/images/room-king-medallion.jpg",
    alt: "King bed with medallion-pattern bedding, floral wingback chairs and bright windows",
    sourcePage: "rooms",
    usage: ["rooms.gallery"],
  },
  {
    id: "room-two-beds-floral",
    src: "/briarcliff/images/room-two-beds-floral.jpg",
    alt: "Two queen beds with blue floral bedding and blue accent wall at Briarcliff Motel",
    sourcePage: "rooms",
    usage: ["rooms.gallery", "home.rooms"],
  },
  {
    id: "bathroom-1",
    src: "/briarcliff/images/sink-toilet.jpg",
    alt: "Renovated Briarcliff bathroom with sink and toilet",
    sourcePage: "rooms",
    usage: ["rooms.bathrooms"],
  },
  {
    id: "bathroom-2",
    src: "/briarcliff/images/sink.jpg",
    alt: "Renovated Briarcliff bathroom vanity",
    sourcePage: "rooms",
    usage: ["rooms.bathrooms"],
  },
  {
    id: "bathroom-3",
    src: "/briarcliff/images/bath-shower.jpg",
    alt: "Renovated tub and shower in a Briarcliff guest room",
    sourcePage: "rooms",
    usage: ["rooms.bathrooms"],
  },
  {
    id: "area-hero",
    src: "/briarcliff/images/mt-washington-from-briarcliff-motel.jpg",
    alt: "Mt. Washington view from Briarcliff Motel",
    sourcePage: "area",
    usage: ["area.hero", "seo.white-mountains", "seo.fall-foliage"],
  },
  {
    id: "mount-washington",
    src: "/briarcliff/images/mt-washington-nh.jpg",
    alt: "Mt. Washington in New Hampshire",
    sourcePage: "area",
    usage: ["area.summer", "seo.white-mountains"],
  },
  {
    id: "wildcat",
    src: "/briarcliff/images/wildcat-gondola.jpg",
    alt: "Wildcat Mountain ski lift",
    sourcePage: "area",
    usage: ["area.winter", "seo.ski", "seo.attitash", "seo.cranmore"],
  },
  {
    id: "directions-hero",
    src: "/briarcliff/images/motel-porch-summer.jpg",
    alt: "Briarcliff Motel front porch and lobby entrance with summer flowers",
    sourcePage: "directions",
    usage: ["directions.hero"],
  },
  {
    id: "lobby-classic",
    src: "/briarcliff/images/lobby.jpg",
    alt: "Briarcliff Motel lobby interior",
    sourcePage: "directions",
    usage: ["directions.hero"],
  },
  {
    id: "directions-map",
    src: "/briarcliff/images/map.jpg",
    alt: "Map reference for Briarcliff Motel directions",
    sourcePage: "directions",
    usage: ["directions.map"],
  },
  {
    id: "directions-aerial",
    src: "/briarcliff/images/aerial-view-fall.jpg",
    alt: "Aerial fall view of the Briarcliff Motel area",
    sourcePage: "directions",
    usage: ["directions.aerial", "seo.fall-foliage"],
  },
  {
    id: "specials-hero",
    src: "/briarcliff/images/entrance.jpg",
    alt: "Briarcliff Motel entrance in North Conway",
    sourcePage: "specials",
    usage: ["specials.hero"],
  },
  {
    id: "attraction-attitash",
    src: "/briarcliff/images/attractions/attitash.jpg",
    alt: "Aerial view of Attitash Mountain Resort ski trails in New Hampshire",
    sourcePage: "area",
    usage: ["area.attractions"],
  },
  {
    id: "attraction-wildcat",
    src: "/briarcliff/images/attractions/wildcat.jpg",
    alt: "Wildcat Mountain gondola above the White Mountains",
    sourcePage: "area",
    usage: ["area.attractions"],
  },
  {
    id: "attraction-black-mountain",
    src: "/briarcliff/images/attractions/black-mountain.jpg",
    alt: "Black Mountain ski area in Jackson, New Hampshire",
    sourcePage: "area",
    usage: ["area.attractions"],
  },
  {
    id: "attraction-cranmore",
    src: "/briarcliff/images/attractions/cranmore.jpg",
    alt: "Cranmore Mountain Resort above North Conway, New Hampshire",
    sourcePage: "area",
    usage: ["area.attractions"],
  },
  {
    id: "attraction-auto-road",
    src: "/briarcliff/images/attractions/mt-washington-auto-road.jpg",
    alt: "Mount Washington Auto Road climbing into the clouds",
    sourcePage: "area",
    usage: ["area.attractions"],
  },
  {
    id: "attraction-cog-railway",
    src: "/briarcliff/images/attractions/cog-railway.jpg",
    alt: "Mount Washington Cog Railway climbing through fall foliage",
    sourcePage: "area",
    usage: ["area.attractions"],
  },
  {
    id: "attraction-conway-scenic",
    src: "/briarcliff/images/attractions/conway-scenic-railroad.jpg",
    alt: "Conway Scenic Railroad engines at the North Conway station",
    sourcePage: "area",
    usage: ["area.attractions"],
  },
  {
    id: "attraction-story-land",
    src: "/briarcliff/images/attractions/story-land.jpg",
    alt: "Cinderella's Castle at Story Land in Glen, New Hampshire",
    sourcePage: "area",
    usage: ["area.attractions"],
  },
  {
    id: "attraction-santas-village",
    src: "/briarcliff/images/attractions/santas-village.jpg",
    alt: "Santa's Village welcome sign in Jefferson, New Hampshire",
    sourcePage: "area",
    usage: ["area.attractions"],
  },
  {
    id: "winter-skiing",
    src: "/briarcliff/images/attractions/winter-skiing.jpg",
    alt: "Alpine skiers carving powder below a snowy ridge",
    sourcePage: "area",
    usage: ["area.winter-recreation"],
  },
  {
    id: "winter-snowmobiling",
    src: "/briarcliff/images/attractions/winter-snowmobiling.jpg",
    alt: "Group of riders on a guided snowmobile tour",
    sourcePage: "area",
    usage: ["area.winter-recreation"],
  },
  {
    id: "winter-snowshoeing",
    src: "/briarcliff/images/attractions/winter-snowshoeing.jpg",
    alt: "Family snowshoeing across an open snow field",
    sourcePage: "area",
    usage: ["area.winter-recreation"],
  },
  {
    id: "winter-sleigh-rides",
    src: "/briarcliff/images/attractions/winter-sleigh-rides.jpg",
    alt: "Horse-drawn sleigh gliding across fresh snow",
    sourcePage: "area",
    usage: ["area.winter-recreation"],
  },
  {
    id: "winter-ice-skating",
    src: "/briarcliff/images/attractions/winter-ice-skating.jpg",
    alt: "Skaters on an outdoor winter skating surface",
    sourcePage: "area",
    usage: ["area.winter-recreation"],
  },
  {
    id: "winter-snow-tubing",
    src: "/briarcliff/images/attractions/winter-snow-tubing.jpg",
    alt: "Family snow tubing at a mountain resort",
    sourcePage: "area",
    usage: ["area.winter-recreation"],
  },
  {
    id: "winter-dog-sledding",
    src: "/briarcliff/images/attractions/winter-dog-sledding.jpg",
    alt: "Sled dog team running in the snow",
    sourcePage: "area",
    usage: ["area.winter-recreation"],
  },
];

export const roomFeatures: FeatureItem[] = [
  {
    title: "Non-smoking rooms",
    description: "Every room is non-smoking.",
    icon: "bed",
  },
  {
    title: "Screened porches",
    description: "Semi-private porches in select rooms, paired with mountain views.",
    icon: "sun",
  },
  {
    title: "Mountain views",
    description: "White Mountains views from porch-side and poolside rooms.",
    icon: "mountain",
  },
  {
    title: "Larger renovated baths",
    description: "Extra space and freshly renovated tub/shower areas in select rooms.",
    icon: "bath",
  },
  {
    title: "Table and chairs",
    description: "A small table for coffee, planning, or winding down.",
    icon: "sparkles",
  },
  {
    title: "Mini-fridge & coffee maker",
    description: "In every room — for easy mornings and cold drinks on hand.",
    icon: "coffee",
  },
  {
    title: "Free Wi-Fi",
    description: "Reliable wireless across the property.",
    icon: "wifi",
  },
  {
    title: "Full tub and shower",
    description: "Private bath with full tub and shower.",
    icon: "bath",
  },
  {
    title: "Direct parking access",
    description: "Park right at your door — easy arrivals and loading.",
    icon: "car",
  },
  {
    title: "Individual heat & AC",
    description: "Climate control in every room.",
    icon: "climate",
  },
];

export const commonAreaAmenities: FeatureItem[] = [
  {
    title: "Heated outdoor pool",
    description: "Open June 15 through Labor Day weekend. Backyard pool with White Mountains views.",
    icon: "pool",
  },
  {
    title: "White Mountains views",
    description: "Mountain views shape both the rooms and the grounds.",
    icon: "mountain",
  },
  {
    title: "Free Wi-Fi",
    description: "Stay connected while planning attractions and ski days.",
    icon: "wifi",
  },
  {
    title: "Soda machine",
    description: "In the common area.",
    icon: "sparkles",
  },
  {
    title: "Ice machine",
    description: "Self-serve in the common area.",
    icon: "snow",
  },
  {
    title: "Microwave",
    description: "In the common area.",
    icon: "sparkles",
  },
  {
    title: "Ironing board",
    description: "Ironing board on-site; iron available at the front desk.",
    icon: "sparkles",
  },
  {
    title: "Coin-operated guest laundry",
    description: "Self-serve guest laundry on-site (coin-operated).",
    icon: "washing",
  },
];

/**
 * Curated subset of `commonAreaAmenities` for the home page amenities preview
 * panel. Chosen to surface the four most decision-driving extras at a glance:
 * heated pool (seasonal hook), free Wi-Fi, 24/7 ice machine, and 24/7 guest
 * laundry. Mountain views and soda/microwave/ironing live further inside the
 * rooms-amenities page so the home page stays focused.
 */
export const homeAmenityHighlights: FeatureItem[] = [
  commonAreaAmenities[0], // Heated outdoor pool
  commonAreaAmenities[2], // Free Wi-Fi
  commonAreaAmenities[4], // Ice machine
  commonAreaAmenities[7], // Coin-operated guest laundry
];

export const packageHighlights: FeatureItem[] = [
  {
    title: "Seasonal packages",
    description: "Available throughout the year. Call to inquire about current promotions during your visit.",
    icon: "ticket",
  },
  {
    title: "Stay 2 nights — 3rd night free",
    description: "Off season only with 2 queen beds and balcony. Nov – May (except holiday or vacation).",
    icon: "ticket",
  },
  {
    title: "10% off at Priscilla's",
    description: "Dining discount at Priscilla's Country Kitchen — two minutes away.",
    icon: "utensils",
  },
  {
    title: "Settlers Green coupons",
    description: "VIP coupon books waiting at the front desk.",
    icon: "shopping",
  },
];

export const attractions: FeatureItem[] = [
  {
    title: "Attitash Mountain Resort",
    description: "Alpine skiing and summer adventure — 20 minutes away in Bartlett.",
    icon: "snow",
    href: "https://www.google.com/maps/search/?api=1&query=Attitash+Mountain+Resort+Bartlett+NH",
    imageId: "attraction-attitash",
  },
  {
    title: "Wildcat Mountain",
    description: "Sweeping Mt. Washington views across Pinkham Notch — a classic NH ski area.",
    icon: "snow",
    href: "https://www.google.com/maps/search/?api=1&query=Wildcat+Mountain+Ski+Area+NH",
    imageId: "attraction-wildcat",
  },
  {
    title: "Black Mountain",
    description: "A relaxed, family-friendly Jackson ski area, a short drive north.",
    icon: "snow",
    href: "https://www.google.com/maps/search/?api=1&query=Black+Mountain+Ski+Area+Jackson+NH",
    imageId: "attraction-black-mountain",
  },
  {
    title: "Cranmore Mountain Resort",
    description: "The local ski hill — five minutes from the front desk.",
    icon: "snow",
    href: "https://www.google.com/maps/search/?api=1&query=Cranmore+Mountain+Resort+North+Conway+NH",
    imageId: "attraction-cranmore",
  },
  {
    title: "Mt. Washington Auto Road",
    description: "Drive to the Northeast's highest summit on the historic carriage road.",
    icon: "mountain",
    href: "https://www.google.com/maps/search/?api=1&query=Mount+Washington+Auto+Road+Gorham+NH",
    imageId: "attraction-auto-road",
  },
  {
    title: "Mount Washington Cog Railway",
    description: "Climb the mountain by historic cog train — a White Mountains classic.",
    icon: "map",
    href: "https://www.google.com/maps/search/?api=1&query=Mount+Washington+Cog+Railway+NH",
    imageId: "attraction-cog-railway",
  },
  {
    title: "Conway Scenic Railroad",
    description: "Vintage scenic rail from North Conway station — foliage season highlight.",
    icon: "map",
    href: "https://www.google.com/maps/search/?api=1&query=Conway+Scenic+Railroad+North+Conway+NH",
    imageId: "attraction-conway-scenic",
  },
  {
    title: "Story Land",
    description: "Fairy-tale theme park in Glen — a favorite for families with young kids.",
    icon: "sun",
    href: "https://www.google.com/maps/search/?api=1&query=Story+Land+Glen+NH",
    imageId: "attraction-story-land",
  },
  {
    title: "Santa's Village",
    description: "Christmas-themed park in Jefferson with rides, reindeer, and holiday cheer.",
    icon: "sun",
    href: "https://www.google.com/maps/search/?api=1&query=Santa%27s+Village+Jefferson+NH",
    imageId: "attraction-santas-village",
  },
];

export const summerActivities: FeatureItem[] = [
  {
    title: "Biking",
    description: "Road, mountain, and fat biking on Valley trails.",
    icon: "sun",
  },
  {
    title: "Canoeing & kayaking",
    description: "Rentals, guides, and countless waterways to paddle.",
    icon: "sun",
  },
  {
    title: "Fishing",
    description: "Fly-fishing on mountain brooks and rivers (NH permit required).",
    icon: "trees",
  },
  {
    title: "Golf",
    description: "Five scenic PGA courses within a short drive.",
    icon: "sun",
  },
  {
    title: "Hiking",
    description: "White Mountain National Forest trails for every level — guided trips available.",
    icon: "trees",
  },
  {
    title: "Horseback riding",
    description: "Rides at Farm by the River, Attitash, and Bretton Woods.",
    icon: "trees",
  },
  {
    title: "Rock climbing",
    description: "Indoor gyms and classic crags across the White Mountains.",
    icon: "mountain",
  },
  {
    title: "Train rides",
    description: "Scenic summer outings on the Conway Scenic and Cog railways.",
    icon: "map",
  },
];

export const winterActivities: FeatureItem[] = [
  {
    title: "Skiing & snowboarding",
    description: "Eight alpine mountains and four cross-country areas within a half-hour.",
    icon: "snow",
    imageId: "winter-skiing",
  },
  {
    title: "Snowmobiling",
    description: "Rentals and groomed trail networks maintained by local clubs.",
    icon: "snow",
    imageId: "winter-snowmobiling",
  },
  {
    title: "Snowshoeing",
    description: "Trails throughout the White Mountain National Forest.",
    icon: "snow",
    imageId: "winter-snowshoeing",
  },
  {
    title: "Sleigh rides",
    description: "Horse-drawn sleighs at local ski areas and Nestlenook Farm.",
    icon: "trees",
    imageId: "winter-sleigh-rides",
  },
  {
    title: "Ice skating",
    description: "Ham Arena and Nestlenook Farm — two classic local rinks.",
    icon: "snow",
    imageId: "winter-ice-skating",
  },
  {
    title: "Snow tubing",
    description: "Tubing hills and rentals at several nearby ski areas.",
    icon: "snow",
    imageId: "winter-snow-tubing",
  },
  {
    title: "Dog sledding",
    description: "Runs with Muddy Paws Sled Dog Rescue — a local favorite.",
    icon: "snow",
    imageId: "winter-dog-sledding",
  },
];

export const directionsByOrigin: FeatureItem[] = [
  {
    title: "From Boston",
    description: "I-93 N → Spaulding Turnpike → Route 16 N to North Conway.",
    icon: "map",
  },
  {
    title: "From Hartford",
    description: "I-84 → I-90 (Mass Pike) → I-495 → I-95 → Route 16 N to North Conway.",
    icon: "map",
  },
  {
    title: "From the Maritimes",
    description: "Cross at Calais, ME → Route 9 W → I-95 S → Exit 11 → Route 115 S → Route 302 W → Route 16 N.",
    icon: "map",
  },
];

export const airportDistances: FeatureItem[] = [
  {
    title: "Logan (BOS) — Boston, MA",
    description: "~3 hours by car.",
    icon: "plane",
  },
  {
    title: "Portland (PWM) — Portland, ME",
    description: "~1.5 hours by car.",
    icon: "plane",
  },
  {
    title: "Manchester (MHT) — Manchester, NH",
    description: "~2.5 hours by car.",
    icon: "plane",
  },
  {
    title: "Portsmouth/Pease (PSM) — Portsmouth, NH",
    description: "~2 hours by car.",
    icon: "plane",
  },
];

export const pickupOptions: FeatureItem[] = [
  {
    title: "Fast Taxi",
    description: "1-603-356-0000",
    icon: "phone",
  },
  {
    title: "Sutton Luxury Limousine",
    description: "1-603-387-3663",
    icon: "phone",
  },
  {
    title: "Fast Taxi Shuttles & Delivery",
    description: "Local shuttle service.",
    icon: "phone",
  },
  {
    title: "Village Taxi",
    description: "Local taxi service.",
    icon: "phone",
  },
];

export const bookingCta: CtaBlock = {
  eyebrow: "Reserve your stay",
  title: "Book direct with Briarcliff",
  description: "Book online in a minute — or call the front desk during office hours.",
  action: {
    label: "Book Now",
    href: BOOKING_URL,
    external: true,
    variant: "primary",
  },
};

export const footerLinks: NavItem[] = [
  ...navItems.filter((item) => item.label !== "Book Now"),
  { label: "Journal", href: "/blog" },
];
