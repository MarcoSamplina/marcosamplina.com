"use client";

import { motion } from "motion/react";

const stepConfig = [
  {
    label: "Objetivos",
    icon: "target",
    content: (
      <div className="flex flex-col items-center justify-center gap-3 p-4">
        <motion.div
          className="relative flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-2xl" aria-hidden>🎯</span>
          <motion.span
            className="absolute inset-0 rounded-2xl border-2 border-white/20"
            animate={{ scale: [1, 1.35, 1.35], opacity: [0.35, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.2 }}
          />
        </motion.div>
      </div>
    ),
  },
  {
    label: "Estrategia",
    icon: "doc",
    content: (
      <div className="flex flex-col gap-2 p-4">
        {[60, 85, 70, 55].map((w, i) => (
          <motion.div
            key={i}
            className="h-2 rounded-full bg-white/10"
            style={{ width: `${w}%` }}
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: `${w}%`, opacity: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
          />
        ))}
      </div>
    ),
  },
  {
    label: "Ejecución",
    icon: "gear",
    content: (
      <div className="flex items-center justify-center gap-2 p-4">
        <motion.div
          className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          aria-hidden
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="block"
          >
            ⚙️
          </motion.span>
        </motion.div>
        <motion.div
          className="h-8 w-1 rounded-full bg-emerald-500/60"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ transformOrigin: "bottom" }}
        />
      </div>
    ),
  },
  {
    label: "Resultados",
    icon: "check",
    content: (
      <div className="flex flex-col gap-2 p-4">
        {["Objetivo alcanzado", "Métricas claras", "Ajustes aplicados"].map((text, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{ duration: 0.35, delay: 0.15 * i }}
          >
            <span className="flex size-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-400">✓</span>
            <span className="text-xs text-zinc-400">{text}</span>
          </motion.div>
        ))}
      </div>
    ),
  },
];

export function ProcessStepGraphic({ stepIndex }: { stepIndex: number }) {
  const config = stepConfig[stepIndex];
  if (!config) return null;
  return (
    <div className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
      {config.content}
    </div>
  );
}
