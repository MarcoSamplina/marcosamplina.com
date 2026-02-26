import type { Metadata } from "next";

const SITE_URL = "https://marcosamplina.com";

export const metadata: Metadata = {
  title: "Sobre mí: trayectoria y experiencia",
  alternates: { canonical: `${SITE_URL}/sobre-mi` },
  description:
    "Trayectoria, formación y experiencia de Marco Samplina. Growth Marketing Specialist en SEO, SEM y desarrollo de herramientas. Conoce mi camino.",
  openGraph: {
    title: "Sobre mí: trayectoria y experiencia | Marco Samplina",
    description:
      "Trayectoria, formación y experiencia de Marco Samplina. Growth Marketing Specialist en SEO, SEM y desarrollo de herramientas. Conoce mi camino.",
    url: `${SITE_URL}/sobre-mi`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre mí: trayectoria y experiencia | Marco Samplina",
    description:
      "Trayectoria, formación y experiencia de Marco Samplina. Growth Marketing Specialist en SEO, SEM y desarrollo de herramientas. Conoce mi camino.",
  },
};

export default function SobreMiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
