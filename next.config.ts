import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hpgodeemiqtbixwnzzvd.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["motion", "lucide-react"],
    // Inline CSS en el HTML para evitar request bloqueante (~140 ms LCP/FCP)
    inlineCss: true,
  },
};

export default nextConfig;
