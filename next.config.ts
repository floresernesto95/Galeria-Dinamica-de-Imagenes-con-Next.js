import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com"]
  },
  sassOptions: {
    includePaths: ['./src/styles'],
    prependData: `@import "custom-bootstrap.scss";`
  }
};

export default nextConfig;