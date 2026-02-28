"use client";

import Link from "next/link";
import { Timeline } from "@/components/ui/timeline";
import type { TimelineEntry } from "@/components/ui/timeline";

const SITE_URL = "https://marcosamplina.com";

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

export default function SobreMiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
          <h1 className="mb-4 text-3xl font-semibold text-white md:text-4xl">
            Sobre mí
          </h1>
        <p className="mb-12 max-w-2xl text-zinc-400 text-sm md:text-base leading-relaxed">
          De Perú a Valencia: formación en marketing y data, experiencia en agencia, industria y startups, y ahora enfocado en SEO y growth.
        </p>
      </div>
      <div className="relative w-full overflow-clip">
        <Timeline
          data={TIMELINE_DATA}
          title="Trayectoria"
          description="Algunos hitos de mi camino en marketing digital y desarrollo."
        />
      </div>
    </section>
    </>
  );
}
