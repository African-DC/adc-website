#!/usr/bin/env node

/**
 * Script pour générer un manifeste des images optimisées
 * Exécuter avec: node scripts/generate-image-manifest.mjs
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OPTIMIZED_DIR = path.join(__dirname, '../public/img/optimized');
const MANIFEST_FILE = path.join(__dirname, '../public/img/image-manifest.json');

// Fonction pour parcourir récursivement les répertoires et trouver les fichiers JSON
async function findJsonFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  
  // Trouver tous les fichiers JSON
  let jsonFiles = entries
    .filter(entry => !entry.isDirectory() && path.extname(entry.name).toLowerCase() === '.json')
    .map(entry => path.join(directory, entry.name));
  
  // Parcourir les sous-répertoires
  const subdirectories = entries
    .filter(entry => entry.isDirectory())
    .map(entry => path.join(directory, entry.name));
  
  for (const subdirectory of subdirectories) {
    const subdirectoryJsonFiles = await findJsonFiles(subdirectory);
    jsonFiles = [...jsonFiles, ...subdirectoryJsonFiles];
  }
  
  return jsonFiles;
}

// Fonction principale
async function main() {
  console.log('Génération du manifeste des images optimisées...');
  
  try {
    // Vérifier si le répertoire optimized existe
    try {
      await fs.access(OPTIMIZED_DIR);
    } catch (error) {
      console.error(`Le répertoire ${OPTIMIZED_DIR} n'existe pas. Exécutez d'abord le script d'optimisation des images.`);
      process.exit(1);
    }
    
    // Trouver tous les fichiers JSON de métadonnées
    const jsonFiles = await findJsonFiles(OPTIMIZED_DIR);
    console.log(`${jsonFiles.length} fichiers de métadonnées trouvés.`);
    
    // Lire et combiner les métadonnées
    const imageManifest = {};
    
    for (const jsonFile of jsonFiles) {
      const jsonContent = await fs.readFile(jsonFile, 'utf8');
      const metadata = JSON.parse(jsonContent);
      
      // Utiliser le chemin de l'image originale comme clé
      const originalPath = metadata.original;
      imageManifest[originalPath] = metadata;
    }
    
    // Écrire le manifeste dans un fichier JSON
    await fs.writeFile(
      MANIFEST_FILE, 
      JSON.stringify(imageManifest, null, 2), 
      'utf8'
    );
    
    console.log(`Manifeste généré avec succès: ${MANIFEST_FILE}`);
    console.log(`${Object.keys(imageManifest).length} images incluses dans le manifeste.`);
    
  } catch (error) {
    console.error('Erreur lors de la génération du manifeste:', error);
    process.exit(1);
  }
}

main(); 