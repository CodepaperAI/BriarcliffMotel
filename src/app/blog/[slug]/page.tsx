import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal, RevealChild, RevealStagger } from "@/components/reveal";
import {
  formatBlogDate,
  getBlog,
  getReadingTime,
  listBlogs,
  renderableHtml,
} from "@/lib/blog";
import { siteSettings, SITE_URL } from "@/lib/content/site";

export const revalidate = 300;

type BlogPageParams = { slug: string };

export async function generateStaticParams(): Promise<BlogPageParams[]> {
  const blogs = await listBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<BlogPageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) {
    return { title: "Story not found" };
  }

  const title = blog.meta?.seoTitle ?? blog.title;
  const description = blog.meta?.seoDescription ?? blog.excerpt ?? "";
  const image = blog.featuredImage;
  const canonical = `${SITE_URL}/blog/${blog.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: blog.meta?.ogTitle ?? title,
      description: blog.meta?.ogDescription ?? description,
      url: blog.meta?.ogUrl ?? canonical,
      type: "article",
      siteName: blog.meta?.ogSiteName ?? siteSettings.name,
      locale: blog.meta?.ogLocale ?? "en_US",
      images: image ? [{ url: image }] : undefined,
      publishedTime: blog.publishDate,
      modifiedTime: blog.freshness?.lastUpdatedAt ?? blog.updatedAt,
      authors: blog.authorName ? [blog.authorName] : undefined,
      tags: blog.meta?.articleTags ?? blog.tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
    keywords: blog.meta?.keywords ?? blog.tags,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<BlogPageParams>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) notFound();

  const dateLabel = formatBlogDate(blog);
  const readingTime = getReadingTime(blog);
  const html = renderableHtml(blog.content);
  const canonical = `${SITE_URL}/blog/${blog.slug}`;
  const wordCount = blog.content.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": canonical,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    headline: blog.title,
    name: blog.title,
    description: blog.meta?.seoDescription ?? blog.excerpt,
    image: blog.featuredImage ? [blog.featuredImage] : undefined,
    datePublished: blog.publishDate ?? blog.createdAt,
    dateModified: blog.freshness?.lastUpdatedAt ?? blog.updatedAt ?? blog.publishDate,
    inLanguage: blog.meta?.ogLocale?.replace("_", "-") ?? "en-US",
    wordCount: wordCount || undefined,
    keywords: (blog.meta?.keywords ?? blog.tags ?? []).join(", ") || undefined,
    articleSection: blog.meta?.articleSection ?? blog.categories?.[0],
    author: blog.authorName
      ? {
          "@type": "Person",
          name: blog.authorName,
          url: blog.authorUrl,
        }
      : undefined,
    publisher: {
      "@type": "LodgingBusiness",
      "@id": `${SITE_URL}#organization`,
      name: siteSettings.name,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/briarcliff/images/logo.jpg`,
      },
      address: siteSettings.address,
      telephone: siteSettings.frontDesk,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Journal", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: blog.title, item: canonical },
    ],
  };

  return (
    <article className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <header className="relative overflow-hidden border-b border-black/5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,var(--bg-halo),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-4xl px-4 pt-32 pb-12 sm:px-6 sm:pt-40 sm:pb-16 lg:px-8 lg:pt-48">
          <RevealStagger className="space-y-6" stagger={0.1}>
            <RevealChild as="div">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-forest)] transition-colors duration-500 hover:text-[var(--color-accent-deep)]"
              >
                <span aria-hidden="true">←</span>
                Back to journal
              </Link>
            </RevealChild>

            {blog.categories && blog.categories.length > 0 ? (
              <RevealChild as="div">
                <div className="flex flex-wrap gap-2">
                  {blog.categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-forest-deep)]"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </RevealChild>
            ) : null}

            <RevealChild as="div">
              <h1 className="font-[family-name:var(--font-display)] text-4xl leading-[1.05] text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
                {blog.title}
              </h1>
            </RevealChild>

            {blog.excerpt ? (
              <RevealChild as="div">
                <p className="max-w-3xl text-lg leading-8 text-[var(--color-ink-soft)] sm:text-xl">
                  {blog.excerpt}
                </p>
              </RevealChild>
            ) : null}

            <RevealChild as="div">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                {blog.authorName ? (
                  <span className="text-[var(--color-ink)]">{blog.authorName}</span>
                ) : null}
                {blog.authorName && dateLabel ? (
                  <span aria-hidden="true" className="text-[var(--color-accent-deep)]">·</span>
                ) : null}
                {dateLabel ? (
                  <time dateTime={blog.publishDate ?? blog.createdAt}>{dateLabel}</time>
                ) : null}
                {readingTime ? (
                  <>
                    <span aria-hidden="true" className="text-[var(--color-accent-deep)]">·</span>
                    <span>{readingTime}</span>
                  </>
                ) : null}
              </div>
            </RevealChild>
          </RevealStagger>
        </div>
      </header>

      {blog.featuredImage ? (
        <Reveal className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-2 mb-12 aspect-[16/9] overflow-hidden rounded-[2rem] border border-black/8 bg-[var(--color-paper-strong)] shadow-[0_28px_80px_rgba(28,63,54,0.14)] sm:mb-16">
            <Image
              src={blog.featuredImage}
              alt={blog.title}
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
              unoptimized
            />
          </div>
        </Reveal>
      ) : null}

      <section className="relative mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
        <Reveal>
          <div
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Reveal>

        {blog.tags && blog.tags.length > 0 ? (
          <Reveal>
            <div className="mt-14 flex flex-wrap gap-2 border-t border-black/8 pt-8">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--color-forest)]/15 bg-[var(--surface-card)] px-3 py-1 text-xs font-medium text-[var(--color-forest)]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </Reveal>
        ) : null}

        <Reveal>
          <div className="mt-14 flex flex-col items-start gap-6 rounded-[2rem] border border-black/8 bg-[var(--surface-card)] p-8 shadow-[0_18px_50px_rgba(31,36,31,0.06)] sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-forest)]">
                Plan your stay
              </p>
              <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]">
                Make {siteSettings.name} your basecamp.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/rooms-amenities"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-[var(--surface-card)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-black/5"
              >
                Explore rooms
              </Link>
              <a
                href={siteSettings.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-accent-deep)]/10 bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] shadow-[0_14px_30px_rgba(199,154,82,0.28)] transition hover:bg-[var(--color-accent-deep)] hover:text-white"
              >
                Book now
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </article>
  );
}
