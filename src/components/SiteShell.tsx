"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Linkedin, Calendar, Globe, Wrench } from "lucide-react";
import { Logo } from "@/components/Logo";

const LightRays = dynamic(
  () => import("@/components/LightRays.jsx").then((m) => m.default),
  { ssr: false }
);

const TOOLS_URL = "https://tools.marcosamplina.com";
const FRAMER_URL = "https://marco-samplina.framer.website/";
const CALENDLY_URL = "https://calendly.com/marco-samplina/30min";
const LINKEDIN_URL = "https://www.linkedin.com/in/marco-samplina-cordova";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-zinc-950">
      {/* Fondo full-bleed: LightRays + overlay (desde arriba, detrás de nav y todo) */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <LightRays
          raysOrigin="top-center"
          raysColor="#e8e8e8"
          raysSpeed={0.8}
          lightSpread={1.2}
          rayLength={2}
          pulsating={false}
          fadeDistance={1}
          followMouse={true}
          mouseInfluence={0.12}
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-zinc-950/70" aria-hidden />
      </div>

      {/* Nav (mismo estilo que tools) */}
      <header className="relative z-20 flex w-full justify-center px-4 pt-6">
        <nav className="flex w-full max-w-4xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
          <Logo href="/" />
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href={TOOLS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-shiny rounded-lg px-3 py-2 text-sm font-medium text-zinc-400"
            >
              Herramientas
            </Link>
            <Link
              href={FRAMER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-shiny rounded-lg px-3 py-2 text-sm font-medium text-zinc-400"
            >
              Portafolio
            </Link>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-shiny rounded-lg px-3 py-2 text-sm font-medium text-zinc-400"
            >
              Contacto
            </a>
          </div>
        </nav>
      </header>

      {/* Contenido */}
      <main className="relative z-10 flex flex-1 flex-col">{children}</main>

      {/* Footer — siempre oscuro */}
      <footer className="relative z-10 flex w-full justify-center border-t border-white/10 bg-white/5 px-4 py-4 backdrop-blur-md">
        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <Link
              href="/"
              className="text-sm font-medium text-zinc-400 hover:text-white"
            >
              MASC
            </Link>
            <span className="text-xs text-zinc-500">
              marcosamplina.com
            </span>
          </div>
          <div className="flex items-center justify-center gap-6 sm:justify-end">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-white"
              aria-label="Reservar cita en Calendly"
            >
              <Calendar className="size-5" />
            </a>
            <a
              href={FRAMER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-white"
              aria-label="Portafolio"
            >
              <Globe className="size-5" />
            </a>
            <a
              href={TOOLS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-white"
              aria-label="Herramientas SEO"
            >
              <Wrench className="size-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
