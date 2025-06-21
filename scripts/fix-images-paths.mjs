#!/usr/bin/env node

/**
 * Script amélioré pour corriger les problèmes d'affichage d'images après déploiement
 * Ce script:
 * 1. Vérifie que les images existent dans le dossier out/img
 * 2. Crée les dossiers manquants si nécessaire
 * 3. Copie les images depuis public/img si nécessaires
 * 4. Vérifie la structure des chemins d'accès et les répare si besoin
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const publicImgDir = path.join(rootDir, 'public', 'img');
const outImgDir = path.join(rootDir, 'out', 'img');

// Couleurs pour le terminal
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

console.log(`${colors.blue}=== Correction des chemins d'images pour le déploiement ===${colors.reset}`);

// S'assurer que le dossier out/img existe
if (!fs.existsSync(outImgDir)) {
  console.log(`${colors.yellow}Le dossier out/img n'existe pas, création...${colors.reset}`);
  fs.mkdirSync(outImgDir, { recursive: true });
}

// Fonction pour copier récursivement les dossiers et fichiers
function copyFolderRecursiveSync(source, target) {
  // Vérifie si le dossier source existe
  if (!fs.existsSync(source)) {
    console.log(`${colors.red}Le dossier source ${source} n'existe pas.${colors.reset}`);
    return;
  }

  // Crée le dossier cible s'il n'existe pas
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
    console.log(`${colors.green}Dossier créé: ${target}${colors.reset}`);
  }

  // Récupère tous les fichiers dans le dossier source
  const files = fs.readdirSync(source);

  // Pour chaque fichier dans le dossier source
  files.forEach((file) => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);

    // Si c'est un dossier, appel récursif
    if (fs.lstatSync(sourcePath).isDirectory()) {
      copyFolderRecursiveSync(sourcePath, targetPath);
    } else {
      // Si le fichier n'existe pas déjà dans la cible, le copier
      if (!fs.existsSync(targetPath)) {
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`${colors.green}Fichier copié: ${targetPath}${colors.reset}`);
      }
    }
  });
}

// Copier TOUS les sous-dossiers d'images en une seule fois
console.log(`${colors.blue}Copie complète du dossier d'images...${colors.reset}`);
copyFolderRecursiveSync(publicImgDir, outImgDir);

// Vérifier spécifiquement les dossiers d'images critiques
const criticalImageFolders = [
  'TEAM_ADC',
  'header_img',
  'optimized',
  'logos',
  'temoignages',
  'clients',
  'Nos_réalisations_dev',
];

// Vérification des dossiers critiques
criticalImageFolders.forEach((folder) => {
  const sourceFolder = path.join(publicImgDir, folder);
  const targetFolder = path.join(outImgDir, folder);
  
  // Vérifier si le dossier source existe
  if (fs.existsSync(sourceFolder)) {
    console.log(`${colors.blue}Vérification du dossier ${folder}...${colors.reset}`);
    if (!fs.existsSync(targetFolder)) {
      console.log(`${colors.yellow}Dossier ${folder} manquant, création et copie...${colors.reset}`);
      fs.mkdirSync(targetFolder, { recursive: true });
      copyFolderRecursiveSync(sourceFolder, targetFolder);
    }
  } else {
    console.log(`${colors.yellow}Dossier source ${folder} non trouvé dans public/img${colors.reset}`);
  }
});

// Vérifier et copier également les images à la racine du dossier img
try {
  const rootFiles = fs.readdirSync(publicImgDir).filter(file => {
    const filePath = path.join(publicImgDir, file);
    return fs.lstatSync(filePath).isFile();
  });

  rootFiles.forEach((file) => {
    const sourcePath = path.join(publicImgDir, file);
    const targetPath = path.join(outImgDir, file);
    
    if (!fs.existsSync(targetPath)) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`${colors.green}Fichier racine copié: ${targetPath}${colors.reset}`);
    }
  });
} catch (error) {
  console.error(`${colors.red}Erreur lors de la copie des fichiers racine: ${error.message}${colors.reset}`);
}

// Vérifier également le favicon et autres fichiers importants
const rootPublicFiles = [
  'favicon.ico',
  'favicon.png',
  'logoadc.png',
  'site.webmanifest',
  'robots.txt',
  'sitemap.xml'
];

rootPublicFiles.forEach((file) => {
  const sourcePath = path.join(rootDir, 'public', file);
  const targetPath = path.join(rootDir, 'out', file);
  
  if (fs.existsSync(sourcePath) && !fs.existsSync(targetPath)) {
    try {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`${colors.green}Fichier copié: ${targetPath}${colors.reset}`);
    } catch (error) {
      console.error(`${colors.red}Erreur lors de la copie de ${file}: ${error.message}${colors.reset}`);
    }
  }
});

// Vérifier si le favicon est dans le dossier app
const appFaviconPath = path.join(rootDir, 'app', 'favicon.ico');
if (fs.existsSync(appFaviconPath)) {
  const outFaviconPath = path.join(rootDir, 'out', 'favicon.ico');
  if (!fs.existsSync(outFaviconPath)) {
    try {
      fs.copyFileSync(appFaviconPath, outFaviconPath);
      console.log(`${colors.green}Favicon copié depuis app/: ${outFaviconPath}${colors.reset}`);
    } catch (error) {
      console.error(`${colors.red}Erreur lors de la copie du favicon: ${error.message}${colors.reset}`);
    }
  }
}

// Créer un manifeste d'images simple pour le déploiement
console.log(`${colors.blue}Création d'un manifeste d'images simple...${colors.reset}`);
try {
  const manifestPath = path.join(outImgDir, 'image-manifest.json');
  const manifest = {};
  
  // Fonction pour scanner récursivement les dossiers d'images
  function scanImageDirectory(dir, baseDir = outImgDir) {
    const entries = fs.readdirSync(dir);
    
    entries.forEach(entry => {
      const entryPath = path.join(dir, entry);
      const relativePath = path.relative(baseDir, entryPath).replace(/\\/g, '/');
      
      if (fs.statSync(entryPath).isDirectory()) {
        scanImageDirectory(entryPath, baseDir);
      } else if (/\.(jpg|jpeg|png|webp|gif|svg)$/i.test(entry)) {
        // Créer une entrée simple pour chaque image
        const fullPath = `/img/${relativePath}`;
        manifest[fullPath] = {
          path: fullPath,
          timestamp: new Date().toISOString()
        };
      }
    });
  }
  
  scanImageDirectory(outImgDir);
  
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`${colors.green}Manifeste d'images créé: ${manifestPath}${colors.reset}`);
} catch (error) {
  console.error(`${colors.red}Erreur lors de la création du manifeste: ${error.message}${colors.reset}`);
}

// S'assurer que le _next/static/media contient toutes les images nécessaires
console.log(`${colors.blue}Vérification des images dans les fichiers statiques...${colors.reset}`);
try {
  const staticMediaDir = path.join(rootDir, 'out', '_next', 'static', 'media');
  if (fs.existsSync(staticMediaDir)) {
    console.log(`${colors.green}Dossier _next/static/media existe, les images statiques seront disponibles${colors.reset}`);
  } else {
    console.log(`${colors.yellow}Attention: Dossier _next/static/media n'existe pas. Cela peut causer des problèmes pour les images importées dans le code.${colors.reset}`);
  }
} catch (error) {
  console.error(`${colors.red}Erreur lors de la vérification des images statiques: ${error.message}${colors.reset}`);
}

console.log(`${colors.green}=== Correction des chemins d'images terminée ===${colors.reset}`);
console.log(`${colors.cyan}Toutes les images requises ont été vérifiées et copiées si nécessaire.${colors.reset}`); 