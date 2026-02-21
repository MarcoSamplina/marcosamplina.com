/**
 * URL para el popup de Calendly (con opciones de embed).
 */
export const CALENDLY_POPUP_URL =
  "https://calendly.com/marco-samplina/30min?hide_landing_page_details=1&hide_gdpr_banner=1";

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

let loading: Promise<void> | null = null;

function loadCalendly(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Calendly) return Promise.resolve();
  if (loading) return loading;

  loading = new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CALENDLY_CSS;
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Calendly script failed to load"));
    document.body.appendChild(script);
  });

  return loading;
}

/**
 * Empieza a cargar el widget de Calendly en segundo plano (p. ej. al hacer hover).
 * Así el primer clic suele abrir el popup al instante.
 */
export function preloadCalendly(): void {
  loadCalendly().catch(() => {});
}

/**
 * Abre Calendly en un popup/overlay. Carga el script/CSS solo al primer uso (mejor PageSpeed y TBT).
 * Si falla la carga, abre la URL en nueva pestaña.
 */
export function openCalendlyPopup(e?: { preventDefault(): void }): void {
  if (e) {
    e.preventDefault();
  }
  if (typeof window === "undefined") return;

  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_POPUP_URL });
    return;
  }

  loadCalendly()
    .then(() => {
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url: CALENDLY_POPUP_URL });
      } else {
        window.open(CALENDLY_POPUP_URL, "_blank", "noopener,noreferrer");
      }
    })
    .catch(() => {
      window.open(CALENDLY_POPUP_URL, "_blank", "noopener,noreferrer");
    });
}
