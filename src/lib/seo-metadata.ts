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

export const SEO_LIMITS = {
  /** Longitud recomendada para title (evitar truncado en SERP). Google no tiene límite fijo pero prioriza el inicio. */
  TITLE_MAX_CHARS: 60,
  /** Meta description: objetivo 150-160 para mostrarse completa. */
  DESCRIPTION_MIN_CHARS: 150,
  DESCRIPTION_MAX_CHARS: 160,
} as const;

export const SITE_NAME = "Marco Samplina";
