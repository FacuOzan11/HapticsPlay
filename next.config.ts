import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tone.js is ESM-only; transpilePackages ensures Next.js webpack can process it
  transpilePackages: ['tone'],
  turbopack: {
    // Anchor the workspace root to this project, preventing lockfile confusion
    root: __dirname,
  },
};

export default nextConfig;
