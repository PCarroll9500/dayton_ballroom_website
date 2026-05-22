import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/dayton_ballroom_website",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
