/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimisation pour la production
  output: 'export',
  
  // Configuration pour optimiser les images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 jours
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    loader: 'default',
    path: '/_next/image',
    disableStaticImages: false,
    unoptimized: true, // Utiliser des images non optimisées avec le mode export
    // Domaines autorisés pour les images externes (si nécessaire)
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'example.com',
    //     pathname: '/**',
    //   },
    // ],
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
              quality: 65,
            },
            optipng: {
              enabled: true,
            },
            pngquant: {
              quality: [0.65, 0.90],
              speed: 4,
            },
            gifsicle: {
              interlaced: false,
            },
            webp: {
              quality: 75,
            },
          },
        },
      ],
    });
    
    return config;
  },
  
  // Optimisation de la taille des pages
  experimental: {
    // Désactiver temporairement l'optimisation CSS qui cause des erreurs
    // optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    optimizeServerReact: true,
  },
};

export default nextConfig;
