"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";
import { Timeline } from "@/components/ui/timeline";
import type { TimelineEntry } from "@/components/ui/timeline";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { openCalendlyPopup, preloadCalendly } from "@/lib/calendly";

const SITE_URL = "https://marcosamplina.com";
const CALENDLY_URL = "https://calendly.com/marco-samplina/30min";

const TIMELINE_DATA: TimelineEntry[] = [
  {
    title: "2018-2021 · Universidad Peruana de Ciencias Aplicadas",
    content: (
      <div>
        <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
          <strong className="text-white">Bachiller en Marketing</strong> con mención en Data Science. Business, análisis de datos y fundamentos de marketing.
        </p>
      </div>
    ),
  },
  {
    title: "2018-2023 · Isopetrol Lubricants",
    content: (
      <div>
        <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-2">
          <strong className="text-white">Asistente de marketing</strong> (prácticas, 2018-2019) y después <strong className="text-white">Analista de marketing</strong> (2019-2023). Lima, Perú. Análisis de mercados, planificación y ejecución.
        </p>
      </div>
    ),
  },
  {
    title: "2023-2024 · Universidad Europea",
    content: (
      <div>
        <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
          <strong className="text-white">Máster en Marketing Digital y Big Data.</strong> SEO, Google Ads y análisis de datos aplicados al marketing.
        </p>
      </div>
    ),
  },
  {
    title: "2024-2026 · Worksible",
    content: (
      <div>
        <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
          <strong className="text-white">Growth Marketing & Paid media specialist.</strong> Valencia, híbrido. Programa Lanzadera. n8n, Notion, campañas de pago y automatización.
        </p>
      </div>
    ),
  },
  {
    title: "2026-actualidad · UNANIME",
    content: (
      <div>
        <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
          <strong className="text-white">SEO Specialist.</strong> Valencia. Búsqueda orgánica, optimización y visibilidad en buscadores.
        </p>
      </div>
    ),
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${SITE_URL}/sobre-mi#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Sobre mí", item: `${SITE_URL}/sobre-mi` },
  ],
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/sobre-mi#profilepage`,
  url: `${SITE_URL}/sobre-mi`,
  name: "Sobre mí: Marco Samplina — trayectoria y experiencia",
  description:
    "Trayectoria, formación y experiencia de Marco Samplina. Growth Marketing Specialist en SEO, SEM y desarrollo de herramientas. De Perú a Valencia.",
  mainEntity: { "@id": "https://marcosamplina.com/#person" },
  breadcrumb: { "@id": `${SITE_URL}/sobre-mi#breadcrumb` },
};

export default function SobreMiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <section className="relative z-10 min-h-screen px-4 pt-6 pb-20" aria-label="Sobre mí">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-zinc-500">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Inicio
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-white" aria-current="page">
                Sobre mí
              </li>
            </ol>
          </nav>

          {/* Intro con Spotlight y más texto */}
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 md:p-10 overflow-hidden">
            <Spotlight
              className="-top-20 left-1/2 -translate-x-1/2 w-[120%] opacity-40"
              fill="rgba(255,255,255,0.06)"
            />
            <div className="relative z-10">
              <motion.h1
                className="mb-4 text-3xl font-semibold text-white md:text-4xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                Sobre mí
              </motion.h1>
              <motion.p
                className="mb-4 max-w-2xl text-zinc-400 text-sm md:text-base leading-relaxed"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 }}
              >
                De Perú a Valencia: formación en marketing y data, experiencia en agencia, industria y startups, y ahora enfocado en SEO y growth.
              </motion.p>
              <motion.p
                className="mb-4 max-w-2xl text-zinc-400 text-sm md:text-base leading-relaxed"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.14 }}
              >
                Me gusta bajar las cosas a tierra: objetivos claros, métricas que importan y planes que se ejecutan. He pasado por análisis de mercados, campañas de pago, automatización con no-code y, desde hace un tiempo, por el orgánico y la visibilidad en buscadores.
              </motion.p>
              <motion.p
                className="max-w-2xl text-zinc-500 text-sm md:text-base leading-relaxed"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Si quieres revisar dónde estás con tu marketing y hacia dónde quieres ir, podemos hacerlo en una sesión de 30 minutos sin compromiso.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-clip mt-16">
          <Timeline
            data={TIMELINE_DATA}
            title="Trayectoria"
            description="Algunos hitos de mi camino en marketing digital y desarrollo."
          />
        </div>

        {/* CTA final */}
        <div className="mx-auto max-w-4xl px-4 pt-16 pb-8">
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="mb-2 text-xl font-semibold text-white sm:text-2xl">
              ¿Hablamos?
            </h2>
            <p className="mb-6 max-w-md mx-auto text-zinc-400 text-sm sm:text-base">
              Una llamada de 30 minutos para revisar tu situación y objetivos. Sin compromiso.
            </p>
            <HoverBorderGradient
              as="a"
              href={CALENDLY_URL}
              onClick={openCalendlyPopup}
              onMouseEnter={preloadCalendly}
              containerClassName="bg-white/5 dark:bg-white/10 border-white/20 inline-block"
              className="relative z-20 bg-zinc-900 px-8 py-3.5 text-sm font-medium text-white rounded-full"
            >
              Reservar sesión gratis
            </HoverBorderGradient>
          </motion.div>
        </div>
      </section>
    </>
  );
}
