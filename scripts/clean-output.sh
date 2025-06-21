#!/bin/bash

# Script pour nettoyer les anciens builds et préparer le déploiement
# Usage: bash scripts/clean-output.sh

# Couleurs pour le terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Nettoyage des anciens builds ===${NC}"

# Supprimer le dossier out s'il existe
if [ -d "./out" ]; then
  echo -e "${YELLOW}Suppression du dossier out...${NC}"
  rm -rf ./out
  echo -e "${GREEN}Dossier out supprimé.${NC}"
else
  echo -e "${YELLOW}Le dossier out n'existe pas. Rien à supprimer.${NC}"
fi

# Supprimer le dossier .next s'il existe
if [ -d "./.next" ]; then
  echo -e "${YELLOW}Suppression du dossier .next...${NC}"
  rm -rf ./.next
  echo -e "${GREEN}Dossier .next supprimé.${NC}"
else
  echo -e "${YELLOW}Le dossier .next n'existe pas. Rien à supprimer.${NC}"
fi

# Supprimer les archives ZIP et TAR si elles existent
if [ -f "./site-hostinger-optimized.zip" ]; then
  echo -e "${YELLOW}Suppression de l'archive site-hostinger-optimized.zip...${NC}"
  rm ./site-hostinger-optimized.zip
  echo -e "${GREEN}Archive site-hostinger-optimized.zip supprimée.${NC}"
fi

if [ -f "./site-complet.tar.gz" ]; then
  echo -e "${YELLOW}Suppression de l'archive site-complet.tar.gz...${NC}"
  rm ./site-complet.tar.gz
  echo -e "${GREEN}Archive site-complet.tar.gz supprimée.${NC}"
fi

echo -e "${GREEN}=== Nettoyage terminé ===${NC}" 