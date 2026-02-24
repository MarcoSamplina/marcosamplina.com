"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const NODES = [
  { id: "objetivos", label: "Objetivos" },
  { id: "estrategia", label: "Estrategia" },
  { id: "ejecucion", label: "Ejecución" },
  { id: "resultados", label: "Resultados" },
];

export function AnimatedBeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const refs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-4xl px-4 py-12">
      <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:gap-4">
        {NODES.map((node, i) => (
          <motion.div
            key={node.id}
            ref={refs[i]}
            className="relative z-10 flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="flex size-14 items-center justify-center rounded-full border border-white/20 bg-zinc-900/90 shadow-inner backdrop-blur-sm sm:size-16">
              <span className="text-zinc-400 text-xs font-medium sm:text-sm">
                {i + 1}
              </span>
            </div>
            <span className="text-center text-zinc-400 text-xs font-medium sm:text-sm">
              {node.label}
            </span>
          </motion.div>
        ))}
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={refs[0]}
        toRef={refs[1]}
        curvature={-40}
        pathColor="#52525b"
        pathOpacity={0.4}
        pathWidth={2}
        gradientStartColor="#a1a1aa"
        gradientStopColor="#fafafa"
        duration={3}
        delay={0.5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={refs[1]}
        toRef={refs[2]}
        curvature={-40}
        pathColor="#52525b"
        pathOpacity={0.4}
        pathWidth={2}
        gradientStartColor="#a1a1aa"
        gradientStopColor="#fafafa"
        duration={3}
        delay={1}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={refs[2]}
        toRef={refs[3]}
        curvature={-40}
        pathColor="#52525b"
        pathOpacity={0.4}
        pathWidth={2}
        gradientStartColor="#a1a1aa"
        gradientStopColor="#fafafa"
        duration={3}
        delay={1.5}
      />
    </div>
  );
}
