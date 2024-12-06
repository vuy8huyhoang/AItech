import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['tailwindui.com'], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.vuai.vn',
        port: '',
        pathname: '/assets/img/**',
      },
    ],
  },
};

export default nextConfig;
