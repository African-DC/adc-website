#!/bin/bash

# Script pour corriger l'image manquante Logo Komate marine logistics-04 (1).jpg
# Usage: bash scripts/fix-komate-image.sh

# Couleurs pour le terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Correction de l'image Komate manquante ===${NC}"
echo -e "${BLUE}=================================================${NC}"

# Vérifier que le dossier out existe
if [ ! -d "./out" ]; then
  echo -e "${RED}Erreur: Le dossier 'out' n'existe pas. Exécutez d'abord 'npm run deploy-hostinger'.${NC}"
  exit 1
fi

# Vérifier l'existence de l'image LogoKomatemarine.jpg et l'utiliser comme substitut
echo -e "${YELLOW}Vérification des alternatives pour l'image Komate manquante...${NC}"

SOURCE_IMAGE="./out/img/header_img/LogoKomatemarine.jpg"
TARGET_IMAGE="./out/img/header_img/Logo Komate marine logistics-04 (1).jpg"
TARGET_DIR="./out/img/header_img"

if [ ! -d "$TARGET_DIR" ]; then
  echo -e "${YELLOW}Création du répertoire $TARGET_DIR...${NC}"
  mkdir -p "$TARGET_DIR"
fi

if [ -f "$SOURCE_IMAGE" ]; then
  echo -e "${GREEN}Image source trouvée: $SOURCE_IMAGE${NC}"
  cp "$SOURCE_IMAGE" "$TARGET_IMAGE"
  echo -e "${GREEN}Image copiée vers: $TARGET_IMAGE${NC}"
  
  # Création de la version WebP si cwebp est installé
  if command -v cwebp >/dev/null 2>&1; then
    WEBP_TARGET="${TARGET_IMAGE%.*}.webp"
    cwebp -quiet -q 80 "$TARGET_IMAGE" -o "$WEBP_TARGET"
    echo -e "${GREEN}Version WebP créée: $WEBP_TARGET${NC}"
  else
    echo -e "${YELLOW}cwebp non installé, impossible de créer la version WebP.${NC}"
  fi
else
  echo -e "${YELLOW}Image source LogoKomatemarine.jpg non trouvée, recherche d'alternatives...${NC}"
  
  # Chercher une image de logo existante
  ALTERNATIVE_LOGO=$(find ./out/img -type f -name "*.jpg" | grep -E "logo|Logo" | head -n 1)
  
  if [ -n "$ALTERNATIVE_LOGO" ]; then
    echo -e "${GREEN}Image alternative trouvée: $ALTERNATIVE_LOGO${NC}"
    cp "$ALTERNATIVE_LOGO" "$TARGET_IMAGE"
    echo -e "${GREEN}Image copiée vers: $TARGET_IMAGE${NC}"
    
    # Création de la version WebP si cwebp est installé
    if command -v cwebp >/dev/null 2>&1; then
      WEBP_TARGET="${TARGET_IMAGE%.*}.webp"
      cwebp -quiet -q 80 "$TARGET_IMAGE" -o "$WEBP_TARGET"
      echo -e "${GREEN}Version WebP créée: $WEBP_TARGET${NC}"
    else
      echo -e "${YELLOW}cwebp non installé, impossible de créer la version WebP.${NC}"
    fi
  else
    # Créer une image vide avec texte "Logo" comme solution de dernier recours
    echo -e "${YELLOW}Aucune image alternative trouvée, création d'une image de substitution...${NC}"
    
    if command -v convert >/dev/null 2>&1; then
      convert -size 300x150 xc:white -fill black -gravity center -pointsize 24 -annotate 0 "Logo Komate Marine" "$TARGET_IMAGE"
      echo -e "${GREEN}Image de substitution créée: $TARGET_IMAGE${NC}"
      
      # Création de la version WebP si cwebp est installé
      if command -v cwebp >/dev/null 2>&1; then
        WEBP_TARGET="${TARGET_IMAGE%.*}.webp"
        cwebp -quiet -q 80 "$TARGET_IMAGE" -o "$WEBP_TARGET"
        echo -e "${GREEN}Version WebP créée: $WEBP_TARGET${NC}"
      else
        echo -e "${YELLOW}cwebp non installé, impossible de créer la version WebP.${NC}"
      fi
    else
      echo -e "${RED}ImageMagick non installé, impossible de créer une image de substitution.${NC}"
      echo -e "${RED}Installez ImageMagick avec: sudo apt-get install imagemagick${NC}"
      exit 1
    fi
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

echo -e "${GREEN}=== Correction de l'image Komate terminée avec succès ===${NC}"
echo -e "${YELLOW}Vous pouvez maintenant relancer la commande de déploiement: npm run deploy-production${NC}" 