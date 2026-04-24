export type ThemeCategory = "subtle" | "bold";

export type ThemeId =
  | "dawn-brilliance"
  | "dawn-mist"
  | "pale-birch"
  | "ivory-sage"
  | "midnight-lodge"
  | "autumn-ember"
  | "alpine-dusk"
  | "copper-inn"
  | "forest-velvet"
  | "cabernet"
  | "terracotta-sunset"
  | "blush-rose";

export type ThemePreset = {
  id: ThemeId;
  name: string;
  tagline: string;
  category: ThemeCategory;
  recommended?: boolean;
  swatches: {
    base: string;
    surface: string;
    accent: string;
    ink: string;
  };
  description: string;
};

export const themePresets: ThemePreset[] = [
  /* Subtle light palettes */
  {
    id: "dawn-brilliance",
    name: "Dawn Brilliance",
    tagline: "Editorial, bright & golden",
    category: "subtle",
    recommended: true,
    swatches: { base: "#f2f6f1", surface: "#dfe9dc", accent: "#d9a24a", ink: "#1c3f36" },
    description:
      "Brighter, more luminous forest-editorial palette. Keeps the Dawn Mist DNA but turns up the morning light and the richness of the gold accent. Our top recommendation.",
  },
  {
    id: "dawn-mist",
    name: "Dawn Mist",
    tagline: "Editorial, forest-tinted",
    category: "subtle",
    swatches: { base: "#edf0ec", surface: "#dfe6dd", accent: "#cf9d4f", ink: "#1c3f36" },
    description:
      "Cool green-gray base that echoes the White Mountains. A quieter, dustier alternative to Dawn Brilliance.",
  },
  {
    id: "pale-birch",
    name: "Pale Birch",
    tagline: "Warm minimalist ivory",
    category: "subtle",
    swatches: { base: "#fbfaf6", surface: "#f1ece1", accent: "#bf8a3c", ink: "#1c3f36" },
    description:
      "Near-white warm ivory — the safest premium direction. Reads like a Scandinavian inn. Slightly more traditional than Dawn Mist.",
  },
  {
    id: "ivory-sage",
    name: "Ivory + Sage",
    tagline: "Alternating editorial rhythm",
    category: "subtle",
    swatches: { base: "#fbfaf6", surface: "#e4ebe1", accent: "#cf9d4f", ink: "#1c3f36" },
    description:
      "Ivory body with every other section washed in pale sage. Creates a layered magazine rhythm. Most distinctive of the light options.",
  },
  {
    id: "autumn-ember",
    name: "Autumn Ember",
    tagline: "White Mountains fall foliage",
    category: "subtle",
    swatches: { base: "#f4e7d4", surface: "#e8d2ad", accent: "#c9611b", ink: "#3d2920" },
    description:
      "Warm amber cream with deep russet CTAs. Echoes North Conway autumn — oak leaves, apple cider, covered bridges.",
  },
  {
    id: "alpine-dusk",
    name: "Alpine Dusk",
    tagline: "Mountain twilight in slate & brass",
    category: "subtle",
    swatches: { base: "#e8ecf0", surface: "#d4dbe2", accent: "#b8923a", ink: "#1f2a3d" },
    description:
      "Cool slate-blue base with brass CTAs. Feels like Mount Washington at twilight. Sophisticated and calm.",
  },
  {
    id: "copper-inn",
    name: "Copper Inn",
    tagline: "Warm boutique hotel",
    category: "subtle",
    swatches: { base: "#efe3d2", surface: "#dccab1", accent: "#b05a29", ink: "#2b1f17" },
    description:
      "Rich oat-cream with burnished copper accents. Reads as a curated boutique inn.",
  },

  /* Bold saturated palettes — the color IS the background */
  {
    id: "terracotta-sunset",
    name: "Terracotta Sunset",
    tagline: "Saturated warm orange",
    category: "bold",
    swatches: { base: "#e8a57e", surface: "#ffffff", accent: "#7a2f1f", ink: "#3d1f14" },
    description:
      "Fully saturated terracotta body — white cards float on top like a Mediterranean villa. High visual impact; ideal if you want the site to feel unlike any other motel in the Valley.",
  },
  {
    id: "blush-rose",
    name: "Blush Rose",
    tagline: "Romantic dusty pink",
    category: "bold",
    swatches: { base: "#ecc9b7", surface: "#ffffff", accent: "#8a3a3a", ink: "#3a1f1f" },
    description:
      "Warm dusty blush background with deep burgundy CTAs. Feels like a romantic inn — appeals to couples, anniversaries, spa-getaway guests.",
  },
  {
    id: "forest-velvet",
    name: "Forest Velvet",
    tagline: "Green lodge, cream text",
    category: "bold",
    swatches: { base: "#1c4236", surface: "#264b40", accent: "#e8b767", ink: "#f3efe3" },
    description:
      "Deep forest green as the dominant surface. Cream cards and warm gold CTAs pop against it. Reads like a luxury mountain lodge at night.",
  },
  {
    id: "cabernet",
    name: "Cabernet",
    tagline: "Wine-country romance",
    category: "bold",
    swatches: { base: "#4a1e26", surface: "#5a2832", accent: "#d4a85a", ink: "#f3e8d4" },
    description:
      "Deep burgundy base with soft gold accents. Wine-country boutique feeling — dramatic and intimate. Best for positioning as a destination for romantic weekends.",
  },

  /* Dramatic dark */
  {
    id: "midnight-lodge",
    name: "Midnight Lodge",
    tagline: "Dramatic dark mode",
    category: "bold",
    swatches: { base: "#0e1512", surface: "#141d19", accent: "#e8b767", ink: "#eae4d6" },
    description:
      "Full dark mode. Cinematic ski-lodge-at-night feel. Note: some cards still use light surfaces — finer contrast polishing needed if this is the chosen direction.",
  },
];

export const defaultThemeId: ThemeId = "dawn-brilliance";
