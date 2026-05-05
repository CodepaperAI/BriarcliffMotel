import type { MetadataRoute } from "next";

import { listBlogs } from "@/lib/blog";
import { SITE_URL, allRoutePaths } from "@/lib/content/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries = allRoutePaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.8,
  }));

  const blogs = await listBlogs();
  const blogEntries = [
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...blogs.map((blog) => ({
      url: `${SITE_URL}/blog/${blog.slug}`,
      lastModified: new Date(
        blog.freshness?.lastUpdatedAt ?? blog.updatedAt ?? blog.publishDate ?? Date.now(),
      ),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [...staticEntries, ...blogEntries];
}
