import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vegane-ernaehrungsberatung",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
