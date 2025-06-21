#!/bin/bash

# Script pour optimiser davantage les images volumineuses avant le déploiement
# Usage: bash scripts/optimize-large-images.sh

# Couleurs pour le terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Optimisation supplémentaire des images pour le déploiement ===${NC}"
echo -e "${BLUE}=======================================================${NC}"

# Vérifier si le dossier out existe
if [ ! -d "./out" ]; then
  echo -e "${RED}Erreur: Le dossier 'out' n'existe pas. Exécutez d'abord 'npm run deploy-hostinger'.${NC}"
  exit 1
fi

# Vérifier si imagemagick est installé
command -v convert >/dev/null 2>&1 || {
  echo -e "${YELLOW}⚠️ ImageMagick n'est pas installé. Installation recommandée pour de meilleurs résultats.${NC}"
  echo -e "${YELLOW}⚠️ Vous pouvez l'installer avec: sudo apt-get install imagemagick${NC}"
  echo -e "${YELLOW}⚠️ Optimisation limitée sans cet outil.${NC}"
}

# Vérifier si jpegoptim est installé
command -v jpegoptim >/dev/null 2>&1 || {
  echo -e "${YELLOW}⚠️ jpegoptim n'est pas installé. Installation recommandée pour de meilleurs résultats.${NC}"
  echo -e "${YELLOW}⚠️ Vous pouvez l'installer avec: sudo apt-get install jpegoptim${NC}"
  echo -e "${YELLOW}⚠️ Optimisation limitée sans cet outil.${NC}"
}

# Vérifier si optipng est installé
command -v optipng >/dev/null 2>&1 || {
  echo -e "${YELLOW}⚠️ optipng n'est pas installé. Installation recommandée pour de meilleurs résultats.${NC}"
  echo -e "${YELLOW}⚠️ Vous pouvez l'installer avec: sudo apt-get install optipng${NC}"
  echo -e "${YELLOW}⚠️ Optimisation limitée sans cet outil.${NC}"
}

# Créer un dossier pour les originaux
ORIGINALS="./out/img/originals"
mkdir -p "$ORIGINALS"
echo -e "${GREEN}Dossier de sauvegarde créé: $ORIGINALS${NC}"

# Calculer la taille avant optimisation
TOTAL_SIZE_BEFORE=$(du -sh ./out/img | cut -f1)
echo -e "${YELLOW}Taille du dossier img avant optimisation: ${TOTAL_SIZE_BEFORE}${NC}"

# Nombre d'images traitées
PROCESSED=0
SKIPPED=0
SPACE_SAVED=0

# Trouver et traiter les images JPG/JPEG volumineuses (>500K)
echo -e "${YELLOW}Optimisation des images JPEG/JPG volumineuses...${NC}"
find ./out/img -type f \( -name "*.jpg" -o -name "*.jpeg" \) -size +500k | while read img; do
  # Obtenir la taille originale
  ORIGINAL_SIZE=$(stat -c%s "$img")
  
  # Créer une sauvegarde
  cp "$img" "$ORIGINALS/$(basename "$img")"
  
  # Optimiser l'image
  if command -v jpegoptim >/dev/null 2>&1; then
    echo -e "${BLUE}Optimisation de $img avec jpegoptim...${NC}"
    jpegoptim --max=80 --strip-all --all-progressive "$img"
  elif command -v convert >/dev/null 2>&1; then
    echo -e "${BLUE}Optimisation de $img avec ImageMagick...${NC}"
    convert "$img" -strip -interlace Plane -gaussian-blur 0.05 -quality 85% "$img"
  else
    echo -e "${YELLOW}Pas d'outils disponibles pour optimiser $img${NC}"
    SKIPPED=$((SKIPPED + 1))
    continue
  fi
  
  # Obtenir la nouvelle taille
  NEW_SIZE=$(stat -c%s "$img")
  SAVED=$((ORIGINAL_SIZE - NEW_SIZE))
  SPACE_SAVED=$((SPACE_SAVED + SAVED))
  SAVED_KB=$((SAVED / 1024))
  
  echo -e "${GREEN}✅ $img optimisé: $SAVED_KB KB économisés${NC}"
  PROCESSED=$((PROCESSED + 1))
done

# Trouver et traiter les images PNG volumineuses (>500K)
echo -e "${YELLOW}Optimisation des images PNG volumineuses...${NC}"
find ./out/img -type f -name "*.png" -size +500k | while read img; do
  # Obtenir la taille originale
  ORIGINAL_SIZE=$(stat -c%s "$img")
  
  # Créer une sauvegarde
  cp "$img" "$ORIGINALS/$(basename "$img")"
  
  # Optimiser l'image
  if command -v optipng >/dev/null 2>&1; then
    echo -e "${BLUE}Optimisation de $img avec optipng...${NC}"
    optipng -o3 "$img"
  elif command -v convert >/dev/null 2>&1; then
    echo -e "${BLUE}Optimisation de $img avec ImageMagick...${NC}"
    convert "$img" -strip -define png:compression-level=9 "$img"
  else
    echo -e "${YELLOW}Pas d'outils disponibles pour optimiser $img${NC}"
    SKIPPED=$((SKIPPED + 1))
    continue
  fi
  
  # Obtenir la nouvelle taille
  NEW_SIZE=$(stat -c%s "$img")
  SAVED=$((ORIGINAL_SIZE - NEW_SIZE))
  SPACE_SAVED=$((SPACE_SAVED + SAVED))
  SAVED_KB=$((SAVED / 1024))
  
  echo -e "${GREEN}✅ $img optimisé: $SAVED_KB KB économisés${NC}"
  PROCESSED=$((PROCESSED + 1))
done

# Optimisation des webp également
echo -e "${YELLOW}Optimisation des images WEBP volumineuses...${NC}"
find ./out/img -type f -name "*.webp" -size +500k | while read img; do
  # Obtenir la taille originale
  ORIGINAL_SIZE=$(stat -c%s "$img")
  
  # Créer une sauvegarde
  cp "$img" "$ORIGINALS/$(basename "$img")"
  
  # Optimiser l'image si cwebp est disponible
  if command -v cwebp >/dev/null 2>&1; then
    echo -e "${BLUE}Réoptimisation de $img avec cwebp...${NC}"
    # Convertir temporairement à PNG
    TMP_FILE=$(mktemp --suffix=.png)
    convert "$img" "$TMP_FILE"
    cwebp -q 75 "$TMP_FILE" -o "$img"
    rm "$TMP_FILE"
  elif command -v convert >/dev/null 2>&1; then
    echo -e "${BLUE}Optimisation de $img avec ImageMagick...${NC}"
    convert "$img" -quality 75 "$img"
  else
    echo -e "${YELLOW}Pas d'outils disponibles pour optimiser $img${NC}"
    SKIPPED=$((SKIPPED + 1))
    continue
  fi
  
  # Obtenir la nouvelle taille
  NEW_SIZE=$(stat -c%s "$img")
  SAVED=$((ORIGINAL_SIZE - NEW_SIZE))
  SPACE_SAVED=$((SPACE_SAVED + SAVED))
  SAVED_KB=$((SAVED / 1024))
  
  echo -e "${GREEN}✅ $img optimisé: $SAVED_KB KB économisés${NC}"
  PROCESSED=$((PROCESSED + 1))
done

# Recherche de doublons d'images
echo -e "${YELLOW}Recherche et traitement des doublons d'images...${NC}"

# Cas particulier connu: app_Plateforme.png et Plateforme de business to business.png
if [ -f "./out/img/app_Plateforme.png" ] && [ -f "./out/img/Nos_réalisations_dev /Plateforme de business to business.png" ]; then
  echo -e "${BLUE}Optimisation du doublon app_Plateforme.png...${NC}"
  ORIGINAL_SIZE=$(stat -c%s "./out/img/app_Plateforme.png")
  
  # Garder seulement l'image optimisée
  if [ -f "./out/img/app_Plateforme.webp" ]; then
    echo -e "${BLUE}Déjà optimisé avec version WebP disponible. Suppression de l'original PNG...${NC}"
    cp "./out/img/app_Plateforme.png" "$ORIGINALS/app_Plateforme.png"
    rm "./out/img/app_Plateforme.png"
    SPACE_SAVED=$((SPACE_SAVED + ORIGINAL_SIZE))
    SAVED_KB=$((ORIGINAL_SIZE / 1024))
    echo -e "${GREEN}✅ Doublon supprimé: $SAVED_KB KB économisés${NC}"
    PROCESSED=$((PROCESSED + 1))
  fi
fi

# Calculer la taille après optimisation
TOTAL_SIZE_AFTER=$(du -sh ./out/img | cut -f1)

# Générer un rapport
echo -e "\n${GREEN}=== Rapport d'optimisation ===${NC}"
echo -e "Images traitées: $PROCESSED"
echo -e "Images ignorées: $SKIPPED"
SPACE_SAVED_MB=$(echo "scale=2; $SPACE_SAVED/1048576" | bc)
echo -e "Espace économisé: $SPACE_SAVED_MB MB"
echo -e "Taille du dossier img avant: ${TOTAL_SIZE_BEFORE}"
echo -e "Taille du dossier img après: ${TOTAL_SIZE_AFTER}"

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

echo -e "${GREEN}=== Optimisation des images terminée avec succès ===${NC}"
echo -e "${BLUE}Pour les meilleures performances, utilisez l'archive site-hostinger-optimized.zip pour le déploiement.${NC}"
echo -e "${YELLOW}Si certaines images ont été trop compressées, vous pouvez les restaurer depuis le dossier $ORIGINALS${NC}" 