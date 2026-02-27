"use client";

import { motion } from "motion/react";
import { ProcessStepGraphic } from "@/components/ProcessStepGraphic";

const STEPS = [
  {
    title: "Objetivos",
    description: "Definimos qué quieres lograr y cómo lo medimos.",
  },
  {
    title: "Estrategia",
    description: "Plan de acción priorizado, sin pasos de más.",
  },
  {
    title: "Ejecución",
    description: "Implementación con métricas claras desde el día uno.",
  },
  {
    title: "Resultados",
    description: "Revisión y ajustes para seguir acercándote a la meta.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function ProcessSection() {
  return (
    <div className="relative mx-auto w-full max-w-4xl space-y-12 sm:space-y-16">
      {STEPS.map((step, i) => (
        <motion.article
          key={step.title}
          className="grid grid-cols-1 gap-8 md:grid-cols-[1fr,200px] lg:grid-cols-[1fr,240px] md:items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px", amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="flex flex-col md:order-1">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
            </div>
            <p className="pl-[52px] text-sm leading-relaxed text-zinc-400 md:pl-0">
              {step.description}
            </p>
          </div>
          <motion.div
            className="md:order-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ProcessStepGraphic stepIndex={i} />
          </motion.div>
        </motion.article>
      ))}
    </div>
  );
}
