"use client";

import dynamic from "next/dynamic";
import { Linkedin, Calendar, Globe, Wrench } from "lucide-react";

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

export default function HomePage() {
  return (
    <>
      {/* Hero: todo en viewport (el fondo está en SiteShell y cubre toda la pantalla) */}
      <section
        className="relative z-10 flex min-h-[calc(100dvh-180px)] flex-col items-center justify-center px-6 py-12 text-center"
        aria-label="Presentación principal"
      >
        {/* Badge */}
        <p
          className="mb-6 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm"
          style={{ letterSpacing: "0.2em" }}
        >
          Digital Marketing Specialist
        </p>

        {/* Lettering inspiracional */}
        <h1 className="mb-8 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
          Build something that
          <br />
          outlasts you.
        </h1>

        {/* CTA principal — StarBorder color plata premium */}
        <StarBorder
          as="a"
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          color="#d4d4d4"
          speed="8s"
          thickness={1}
          className="cta-premium mb-14"
        >
          Boost your marketing
        </StarBorder>

        {/* Logos con links */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
          {HERO_LINKS.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-white/80 transition-colors hover:text-white"
              aria-label={label}
            >
              <span className="flex size-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10 sm:size-14">
                <Icon className="size-6 sm:size-7" />
              </span>
              <span className="text-xs font-medium uppercase tracking-wider opacity-90">
                {label}
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
