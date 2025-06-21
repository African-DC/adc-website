/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour hébergement statique
  output: 'export',
  
  // Suppression du assetPrefix car il peut causer des problèmes de chargement d'images
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://africandigitconsulting.com' : '',
  
  // Configuration pour optimiser les images
  images: {
    unoptimized: true, // Nécessaire pour les exports statiques
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['africandigitconsulting.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'africandigitconsulting.com',
      },
    ],
  },
  
  // Compression pour améliorer les performances
  compress: true,
  
  // Désactiver les sourcemaps en production pour réduire la taille du bundle
  productionBrowserSourceMaps: false,
  
  // Optimisation supplémentaire pour les polyfills
  reactStrictMode: true,
  swcMinify: true,
  
  // Configuration webpack personnalisée pour optimiser les images
  webpack(config) {
    // Optimiser les imports d'images
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      use: [
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 75, // Qualité améliorée pour une meilleure apparence
            },
            optipng: {
              enabled: true,
            },
            pngquant: {
              quality: [0.7, 0.9], // Meilleure qualité pour plus de compatibilité
              speed: 4,
            },
            gifsicle: {
              interlaced: false,
            },
            webp: {
              quality: 80, // Meilleure qualité pour la compatibilité entre navigateurs
            },
          },
        },
      ],
    });
    
    return config;
  },
  
  // Optimisation de la taille des pages
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  
  // Traiter les erreurs 404 correctement
  trailingSlash: true,
};

export default nextConfig;
