#!/usr/bin/env node

/**
 * Script pour préparer les fichiers de l'export statique pour un déploiement sur hébergeur partagé
 * Ce script:
 * 1. Copie les fichiers de configuration nécessaires (.htaccess, robots.txt, etc.)
 * 2. Copie les images et autres ressources statiques si nécessaires
 * 3. Vérifie que tous les fichiers essentiels sont présents
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
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

// Configuration des chemins
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const outDir = path.join(rootDir, 'out');

console.log(`${colors.blue}=== Préparation des fichiers pour l'export statique ===${colors.reset}`);

// Vérifier que le dossier out existe
if (!fs.existsSync(outDir)) {
  console.log(`${colors.red}Erreur: Le dossier out n'existe pas. Exécutez d'abord 'next build'.${colors.reset}`);
  process.exit(1);
}

// Fonction pour copier un fichier avec message console
function copyFileWithLog(source, target) {
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, target);
    console.log(`${colors.green}Fichier copié: ${path.relative(rootDir, target)}${colors.reset}`);
    return true;
  } else {
    console.log(`${colors.yellow}Attention: Fichier source non trouvé: ${path.relative(rootDir, source)}${colors.reset}`);
    return false;
  }
}

// Copier les fichiers de configuration
console.log(`${colors.blue}Copie des fichiers de configuration...${colors.reset}`);

// 1. Copier le .htaccess
const htaccessSource = path.join(publicDir, '.htaccess');
const htaccessTarget = path.join(outDir, '.htaccess');
copyFileWithLog(htaccessSource, htaccessTarget);

// 2. Copier le robots.txt s'il n'existe pas déjà dans out
const robotsSource = path.join(publicDir, 'robots.txt');
const robotsTarget = path.join(outDir, 'robots.txt');
if (!fs.existsSync(robotsTarget)) {
  copyFileWithLog(robotsSource, robotsTarget);
}

// 3. Copier le sitemap.xml s'il n'existe pas déjà dans out
const sitemapSource = path.join(publicDir, 'sitemap.xml');
const sitemapTarget = path.join(outDir, 'sitemap.xml');
if (!fs.existsSync(sitemapTarget)) {
  copyFileWithLog(sitemapSource, sitemapTarget);
}

// 4. Copier le favicon s'il n'existe pas déjà dans out
const faviconSource = path.join(publicDir, 'favicon.ico');
const faviconTarget = path.join(outDir, 'favicon.ico');
if (!fs.existsSync(faviconTarget)) {
  copyFileWithLog(faviconSource, faviconTarget);
}

// 5. Créer/mettre à jour le fichier .user.ini pour optimiser PHP
console.log(`${colors.blue}Création du fichier .user.ini pour optimiser PHP...${colors.reset}`);
const userIniPath = path.join(outDir, '.user.ini');
const userIniContent = `; Configurations PHP pour Hostinger
memory_limit = 256M
max_execution_time = 300
upload_max_filesize = 64M
post_max_size = 64M
`;

fs.writeFileSync(userIniPath, userIniContent);
console.log(`${colors.green}Fichier .user.ini créé/mis à jour${colors.reset}`);

// Vérifications finales et résumé
console.log(`${colors.blue}Vérifications finales...${colors.reset}`);

const requiredFiles = [
  { path: path.join(outDir, '.htaccess'), name: '.htaccess' },
  { path: path.join(outDir, 'robots.txt'), name: 'robots.txt' },
  { path: path.join(outDir, 'sitemap.xml'), name: 'sitemap.xml' },
  { path: path.join(outDir, '.user.ini'), name: '.user.ini' },
];

let allFilesExist = true;
for (const file of requiredFiles) {
  if (fs.existsSync(file.path)) {
    console.log(`${colors.green}✓ ${file.name} présent${colors.reset}`);
  } else {
    console.log(`${colors.red}✗ ${file.name} manquant${colors.reset}`);
    allFilesExist = false;
  }
}

// Créer également une copie visible des fichiers cachés pour faciliter l'upload
console.log(`${colors.blue}Création de copies visibles des fichiers cachés pour faciliter l'upload...${colors.reset}`);
if (fs.existsSync(path.join(outDir, '.htaccess'))) {
  fs.copyFileSync(path.join(outDir, '.htaccess'), path.join(outDir, 'htaccess.txt'));
  console.log(`${colors.green}Copie de .htaccess vers htaccess.txt créée${colors.reset}`);
}

if (fs.existsSync(path.join(outDir, '.user.ini'))) {
  fs.copyFileSync(path.join(outDir, '.user.ini'), path.join(outDir, 'user.ini.txt'));
  console.log(`${colors.green}Copie de .user.ini vers user.ini.txt créée${colors.reset}`);
}

// Résumé final
if (allFilesExist) {
  console.log(`${colors.green}=== Préparation terminée avec succès ===${colors.reset}`);
  console.log(`${colors.cyan}Les fichiers dans le dossier 'out' sont prêts à être déployés sur votre hébergeur partagé.${colors.reset}`);
} else {
  console.log(`${colors.yellow}=== Préparation terminée avec des avertissements ===${colors.reset}`);
  console.log(`${colors.yellow}Certains fichiers requis sont manquants. Veuillez vérifier les messages ci-dessus.${colors.reset}`);
}

// Conseil pour le déploiement
console.log(`${colors.blue}Conseil: Pour déployer sur Hostinger, utilisez la commande:${colors.reset}`);
console.log(`${colors.cyan}npm run deploy-hostinger${colors.reset}`); 