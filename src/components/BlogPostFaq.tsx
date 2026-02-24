"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import type { BlogPostFAQ } from "@/lib/blog";

interface BlogPostFaqProps {
  faqs: BlogPostFAQ[];
  title?: string;
}

export function BlogPostFaq({ faqs, title = "Preguntas frecuentes sobre SEO en 2026" }: BlogPostFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mt-14" aria-label="Preguntas frecuentes">
      <h2 className="mb-6 text-xl font-semibold text-white">{title}</h2>
      <dl className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-colors hover:border-white/15 hover:bg-white/[0.06]"
            >
              <dt>
                <h3 className="text-base font-semibold text-white">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-3 px-6 py-4 text-left font-semibold text-white"
                    aria-expanded={isOpen}
                    aria-controls={`blog-faq-answer-${i}`}
                    id={`blog-faq-question-${i}`}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-zinc-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                </h3>
              </dt>
              <dd className="border-t border-white/10" aria-hidden={!isOpen}>
                <motion.div
                  id={`blog-faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`blog-faq-question-${i}`}
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-4 pt-1 text-sm leading-relaxed text-zinc-400">
                    {faq.answer}
                  </p>
                </motion.div>
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
