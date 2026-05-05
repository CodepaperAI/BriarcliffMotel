import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal, RevealStagger, RevealChild } from "@/components/reveal";
import { formatBlogDate, getReadingTime, listBlogs } from "@/lib/blog";
import { siteSettings, SITE_URL } from "@/lib/content/site";

export const revalidate = 300;

const PAGE_DESCRIPTION = `Stories, seasonal guides, and insider tips for visiting North Conway and the White Mountains, written by the team at ${siteSettings.name}.`;

export const metadata: Metadata = {
  title: "Journal",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/blog`,
    types: {
      "application/rss+xml": [
        { url: `${SITE_URL}/blog/feed.xml`, title: `${siteSettings.name} Journal` },
      ],
    },
  },
  openGraph: {
    title: `Journal | ${siteSettings.name}`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/blog`,
    siteName: siteSettings.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Journal | ${siteSettings.name}`,
    description: PAGE_DESCRIPTION,
  },
  keywords: [
    "North Conway blog",
    "White Mountains travel",
    "New Hampshire travel guide",
    `${siteSettings.name} journal`,
    "Mt Washington Valley",
  ],
};

export default async function BlogIndexPage() {
  const blogs = await listBlogs();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: `${siteSettings.name} Journal`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/blog`,
    inLanguage: "en-US",
    publisher: {
      "@type": "LodgingBusiness",
      "@id": `${SITE_URL}#organization`,
      name: siteSettings.name,
      url: SITE_URL,
      logo: `${SITE_URL}/briarcliff/images/logo.jpg`,
      address: siteSettings.address,
      telephone: siteSettings.frontDesk,
    },
    blogPost: blogs.slice(0, 20).map((blog) => ({
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/blog/${blog.slug}`,
      headline: blog.title,
      url: `${SITE_URL}/blog/${blog.slug}`,
      datePublished: blog.publishDate ?? blog.createdAt,
      dateModified: blog.freshness?.lastUpdatedAt ?? blog.updatedAt,
      image: blog.featuredImage,
      description: blog.excerpt,
      author: blog.authorName
        ? { "@type": "Person", name: blog.authorName, url: blog.authorUrl }
        : undefined,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Journal", item: `${SITE_URL}/blog` },
    ],
  };

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="relative overflow-hidden border-b border-black/5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--bg-halo),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-16 sm:px-6 sm:pt-40 sm:pb-20 lg:px-8 lg:pt-48 lg:pb-24">
          <RevealStagger className="max-w-3xl space-y-5" stagger={0.1}>
            <RevealChild as="span" className="block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-forest)]">
                The Briarcliff Journal
              </p>
            </RevealChild>
            <RevealChild as="div">
              <h1 className="font-[family-name:var(--font-display)] text-5xl leading-[1.02] text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
                Stories from the valley.
              </h1>
            </RevealChild>
            <RevealChild as="div">
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-ink-soft)]">
                Seasonal guides, hidden gems, and notes from the front desk at {siteSettings.name}.
              </p>
            </RevealChild>
          </RevealStagger>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-32 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-40">
        {blogs.length === 0 ? (
          <Reveal>
            <div className="rounded-[2rem] border border-black/8 bg-[var(--surface-card)] p-10 text-center shadow-[0_18px_50px_rgba(31,36,31,0.06)]">
              <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]">
                Stories are on the way.
              </p>
              <p className="mt-3 text-base text-[var(--color-ink-soft)]">
                We&apos;re polishing our first journal entries. Check back soon.
              </p>
            </div>
          </Reveal>
        ) : (
          <RevealStagger
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.08}
          >
            {blogs.map((blog) => {
              const dateLabel = formatBlogDate(blog);
              const readingTime = getReadingTime(blog);
              return (
                <RevealChild key={blog.id} as="article">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/8 bg-[var(--surface-card)] shadow-[0_18px_50px_rgba(31,36,31,0.06)] transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:shadow-[0_28px_80px_rgba(28,63,54,0.14)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-paper-strong)]">
                      {blog.featuredImage ? (
                        <Image
                          src={blog.featuredImage}
                          alt={blog.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                          unoptimized
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,var(--color-paper-strong),var(--color-sand-soft))] text-xs uppercase tracking-[0.28em] text-[var(--color-forest)]/50">
                          Briarcliff Journal
                        </div>
                      )}
                      {blog.categories && blog.categories.length > 0 ? (
                        <span className="absolute left-4 top-4 rounded-full bg-[var(--surface-glass)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-forest)] backdrop-blur-md">
                          {blog.categories[0]}
                        </span>
                      ) : null}
                    </div>

                    <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                        {dateLabel ? (
                          <time dateTime={blog.publishDate ?? blog.createdAt}>
                            {dateLabel}
                          </time>
                        ) : null}
                        {dateLabel && readingTime ? (
                          <span aria-hidden="true" className="text-[var(--color-accent-deep)]">
                            ·
                          </span>
                        ) : null}
                        {readingTime ? <span>{readingTime}</span> : null}
                      </div>

                      <h2 className="font-[family-name:var(--font-display)] text-2xl leading-snug text-[var(--color-ink)] transition-colors duration-500 group-hover:text-[var(--color-forest)] sm:text-[1.65rem]">
                        {blog.title}
                      </h2>

                      {blog.excerpt ? (
                        <p className="line-clamp-3 text-[15px] leading-7 text-[var(--color-ink-soft)]">
                          {blog.excerpt}
                        </p>
                      ) : null}

                      <div className="mt-auto flex items-center justify-between pt-2">
                        <span className="text-sm font-semibold text-[var(--color-forest)] transition-colors duration-500 group-hover:text-[var(--color-accent-deep)]">
                          Read story
                          <span
                            aria-hidden="true"
                            className="ml-2 inline-block transition-transform duration-500 group-hover:translate-x-1"
                          >
                            →
                          </span>
                        </span>
                        {blog.authorName ? (
                          <span className="text-xs text-[var(--color-muted)]">
                            {blog.authorName}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </Link>
                </RevealChild>
              );
            })}
          </RevealStagger>
        )}
      </section>
    </div>
  );
}
