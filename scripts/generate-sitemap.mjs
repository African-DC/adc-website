#!/usr/bin/env node

/**
 * Script pour générer un sitemap.xml pour le site ADC
 * Ce script analyse les routes statiques et génère un sitemap.xml compatible avec les moteurs de recherche
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuration des couleurs pour le terminal
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

// Configuration des chemins
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const pagesDir = path.join(rootDir, 'app');

// URL de base du site (à adapter en production)
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.africandigitconsulting.com';

// Fonction pour éviter les chemins en double avec des slashes
const normalizeURL = (url) => {
  return url.endsWith('/') ? url : `${url}/`;
};

// Routes statiques à inclure dans le sitemap
const routes = [
  '/',
  '/notre-expertise',
  '/nos-realisations',
  '/a-propos',
  '/contact',
  '/blog',
];

// Priorités et fréquences de changement par route
const routeConfig = {
  '/': { priority: '1.0', changefreq: 'weekly' },
  '/notre-expertise': { priority: '0.8', changefreq: 'monthly' },
  '/nos-realisations': { priority: '0.8', changefreq: 'weekly' },
  '/a-propos': { priority: '0.7', changefreq: 'monthly' },
  '/contact': { priority: '0.7', changefreq: 'monthly' },
  '/blog': { priority: '0.9', changefreq: 'weekly' },
};

// Chercher d'autres routes dynamiquement
console.log(`${colors.blue}Génération du sitemap.xml pour ${baseUrl}${colors.reset}`);

// Génération du sitemap.xml
const generateSitemap = () => {
  // Date de dernière modification (aujourd'hui)
  const date = new Date().toISOString();
  
  // Début du sitemap
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  // Ajouter chaque route
  routes.forEach((route) => {
    const url = normalizeURL(`${baseUrl}${route}`);
    const { priority, changefreq } = routeConfig[route] || { priority: '0.5', changefreq: 'monthly' };
    
    sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
  });

  // Fin du sitemap
  sitemap += `</urlset>`;
  
  return sitemap;
};

// Écrire le sitemap.xml
const sitemap = generateSitemap();
const sitemapPath = path.join(publicDir, 'sitemap.xml');

try {
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`${colors.green}Sitemap généré avec succès: ${sitemapPath}${colors.reset}`);
  
  // Aussi le copier dans le dossier out s'il existe (pour le déploiement statique)
  const outDir = path.join(rootDir, 'out');
  if (fs.existsSync(outDir)) {
    fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
    console.log(`${colors.green}Sitemap copié dans le dossier out pour le déploiement${colors.reset}`);
  }
} catch (error) {
  console.error(`${colors.red}Erreur lors de l'écriture du sitemap: ${error.message}${colors.reset}`);
  process.exit(1);
}

console.log(`${colors.blue}Vérifiez votre sitemap à l'adresse: ${baseUrl}/sitemap.xml${colors.reset}`); 