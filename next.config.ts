import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://assets.woolworths.com.au'
      },
      {
        protocol: 'https',
        hostname: 'https://a.fsimg.co.nz'
      }
    ]
  }
};

export default nextConfig;
