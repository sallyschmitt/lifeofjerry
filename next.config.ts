import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel erkennt Next.js automatisch, keine extra config nötig
  images: {
    unoptimized: true
  }
};

export default nextConfig;
