#!/bin/bash

# Script complet pour le déploiement en production avec toutes les optimisations
# Usage: bash scripts/deploy-production.sh

# Couleurs pour le terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=================================================================${NC}"
echo -e "${BLUE}=== Déploiement complet pour la production avec optimisations ===${NC}"
echo -e "${BLUE}=================================================================${NC}\n"

# Variables pour le suivi des erreurs
ERRORS=0
START_TIME=$(date +%s)

# Étape 1: Nettoyage initial
echo -e "${YELLOW}[1/7] Nettoyage initial...${NC}"
bash scripts/clean-output.sh
if [ $? -ne 0 ]; then
  echo -e "${RED}Avertissement: Problème lors du nettoyage initial. On continue...${NC}"
  ERRORS=$((ERRORS+1))
else
  echo -e "${GREEN}✅ Nettoyage terminé${NC}\n"
fi

# Étape 2: Déploiement Hostinger de base
echo -e "${YELLOW}[2/7] Génération du build et préparation des fichiers...${NC}"
bash scripts/hostinger-deploy.sh
if [ $? -ne 0 ]; then
  echo -e "${RED}Erreur critique lors du déploiement de base. Arrêt du script.${NC}"
  exit 1
else
  echo -e "${GREEN}✅ Build généré et préparé avec succès${NC}\n"
fi

# Étape 3: Optimisation des images volumineuses
echo -e "${YELLOW}[3/7] Optimisation des images volumineuses...${NC}"
bash scripts/optimize-large-images.sh
if [ $? -ne 0 ]; then
  echo -e "${RED}Avertissement: Problème lors de l'optimisation des images. On continue...${NC}"
  ERRORS=$((ERRORS+1))
else
  echo -e "${GREEN}✅ Images optimisées avec succès${NC}\n"
fi

# Étape 4: Nettoyage du cache
echo -e "${YELLOW}[4/7] Nettoyage des fichiers de cache...${NC}"
bash scripts/cleanup-cache.sh
if [ $? -ne 0 ]; then
  echo -e "${RED}Avertissement: Problème lors du nettoyage du cache. On continue...${NC}"
  ERRORS=$((ERRORS+1))
else
  echo -e "${GREEN}✅ Cache nettoyé avec succès${NC}\n"
fi

# Étape 5: Création de versions WebP
echo -e "${YELLOW}[5/7] Création de versions WebP pour les images...${NC}"
command -v cwebp >/dev/null 2>&1
if [ $? -ne 0 ]; then
  echo -e "${YELLOW}⚠️ cwebp n'est pas installé. Installation avec: sudo apt-get install webp${NC}"
  echo -e "${YELLOW}⚠️ Cette étape est ignorée. Installation recommandée pour les futurs déploiements.${NC}"
  ERRORS=$((ERRORS+1))
else
  bash scripts/create-webp-versions.sh
  if [ $? -ne 0 ]; then
    echo -e "${RED}Avertissement: Problème lors de la création des versions WebP. On continue...${NC}"
    ERRORS=$((ERRORS+1))
  else
    echo -e "${GREEN}✅ Versions WebP créées avec succès${NC}\n"
  fi
fi

# Étape 6: Correction des références manquantes
echo -e "${YELLOW}[6/7] Correction des références manquantes...${NC}"
bash scripts/fix-missing-images.sh
if [ $? -ne 0 ]; then
  echo -e "${RED}Avertissement: Problème lors de la correction des références. On continue...${NC}"
  ERRORS=$((ERRORS+1))
else
  echo -e "${GREEN}✅ Références corrigées avec succès${NC}\n"
fi

# Étape 7: Vérification finale des images
echo -e "${YELLOW}[7/7] Vérification finale des images...${NC}"
node scripts/verify-images.mjs
if [ $? -ne 0 ]; then
  echo -e "${RED}Avertissement: Problèmes détectés lors de la vérification des images.${NC}"
  echo -e "${RED}Vérifiez le rapport ci-dessus et corrigez manuellement si nécessaire.${NC}"
  ERRORS=$((ERRORS+1))
else
  echo -e "${GREEN}✅ Vérification des images réussie${NC}\n"
fi

# Calcul du temps écoulé
END_TIME=$(date +%s)
ELAPSED=$((END_TIME - START_TIME))
MINUTES=$((ELAPSED / 60))
SECONDS=$((ELAPSED % 60))

# Résumé
echo -e "\n${BLUE}=================================================================${NC}"
echo -e "${GREEN}=== Déploiement complet terminé ! ===${NC}"
echo -e "${BLUE}=================================================================${NC}"

# Afficher les tailles
OUT_SIZE=$(du -sh out | cut -f1)
ZIP_SIZE=$(du -sh site-hostinger-optimized.zip | cut -f1)
TAR_SIZE=$(du -sh site-complet.tar.gz | cut -f1)

echo -e "Temps écoulé: ${MINUTES}m ${SECONDS}s"
echo -e "Taille du dossier out: ${OUT_SIZE}"
echo -e "Taille de l'archive ZIP: ${ZIP_SIZE}"
echo -e "Taille de l'archive TAR.GZ: ${TAR_SIZE}"

if [ $ERRORS -gt 0 ]; then
  echo -e "${YELLOW}⚠️ Le déploiement s'est terminé avec ${ERRORS} avertissement(s).${NC}"
  echo -e "${YELLOW}⚠️ Vérifiez les messages ci-dessus pour plus de détails.${NC}"
else
  echo -e "${GREEN}✅ Le déploiement s'est terminé sans erreur !${NC}"
fi

echo -e "\n${BLUE}Instructions pour le déploiement:${NC}"
echo -e "1. Pour un déploiement facile: Utilisez l'archive ${YELLOW}site-hostinger-optimized.zip${NC}"
echo -e "2. Pour un déploiement avec fichiers cachés: Utilisez l'archive ${YELLOW}site-complet.tar.gz${NC}"
echo -e "3. Consultez ${YELLOW}DEPLOY-HOSTINGER.md${NC} pour des instructions détaillées" 