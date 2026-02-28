# Datos estructurados para Google Search

**Referencia oficial (siempre en cuenta):**  
[Structured data markup that Google Search supports (Search gallery)](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)

Google usa datos estructurados para entender el contenido y mostrarlo en **resultados enriquecidos** (rich results). Hay que ser muy rigurosos con esto: implementar bien, validar y mantener.

---

## Herramientas

- [Rich Results Test](https://search.google.com/test/rich-results) — Probar una URL y ver qué detecta Google.
- [Search Console](https://search.google.com/search-console) — Monitorizar resultados enriquecidos en todo el sitio.

---

## Tipos que nos aplican en este sitio

| Tipo | Dónde | Estado |
|------|--------|--------|
| **Breadcrumb** | `/blog`, `/blog/[slug]`, `/sobre-mi` | ✅ JSON-LD BreadcrumbList |
| **Article** | Posts del blog | ✅ Article (con author, publisher, dates, image) |
| **FAQ** | Home (FAQ), posts con `faqs` en frontmatter | ✅ FAQPage |
| **Organization** | Layout (WebSite + Organization en @graph) | ✅ En layout.tsx |
| **Person** | Autor / entidad | ✅ Referenciado en Article y en @graph |
| **Profile page** | `/sobre-mi` | ✅ ProfilePage con mainEntity → #person |

---

## Checklist al añadir o tocar schema

1. **Seguir la guía específica** de cada tipo en Search Central (enlaces desde la [search gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)).
2. **JSON-LD** en `<script type="application/ld+json">` (recomendado por Google).
3. **Contenido real**: el markup debe reflejar lo que ve el usuario; nada engañoso.
4. **Validar** con Rich Results Test tras cambios.
5. **IDs y referencias**: usar `@id` y referencias entre tipos (ej. Article → `author: { "@id": "...#person" }`) cuando aplique.

---

## Otros tipos de la gallery que podrían aplicarnos más adelante

- **Video** — Si publicamos vídeos con metadata específica.
- **HowTo** — Guías paso a paso en el blog (cuando tenga sentido).

Cualquier nuevo tipo: revisar la [search gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery) y la guía concreta del tipo antes de implementar.
