import { listBlogs } from "@/lib/blog";
import { siteSettings, SITE_URL } from "@/lib/content/site";

export const revalidate = 300;

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRfc822(input?: string): string {
  if (!input) return new Date().toUTCString();
  const date = new Date(input);
  if (Number.isNaN(date.getTime())) return new Date().toUTCString();
  return date.toUTCString();
}

export async function GET() {
  const blogs = await listBlogs();
  const feedUrl = `${SITE_URL}/blog/feed.xml`;
  const blogUrl = `${SITE_URL}/blog`;
  const lastBuildDate = blogs[0]?.freshness?.lastUpdatedAt ?? blogs[0]?.updatedAt;

  const items = blogs
    .map((blog) => {
      const link = `${SITE_URL}/blog/${blog.slug}`;
      const pubDate = toRfc822(blog.publishDate ?? blog.createdAt);
      const description = blog.excerpt ?? blog.meta?.seoDescription ?? "";
      const categories = (blog.categories ?? []).concat(blog.tags ?? []);
      return `    <item>
      <title>${escapeXml(blog.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${pubDate}</pubDate>
      ${blog.authorName ? `<dc:creator>${escapeXml(blog.authorName)}</dc:creator>` : ""}
      <description>${escapeXml(description)}</description>
      ${categories.map((c) => `<category>${escapeXml(c)}</category>`).join("\n      ")}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(`${siteSettings.name} Journal`)}</title>
    <link>${escapeXml(blogUrl)}</link>
    <description>${escapeXml(`Stories, seasonal guides, and insider tips from ${siteSettings.name} in North Conway, NH.`)}</description>
    <language>en-us</language>
    <lastBuildDate>${toRfc822(lastBuildDate)}</lastBuildDate>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
    },
  });
}
