#!/bin/bash

# Script pour déployer le site avec des noms de dossiers propres et des images optimisées
# Usage: bash scripts/deploy-optimized.sh

# Couleurs pour le terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Déploiement avec optimisation et correction des noms de dossiers ===${NC}"
echo -e "${BLUE}=============================================================${NC}"

# Fonction pour afficher le temps écoulé
show_elapsed_time() {
  local start_time=$1
  local end_time=$(date +%s)
  local elapsed=$((end_time - start_time))
  local minutes=$((elapsed / 60))
  local seconds=$((elapsed % 60))
  echo -e "${BLUE}Temps écoulé: ${minutes}m ${seconds}s${NC}"
}

# Enregistrer l'heure de début
START_TIME=$(date +%s)

# 1. Nettoyer l'ancien build
echo -e "${YELLOW}[1/8] Nettoyage des anciens builds...${NC}"
bash scripts/clean-output.sh
if [ $? -ne 0 ]; then
  echo -e "${RED}Erreur lors du nettoyage. Arrêt du script.${NC}"
  exit 1
fi
echo -e "${GREEN}Nettoyage terminé avec succès.${NC}\n"

# 2. Corriger les noms de dossiers dans public/img 
echo -e "${YELLOW}[2/8] Correction des noms de dossiers dans public/img...${NC}"
bash scripts/fix-directory-names.sh
if [ $? -ne 0 ]; then
  echo -e "${RED}Erreur lors de la correction des noms de dossiers. Arrêt du script.${NC}"
  exit 1
fi
echo -e "${GREEN}Noms de dossiers corrigés avec succès.${NC}\n"

# 3. Créer le build
echo -e "${YELLOW}[3/8] Création du build...${NC}"
npm run build
if [ $? -ne 0 ]; then
  echo -e "${RED}Erreur lors du build. Arrêt du script.${NC}"
  exit 1
fi
echo -e "${GREEN}Build créé avec succès.${NC}\n"

# 4. Corriger les noms de dossiers dans out/img (s'ils ont été recréés avec des espaces)
echo -e "${YELLOW}[4/8] Vérification et correction des noms de dossiers dans out/img...${NC}"
bash scripts/fix-directory-names.sh
if [ $? -ne 0 ]; then
  echo -e "${RED}Erreur lors de la correction des noms de dossiers. Arrêt du script.${NC}"
  exit 1
fi
echo -e "${GREEN}Noms de dossiers dans out vérifiés et corrigés avec succès.${NC}\n"

# 5. Optimiser les images volumineuses
echo -e "${YELLOW}[5/8] Optimisation des images volumineuses...${NC}"
bash scripts/optimize-large-images.sh
if [ $? -ne 0 ]; then
  echo -e "${RED}Attention: Erreur lors de l'optimisation des images. On continue quand même.${NC}"
fi
echo -e "${GREEN}Images optimisées avec succès.${NC}\n"

# 6. Nettoyer le cache
echo -e "${YELLOW}[6/8] Nettoyage des fichiers de cache...${NC}"
bash scripts/cleanup-cache.sh
if [ $? -ne 0 ]; then
  echo -e "${RED}Attention: Erreur lors du nettoyage du cache. On continue quand même.${NC}"
fi
echo -e "${GREEN}Cache nettoyé avec succès.${NC}\n"

# 7. Créer des versions WebP pour les images (si cwebp est installé)
echo -e "${YELLOW}[7/8] Création de versions WebP pour les images...${NC}"
command -v cwebp >/dev/null 2>&1
if [ $? -eq 0 ]; then
  bash scripts/create-webp-versions.sh
  if [ $? -ne 0 ]; then
    echo -e "${RED}Attention: Erreur lors de la création des versions WebP. On continue quand même.${NC}"
  fi
  echo -e "${GREEN}Versions WebP créées avec succès.${NC}\n"
else
  echo -e "${YELLOW}⚠️ cwebp n'est pas installé. Installation recommandée avec: sudo apt-get install webp${NC}"
  echo -e "${YELLOW}⚠️ Étape ignorée.${NC}\n"
fi

# 8. Finaliser le déploiement
echo -e "${YELLOW}[8/8] Finalisation du déploiement...${NC}"
# Mise à jour de l'archive ZIP
cd out
# Supprimer le cache s'il existe encore
if [ -d "./cache" ]; then
  echo -e "${YELLOW}Suppression du dossier cache restant...${NC}"
  rm -rf ./cache
fi
echo -e "${YELLOW}Création de l'archive ZIP pour le déploiement...${NC}"
zip -r ../site-hostinger-optimized.zip .
cd ..

if [ $? -eq 0 ]; then
  ZIP_SIZE=$(du -sh site-hostinger-optimized.zip | cut -f1)
  echo -e "${GREEN}Archive ZIP créée : site-hostinger-optimized.zip (${ZIP_SIZE})${NC}"
  
  # Création d'une archive TAR.GZ pour conserver les fichiers cachés
  echo -e "${YELLOW}Création d'une archive TAR.GZ avec les fichiers cachés...${NC}"
  tar -czf site-complet.tar.gz -C out .
  
  if [ $? -eq 0 ]; then
    TAR_SIZE=$(du -sh site-complet.tar.gz | cut -f1)
    echo -e "${GREEN}Archive TAR.GZ créée : site-complet.tar.gz (${TAR_SIZE})${NC}"
  fi
else
  echo -e "${RED}Erreur lors de la création de l'archive ZIP. Continuez manuellement.${NC}"
fi

# Calculer le temps total
show_elapsed_time $START_TIME

# Afficher les tailles
OUT_SIZE=$(du -sh out | cut -f1)
echo -e "\n${GREEN}=== Déploiement optimisé terminé avec succès ===${NC}"
echo -e "${BLUE}Taille du dossier out : ${OUT_SIZE}${NC}"
echo -e "${BLUE}Pour déployer sur Hostinger, uploadez le contenu du dossier \"out\" (ou l'archive ZIP) sur votre hébergement.${NC}"
echo -e "${BLUE}Consultez le fichier DEPLOY-HOSTINGER.md pour des instructions détaillées.${NC}" 