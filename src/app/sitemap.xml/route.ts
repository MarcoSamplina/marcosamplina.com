import { getPosts } from "@/lib/blog";

const BASE_URL = "https://marcosamplina.com";

/** Sin trailing slash: consistente con canonicals y @id del sitio */

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toIso(date: Date): string {
  return date.toISOString().slice(0, 19) + "Z";
}

export async function GET() {
  const posts = getPosts();
  const now = new Date();

  const staticUrls: Array<{ loc: string; lastmod: Date; changefreq: string; priority: string }> = [
    { loc: BASE_URL, lastmod: now, changefreq: "weekly", priority: "1" },
    { loc: `${BASE_URL}/blog`, lastmod: now, changefreq: "weekly", priority: "0.9" },
    { loc: `${BASE_URL}/sobre-mi`, lastmod: now, changefreq: "monthly", priority: "0.8" },
  ];

  const blogUrls = posts.map((p) => ({
    loc: `${BASE_URL}/blog/${p.slug}`,
    lastmod: p.dateModified ? new Date(p.dateModified) : new Date(p.date),
    changefreq: "weekly",
    priority: "0.8",
  }));

  const urls = [...staticUrls, ...blogUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="${BASE_URL}/sitemap.xsl"?>
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
