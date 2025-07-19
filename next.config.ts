import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // REQUIRED for `next export`
  },
};

export default nextConfig;
