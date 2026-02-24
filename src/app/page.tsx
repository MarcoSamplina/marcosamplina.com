"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { motion, useReducedMotion, MotionConfig } from "motion/react";
import { Linkedin, Calendar, Globe, Wrench, Search, Megaphone, Zap, Target, ChevronDown } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

const AnimatedBeamSection = dynamic(
  () => import("@/components/AnimatedBeamSection").then((m) => m.AnimatedBeamSection),
  {
    ssr: false,
    loading: () => <div className="min-h-[280px] w-full" aria-hidden />,
  }
);
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
    description: "Que te encuentren cuando buscan: posicionamiento orgánico, contenido y técnico para crecer sin depender solo de paid.",
  },
  {
    icon: Megaphone,
    title: "SEM y paid",
    description: "Campañas en Google, Meta y LinkedIn con métricas claras. Tráfico y leads desde el día uno, sin disparar a ciegas.",
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Flujos, emails y procesos que escalan sin multiplicar horas. Menos trabajo manual, más resultado.",
  },
  {
    icon: Target,
    title: "Estrategia",
    description: "Objetivos definidos, KPIs y un plan que une marketing con resultados de negocio. Sin humo.",
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
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion={shouldReduceMotion ? "user" : "always"}>
      {/* Hero: viewport completo + Spotlight; siguiente sección al hacer scroll */}
      <motion.section
        className="relative z-10 flex min-h-[calc(100dvh-6rem)] flex-col items-center justify-center overflow-hidden px-6 py-12 text-center"
        aria-label="Presentación principal"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Spotlight className="-top-40 left-0 md:left-2/3" fill="rgba(255,255,255,0.07)" />
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
          className="mb-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl"
        >
          Build something that
          <br />
          outlasts you.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8 max-w-lg text-zinc-400 text-sm sm:text-base"
        >
          Growth marketing con foco en resultados: SEO, paid y estrategia. Herramientas gratis y sesión de 30 min sin compromiso.
        </motion.p>

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
        {/* Indicador de scroll */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-500"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="size-4" aria-hidden />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Trust strip: señales rápidas (best practice landing) */}
      <motion.section
        className="relative z-10 px-6 py-8 [content-visibility:auto] [contain-intrinsic-size:auto_80px]"
        aria-label="Confianza y recursos"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
            <span className="text-zinc-500 text-sm">Sesión de consultoría sin compromiso</span>
            <span className="text-zinc-600" aria-hidden>·</span>
            <span className="text-zinc-500 text-sm">Herramientas SEO gratuitas</span>
            <span className="text-zinc-600" aria-hidden>·</span>
            <span className="text-zinc-500 text-sm">Guías y blog actualizado</span>
          </div>
        </div>
      </motion.section>

      {/* Servicios — grid uniforme; content-visibility para Core Web Vitals */}
      <motion.section
        className="relative z-10 px-6 py-16 sm:py-20 [content-visibility:auto] [contain-intrinsic-size:auto_600px]"
        aria-label="Servicios de marketing digital"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
      >
        <div className="mx-auto max-w-4xl">
          <motion.h2
            variants={fadeUp}
            className="mb-12 text-center text-2xl font-semibold text-white sm:text-3xl"
          >
            Qué hago
          </motion.h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICIOS.map(({ icon: Icon, title, description }) => (
              <motion.article
                key={title}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-white/15 hover:bg-white/[0.08]"
              >
                <span className="mb-4 flex size-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white">
                  <Icon className="size-5" />
                </span>
                <h3 className="mb-2 font-semibold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Flujo con Animated Beam — lazy loaded; content-visibility para CWV */}
      <motion.section
        className="relative z-10 px-6 py-16 sm:py-20 [content-visibility:auto] [contain-intrinsic-size:auto_400px]"
        aria-label="Flujo de trabajo"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
      >
        <div className="mx-auto max-w-4xl">
          <motion.h2
            variants={fadeUp}
            className="mb-4 text-center text-2xl font-semibold text-white sm:text-3xl"
          >
            De la estrategia al resultado
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mb-12 text-center text-zinc-400 text-sm sm:text-base max-w-xl mx-auto"
          >
            Objetivos claros, plan de acción y ejecución medible. Así conectamos tu situación actual con los resultados que buscas, sin pasos de más.
          </motion.p>
          <motion.div variants={fadeUp}>
            <AnimatedBeamSection />
          </motion.div>
        </div>
      </motion.section>

      {/* Experiencia — content-visibility para CWV */}
      <motion.section
        className="relative z-10 px-6 py-16 sm:py-20 [content-visibility:auto] [contain-intrinsic-size:auto_400px]"
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
                He trabajado con startups, pymes y proyectos propios. Mi enfoque es práctico: definir
                qué mueve la aguja en tu caso, priorizar y ejecutar. Si quieres revisar dónde estás y
                hacia dónde quieres ir con tu marketing, podemos hacerlo en una sesión sin compromiso.
              </p>
            </div>
          </motion.article>
        </div>
      </motion.section>

      {/* FAQ — content-visibility para CWV */}
      <motion.section
        className="relative z-10 px-6 py-16 sm:py-20 [content-visibility:auto] [contain-intrinsic-size:auto_500px]"
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
          <dl className="space-y-3">
            {FAQS.map(({ question, answer }, i) => {
              const isOpen = faqOpenIndex === i;
              return (
                <motion.div
                  key={question}
                  variants={fadeUp}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-colors hover:border-white/15 hover:bg-white/[0.06]"
                >
                  <dt>
                    <button
                      type="button"
                      onClick={() => setFaqOpenIndex(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-3 px-6 py-4 text-left font-semibold text-white"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                      id={`faq-question-${i}`}
                    >
                      <span>{question}</span>
                      <ChevronDown
                        className={`size-5 shrink-0 text-zinc-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden
                      />
                    </button>
                  </dt>
                  <dd className="border-t border-white/10" aria-hidden={!isOpen}>
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-4 pt-1 text-sm leading-relaxed text-zinc-400">
                        {answer}
                      </p>
                    </motion.div>
                  </dd>
                </motion.div>
              );
            })}
          </dl>
        </div>
      </motion.section>

      {/* CTA final — mismo nivel que Framer: conversión al cerrar scroll */}
      <motion.section
        className="relative z-10 px-6 py-20 sm:py-24 [content-visibility:auto] [contain-intrinsic-size:auto_280px]"
        aria-label="Reservar sesión"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
      >
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            variants={fadeUp}
            className="mb-3 text-2xl font-semibold text-white sm:text-3xl"
          >
            ¿Listo para dar el siguiente paso?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mb-8 text-zinc-400 text-sm sm:text-base"
          >
            Una llamada de 30 minutos para revisar tu situación y objetivos. Sin compromiso.
          </motion.p>
          <motion.div variants={fadeUp}>
            <StarBorder
              as="a"
              href={CALENDLY_URL}
              onClick={openCalendlyPopup}
              onMouseEnter={preloadCalendly}
              color="#d4d4d4"
              speed="8s"
              thickness={1}
              className="cta-premium inline-block"
            >
              Reservar sesión gratis
            </StarBorder>
          </motion.div>
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
    </MotionConfig>
  );
}
