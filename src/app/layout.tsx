import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "optional",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "optional",
});

const OG_IMAGE =
  "https://hpgodeemiqtbixwnzzvd.supabase.co/storage/v1/object/public/media/general/1771649629909-Screenshot%202026-02-21%20at%2005.53.24.webp";

const SITE_URL = "https://marcosamplina.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Growth Marketing Specialist | MASC",
    template: "%s | Marco Samplina",
  },
  description:
    "Growth Marketing Specialist: SEO, SEM y automatización. Herramientas gratis, guías en el blog y sesión de consultoría de 30 min sin compromiso. Marco Samplina.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon", type: "image/png", sizes: "96x96" },
    ],
    shortcut: "/favicon.ico",
  },
  keywords: [
    "growth marketing",
    "SEO",
    "SEM",
    "automatización marketing",
    "Marco Samplina",
    "estrategia digital",
    "herramientas SEO",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://marcosamplina.com" },
  openGraph: {
    title: "Growth Marketing Specialist | MASC",
    description:
      "Growth Marketing Specialist: SEO, SEM y automatización. Herramientas gratis, guías en el blog y sesión de consultoría de 30 min sin compromiso. Marco Samplina.",
    url: "https://marcosamplina.com",
    siteName: "Marco Samplina",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Marco Samplina — Growth Marketing Specialist" }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Marketing Specialist | MASC",
    description:
      "Growth Marketing Specialist: SEO, SEM y automatización. Herramientas gratis, guías en el blog y sesión de consultoría de 30 min sin compromiso. Marco Samplina.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://marcosamplina.com/#website",
        url: "https://marcosamplina.com",
        name: "Marco Samplina",
        description:
          "Growth Marketing Specialist: SEO, SEM y automatización. Herramientas gratis, guías en el blog y sesión de consultoría de 30 min sin compromiso. Marco Samplina.",
        publisher: { "@id": "https://marcosamplina.com/#person" },
      },
      {
        "@type": "Person",
        "@id": "https://marcosamplina.com/#person",
        name: "Marco Samplina",
        url: "https://marcosamplina.com",
        jobTitle: "Growth Marketing Specialist",
        sameAs: [
          "https://www.linkedin.com/in/marco-samplina-cordova",
          "https://www.instagram.com/marcotgod",
          "https://calendly.com/marco-samplina/30min",
          "https://marco-samplina.framer.website/",
          "https://tools.marcosamplina.com",
        ],
      },
    ],
  };

  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="_-7kJm0ua9w444U_MniD8OpVL4uihggvedMinoT7vKU" />
        <link rel="icon" href={`${SITE_URL}/favicon.ico`} sizes="any" />
        <link rel="shortcut icon" href={`${SITE_URL}/favicon.ico`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
