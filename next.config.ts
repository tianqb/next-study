import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // reactStrictMode: false
  images: {
    remotePatterns: [
      {
        hostname: 'tailwindui.com',
      },
    ],
  },
};

export default nextConfig;