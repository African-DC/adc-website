#!/bin/bash

# Script pour convertir toutes les images JPEG/JPG en WebP et mettre à jour les références
# Usage: bash scripts/convert-all-to-webp.sh

# Couleurs pour le terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Conversion de toutes les images JPEG/JPG en WebP ===${NC}"
echo -e "${BLUE}=================================================${NC}"

# Vérifier si le dossier out existe
if [ ! -d "./out" ]; then
  echo -e "${YELLOW}Le dossier 'out' n'existe pas. Vérification des images dans le dossier public...${NC}"
  SOURCE_DIR="./public"
else
  echo -e "${YELLOW}Dossier 'out' trouvé. Conversion des images dans le dossier out...${NC}"
  SOURCE_DIR="./out"
fi

# Vérifier si les outils nécessaires sont installés
command -v convert >/dev/null 2>&1 || {
  echo -e "${YELLOW}⚠️ ImageMagick n'est pas installé. Installation recommandée pour de meilleurs résultats.${NC}"
  echo -e "${YELLOW}⚠️ Vous pouvez l'installer avec: sudo apt-get install imagemagick${NC}"
}

# Créer un dossier pour les originaux
ORIGINALS="${SOURCE_DIR}/img/originals"
mkdir -p "$ORIGINALS"
echo -e "${GREEN}Dossier de sauvegarde créé: $ORIGINALS${NC}"

# Compteurs
CONVERTED=0
ALREADY_EXIST=0
ERRORS=0

# Trouver toutes les images JPEG/JPG et les convertir en WebP
echo -e "${YELLOW}Recherche et conversion des images JPEG/JPG...${NC}"
find "${SOURCE_DIR}" -type f \( -name "*.jpg" -o -name "*.jpeg" \) | while read img; do
  # Définir le chemin de sortie WebP
  webp_path="${img%.*}.webp"
  
  # Vérifier si la version WebP existe déjà
  if [ -f "$webp_path" ]; then
    echo -e "${YELLOW}Version WebP existe déjà pour: $img${NC}"
    ALREADY_EXIST=$((ALREADY_EXIST + 1))
    continue
  fi
  
  # Créer une sauvegarde
  mkdir -p "$ORIGINALS/$(dirname "${img#${SOURCE_DIR}/}")"
  cp "$img" "$ORIGINALS/$(basename "$img")"
  
  # Convertir l'image en WebP
  if command -v convert >/dev/null 2>&1; then
    echo -e "${BLUE}Conversion de $img en WebP...${NC}"
    convert "$img" -quality 85 "$webp_path"
    
    if [ $? -eq 0 ]; then
      echo -e "${GREEN}✅ Conversion réussie: $webp_path${NC}"
      CONVERTED=$((CONVERTED + 1))
    else
      echo -e "${RED}❌ Erreur lors de la conversion: $img${NC}"
      ERRORS=$((ERRORS + 1))
    fi
  else
    echo -e "${RED}❌ ImageMagick non disponible, impossible de convertir: $img${NC}"
    ERRORS=$((ERRORS + 1))
  fi
done

echo -e "\n${GREEN}=== Mise à jour des références dans les fichiers HTML/JS/TSX ===${NC}"

# Mise à jour des références dans les fichiers HTML (pour les sites statiques)
if [ -d "${SOURCE_DIR}" ]; then
  echo -e "${YELLOW}Mise à jour des références dans les fichiers HTML...${NC}"
  find "${SOURCE_DIR}" -type f -name "*.html" | xargs grep -l "\.jpg\|\.jpeg" | while read file; do
    echo -e "${BLUE}Traitement du fichier: $file${NC}"
    # Remplacer les extensions jpg/jpeg par webp
    sed -i 's/\.jpg"/\.webp"/g' "$file"
    sed -i "s/\.jpg'/\.webp'/g" "$file"
    sed -i 's/\.jpeg"/\.webp"/g' "$file"
    sed -i "s/\.jpeg'/\.webp'/g" "$file"
  done
fi

# Mise à jour des références dans les fichiers JS (pour les applications dynamiques)
echo -e "${YELLOW}Mise à jour des références dans les fichiers JS/JSX...${NC}"
find "." -type f -name "*.js" -o -name "*.jsx" | xargs grep -l "\.jpg\|\.jpeg" | while read file; do
  echo -e "${BLUE}Traitement du fichier: $file${NC}"
  # Remplacer les extensions jpg/jpeg par webp
  sed -i 's/\.jpg"/\.webp"/g' "$file"
  sed -i "s/\.jpg'/\.webp'/g" "$file"
  sed -i 's/\.jpeg"/\.webp"/g' "$file"
  sed -i "s/\.jpeg'/\.webp'/g" "$file"
done

# Mise à jour des références dans les fichiers TS/TSX (pour les applications React/Next.js avec TypeScript)
echo -e "${YELLOW}Mise à jour des références dans les fichiers TS/TSX...${NC}"
find "." -type f -name "*.ts" -o -name "*.tsx" | xargs grep -l "\.jpg\|\.jpeg" | while read file; do
  echo -e "${BLUE}Traitement du fichier: $file${NC}"
  # Remplacer les extensions jpg/jpeg par webp
  sed -i 's/\.jpg"/\.webp"/g' "$file"
  sed -i "s/\.jpg'/\.webp'/g" "$file"
  sed -i 's/\.jpeg"/\.webp"/g' "$file"
  sed -i "s/\.jpeg'/\.webp'/g" "$file"
done

# Générer rapport
echo -e "\n${GREEN}=== Rapport de conversion ===${NC}"
echo -e "Images converties: $CONVERTED"
echo -e "Images WebP déjà existantes: $ALREADY_EXIST"
echo -e "Erreurs de conversion: $ERRORS"

echo -e "\n${GREEN}=== Conversion terminée avec succès ===${NC}"
echo -e "${BLUE}Si des images ne s'affichent toujours pas, vérifiez les références dans votre code.${NC}"
echo -e "${YELLOW}Les images originales ont été sauvegardées dans: $ORIGINALS${NC}"

# Si nous travaillons dans le dossier out, mettons à jour l'archive ZIP
if [ "${SOURCE_DIR}" == "./out" ]; then
  echo -e "${YELLOW}Mise à jour de l'archive ZIP pour le déploiement...${NC}"
  rm -f site-hostinger-optimized.zip
  cd out
  zip -r ../site-hostinger-optimized.zip .
  cd ..

  if [ $? -eq 0 ]; then
    ZIP_SIZE=$(du -sh site-hostinger-optimized.zip | cut -f1)
    echo -e "${GREEN}Archive ZIP mise à jour: site-hostinger-optimized.zip (${ZIP_SIZE})${NC}"
  else
    echo -e "${RED}Erreur lors de la création de l'archive ZIP.${NC}"
  fi
fi 