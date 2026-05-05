import type { Metadata } from "next";

import { SITE_URL, imageManifest, siteSettings } from "@/lib/content/site";
import type { PageMeta } from "@/lib/content/types";

function findImage(imageId: string) {
  return imageManifest.find((asset) => asset.id === imageId);
}

export function buildMetadata(config: PageMeta): Metadata {
  const image = findImage(config.imageId);
  const url = `${SITE_URL}${config.path}`;

  return {
    title: config.title,
    description: config.description,
    alternates: {
      canonical: config.path,
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url,
      siteName: siteSettings.name,
      locale: "en_US",
      type: "website",
      images: image
        ? [
            {
              url: image.src,
              width: 1200,
              height: 630,
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
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
