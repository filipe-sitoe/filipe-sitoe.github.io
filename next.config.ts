import type { NextConfig } from "next";

// Set by the GitHub Pages workflow: "" for a <user>.github.io site, "/repo-name" for a project site.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static HTML export, hosted on GitHub Pages (see .github/workflows/deploy.yml).
  output: "export",
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // GitHub Pages only serves files, so images are used as they are (already optimised WebP).
  images: { unoptimized: true },
  // Hides the floating "N" button shown during `npm run dev` (errors are still reported).
  devIndicators: false,
  experimental: {
    // On slow disks (HDD) the persistent dev cache can crash Turbopack with
    // "task is missing in memory or persistent storage". The build cache stays on.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
