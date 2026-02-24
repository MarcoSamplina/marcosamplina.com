"use client";

/**
 * Gráfico visual que rompe el texto del artículo: de "posiciones" a "citas".
 * Refuerza el mensaje central del post sin depender del cuerpo en markdown.
 */
export function BlogPostVisualBreak() {
  return (
    <figure
      className="my-14 flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm"
      aria-hidden
    >
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-5 py-3 text-center">
          <span className="block text-amber-400/90 text-xs font-medium uppercase tracking-wider">
            Antes
          </span>
          <span className="mt-1 block font-semibold text-white">Solo posiciones</span>
        </div>
        <svg
          className="size-8 shrink-0 text-zinc-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-center">
          <span className="block text-emerald-400/90 text-xs font-medium uppercase tracking-wider">
            2026
          </span>
          <span className="mt-1 block font-semibold text-white">Ser citado</span>
        </div>
      </div>
      <figcaption className="text-center text-zinc-500 text-sm">
        El objetivo del SEO ha pasado de rankear a ser la fuente que la IA utiliza y cita.
      </figcaption>
    </figure>
  );
}
