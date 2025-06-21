#!/bin/bash

# Script pour corriger les références aux images manquantes
# Usage: bash scripts/fix-missing-images.sh

# Couleurs pour le terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Correction des références aux images manquantes ===${NC}"
echo -e "${BLUE}=================================================${NC}"

# Vérifier que le dossier out existe
if [ ! -d "./out" ]; then
  echo -e "${RED}Erreur: Le dossier 'out' n'existe pas. Exécutez d'abord 'npm run deploy-hostinger'.${NC}"
  exit 1
fi

# Correction 1: Problème avec les apostrophes encodées dans le nom d'un membre de l'équipe
echo -e "${YELLOW}Correction du problème avec l'encodage des apostrophes...${NC}"
find ./out -type f -name "*.html" -exec sed -i "s|N\&\#x27;guessan|N'guessan|g" {} \;
if [ $? -eq 0 ]; then
  echo -e "${GREEN}Encodage des apostrophes corrigé.${NC}"
else
  echo -e "${RED}Erreur lors de la correction de l'encodage des apostrophes.${NC}"
fi

# Correction 2: Image CTA_image.jpg manquante
echo -e "${YELLOW}Vérification de l'existence de l'image CTA_image.jpg...${NC}"
if [ ! -f "./out/img/CTA_image.jpg" ]; then
  echo -e "${YELLOW}Image CTA_image.jpg manquante, utilisation d'une image de substitution...${NC}"
  
  # Utiliser une image existante comme substitution
  # Chercher une image adaptée dans les dossiers d'images
  SUBSTITUTE_IMAGE=$(find ./out/img -type f -name "*.jpg" | grep -v "header_img" | sort | head -n 1)
  
  if [ -n "$SUBSTITUTE_IMAGE" ]; then
    # Créer une copie de cette image comme CTA_image.jpg
    cp "$SUBSTITUTE_IMAGE" "./out/img/CTA_image.jpg"
    echo -e "${GREEN}Image de substitution créée: ./out/img/CTA_image.jpg${NC}"
  else
    echo -e "${RED}Aucune image de substitution trouvée.${NC}"
  fi
else
  echo -e "${GREEN}L'image CTA_image.jpg existe déjà.${NC}"
fi

# Correction 3: Créer des versions WebP pour les nouvelles images
echo -e "${YELLOW}Création de versions WebP pour les nouvelles images...${NC}"
if [ -f "./out/img/CTA_image.jpg" ]; then
  if command -v cwebp >/dev/null 2>&1; then
    cwebp -quiet -q 80 "./out/img/CTA_image.jpg" -o "./out/img/CTA_image.webp"
    echo -e "${GREEN}Version WebP créée pour CTA_image.jpg${NC}"
  else
    echo -e "${RED}cwebp non installé, impossible de créer des versions WebP.${NC}"
  fi
fi

# Mise à jour de l'archive ZIP
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
  exit 1
fi

echo -e "${GREEN}=== Correction des références terminée avec succès ===${NC}" 