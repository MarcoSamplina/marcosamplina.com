<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Índice del mapa del sitio – marcosamplina.com</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 1rem 2rem; color: #1a1a1a; background: #fafafa; }
          h1 { font-size: 1.5rem; margin-bottom: 0.5rem; }
          .intro { color: #666; margin-bottom: 1.5rem; }
          table { border-collapse: collapse; width: 100%; max-width: 40rem; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,.08); border-radius: 8px; overflow: hidden; }
          th, td { text-align: left; padding: 0.75rem 1rem; border-bottom: 1px solid #eee; }
          th { background: #111; color: #fff; font-weight: 600; }
          tr:hover td { background: #f8f8f8; }
          a { color: #0066cc; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .lastmod { font-size: 0.875rem; color: #666; }
        </style>
      </head>
      <body>
        <h1>Índice del mapa del sitio</h1>
        <p class="intro">Sitemap index (estilo Yoast). Cada enlace abre un sitemap: páginas estáticas o entradas del blog.</p>
        <table>
          <thead>
            <tr>
              <th>Sitemap</th>
              <th>Última modificación</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
              <tr>
                <td>
                  <a href="{sitemap:loc}">
                    <xsl:choose>
                      <xsl:when test="contains(sitemap:loc, 'sitemap-pages')">Páginas</xsl:when>
                      <xsl:when test="contains(sitemap:loc, 'sitemap-posts')">Posts</xsl:when>
                      <xsl:otherwise><xsl:value-of select="sitemap:loc"/></xsl:otherwise>
                    </xsl:choose>
                  </a>
                </td>
                <td class="lastmod"><xsl:value-of select="sitemap:lastmod"/></td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
