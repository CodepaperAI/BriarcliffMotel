import type { Metadata } from "next";

import { SITE_URL, imageManifest, siteSettings } from "@/lib/content/site";
import type { PageMeta } from "@/lib/content/types";

function findImage(imageId: string) {
  return imageManifest.find((asset) => asset.id === imageId);
}

export function buildMetadata(config: PageMeta): Metadata {
  const image = findImage(config.imageId);

  return {
    title: config.title,
    description: config.description,
    alternates: {
      canonical: config.path,
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: `${SITE_URL}${config.path}`,
      siteName: siteSettings.name,
      locale: "en_US",
      type: "website",
      images: image
        ? [
            {
              url: image.src,
              alt: image.alt,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: image ? [image.src] : undefined,
    },
  };
}
