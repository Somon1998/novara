import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  devIndicators: false,
  turbopack: {
    root: projectRoot,
  },
  experimental: {
    // Стабильнее dev с client providers (Next 16 + Turbopack)
    optimizePackageImports: ["gsap"],
  },
};

export default nextConfig;
