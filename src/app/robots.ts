import type { MetadataRoute } from "next";

const BASE_URL = "https://marcosamplina.com";

/**
 * robots.txt: permite todo, enlaza sitemap para indexación.
 * No usar disallow vacío (Disallow: con valor vacío bloquea todo).
 * Sitemap debe ser URL absoluta. No usar "Host": solo lo usa Yandex, Google lo ignora y avisa en Search Console.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
