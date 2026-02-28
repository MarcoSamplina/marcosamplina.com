"use client";

import type { RefObject } from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { StepObjetivos, StepEstrategia, StepEjecucion, StepResultados } from "@/components/ProcessStepVisuals";

const STEPS = [
  { title: "Objetivos", description: "Definimos qué quieres lograr y cómo lo medimos." },
  { title: "Estrategia", description: "Plan de acción priorizado, sin pasos de más." },
  { title: "Ejecución", description: "Implementación con métricas claras desde el día uno." },
  { title: "Resultados", description: "Revisión y ajustes para seguir acercándote a la meta." },
];

const STEP_VISUALS = [
  <StepObjetivos key="1" className="h-full min-h-[200px] w-full" />,
  <StepEstrategia key="2" className="h-full min-h-[200px] w-full" />,
  <StepEjecucion key="3" className="h-full min-h-[200px] w-full" />,
  <StepResultados key="4" className="h-full min-h-[200px] w-full" />,
];

export function ProcessSection({
  sectionRef,
}: {
  sectionRef?: RefObject<HTMLElement | null>;
}) {
  const content = STEPS.map((step, i) => ({
    title: step.title,
    description: step.description,
    content: (
      <div className="flex h-full w-full items-stretch justify-center p-2">
        {STEP_VISUALS[i]}
      </div>
    ),
  }));

  return (
    <StickyScroll
      variant="minimal"
      content={content}
      className="max-w-4xl mx-auto"
      contentClassName="lg:!top-24"
      targetRef={sectionRef ?? undefined}
    />
  );
}
