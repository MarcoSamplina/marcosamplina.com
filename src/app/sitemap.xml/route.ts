import { SITEMAP_BASE_URL, escapeXml, toIso } from "@/lib/sitemap-utils";

/**
 * Sitemap index (estilo Yoast): lista sitemaps de páginas y de posts.
 * Google y otros crawlers siguen los enlaces a sitemap-pages.xml y sitemap-posts.xml.
 */
export async function GET() {
  const now = new Date();
  const sitemaps = [
    { loc: `${SITEMAP_BASE_URL}/sitemap-pages.xml`, lastmod: now },
    { loc: `${SITEMAP_BASE_URL}/sitemap-posts.xml`, lastmod: now },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="${SITEMAP_BASE_URL}/sitemap-index.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (s) => `  <sitemap>
    <loc>${escapeXml(s.loc)}</loc>
    <lastmod>${toIso(s.lastmod)}</lastmod>
  </sitemap>`
  )
  .join("\n")}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
