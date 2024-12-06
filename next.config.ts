import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['tailwindui.com'], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.vuai.vn',
        port: '',
        pathname: '/public/img/**',
      },
    ],
  },
};

export default nextConfig;
