# Por qué no se indexan las páginas – checklist

## Lo que ya está bien en el código

- **robots.txt** (`src/app/robots.ts`): `Allow: /`, `Sitemap: https://marcosamplina.com/sitemap.xml`. No hay `Disallow` que bloquee.
- **Metadata**: `robots: { index: true, follow: true }` en el layout. No hay `noindex` en páginas.
- **Sitemap**: Ruta `/sitemap.xml` con todas las URLs (home, blog, sobre-mi, entradas). `Content-Type: application/xml`.
- **Canonical**: Home y páginas con `alternates.canonical` correctos.
- **Sin middleware** que bloquee o redirija a Googlebot.

## Causas habituales cuando “no indexa”

### 1. Despliegues de vista previa (Vercel)

En **Vercel**, los despliegues que no son producción (por rama, PR, preview) llevan por defecto **`X-Robots-Tag: noindex`**. Solo el dominio de **producción** (p. ej. `marcosamplina.com` desde la rama que tengas como “Production”) es indexable.

- Comprueba en Vercel que el dominio de producción es el correcto y que estás mirando esa URL, no una preview.

### 2. Sitemap no enviado o dominio incorrecto en Search Console

- Entra en [Google Search Console](https://search.google.com/search-console).
- Comprueba que la **propiedad** es exactamente la que quieres indexar (por ejemplo `https://marcosamplina.com` sin `www` si tu canonicals son sin `www`).
- En **Sitemaps**, añade y envía: `https://marcosamplina.com/sitemap.xml`.
- Espera a que Google procese el sitemap (puede tardar horas o días).

### 3. Inspección de URL y “Solicitar indexación”

- En Search Console, **Inspección de URL**.
- Pega la URL exacta (p. ej. `https://marcosamplina.com/blog/tu-entrada`).
- Comprueba que Google ve la página (no 404, no redirección rara) y que no indica “noindex” ni “Bloqueado por robots.txt”.
- Usa **Solicitar indexación** para las páginas importantes (no abuses; unas pocas por día está bien).

### 4. Sitio muy nuevo o poco enlazado

Google puede tardar días o semanas en rastrear e indexar. Si el sitio es nuevo o tiene pocos enlaces externos, es normal que tarde más.

### 5. Comprobar en producción que todo responde bien

En el **dominio real** (el que está en Search Console):

- `https://marcosamplina.com/robots.txt` → debe mostrar `Allow: /` y `Sitemap: https://marcosamplina.com/sitemap.xml`.
- `https://marcosamplina.com/sitemap.xml` → debe devolver **200** y XML con `<urlset>` y las URLs.
- Una página cualquiera (p. ej. home o un post) → **200**, sin redirección a otra URL (salvo la que quieras como canonical).

Si algo de esto falla (404, 302 a otro dominio, o contenido distinto al esperado), hay que corregir primero eso (configuración de dominio en Vercel, canonicals, etc.).

## Resumen

El proyecto está preparado para indexación (robots, sitemap, metadata). Si las páginas no se indexan, suele ser por: **uso de URLs de preview en vez de producción**, **sitemap no enviado o propiedad incorrecta en Search Console**, o **tiempo de rastreo**. Revisar producción, Search Console e inspección de URL suele bastar para localizar el bloqueo.
