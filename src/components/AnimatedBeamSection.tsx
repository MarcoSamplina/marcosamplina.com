"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const NODES = [
  { id: "objetivos", label: "Objetivos" },
  { id: "estrategia", label: "Estrategia" },
  { id: "ejecucion", label: "Ejecución" },
  { id: "resultados", label: "Resultados" },
];

const smoothEase = [0.22, 1, 0.36, 1] as const; // easeOutExpo suave

export function AnimatedBeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(containerRef, { once: true, amount: 0.2 });
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
            initial={{ opacity: 0, y: 20 }}
            animate={
              sectionInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{
              duration: 0.7,
              delay: 0.15 + i * 0.12,
              ease: smoothEase,
            }}
          >
            <motion.div
              className="flex size-14 items-center justify-center rounded-full border border-white/20 bg-zinc-900/90 shadow-inner backdrop-blur-sm sm:size-16"
              initial={{ scale: 0.9 }}
              animate={sectionInView ? { scale: 1 } : { scale: 0.9 }}
              transition={{
                duration: 0.5,
                delay: 0.25 + i * 0.12,
                ease: smoothEase,
              }}
            >
              <span className="text-zinc-400 text-xs font-medium sm:text-sm">
                {i + 1}
              </span>
            </motion.div>
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
        duration={3.5}
        delay={0.6}
        visible={sectionInView}
        drawDuration={1}
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
        duration={3.5}
        delay={0.9}
        visible={sectionInView}
        drawDuration={1}
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
        duration={3.5}
        delay={1.2}
        visible={sectionInView}
        drawDuration={1}
      />
    </div>
  );
}
