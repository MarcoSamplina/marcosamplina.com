"use client";

import { motion } from "motion/react";

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

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export function ProcessSection() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-4xl"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
    >
      {/* Desktop: 4 columnas con línea conectora */}
      <div className="hidden grid-cols-4 gap-6 sm:grid">
        {STEPS.map((step, i) => (
          <motion.article
            key={step.title}
            variants={fadeUp}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex flex-col items-center text-center"
          >
            <div className="relative z-10 mb-4 flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm font-semibold text-white backdrop-blur-sm">
              {i + 1}
            </div>
            {i < STEPS.length - 1 && (
              <div
                className="absolute top-6 left-[calc(50%+26px)] z-0 h-0.5 w-[calc(50%-14px)] bg-gradient-to-r from-white/20 to-transparent"
                aria-hidden
              />
            )}
            <h3 className="mb-1.5 font-semibold text-white">{step.title}</h3>
            <p className="text-sm leading-relaxed text-zinc-400">{step.description}</p>
          </motion.article>
        ))}
      </div>

      {/* Mobile: lista vertical con línea lateral */}
      <div className="space-y-6 sm:hidden">
        {STEPS.map((step, i) => (
          <motion.article
            key={step.title}
            variants={fadeUp}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex gap-4 pl-2"
          >
            <div className="relative flex shrink-0 flex-col items-center">
              <span className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm font-semibold text-white">
                {i + 1}
              </span>
              {i < STEPS.length - 1 && (
                <span
                  className="absolute top-10 h-full w-0.5 bg-gradient-to-b from-white/20 to-transparent"
                  aria-hidden
                />
              )}
            </div>
            <div className="min-w-0 pb-6">
              <h3 className="mb-1 font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{step.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}
