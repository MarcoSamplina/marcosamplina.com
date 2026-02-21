"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { motion } from "motion/react";
import { Linkedin, Calendar, Globe, Wrench, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";

const LightRays = dynamic(
  () => import("@/components/LightRays.jsx").then((m) => m.default),
  { ssr: false }
);

const TOOLS_URL = "https://tools.marcosamplina.com";
const FRAMER_URL = "https://marco-samplina.framer.website/";
const CALENDLY_URL = "https://calendly.com/marco-samplina/30min";
const LINKEDIN_URL = "https://www.linkedin.com/in/marco-samplina-cordova";

const navLinkClass =
  "nav-link-shiny rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 whitespace-nowrap";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

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

      {/* Nav (responsive: hamburger en móvil, links en desktop) — animación de entrada */}
      <motion.header
        className="relative z-20 flex w-full justify-center px-4 pt-6"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <nav className="flex w-full max-w-4xl items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md sm:px-5">
          <Logo href="/" />
          {/* Links visibles solo desde md */}
          <div className="hidden items-center gap-4 md:flex md:gap-6">
            <Link
              href={TOOLS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={navLinkClass}
            >
              Herramientas
            </Link>
            <Link
              href={FRAMER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={navLinkClass}
            >
              Portafolio
            </Link>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={navLinkClass}
            >
              Contacto
            </a>
          </div>
          {/* Botón menú móvil */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="flex size-10 shrink-0 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white/10 hover:text-white md:hidden"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
        {/* Panel móvil: overlay + links apilados */}
        <div
          className="fixed inset-0 z-10 md:hidden"
          aria-hidden={!mobileMenuOpen}
        >
          <div
            className={`absolute inset-0 bg-zinc-950/80 backdrop-blur-sm transition-opacity duration-200 ${mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
            onClick={closeMobileMenu}
          />
          <div
            className={`absolute right-0 top-0 flex h-full w-full max-w-xs flex-col border-l border-white/10 bg-zinc-950/95 px-6 pt-20 shadow-xl backdrop-blur-md transition-transform duration-200 ease-out md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex flex-col gap-1">
              <Link
                href={TOOLS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className={`${navLinkClass} block py-3 text-base`}
              >
                Herramientas
              </Link>
              <Link
                href={FRAMER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className={`${navLinkClass} block py-3 text-base`}
              >
                Portafolio
              </Link>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className={`${navLinkClass} block py-3 text-base`}
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </motion.header>

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
