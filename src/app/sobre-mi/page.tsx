"use client";

import { Timeline } from "@/components/ui/timeline";
import type { TimelineEntry } from "@/components/ui/timeline";

const TIMELINE_DATA: TimelineEntry[] = [
  {
    title: "Formación",
    content: (
      <div>
        <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
          Estudios en [área]. Formación continua en marketing digital, SEO y growth.
        </p>
      </div>
    ),
  },
  {
    title: "Primeros años",
    content: (
      <div>
        <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-4">
          Inicios en [sector/empresa]. Enfoque en [SEO / paid / estrategia].
        </p>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Aquí puedes detallar proyectos, logros o aprendizajes clave.
        </p>
      </div>
    ),
  },
  {
    title: "Hoy",
    content: (
      <div>
        <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
          Growth Marketing Specialist. Consultoría, sesiones 1:1 y desarrollo de herramientas
          (como esta web y tools.marcosamplina.com). Me gusta unir estrategia, datos y ejecución.
        </p>
      </div>
    ),
  },
];

export default function SobreMiPage() {
  return (
    <section className="relative z-10 min-h-screen px-4 pt-6 pb-20" aria-label="Sobre mí">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-3xl font-semibold text-white md:text-4xl">
          Sobre mí
        </h1>
        <p className="mb-12 max-w-2xl text-zinc-400 text-sm md:text-base leading-relaxed">
          Trayectoria, estudios y qué hago ahora. Puedes editar cada bloque de la timeline más abajo.
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
  );
}
