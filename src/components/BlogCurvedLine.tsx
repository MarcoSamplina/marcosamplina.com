"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

/**
 * Línea curva decorativa que se dibuja al entrar en viewport (scroll).
 * Rompe el texto y da ritmo visual al artículo.
 */
export function BlogCurvedLine() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  // Path: curva suave en S (izquierda → derecha)
  const pathD =
    "M 0 24 C 80 8, 120 8, 200 24 C 280 40, 320 40, 400 24";

  return (
    <div
      ref={ref}
      className="my-12 flex justify-center px-4"
      aria-hidden
    >
      <svg
        width="100%"
        height="48"
        viewBox="0 0 400 48"
        fill="none"
        className="max-w-md"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          d={pathD}
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: inView ? 1 : 0 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </svg>
    </div>
  );
}
