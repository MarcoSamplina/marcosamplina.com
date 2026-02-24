"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { motion } from "motion/react";
import { Linkedin, Calendar, Globe, Wrench, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { openCalendlyPopup, preloadCalendly } from "@/lib/calendly";

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
  const [menuEverOpened, setMenuEverOpened] = useState(false);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  const openMobileMenu = useCallback(() => {
    setMenuEverOpened(true);
    setMobileMenuOpen(true);
  }, []);

  const [deferBackground, setDeferBackground] = useState(false);
  useEffect(() => {
    let cancelled = false;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!cancelled) setDeferBackground(true);
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(id);
    };
  }, []);

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
      {/* Fondo: LightRays tras primer paint para no competir con LCP (Core Web Vitals) */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        {deferBackground && <LightRays
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
        />}
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
            <Link href="/sobre-mi" className={navLinkClass}>
              Sobre mí
            </Link>
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
            <Link href="/blog" className={navLinkClass}>
              Blog
            </Link>
            <a
              href={CALENDLY_URL}
              onClick={openCalendlyPopup}
              onMouseEnter={preloadCalendly}
              className={navLinkClass}
            >
              Contacto
            </a>
          </div>
          {/* Botón menú móvil */}
          <button
            type="button"
            onClick={() => (mobileMenuOpen ? closeMobileMenu() : openMobileMenu())}
            className="flex size-10 shrink-0 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white/10 hover:text-white md:hidden"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
        {/* Menú móvil: solo en DOM cuando el usuario ha abierto el menú al menos una vez (evita flash al cargar) */}
        {menuEverOpened && (
        <div
          className={`fixed inset-0 z-10 md:hidden ${!mobileMenuOpen ? "pointer-events-none" : ""}`}
          aria-hidden={!mobileMenuOpen}
        >
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 z-20 flex flex-col rounded-t-2xl border-t border-white/10 bg-zinc-900/95 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl md:hidden"
            initial={{ y: "100%" }}
            animate={{ y: mobileMenuOpen ? 0 : "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
          >
            {/* Handle tipo iOS */}
            <div className="flex justify-center pt-3 pb-1">
              <span className="h-1 w-10 rounded-full bg-white/30" aria-hidden />
            </div>
            <nav className="px-4 pb-8 pt-2" aria-label="Menú principal">
              <div className="overflow-hidden rounded-xl bg-white/5">
                <Link
                  href="/sobre-mi"
                  onClick={closeMobileMenu}
                  className="nav-link-shiny block border-b border-white/10 px-4 py-3.5 text-left text-base font-medium text-zinc-300 first:rounded-t-xl hover:bg-white/5 hover:text-white"
                >
                  Sobre mí
                </Link>
                <Link
                  href={TOOLS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="nav-link-shiny block border-b border-white/10 px-4 py-3.5 text-left text-base font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
                >
                  Herramientas
                </Link>
                <Link
                  href={FRAMER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="nav-link-shiny block border-b border-white/10 px-4 py-3.5 text-left text-base font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
                >
                  Portafolio
                </Link>
                <Link
                  href="/blog"
                  onClick={closeMobileMenu}
                  className="nav-link-shiny block border-b border-white/10 px-4 py-3.5 text-left text-base font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
                >
                  Blog
                </Link>
                <a
                  href={CALENDLY_URL}
                  onClick={(e) => {
                    openCalendlyPopup(e);
                    closeMobileMenu();
                  }}
                  onMouseEnter={preloadCalendly}
                  className="nav-link-shiny block px-4 py-3.5 text-left text-base font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
                >
                  Contacto
                </a>
              </div>
            </nav>
          </motion.div>
        </div>
        )}
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
              onClick={openCalendlyPopup}
              onMouseEnter={preloadCalendly}
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
