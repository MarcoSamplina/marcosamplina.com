"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export type StickyScrollVariant = "default" | "minimal";

export const StickyScroll = ({
  content,
  contentClassName,
  className,
  variant = "default",
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
  className?: string;
  variant?: StickyScrollVariant;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  /** Scroll de la página respecto a esta sección: el panel se actualiza al pasar por la sección, sin depender del hover. */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0f172a",
    "#000000",
    "#171717",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  const isMinimal = variant === "minimal";

  return (
    <motion.div
      animate={
        isMinimal
          ? undefined
          : {
              backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }
      }
      className={cn(
        "relative flex min-h-[20rem] justify-center gap-8 rounded-2xl p-6 sm:p-8",
        !isMinimal && "rounded-md",
        isMinimal && "border border-white/10 bg-white/[0.02]",
        className
      )}
      ref={ref}
    >
      <div className="relative flex flex-1 items-start px-2">
        <div className="max-w-xl w-full">
          {content.map((item, index) => (
            <div key={`${item.title}-${index}`} className="my-16 first:mt-4">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.35,
                }}
                className={cn(
                  "text-xl font-semibold sm:text-2xl",
                  isMinimal ? "text-white" : "text-slate-100"
                )}
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.35,
                }}
                className={cn(
                  "mt-4 max-w-sm text-sm leading-relaxed sm:text-base",
                  isMinimal ? "text-zinc-400" : "text-slate-300"
                )}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-24" />
        </div>
      </div>
      <div
        style={isMinimal ? undefined : { background: backgroundGradient }}
        className={cn(
          "sticky top-6 hidden h-56 w-72 shrink-0 overflow-hidden rounded-2xl lg:block",
          isMinimal
            ? "border border-white/10 bg-white/5 backdrop-blur-sm"
            : "rounded-md bg-white",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </motion.div>
  );
};
