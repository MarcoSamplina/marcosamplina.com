import { SITEMAP_BASE_URL, escapeXml, toIso } from "@/lib/sitemap-utils";

const staticUrls: Array<{ loc: string; lastmod: Date; changefreq: string; priority: string }> = [
  { loc: SITEMAP_BASE_URL, lastmod: new Date(), changefreq: "weekly", priority: "1" },
  { loc: `${SITEMAP_BASE_URL}/blog`, lastmod: new Date(), changefreq: "weekly", priority: "0.9" },
  { loc: `${SITEMAP_BASE_URL}/sobre-mi`, lastmod: new Date(), changefreq: "monthly", priority: "0.8" },
];

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="${SITEMAP_BASE_URL}/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls
  .map(
    (u) => `  <url>
    <loc>${escapeXml(u.loc)}</loc>
    <lastmod>${toIso(u.lastmod)}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
