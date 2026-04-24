/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "africandigitconsulting.com",
      },
      {
        protocol: "https",
        hostname: "www.africandigitconsulting.com",
      },
    ],
  },

  compress: true,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react", "next-intl"],
  },

  trailingSlash: true,
};

export default nextConfig;
