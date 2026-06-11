import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

// Pin the workspace root to THIS folder so a stray lockfile in a parent
// directory can't make the bundler misresolve client chunk URLs.
const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
