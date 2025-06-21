#!/bin/bash

# Script pour vérifier et corriger les permissions des fichiers pour le déploiement
# Usage: bash scripts/check-permissions.sh

# Couleurs pour le terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Vérification des permissions des fichiers ===${NC}"

# Vérifier que le dossier out existe
if [ ! -d "./out" ]; then
  echo -e "${RED}Erreur: Le dossier 'out' n'existe pas. Exécutez d'abord 'npm run deploy-hostinger'.${NC}"
  exit 1
fi

# Ajouter le fichier htaccess.txt pour faciliter l'upload
echo -e "${YELLOW}Création d'une copie visible du fichier .htaccess...${NC}"
if [ -f "./out/.htaccess" ]; then
  cp "./out/.htaccess" "./out/htaccess.txt"
  echo -e "${GREEN}Fichier htaccess.txt créé.${NC}"
else
  echo -e "${RED}Attention: Fichier .htaccess introuvable dans le dossier out.${NC}"
fi

# Vérifier si le fichier .user.ini existe, sinon le créer
if [ ! -f "./out/.user.ini" ]; then
  echo -e "${YELLOW}Création du fichier .user.ini...${NC}"
  cat > "./out/.user.ini" << EOF
; Configurations PHP pour Hostinger
memory_limit = 256M
max_execution_time = 300
upload_max_filesize = 64M
post_max_size = 64M
EOF
  cp "./out/.user.ini" "./out/user.ini.txt"
  echo -e "${GREEN}Fichier .user.ini créé.${NC}"
fi

# Ajouter un fichier info.php pour vérifier la configuration PHP
echo -e "${YELLOW}Création du fichier info.php...${NC}"
cat > "./out/info.php" << EOF
<?php
  phpinfo();
?>
EOF
echo -e "${GREEN}Fichier info.php créé.${NC}"

# Créer une archive TAR.GZ avec tous les fichiers (y compris les fichiers cachés)
echo -e "${YELLOW}Création d'une archive complète avec les fichiers cachés...${NC}"
tar -czf site-complet.tar.gz -C out .
echo -e "${GREEN}Archive site-complet.tar.gz créée avec succès.${NC}"

echo -e "${GREEN}=== Vérification des permissions terminée ===${NC}"
echo -e "${YELLOW}NOTE: Pour le déploiement sur un hébergeur partagé, assurez-vous que:${NC}"
echo -e "${YELLOW}  - Les fichiers ont des permissions 644${NC}"
echo -e "${YELLOW}  - Les dossiers ont des permissions 755${NC}"
echo -e "${YELLOW}  - Les fichiers .htaccess et .user.ini sont correctement uploadés${NC}" 