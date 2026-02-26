/**
 * Límites y buenas prácticas para title y meta description.
 * Basado en Google Search Central (developers.google.com/search):
 *
 * TITLE:
 * - Único por página. Descriptivo. Palabras clave principales al inicio, marca al final.
 * - ~50-60 caracteres para evitar truncado en SERP (Google puede mostrar más pero da más peso al inicio).
 * - Sin keyword stuffing. Debe coincidir con el contenido y la intención de búsqueda.
 * - H1 alineado con el title para consistencia.
 *
 * META DESCRIPTION:
 * - Única por página. Resumen preciso y atractivo ("pitch" para el clic).
 * - 150-160 caracteres recomendados para que se muestre completa en resultados.
 * - Puede incluir autor, fecha u otros datos relevantes. No rankea directamente pero influye en CTR.
 *
 * Referencia: https://developers.google.com/search/docs/appearance/title-link
 *             https://developers.google.com/search/docs/appearance/snippet
 */

/** Margen de error 5%: no superar estos valores para títulos y descripciones. */
const MARGIN = 0.95;

export const SEO_LIMITS = {
  /** Title: máximo 60 caracteres en SERP. Con 5% margen, usar ≤57 para estar seguro. */
  TITLE_MAX_CHARS: 60,
  TITLE_SAFE_CHARS: Math.floor(60 * MARGIN), // 57
  /** Meta description: recomendado 150-160. Con 5% margen: 143-168. */
  DESCRIPTION_MIN_CHARS: Math.floor(150 * MARGIN), // 143
  DESCRIPTION_MAX_CHARS: Math.ceil(160 / MARGIN),  // 168
} as const;

export const SITE_NAME = "Marco Samplina";
