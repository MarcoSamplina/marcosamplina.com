"use client";

import { openCalendlyPopup, preloadCalendly } from "@/lib/calendly";

export function BlogPostCta() {
  return (
    <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-sm">
      <p className="mb-4 text-lg font-medium text-white">
        ¿Quieres revisar tu SEO con un experto?
      </p>
      <p className="mb-6 text-zinc-400 text-sm">
        Reserva una sesión sin compromiso y te doy ideas concretas para adaptar tu estrategia a 2026.
      </p>
      <button
        type="button"
        onClick={openCalendlyPopup}
        onMouseEnter={preloadCalendly}
        className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/15 hover:border-white/30"
      >
        Reservar sesión en Calendly
      </button>
    </div>
  );
}
