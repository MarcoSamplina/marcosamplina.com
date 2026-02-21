"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const ShinyText = dynamic(
  () => import("@/components/ShinyText.jsx").then((m) => m.default),
  { ssr: false }
);

type LogoProps = {
  href?: string;
  className?: string;
};

export function Logo({ href = "/", className }: LogoProps) {
  const content = (
    <ShinyText
      text="MASC"
      className={className ?? "text-xl font-semibold"}
      color="#b5b5b5"
      shineColor="#ffffff"
    />
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
