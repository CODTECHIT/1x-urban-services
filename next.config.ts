import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
