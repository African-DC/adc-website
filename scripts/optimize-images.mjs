#!/usr/bin/env node

/**
 * Script pour optimiser les images du site
 * Exécuter avec: node scripts/optimize-images.mjs
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminOptipng from 'imagemin-optipng';
import imageminWebp from 'imagemin-webp';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMG_DIR = path.join(__dirname, '../public/img');
const OPTIMIZED_DIR = path.join(__dirname, '../public/img/optimized');
const PROCESSED_MARKER = '.processed';

// Tailles de vignettes à générer
const THUMBNAIL_SIZES = [
  { width: 300, height: 300, suffix: 'thumbnail' },
  { width: 600, height: 600, suffix: 'small' },
  { width: 900, height: 900, suffix: 'medium' },
  { width: 1200, height: 1200, suffix: 'large' }
];

// Créer le répertoire optimized s'il n'existe pas
async function ensureOptimizedDir() {
  try {
    await fs.access(OPTIMIZED_DIR);
  } catch (error) {
    console.log(`Création du répertoire optimized: ${OPTIMIZED_DIR}`);
    await fs.mkdir(OPTIMIZED_DIR, { recursive: true });
  }
}

// Fonction pour vérifier si un fichier a déjà été traité
async function isProcessed(filePath) {
  try {
    const markerPath = `${filePath}${PROCESSED_MARKER}`;
    await fs.access(markerPath);
    return true;
  } catch (error) {
    return false;
  }
}

// Fonction pour marquer un fichier comme traité
async function markAsProcessed(filePath) {
  const markerPath = `${filePath}${PROCESSED_MARKER}`;
  await fs.writeFile(markerPath, '', 'utf8');
}

// Fonction pour obtenir la taille des fichiers en KB
async function getFileSizeInKB(filePath) {
  const stats = await fs.stat(filePath);
  return Math.round(stats.size / 1024);
}

// Fonction pour générer un blurDataURL base64
async function generateBlurDataURL(filePath) {
  try {
    const buffer = await sharp(filePath)
      .resize(10, 10, { fit: 'inside' })
      .blur(2)
      .toBuffer();
    
    return `data:image/png;base64,${buffer.toString('base64')}`;
  } catch (error) {
    console.error(`Erreur lors de la génération du blurDataURL pour ${filePath}:`, error);
    return null;
  }
}

// Fonction pour générer des vignettes redimensionnées
async function generateThumbnails(filePath, originalExt) {
  const filename = path.basename(filePath, originalExt);
  const relativePath = path.relative(IMG_DIR, path.dirname(filePath));
  const outputDir = path.join(OPTIMIZED_DIR, relativePath);
  
  // Créer le répertoire de sortie s'il n'existe pas
  await fs.mkdir(outputDir, { recursive: true });
  
  const thumbnails = [];
  
  // Créer chaque taille de vignette
  for (const size of THUMBNAIL_SIZES) {
    const outputFilename = `${filename}-${size.suffix}${originalExt}`;
    const outputPath = path.join(outputDir, outputFilename);
    const webpOutputPath = path.join(outputDir, `${filename}-${size.suffix}.webp`);
    
    await sharp(filePath)
      .resize(size.width, size.height, { 
        fit: 'contain', 
        background: { r: 255, g: 255, b: 255, alpha: 0 } 
      })
      .toFile(outputPath);
      
    // Générer la version WebP
    await sharp(filePath)
      .resize(size.width, size.height, { 
        fit: 'contain', 
        background: { r: 255, g: 255, b: 255, alpha: 0 } 
      })
      .webp({ quality: 80 })
      .toFile(webpOutputPath);
    
    const fileSize = await getFileSizeInKB(outputPath);
    const webpSize = await getFileSizeInKB(webpOutputPath);
    
    thumbnails.push({
      size: size.suffix,
      path: path.join('/img/optimized', relativePath, outputFilename),
      webpPath: path.join('/img/optimized', relativePath, `${filename}-${size.suffix}.webp`),
      width: size.width,
      height: size.height,
      fileSize: fileSize,
      webpSize: webpSize
    });
    
    console.log(`Vignette créée: ${outputPath} (${fileSize} KB)`);
    console.log(`Version WebP: ${webpOutputPath} (${webpSize} KB)`);
  }
  
  return thumbnails;
}

// Fonction pour générer un fichier JSON de métadonnées
async function generateMetadata(filePath, thumbnails, blurDataURL) {
  const filename = path.basename(filePath);
  const relativePath = path.relative(IMG_DIR, path.dirname(filePath));
  const outputDir = path.join(OPTIMIZED_DIR, relativePath);
  
  // Créer le répertoire de sortie s'il n'existe pas
  await fs.mkdir(outputDir, { recursive: true });
  
  const metadata = {
    original: path.join('/img', relativePath, filename),
    thumbnails: thumbnails,
    blurDataURL: blurDataURL,
    timestamp: new Date().toISOString()
  };
  
  const metadataPath = path.join(outputDir, `${path.basename(filePath, path.extname(filePath))}.json`);
  await fs.writeFile(metadataPath, JSON.stringify(metadata, null, 2), 'utf8');
  
  console.log(`Métadonnées générées: ${metadataPath}`);
  
  return metadataPath;
}

// Fonction pour parcourir récursivement les répertoires
async function processDirectory(directory) {
  console.log(`Traitement du répertoire: ${directory}`);
  
  // Lire tous les fichiers et sous-répertoires
  const entries = await fs.readdir(directory, { withFileTypes: true });
  
  // Traiter les images dans ce répertoire
  const imageFiles = entries
    .filter(entry => !entry.isDirectory())
    .filter(entry => {
      const ext = path.extname(entry.name).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
    })
    .map(entry => path.join(directory, entry.name));
  
  // Optimisation des images
  for (const filePath of imageFiles) {
    // Vérifier si l'image a déjà été traitée
    if (await isProcessed(filePath)) {
      console.log(`Image déjà traitée: ${filePath}`);
      continue;
    }
    
    const originalSize = await getFileSizeInKB(filePath);
    console.log(`Optimisation de ${filePath} (${originalSize} KB)...`);
    
    try {
      // Déterminer le type d'optimisation en fonction de l'extension
      const ext = path.extname(filePath).toLowerCase();
      const outputDir = path.dirname(filePath);
      
      if (['.jpg', '.jpeg'].includes(ext)) {
        await imagemin([filePath], {
          destination: outputDir,
          plugins: [
            imageminMozjpeg({
              quality: 70,
              progressive: true
            })
          ]
        });
      } else if (ext === '.png') {
        await imagemin([filePath], {
          destination: outputDir,
          plugins: [
            imageminOptipng({
              optimizationLevel: 5
            })
          ]
        });
      }
      
      // Créer une version WebP si ce n'est pas un GIF
      if (ext !== '.gif') {
        await imagemin([filePath], {
          destination: outputDir,
          plugins: [
            imageminWebp({
              quality: 75
            })
          ]
        });
      }
      
      // Générer le blurDataURL
      const blurDataURL = await generateBlurDataURL(filePath);
      
      // Générer les vignettes
      const thumbnails = await generateThumbnails(filePath, ext);
      
      // Générer les métadonnées
      await generateMetadata(filePath, thumbnails, blurDataURL);
      
      const newSize = await getFileSizeInKB(filePath);
      const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(2);
      
      console.log(`Optimisé: ${filePath} (${originalSize} KB → ${newSize} KB, -${reduction}%)`);
      
      // Marquer comme traité
      await markAsProcessed(filePath);
      
    } catch (error) {
      console.error(`Erreur lors de l'optimisation de ${filePath}:`, error);
    }
  }
  
  // Traiter les sous-répertoires
  const subdirectories = entries
    .filter(entry => entry.isDirectory())
    .map(entry => path.join(directory, entry.name));
  
  for (const subdirectory of subdirectories) {
    // Ne pas traiter le répertoire optimized pour éviter la récursion
    if (!subdirectory.includes('/optimized')) {
      await processDirectory(subdirectory);
    }
  }
}

// Fonction principale
async function main() {
  console.log('Début de l\'optimisation des images...');
  
  try {
    // S'assurer que le répertoire optimized existe
    await ensureOptimizedDir();
    
    await processDirectory(IMG_DIR);
    console.log('Optimisation terminée avec succès!');
  } catch (error) {
    console.error('Erreur lors de l\'optimisation des images:', error);
    process.exit(1);
  }
}

main(); 