"use client";

import { openCalendlyPopup, preloadCalendly } from "@/lib/calendly";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function BlogPostCta() {
  return (
    <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-sm">
      <p className="mb-4 text-lg font-medium text-white">
        ¿Quieres revisar tu SEO con un experto?
      </p>
      <p className="mb-6 text-zinc-400 text-sm">
        Reserva una sesión sin compromiso y te doy ideas concretas para adaptar tu estrategia a 2026.
      </p>
      <HoverBorderGradient
        as="button"
        type="button"
        onClick={openCalendlyPopup}
        onMouseEnter={preloadCalendly}
        containerClassName="bg-white/5 dark:bg-white/10 border-white/20"
        className="bg-zinc-900/80 px-6 py-3 text-sm font-medium text-white rounded-full"
      >
        Reservar sesión en Calendly
      </HoverBorderGradient>
    </div>
  );
}
