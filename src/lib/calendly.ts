/**
 * URL para el popup de Calendly (con opciones de embed).
 * Usado por openCalendlyPopup() y por el script de Calendly.
 */
export const CALENDLY_POPUP_URL =
  "https://calendly.com/marco-samplina/30min?hide_landing_page_details=1&hide_gdpr_banner=1";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

/**
 * Abre Calendly en un popup/overlay. Si el script de Calendly no ha cargado,
 * abre la URL en una nueva pestaña como fallback.
 */
export function openCalendlyPopup(e?: { preventDefault(): void }): void {
  if (e) {
    e.preventDefault();
  }
  if (typeof window !== "undefined" && window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_POPUP_URL });
  } else {
    window.open(CALENDLY_POPUP_URL, "_blank", "noopener,noreferrer");
  }
}
