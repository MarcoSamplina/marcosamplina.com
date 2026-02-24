import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";

const BASE_URL = "https://marcosamplina.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs();
  const blogEntries: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/sobre-mi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...blogEntries,
  ];
}
