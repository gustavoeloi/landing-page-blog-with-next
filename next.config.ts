import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["www.ogol.com.br", "img.a.transfermarkt.technology"],
  },
};

export default withContentlayer(nextConfig);
