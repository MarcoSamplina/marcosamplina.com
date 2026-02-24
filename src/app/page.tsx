"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { Linkedin, Calendar, Globe, Wrench, Search, Megaphone, Zap, Target } from "lucide-react";
import { openCalendlyPopup, preloadCalendly } from "@/lib/calendly";

const StarBorder = dynamic(
  () => import("@/components/StarBorder.jsx").then((m) => m.default),
  { ssr: false }
);

const TOOLS_URL = "https://tools.marcosamplina.com";
const FRAMER_URL = "https://marco-samplina.framer.website/";
const CALENDLY_URL = "https://calendly.com/marco-samplina/30min";
const LINKEDIN_URL = "https://www.linkedin.com/in/marco-samplina-cordova";

const HERO_LINKS = [
  { href: LINKEDIN_URL, label: "LinkedIn", icon: Linkedin },
  { href: CALENDLY_URL, label: "Calendly", icon: Calendar },
  { href: FRAMER_URL, label: "Portafolio", icon: Globe },
  { href: TOOLS_URL, label: "Tools", icon: Wrench },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const SERVICIOS = [
  {
    icon: Search,
    title: "SEO",
    description: "Posicionamiento orgánico y visibilidad en buscadores para que te encuentren cuando buscan.",
  },
  {
    icon: Megaphone,
    title: "SEM y paid",
    description: "Campañas en Google, Meta y LinkedIn para captar tráfico y leads de forma medible.",
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Flujos, emails y procesos que ahorran tiempo y escalan sin multiplicar el esfuerzo.",
  },
  {
    icon: Target,
    title: "Estrategia",
    description: "Objetivos claros, métricas y un plan que conecta marketing con resultados de negocio.",
  },
];

const FAQS = [
  {
    question: "¿Qué incluye una sesión de consultoría?",
    answer:
      "Una llamada de unos 30 minutos para revisar tu situación actual, objetivos y dónde puedes mejorar con marketing digital. Sin compromiso: te doy ideas concretas y tú decides si quieres seguir.",
  },
  {
    question: "¿Cuánto tiempo se tarda en ver resultados?",
    answer:
      "Depende del canal y el objetivo. En SEO suele haber avances visibles en unos meses; en campañas de pago (Meta, Google) se ven datos desde el primer día. En la sesión concretamos plazos según tu caso.",
  },
  {
    question: "¿Trabajas con empresas de cualquier tamaño?",
    answer:
      "Sí: startups, pymes y proyectos propios. Adapto el enfoque al presupuesto y los recursos que tengas. Lo importante es tener claridad en qué quieres lograr.",
  },
  {
    question: "¿Ofreces herramientas o recursos gratuitos?",
    answer:
      "Sí. En tools.marcosamplina.com tienes herramientas SEO y de marketing gratis. También puedes reservar una sesión sin coste para orientación.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero: ocupa todo el viewport; la siguiente sección solo se ve al hacer scroll */}
      <motion.section
        className="relative z-10 flex min-h-[calc(100dvh-6rem)] flex-col items-center justify-center px-6 py-12 text-center"
        aria-label="Presentación principal"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Badge */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm"
          style={{ letterSpacing: "0.2em" }}
        >
          Digital Marketing Specialist
        </motion.p>

        {/* Lettering inspiracional */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl"
        >
          Build something that
          <br />
          outlasts you.
        </motion.h1>

        {/* CTA principal — StarBorder color plata premium */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-14"
        >
          <StarBorder
            as="a"
            href={CALENDLY_URL}
            onClick={openCalendlyPopup}
            onMouseEnter={preloadCalendly}
            color="#d4d4d4"
            speed="8s"
            thickness={1}
            className="cta-premium"
          >
            Boost your marketing
          </StarBorder>
        </motion.div>

        {/* Logos con links — entrada escalonada por icono */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-10"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
        >
          {HERO_LINKS.map(({ href, label, icon: Icon }) => {
            const isCalendly = href === CALENDLY_URL;
            return (
            <motion.a
              key={href}
              href={href}
              target={isCalendly ? undefined : "_blank"}
              rel="noopener noreferrer"
              onClick={isCalendly ? openCalendlyPopup : undefined}
              onMouseEnter={isCalendly ? preloadCalendly : undefined}
              variants={fadeUp}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-center gap-2 text-white/80 transition-colors hover:text-white"
              aria-label={label}
            >
              <span className="flex size-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10 sm:size-14">
                <Icon className="size-6 sm:size-7" />
              </span>
              <span className="text-xs font-medium uppercase tracking-wider opacity-90">
                {label}
              </span>
            </motion.a>
          );
          })}
        </motion.div>
      </motion.section>

      {/* Servicios — bento grid (estilo moderno); SEO: section + h2 + h3 + p */}
      <motion.section
        className="relative z-10 px-6 py-16 sm:py-20"
        aria-label="Servicios de marketing digital"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
      >
        <div className="mx-auto max-w-5xl">
          <motion.h2
            variants={fadeUp}
            className="mb-12 text-center text-2xl font-semibold text-white sm:text-3xl"
          >
            Qué hago
          </motion.h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {/* Bento: primera celda alta (2 filas), resto apiladas a la derecha */}
            {SERVICIOS.map(({ icon: Icon, title, description }, i) => (
              <motion.article
                key={title}
                variants={fadeUp}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] sm:p-7 ${
                  i === 0
                    ? "sm:row-span-2 sm:flex sm:flex-col sm:justify-between sm:ring-1 sm:ring-white/15 sm:hover:ring-white/25"
                    : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                <span className="relative mb-4 inline-flex size-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white shadow-inner sm:size-14">
                  <Icon className="size-6 sm:size-7" />
                </span>
                <h3 className="relative mb-2 font-semibold text-white sm:text-lg">{title}</h3>
                <p className="relative text-sm leading-relaxed text-zinc-400">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experiencia — trayectoria (sin tono de venta); tarjeta bento para coherencia */}
      <motion.section
        className="relative z-10 px-6 py-16 sm:py-20"
        aria-label="Experiencia profesional"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
      >
        <div className="mx-auto max-w-2xl">
          <motion.h2
            variants={fadeUp}
            className="mb-10 text-center text-2xl font-semibold text-white sm:text-3xl"
          >
            Mi experiencia
          </motion.h2>
          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-colors hover:border-white/15 hover:bg-white/[0.06] sm:p-10"
          >
            <div className="space-y-6 text-center">
              <p className="text-zinc-300 leading-relaxed">
                Llevo años ayudando a negocios y equipos a crecer con marketing digital: desde SEO y
                campañas de pago hasta automatización y estrategia. Me gusta bajar las cosas a tierra,
                con métricas claras y sin humo.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                He trabajado con startups, pymes y proyectos propios. Si quieres revisar dónde estás y
                hacia dónde quieres ir con tu marketing, podemos hacerlo en una sesión sin compromiso.
              </p>
            </div>
          </motion.article>
        </div>
      </motion.section>

      {/* FAQ — Schema.org FAQPage para rich results en buscadores */}
      <motion.section
        className="relative z-10 px-6 py-16 sm:py-20"
        aria-label="Preguntas frecuentes"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
      >
        <div className="mx-auto max-w-2xl">
          <motion.h2
            variants={fadeUp}
            className="mb-10 text-center text-2xl font-semibold text-white sm:text-3xl"
          >
            Preguntas frecuentes
          </motion.h2>
          <dl className="space-y-6">
            {FAQS.map(({ question, answer }, i) => (
              <motion.div
                key={question}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-white/15 hover:bg-white/[0.06]"
              >
                <dt className="mb-2 font-semibold text-white">{question}</dt>
                <dd className="text-sm leading-relaxed text-zinc-400">{answer}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </motion.section>

      {/* Schema.org FAQPage (JSON-LD) para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map(({ question, answer }) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: {
                "@type": "Answer",
                text: answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
