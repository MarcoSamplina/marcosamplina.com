"use client";

import { cn } from "@/lib/utils";

const panelClass =
  "rounded-xl bg-black/90 border border-white/10 overflow-hidden flex flex-col shadow-lg";

/** 1. Objetivos — lista tipo OKR / metas */
export function StepObjetivos({ className }: { className?: string }) {
  const items = [
    { label: "Tráfico orgánico", color: "bg-emerald-500", done: true },
    { label: "Leads cualificados", color: "bg-amber-500", done: true },
    { label: "KPIs definidos", color: "bg-blue-500", done: false },
  ];
  return (
    <div className={cn(panelClass, "p-3 gap-2.5 justify-center", className)}>
      <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
        Metas
      </span>
      {items.map(({ label, color, done }) => (
        <div
          key={label}
          className="flex items-center gap-2.5 text-zinc-300 text-xs"
        >
          <span
            className={cn(
              "flex size-4 shrink-0 items-center justify-center rounded-sm border border-white/20",
              done ? color : "bg-white/5"
            )}
          >
            {done && (
              <svg className="size-2.5 text-black" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 6l3 3 5-6" />
              </svg>
            )}
          </span>
          <span className="truncate">{label}</span>
        </div>
      ))}
    </div>
  );
}

/** 2. Estrategia — mini SERP */
export function StepEstrategia({ className }: { className?: string }) {
  return (
    <div className={cn(panelClass, "p-2.5", className)}>
      <div className="flex items-center gap-2 rounded-md bg-white/5 border border-white/10 px-2.5 py-2 mb-2.5">
        <span className="text-zinc-500">🔍</span>
        <span className="text-zinc-500 text-[11px] truncate flex-1">
          plan de acción SEO
        </span>
      </div>
      <div className="space-y-2">
        <div className="space-y-0.5">
          <div className="text-[10px] text-emerald-400/90">tu-dominio.com › guía</div>
          <div className="text-[11px] font-medium text-white leading-tight">
            Cómo priorizar y ejecutar
          </div>
          <div className="text-[10px] text-zinc-500 leading-tight line-clamp-2">
            Objetivos claros, plan priorizado y métricas desde el día uno.
          </div>
        </div>
        <div className="h-px bg-white/10" />
        <div className="space-y-0.5 opacity-70">
          <div className="h-2 w-[70%] rounded bg-white/10" />
          <div className="h-2 w-[90%] rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
}

/** 3. Ejecución — gráfica de barras / tendencia */
export function StepEjecucion({ className }: { className?: string }) {
  const bars = [12, 28, 45, 62, 88];
  return (
    <div className={cn(panelClass, "p-2.5", className)}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
          Métricas
        </span>
        <span className="text-[10px] text-emerald-400/90">↑ tendencia</span>
      </div>
      <div className="flex items-end justify-between gap-1 h-16">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t min-w-0 flex flex-col justify-end"
          >
            <div
              className={cn(
                "w-full rounded-t transition-all",
                i === bars.length - 1
                  ? "bg-emerald-500/60"
                  : "bg-white/15"
              )}
              style={{ height: `${h}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-1 px-0.5">
        <span className="text-[9px] text-zinc-600">M1</span>
        <span className="text-[9px] text-zinc-600">M5</span>
      </div>
    </div>
  );
}

/** 4. Resultados — KPI destacado */
export function StepResultados({ className }: { className?: string }) {
  return (
    <div className={cn(panelClass, "p-3", className)}>
      <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500 mb-2 block">
        Resultado
      </span>
      <div className="rounded-lg bg-white/5 border border-white/10 p-3 text-center flex-1 flex flex-col justify-center">
        <div className="text-2xl font-bold tabular-nums text-emerald-400">
          +127%
        </div>
        <div className="text-[10px] text-zinc-500 mt-0.5">vs. mes anterior</div>
      </div>
      <div className="flex gap-1 mt-2">
        <div className="flex-1 h-1.5 rounded-full bg-emerald-500/50" />
        <div className="flex-1 h-1.5 rounded-full bg-white/10" />
      </div>
    </div>
  );
}
