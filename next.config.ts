import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hides the floating "N" button shown during `npm run dev` (errors are still reported).
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // On slow disks (HDD) the persistent dev cache can crash Turbopack with
    // "task is missing in memory or persistent storage". The build cache stays on.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
