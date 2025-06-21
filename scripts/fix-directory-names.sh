#!/bin/bash

# Script pour corriger les noms de dossiers avec des espaces en fin
# Usage: bash scripts/fix-directory-names.sh

# Couleurs pour le terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Correction des noms de dossiers avec espaces en fin ===${NC}"
echo -e "${BLUE}=================================================${NC}"

# Liste explicite des dossiers à renommer
declare -a dirs_to_fix=(
  "./public/img/clients "
  "./public/img/Nos_réalisations_dev "
)

# Si le dossier out existe, ajouter ses sous-dossiers à la liste
if [ -d "./out/img" ]; then
  dirs_to_fix+=(
    "./out/img/clients "
    "./out/img/Nos_réalisations_dev "
  )
fi

# Fonction pour corriger un nom de dossier spécifique
fix_directory_name() {
  local dir=$1
  
  if [ ! -d "$dir" ]; then
    echo -e "${YELLOW}Le dossier $dir n'existe pas. Ignoré.${NC}"
    return
  fi
  
  # Récupérer le nom sans l'espace final
  local new_name="${dir% }"
  
  echo -e "${BLUE}Renommage de '$dir' en '$new_name'${NC}"
  
  # Renommer le dossier avec la commande mv
  mv -v "$dir" "$new_name"
  
  if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Dossier renommé avec succès: $new_name${NC}"
  else
    echo -e "${RED}❌ Erreur lors du renommage du dossier: $dir${NC}"
  fi
}

# Corriger les noms de dossiers listés
echo -e "${YELLOW}Correction des dossiers spécifiés...${NC}"
for dir in "${dirs_to_fix[@]}"; do
  fix_directory_name "$dir"
done

# Pour être sûr, chercher également tous les dossiers avec espace à la fin
echo -e "${YELLOW}Recherche supplémentaire de dossiers avec espace à la fin...${NC}"

# Utiliser find avec -print0 pour gérer les espaces et les caractères spéciaux
find ./public/img -type d -name "* " -print0 | while IFS= read -r -d $'\0' dir; do
  new_name="${dir% }"
  echo -e "${BLUE}Renommage supplémentaire de '$dir' en '$new_name'${NC}"
  mv -v "$dir" "$new_name"
done

# Faire de même pour out/img s'il existe
if [ -d "./out/img" ]; then
  find ./out/img -type d -name "* " -print0 | while IFS= read -r -d $'\0' dir; do
    new_name="${dir% }"
    echo -e "${BLUE}Renommage supplémentaire de '$dir' en '$new_name'${NC}"
    mv -v "$dir" "$new_name"
  done
fi

echo -e "${GREEN}=== Correction des noms de dossiers terminée ===${NC}"
echo -e "${YELLOW}Note: Vous devrez peut-être mettre à jour les références à ces dossiers dans le code.${NC}"

# Vérification finale
echo -e "${BLUE}Vérification des dossiers après correction:${NC}"
ls -la ./public/img/ | grep "^d" 