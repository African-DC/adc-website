#!/bin/bash

# Script pour générer des versions WebP des images
# Usage: bash scripts/create-webp-versions.sh

# Couleurs pour le terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Génération des versions WebP des images ===${NC}"
echo -e "${BLUE}==========================================${NC}"

# Vérifier si le dossier out existe
if [ ! -d "./out" ]; then
  echo -e "${RED}Erreur: Le dossier 'out' n'existe pas. Exécutez d'abord 'npm run deploy-hostinger'.${NC}"
  exit 1
fi

# Vérifier si cwebp (WebP) est installé
command -v cwebp >/dev/null 2>&1 || {
  echo -e "${YELLOW}⚠️ cwebp n'est pas installé. Installation nécessaire pour créer des versions WebP.${NC}"
  echo -e "${YELLOW}   Vous pouvez l'installer avec: sudo apt-get install webp${NC}"
  exit 1
}

# Compter le nombre total d'images à convertir
TOTAL_IMAGES=$(find ./out/img -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | wc -l)
echo -e "${BLUE}Nombre total d'images à convertir: ${TOTAL_IMAGES}${NC}"

# Compteur pour suivi
COUNTER=0
CONVERTED=0

# Fonction pour convertir une image en WebP
convert_to_webp() {
  local input_file=$1
  local output_file="${input_file%.*}.webp"
  
  # Incrémenter le compteur
  COUNTER=$((COUNTER + 1))
  
  # Si le fichier WebP existe déjà et est plus récent que l'original, le sauter
  if [ -f "$output_file" ] && [ "$output_file" -nt "$input_file" ]; then
    echo -e "${YELLOW}[$COUNTER/$TOTAL_IMAGES] Fichier déjà converti: $output_file${NC}"
    return
  fi
  
  # Afficher le progrès
  echo -e "${BLUE}[$COUNTER/$TOTAL_IMAGES] Conversion de $input_file vers WebP...${NC}"
  
  # Déterminer la qualité en fonction de la taille du fichier
  local file_size=$(stat -c%s "$input_file")
  local quality=80
  
  # Pour les gros fichiers, utiliser une qualité inférieure
  if [ $file_size -gt 1000000 ]; then
    quality=75
  elif [ $file_size -gt 500000 ]; then
    quality=78
  fi
  
  # Convertir l'image en WebP avec cwebp
  cwebp -quiet -q $quality "$input_file" -o "$output_file"
  
  if [ $? -eq 0 ]; then
    CONVERTED=$((CONVERTED + 1))
    
    # Calculer la réduction de taille
    orig_size=$(stat -c%s "$input_file")
    webp_size=$(stat -c%s "$output_file")
    reduction=$(( (orig_size - webp_size) * 100 / orig_size ))
    
    echo -e "${GREEN}Converti: $output_file (réduction: $reduction%)${NC}"
  else
    echo -e "${RED}Erreur de conversion: $input_file${NC}"
  fi
}

# Parcourir toutes les images et les convertir
find ./out/img -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read img; do
  convert_to_webp "$img"
done

# Afficher un résumé
echo -e "${GREEN}=== Conversion terminée ===${NC}"
echo -e "${GREEN}Images converties: $CONVERTED / $TOTAL_IMAGES${NC}"

# Mettre à jour l'archive ZIP
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

echo -e "${GREEN}=== Génération des versions WebP terminée avec succès ===${NC}" 