import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mí | Marco Samplina",
  description:
    "Trayectoria, formación y experiencia de Marco Samplina. Growth Marketing Specialist, SEO, SEM y desarrollo de herramientas.",
};

export default function SobreMiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
