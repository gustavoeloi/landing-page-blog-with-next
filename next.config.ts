import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["www.ogol.com.br", "img.a.transfermarkt.technology"],
  },
};

export default nextConfig;
