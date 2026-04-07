import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vegane-ernaehrungsberatung",
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/vegane-ernaehrungsberatung",
  },
};

export default nextConfig;
