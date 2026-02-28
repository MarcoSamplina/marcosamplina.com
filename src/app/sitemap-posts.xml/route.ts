import { getPosts } from "@/lib/blog";
import { SITEMAP_BASE_URL, escapeXml, toIso } from "@/lib/sitemap-utils";

export async function GET() {
  const posts = getPosts();
  const urls = posts.map((p) => ({
    loc: `${SITEMAP_BASE_URL}/blog/${p.slug}`,
    lastmod: p.dateModified ? new Date(p.dateModified) : new Date(p.date),
    changefreq: "weekly",
    priority: "0.8",
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="${SITEMAP_BASE_URL}/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
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
