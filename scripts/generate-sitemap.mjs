#!/usr/bin/env node

/**
 * Script pour générer automatiquement le sitemap.xml
 * Pour l'exécuter: node scripts/generate-sitemap.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

// Obtenir la date actuelle au format YYYY-MM-DD
const today = new Date().toISOString().split('T')[0];

// Liste des routes de l'application
const routes = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/nos-realisations', priority: '0.8', changefreq: 'monthly' },
  { path: '/notre-expertise', priority: '0.8', changefreq: 'monthly' },
  { path: '/a-propos', priority: '0.7', changefreq: 'yearly' },
  { path: '/contact', priority: '0.7', changefreq: 'yearly' },
  // Ajoutez d'autres routes au besoin
];

// URL de base du site
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.africadigitconsulting.com';

// Générer le contenu du sitemap
let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

routes.forEach(route => {
  sitemap += '  <url>\n';
  sitemap += `    <loc>${siteUrl}${route.path}</loc>\n`;
  sitemap += `    <lastmod>${today}</lastmod>\n`;
  sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
  sitemap += `    <priority>${route.priority}</priority>\n`;
  sitemap += '  </url>\n';
});

sitemap += '</urlset>';

// Créer le répertoire public s'il n'existe pas
if (!fs.existsSync(publicDir)){
  fs.mkdirSync(publicDir, { recursive: true });
}

// Écrire le sitemap.xml
fs.writeFileSync(sitemapPath, sitemap);

console.log(`Sitemap généré avec succès à ${sitemapPath}`); 