#!/bin/bash

# Couleurs pour le terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Déploiement sur Hostinger ===${NC}"
echo -e "${BLUE}===============================${NC}"

# 1. Nettoyer l'ancien build
echo -e "${YELLOW}[1/7] Nettoyage des anciens builds...${NC}"
bash scripts/clean-output.sh
if [ $? -ne 0 ]; then
  echo -e "${RED}Erreur lors du nettoyage. Arrêt du script.${NC}"
  exit 1
fi
echo -e "${GREEN}Nettoyage terminé avec succès.${NC}\n"

# 2. Créer le build
echo -e "${YELLOW}[2/7] Création du build...${NC}"
npm run build
if [ $? -ne 0 ]; then
  echo -e "${RED}Erreur lors du build. Arrêt du script.${NC}"
  exit 1
fi
echo -e "${GREEN}Build créé avec succès.${NC}\n"

# 3. Copier le contenu dans le dossier out
echo -e "${YELLOW}[3/7] Copie du contenu dans le dossier out...${NC}"
# Créer le dossier out s'il n'existe pas
mkdir -p out
# Copier tout le contenu de .next/
cp -r .next/. out/
if [ $? -ne 0 ]; then
  echo -e "${RED}Erreur lors de la copie du contenu. Arrêt du script.${NC}"
  exit 1
fi
echo -e "${GREEN}Contenu copié avec succès.${NC}\n"

# 4. Corriger les chemins d'images
echo -e "${YELLOW}[4/7] Correction des chemins d'images...${NC}"
node scripts/fix-images-paths.mjs
if [ $? -ne 0 ]; then
  echo -e "${RED}Erreur lors de la correction des chemins d'images. Arrêt du script.${NC}"
  exit 1
fi
echo -e "${GREEN}Chemins d'images corrigés avec succès.${NC}\n"

# 5. Ajouter les fichiers et configurations spécifiques
echo -e "${YELLOW}[5/7] Ajout des fichiers et configurations spécifiques...${NC}"
# Exécuter le script de préparation pour l'export
node scripts/prepare-export.mjs
if [ $? -ne 0 ]; then
  echo -e "${RED}Erreur lors de la préparation des fichiers. Arrêt du script.${NC}"
  exit 1
fi
echo -e "${GREEN}Fichiers et configurations ajoutés avec succès.${NC}\n"

# 6. Vérifier les permissions et finaliser
echo -e "${YELLOW}[6/7] Vérification des permissions et finalisation...${NC}"
bash scripts/check-permissions.sh
if [ $? -ne 0 ]; then
  echo -e "${RED}Erreur lors de la vérification des permissions. Arrêt du script.${NC}"
  exit 1
fi

# 7. Générer le sitemap et s'assurer qu'il est copié
echo -e "${YELLOW}[7/7] Génération et copie du sitemap...${NC}"
node scripts/generate-sitemap.mjs
if [ $? -ne 0 ]; then
  echo -e "${RED}Erreur lors de la génération du sitemap. Continuez manuellement.${NC}"
else
  # S'assurer que le sitemap est dans le dossier out
  if [ -f "public/sitemap.xml" ] && [ ! -f "out/sitemap.xml" ]; then
    cp public/sitemap.xml out/
    echo -e "${GREEN}Sitemap copié dans le dossier out.${NC}"
  fi
fi

# Création d'un fichier zip pour un déploiement facile
echo -e "${YELLOW}Création d'une archive ZIP optimisée pour le déploiement...${NC}"
cd out
zip -r ../site-hostinger-optimized.zip .
cd ..
if [ $? -ne 0 ]; then
  echo -e "${RED}Erreur lors de la création de l'archive ZIP. Continuez manuellement.${NC}"
else
  ZIP_SIZE=$(du -sh site-hostinger-optimized.zip | cut -f1)
  echo -e "${GREEN}Archive ZIP créée : site-hostinger-optimized.zip (${ZIP_SIZE})${NC}"
fi

# Création d'une archive TAR.GZ pour conserver les fichiers cachés
echo -e "${YELLOW}Création d'une archive TAR.GZ avec les fichiers cachés...${NC}"
tar -czf site-complet.tar.gz -C out .
if [ $? -ne 0 ]; then
  echo -e "${RED}Erreur lors de la création de l'archive TAR.GZ. Continuez manuellement.${NC}"
else
  TAR_SIZE=$(du -sh site-complet.tar.gz | cut -f1)
  echo -e "${GREEN}Archive TAR.GZ créée : site-complet.tar.gz (${TAR_SIZE})${NC}"
fi

OUT_SIZE=$(du -sh out | cut -f1)
echo -e "${GREEN}=== Déploiement terminé avec succès ===${NC}"
echo -e "${BLUE}Taille du dossier out : ${OUT_SIZE}${NC}"
echo -e "${BLUE}Pour optimiser davantage la taille, exécutez :${NC}"
echo -e "${YELLOW}npm run optimize-large-images${NC}"
echo -e "${BLUE}Pour déployer sur Hostinger, uploadez le contenu du dossier \"out\" (ou l'archive ZIP) sur votre hébergement.${NC}"
echo -e "${BLUE}Consultez le fichier DEPLOY-HOSTINGER.md pour des instructions détaillées.${NC}" 