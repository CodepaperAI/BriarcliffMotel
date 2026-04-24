import { notFound } from "next/navigation";

import { SeoPageTemplate } from "@/components/marketing";
import { seoLandingPages } from "@/lib/content/site";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const page = seoLandingPages.find((entry) => entry.slug === params.slug);

  if (!page) {
    return {};
  }

  return buildMetadata(page.meta);
}

export default function SeoLandingPage({ params }: { params: { slug: string } }) {
  const page = seoLandingPages.find((entry) => entry.slug === params.slug);

  if (!page) {
    notFound();
  }

  return <SeoPageTemplate page={page} />;
}

