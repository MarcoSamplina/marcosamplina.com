"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const STEPS = [
  { title: "Objetivos", description: "Definimos qué quieres lograr y cómo lo medimos." },
  { title: "Estrategia", description: "Plan de acción priorizado, sin pasos de más." },
  { title: "Ejecución", description: "Implementación con métricas claras desde el día uno." },
  { title: "Resultados", description: "Revisión y ajustes para seguir acercándote a la meta." },
];

export function ProcessSection() {
  const content = STEPS.map((step, i) => ({
    title: step.title,
    description: step.description,
    content: (
      <div className="flex h-full items-center justify-center p-6">
        <span className="flex size-24 items-center justify-center rounded-full border border-white/20 bg-white/5 text-3xl font-semibold text-white">
          {i + 1}
        </span>
      </div>
    ),
  }));

  return (
    <StickyScroll
      variant="minimal"
      content={content}
      className="max-w-4xl mx-auto"
    />
  );
}
