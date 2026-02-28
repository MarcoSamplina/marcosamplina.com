import type { MetadataRoute } from "next";

const BASE_URL = "https://marcosamplina.com";

/**
 * robots.txt: permite todo, enlaza sitemap para indexación.
 * No usar disallow vacío (Disallow: con valor vacío bloquea todo).
 * Sitemap debe ser URL absoluta; misma base que canonicals (sin trailing slash).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
