#!/bin/bash

# Script pour nettoyer le dossier cache avant le déploiement final
# Usage: bash scripts/cleanup-cache.sh

# Couleurs pour le terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Nettoyage du dossier cache avant déploiement ===${NC}"
echo -e "${BLUE}==============================================${NC}"

# Vérifier que le dossier out existe
if [ ! -d "./out" ]; then
  echo -e "${RED}Erreur: Le dossier 'out' n'existe pas. Exécutez d'abord 'npm run deploy-hostinger'.${NC}"
  exit 1
fi

# Calculer la taille avant nettoyage
TOTAL_SIZE_BEFORE=$(du -sh ./out | cut -f1)
echo -e "${YELLOW}Taille du dossier out avant nettoyage: ${TOTAL_SIZE_BEFORE}${NC}"

# Vérifier si le dossier cache existe
if [ -d "./out/cache" ]; then
  CACHE_SIZE=$(du -sh ./out/cache | cut -f1)
  echo -e "${YELLOW}Suppression du dossier cache (${CACHE_SIZE})...${NC}"
  
  # Supprimer le dossier cache 
  rm -rf ./out/cache
  
  if [ $? -eq 0 ]; then
    echo -e "${GREEN}Dossier cache supprimé avec succès.${NC}"
  else
    echo -e "${RED}Erreur lors de la suppression du dossier cache.${NC}"
    exit 1
  fi
else
  echo -e "${YELLOW}Le dossier cache n'existe pas. Rien à nettoyer.${NC}"
fi

# Calculer la taille après nettoyage
TOTAL_SIZE_AFTER=$(du -sh ./out | cut -f1)
echo -e "${GREEN}Taille du dossier out après nettoyage: ${TOTAL_SIZE_AFTER}${NC}"

# Recréer l'archive ZIP
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

echo -e "${GREEN}=== Nettoyage terminé avec succès ===${NC}"
echo -e "${BLUE}Le dossier out est maintenant prêt pour le déploiement.${NC}"
echo -e "${BLUE}Utilisez l'archive site-hostinger-optimized.zip pour le déploiement.${NC}" 