#!/usr/bin/env node

/**
 * Vérifie les images dans le build pour s'assurer que toutes sont correctement référencées
 * et optimisées
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import chalk from 'chalk';

// Configuration
const BUILD_DIR = './out';
const IMG_DIR = path.join(BUILD_DIR, 'img');
const HTML_PATTERN = path.join(BUILD_DIR, '**/*.html');
const IGNORED_PATTERNS = [
  /favicon\.(ico|png)/,
  /apple-touch-icon/,
  /android-chrome/,
  /mstile/,
  /safari-pinned-tab/,
  /site\.webmanifest/,
  /robots\.txt/,
  /sitemap\.xml/,
];
const SIZE_WARNING_THRESHOLD = 500 * 1024; // 500 KB
const SIZE_ERROR_THRESHOLD = 2 * 1024 * 1024; // 2 MB

// Compteurs
let missingImages = 0;
let largeImages = 0;
let veryLargeImages = 0;
let webpMissing = 0;
let avifMissing = 0;
let totalImages = 0;
let referencedImages = new Set();

// Helpers
function isIgnored(filename) {
  return IGNORED_PATTERNS.some(pattern => pattern.test(filename));
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

// Vérifier si le répertoire de build existe
if (!fs.existsSync(BUILD_DIR)) {
  console.error(chalk.red(`Le répertoire de build ${BUILD_DIR} n'existe pas. Exécutez d'abord 'npm run build'.`));
  process.exit(1);
}

console.log(chalk.blue("Vérification des références d'images..."));

// Analyse des fichiers HTML pour trouver les références aux images
const htmlFiles = glob.sync(HTML_PATTERN);
for (const htmlFile of htmlFiles) {
  const content = fs.readFileSync(htmlFile, 'utf-8');
  const imgRegex = /src=["'](\/img\/[^"']+)["']/g;
  let match;
  
  while ((match = imgRegex.exec(content)) !== null) {
    const imgPath = match[1];
    const fullPath = path.join(BUILD_DIR, imgPath);
    referencedImages.add(fullPath);
    
    // Vérifier si l'image existe
    if (!fs.existsSync(fullPath)) {
      console.error(chalk.red(`Image manquante: ${imgPath} (référencée dans ${htmlFile})`));
      missingImages++;
    }
  }
}

console.log(chalk.blue("Vérification des tailles et formats d'images..."));

// Analyse des images pour vérifier leur taille et les formats modernes
const imageFiles = glob.sync(path.join(IMG_DIR, '**/*.{jpg,jpeg,png,gif,webp,avif}'));
totalImages = imageFiles.length;

for (const imgFile of imageFiles) {
  try {
    const stats = fs.statSync(imgFile);
    const size = stats.size;
    
    // Vérifier la taille
    if (size > SIZE_ERROR_THRESHOLD) {
      console.error(chalk.red(`Image très volumineuse (${formatSize(size)}): ${imgFile}`));
      veryLargeImages++;
    } else if (size > SIZE_WARNING_THRESHOLD) {
      console.warn(chalk.yellow(`Image volumineuse (${formatSize(size)}): ${imgFile}`));
      largeImages++;
    }
    
    // Vérifier les formats modernes
    if (imgFile.match(/\.(jpg|jpeg|png)$/i)) {
      const basePath = imgFile.replace(/\.(jpg|jpeg|png)$/i, '');
      
      if (!fs.existsSync(`${basePath}.webp`)) {
        console.warn(chalk.yellow(`Version WebP manquante: ${imgFile}`));
        webpMissing++;
      }
      
      if (!fs.existsSync(`${basePath}.avif`)) {
        // Seulement un avertissement car AVIF n'est pas encore universellement pris en charge
        console.info(chalk.gray(`Version AVIF manquante: ${imgFile}`));
        avifMissing++;
      }
    }
  } catch (error) {
    console.error(chalk.red(`Erreur lors de l'analyse de ${imgFile}: ${error.message}`));
  }
}

// Vérifier les images non référencées
const unusedImages = imageFiles.filter(img => !referencedImages.has(img));
if (unusedImages.length > 0) {
  console.warn(chalk.yellow(`${unusedImages.length} images non référencées trouvées.`));
  console.warn(chalk.yellow("Exemples:"));
  unusedImages.slice(0, 5).forEach(img => {
    console.warn(chalk.yellow(`  - ${img}`));
  });
  if (unusedImages.length > 5) {
    console.warn(chalk.yellow(`  ... et ${unusedImages.length - 5} autres`));
  }
}

// Rapport final
console.log(chalk.green('\n=== Rapport de vérification des images ==='));
console.log(`Images totales: ${totalImages}`);
console.log(`Images référencées: ${referencedImages.size}`);
console.log(`Images non référencées: ${unusedImages.length}`);
console.log(`Images manquantes: ${missingImages}`);
console.log(`Images volumineuses (>${formatSize(SIZE_WARNING_THRESHOLD)}): ${largeImages}`);
console.log(`Images très volumineuses (>${formatSize(SIZE_ERROR_THRESHOLD)}): ${veryLargeImages}`);
console.log(`Images sans version WebP: ${webpMissing}`);
console.log(`Images sans version AVIF: ${avifMissing}`);

// Déterminer le statut de sortie
if (missingImages > 0 || veryLargeImages > 0) {
  console.error(chalk.red('\n❌ Vérification des images échouée.'));
  process.exit(1);
} else if (largeImages > 0 || webpMissing > 0) {
  console.warn(chalk.yellow('\n⚠️ Vérification des images terminée avec des avertissements.'));
  process.exit(0);
} else {
  console.log(chalk.green('\n✅ Vérification des images réussie.'));
  process.exit(0);
} 