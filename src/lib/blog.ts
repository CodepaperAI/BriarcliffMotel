const API_BASE = "https://api.upliftai.co/api/public/v1";
const REVALIDATE_SECONDS = 300;

export type BlogFreshness = {
  lastUpdatedAt: string;
  ageDays: number;
  needsRefresh: boolean;
  freshnessThresholdDays: number;
};

export type BlogMeta = {
  seoTitle?: string;
  seoDescription?: string;
  focusKeyword?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogLocale?: string;
  articleAuthor?: string;
  articleSection?: string;
  articleTags?: string[];
};

export type BlogSummary = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  status: string;
  publishDate?: string;
  publishTime?: string;
  featuredImage?: string;
  categories?: string[];
  tags?: string[];
  seoScore?: number;
  createdAt?: string;
  updatedAt?: string;
  authorName?: string;
  authorUrl?: string;
  freshness?: BlogFreshness;
  meta?: BlogMeta;
  customFields?: Record<string, unknown>;
};

export type BlogDetail = BlogSummary & {
  content: string;
  analytics?: {
    contentQualityScore?: number;
    rankingPotential?: string;
    conversionPotential?: string;
    externalLinksCount?: number;
  };
};

type ListResponse = {
  success: boolean;
  data?: {
    blogs: BlogSummary[];
    pagination?: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
  error?: string;
};

type DetailResponse = {
  success: boolean;
  data?: { blog: BlogDetail };
  error?: string;
};

function getToken(): string | null {
  return process.env.UPLIFTAI_TOKEN ?? null;
}

export async function listBlogs(): Promise<BlogSummary[]> {
  const token = getToken();
  if (!token) return [];

  try {
    const res = await fetch(`${API_BASE}/blogs?status=PUBLISH&limit=100`, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: REVALIDATE_SECONDS, tags: ["blogs"] },
    });

    if (!res.ok) return [];
    const json = (await res.json()) as ListResponse;
    if (!json.success || !json.data) return [];

    return json.data.blogs
      .filter((blog) => blog.status === "PUBLISH")
      .sort((a, b) => {
        const aDate = a.publishDate ?? a.createdAt ?? "";
        const bDate = b.publishDate ?? b.createdAt ?? "";
        return bDate.localeCompare(aDate);
      });
  } catch {
    return [];
  }
}

export async function getBlog(slug: string): Promise<BlogDetail | null> {
  const token = getToken();
  if (!token) return null;

  try {
    const res = await fetch(`${API_BASE}/blog/${encodeURIComponent(slug)}`, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: REVALIDATE_SECONDS, tags: ["blogs", `blog:${slug}`] },
    });

    if (!res.ok) return null;
    const json = (await res.json()) as DetailResponse;
    if (!json.success || !json.data) return null;

    return json.data.blog;
  } catch {
    return null;
  }
}

export function formatBlogDate(blog: BlogSummary): string | null {
  const raw = blog.publishDate ?? blog.createdAt;
  if (!raw) return null;
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getReadingTime(blog: BlogSummary): string | null {
  const custom = blog.customFields?.readingTime;
  if (typeof custom === "string" && custom.trim().length > 0) return custom;

  if (!blog.content) return null;
  const words = blog.content.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
  if (words === 0) return null;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

export function isLikelyHtml(content: string): boolean {
  return /<\/?(p|div|h[1-6]|ul|ol|li|a|img|figure|blockquote|pre|code|table)\b/i.test(content);
}

export function renderableHtml(content: string): string {
  if (isLikelyHtml(content)) return content;

  // Treat as plain text / very simple markdown — split paragraphs, preserve line breaks.
  const escape = (text: string) =>
    text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const blocks = content
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks
    .map((block) => {
      const heading = block.match(/^(#{1,6})\s+(.+)$/);
      if (heading) {
        const level = heading[1].length;
        return `<h${level}>${escape(heading[2])}</h${level}>`;
      }
      return `<p>${escape(block).replace(/\n/g, "<br/>")}</p>`;
    })
    .join("\n");
}
