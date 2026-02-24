<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Mapa del sitio – marcosamplina.com</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 1rem 2rem; color: #1a1a1a; background: #fafafa; }
          h1 { font-size: 1.5rem; margin-bottom: 0.5rem; }
          .intro { color: #666; margin-bottom: 1.5rem; }
          table { border-collapse: collapse; width: 100%; max-width: 48rem; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,.08); border-radius: 8px; overflow: hidden; }
          th, td { text-align: left; padding: 0.75rem 1rem; border-bottom: 1px solid #eee; }
          th { background: #111; color: #fff; font-weight: 600; }
          tr:hover td { background: #f8f8f8; }
          a { color: #0066cc; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .priority, .changefreq { font-size: 0.875rem; color: #666; }
        </style>
      </head>
      <body>
        <h1>Mapa del sitio</h1>
        <p class="intro">Este XML es el sitemap del sitio. Los buscadores lo usan para descubrir las URLs. A continuación se listan las URLs incluidas.</p>
        <table>
          <thead>
            <tr>
              <th>URL</th>
              <th>Última modificación</th>
              <th>Frecuencia</th>
              <th>Prioridad</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                <td><xsl:value-of select="sitemap:lastmod"/></td>
                <td class="changefreq"><xsl:value-of select="sitemap:changefreq"/></td>
                <td class="priority"><xsl:value-of select="sitemap:priority"/></td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
