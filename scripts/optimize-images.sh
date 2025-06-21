#!/bin/bash

# Script pour optimiser les images et générer les versions AVIF manquantes
# Usage: bash scripts/optimize-images.sh

# Couleurs pour le terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Optimisation des images et génération des versions AVIF ===${NC}"
echo -e "${BLUE}=======================================================${NC}"

# Vérifier si le dossier out/img existe
if [ ! -d "./out/img" ]; then
  echo -e "${RED}Erreur: Le dossier 'out/img' n'existe pas. Exécutez d'abord 'npm run deploy-hostinger'.${NC}"
  exit 1
fi

# Vérifier si les outils nécessaires sont installés
command -v convert >/dev/null 2>&1 || {
  echo -e "${YELLOW}⚠️ ImageMagick n'est pas installé. Installation recommandée pour une meilleure optimisation.${NC}"
  echo -e "${YELLOW}   Pour installer: sudo apt-get install imagemagick${NC}"
}

command -v jpegoptim >/dev/null 2>&1 || {
  echo -e "${YELLOW}⚠️ jpegoptim n'est pas installé. Installation recommandée pour une meilleure optimisation.${NC}"
  echo -e "${YELLOW}   Pour installer: sudo apt-get install jpegoptim${NC}"
}

command -v optipng >/dev/null 2>&1 || {
  echo -e "${YELLOW}⚠️ optipng n'est pas installé. Installation recommandée pour une meilleure optimisation.${NC}"
  echo -e "${YELLOW}   Pour installer: sudo apt-get install optipng${NC}"
}

command -v avifenc >/dev/null 2>&1 || {
  echo -e "${YELLOW}⚠️ libavif-tools n'est pas installé. Nécessaire pour générer des images AVIF.${NC}"
  echo -e "${YELLOW}   Pour installer: sudo apt-get install libavif-tools${NC}"
  echo -e "${RED}Impossible de continuer sans libavif-tools pour générer des versions AVIF.${NC}"
  exit 1
}

# Créer un dossier pour les originaux
mkdir -p ./out/img/originals

# 1. Corriger l'image manquante de l'équipe
echo -e "${BLUE}Correction de l'image manquante de l'équipe...${NC}"
if [ -f "./out/img/TEAM_ADC/Arvigne N'guessan Integrateur de solution.jpg" ]; then
  # Créer un lien symbolique avec le nom court
  ln -sf "Arvigne N'guessan Integrateur de solution.jpg" "./out/img/TEAM_ADC/Arvigne N"
  echo -e "${GREEN}✓ Lien symbolique créé pour l'image de l'équipe manquante.${NC}"
else
  echo -e "${RED}❌ Image source non trouvée pour créer le lien symbolique.${NC}"
fi

# 2. Optimiser les images volumineuses
echo -e "${BLUE}Optimisation des images volumineuses...${NC}"

# Trouver et optimiser les images JPG/JPEG volumineuses
find ./out/img -type f \( -name "*.jpg" -o -name "*.jpeg" \) -size +500k | while read -r img; do
  echo "Optimisation de $img"
  cp "$img" "./out/img/originals/$(basename "$img")"
  if command -v jpegoptim >/dev/null 2>&1; then
    jpegoptim --max=85 --strip-all --all-progressive "$img"
  elif command -v convert >/dev/null 2>&1; then
    convert "$img" -quality 85 -strip "$img"
  fi
done

# Trouver et optimiser les images PNG volumineuses
find ./out/img -type f -name "*.png" -size +500k | while read -r img; do
  echo "Optimisation de $img"
  cp "$img" "./out/img/originals/$(basename "$img")"
  if command -v optipng >/dev/null 2>&1; then
    optipng -o5 "$img"
  elif command -v convert >/dev/null 2>&1; then
    convert "$img" -quality 85 -strip "$img"
  fi
done

# Trouver et optimiser les images WebP volumineuses
find ./out/img -type f -name "*.webp" -size +500k | while read -r img; do
  echo "Optimisation de $img"
  cp "$img" "./out/img/originals/$(basename "$img")"
  if command -v convert >/dev/null 2>&1; then
    convert "$img" -quality 85 -strip "$img"
  fi
done

# 3. Générer les versions AVIF manquantes
echo -e "${BLUE}Génération des versions AVIF manquantes...${NC}"

# Pour JPG/JPEG
find ./out/img -type f \( -name "*.jpg" -o -name "*.jpeg" \) | while read -r img; do
  avif_img="${img%.*}.avif"
  if [ ! -f "$avif_img" ]; then
    echo "Création AVIF pour $img"
    avifenc -s 7 "$img" "$avif_img"
  fi
done

# Pour PNG
find ./out/img -type f -name "*.png" | while read -r img; do
  avif_img="${img%.*}.avif"
  if [ ! -f "$avif_img" ]; then
    echo "Création AVIF pour $img"
    avifenc -s 7 "$img" "$avif_img"
  fi
done

# Pour WebP
find ./out/img -type f -name "*.webp" | while read -r img; do
  avif_img="${img%.*}.avif"
  if [ ! -f "$avif_img" ]; then
    echo "Création AVIF pour $img"
    avifenc -s 7 "$img" "$avif_img"
  fi
done

# 4. Corriger les problèmes d'espaces dans les noms de fichiers et dossiers
echo -e "${BLUE}Correction des problèmes d'espaces dans les noms de fichiers...${NC}"

# Corriger les dossiers avec espace à la fin
find ./out/img -type d -name "* " | while read -r dir; do
  # Créer un nouveau nom sans espace à la fin
  newdir=$(echo "$dir" | sed 's/ *$//')
  if [ "$dir" != "$newdir" ]; then
    echo "Renommage du dossier: $dir -> $newdir"
    mv "$dir" "$newdir"
  fi
done

# Corriger les images avec espace à la fin
find ./out/img -type f -name "* " | while read -r file; do
  # Créer un nouveau nom sans espace à la fin
  newfile=$(echo "$file" | sed 's/ *$//')
  if [ "$file" != "$newfile" ]; then
    echo "Renommage du fichier: $file -> $newfile"
    mv "$file" "$newfile"
  fi
done

# 5. Mettre à jour les archives de déploiement
echo -e "${BLUE}Mise à jour des archives de déploiement...${NC}"

# Créer une nouvelle archive ZIP
if [ -f "site-hostinger-optimized.zip" ]; then
  rm site-hostinger-optimized.zip
fi

cd out
zip -r ../site-hostinger-optimized.zip . -x "*.DS_Store" "*.git*"
cd ..

echo -e "${GREEN}✅ Optimisation des images terminée!${NC}"
echo -e "${GREEN}✅ Archive de déploiement mise à jour: site-hostinger-optimized.zip${NC}"

# Afficher la taille finale
echo -e "${BLUE}Taille finale du dossier out:${NC}"
du -sh ./out

echo -e "${BLUE}Taille de l'archive optimisée:${NC}"
du -sh site-hostinger-optimized.zip

echo -e "${GREEN}✅ Votre site est prêt à être déployé.${NC}"
echo -e "${GREEN}   Uploadez le fichier 'site-hostinger-optimized.zip' sur votre hébergeur et décompressez-le à la racine.${NC}" 