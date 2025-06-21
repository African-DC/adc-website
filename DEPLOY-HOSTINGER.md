# Guide de Déploiement sur Hostinger

Ce guide explique comment déployer le site Africa Digit Consulting sur Hostinger, en suivant les meilleures pratiques pour un hébergement partagé.

## Prérequis

- Node.js (version 18.0.0 ou supérieure)
- npm ou yarn
- Un compte et un plan d'hébergement Hostinger
- Un client FTP (FileZilla, WinSCP, etc.) ou accès au gestionnaire de fichiers Hostinger

## Étapes pour déployer le site

### 1. Préparation automatisée des fichiers

Nous avons créé plusieurs scripts spécifiques pour Hostinger qui préparent et optimisent les fichiers pour ce type d'hébergement:

#### Méthode recommandée (nouveau)

```bash
npm run deploy-optimized
```

Cette commande exécute les étapes suivantes:
1. Nettoyage des anciens builds
2. Correction des noms de dossiers avec espaces en fin
3. Génération d'un nouveau build optimisé
4. Vérification et correction des noms de dossiers dans le build
5. Optimisation des images volumineuses
6. Nettoyage des fichiers de cache inutiles
7. Création de versions WebP des images (si disponible)
8. Finalisation et création des archives pour déploiement

Cette méthode corrige automatiquement les problèmes courants comme les espaces en fin de nom de dossier qui causent des problèmes lors du déploiement.

#### Autres méthodes

Pour des options plus spécifiques, vous pouvez également utiliser:

```bash
npm run deploy-production
```

Cette commande exécute les étapes suivantes:
1. Nettoyage des anciens builds
2. Génération d'un nouveau build optimisé
3. Préparation des fichiers pour le déploiement
4. Optimisation des images volumineuses
5. Nettoyage des fichiers de cache inutiles
6. Création de versions WebP des images
7. Correction des références manquantes
8. Vérification finale des images

### Autres commandes de déploiement

Si vous préférez exécuter certaines étapes séparément ou si vous rencontrez des problèmes, vous pouvez utiliser ces commandes alternatives:

- `npm run deploy-hostinger` - Génère uniquement le build de base sans optimisations
- `npm run deploy-hostinger-optimized` - Génère le build et optimise les images volumineuses
- `npm run deploy-safe` - Génère le build et vérifie les images (sans optimisation)
- `npm run deploy-complete` - Génère le build, optimise les images et vérifie leur intégrité
- `npm run fix-directory-names` - Corrige les noms de dossiers avec espaces en fin

### Commandes d'optimisation d'images individuelles

Pour optimiser séparément les images:

- `npm run optimize-large-images` - Optimise les images volumineuses pour réduire la taille
- `npm run create-webp` - Génère des versions WebP des images existantes
- `npm run fix-missing-images` - Corrige les références aux images manquantes
- `npm run verify-images` - Vérifie l'intégrité et les références des images

### Optimisation des performances

Pour optimiser davantage les performances:

- `npm run cleanup-cache` - Supprime les fichiers de cache non nécessaires
- `npm run split-images` - Divise les images volumineuses pour faciliter l'upload

## 2. Téléchargement des fichiers

### Option 1: Via le gestionnaire de fichiers Hostinger (recommandé)

1. Dans le panneau de contrôle Hostinger, accédez à **Gestionnaire de fichiers**
2. Naviguez jusqu'au répertoire racine de votre site (généralement `public_html`)
3. Cliquez sur **Téléverser** et sélectionnez l'archive `site-hostinger-optimized.zip` ou `site-complet.tar.gz` (pour les fichiers cachés)
4. Une fois téléchargée, sélectionnez le fichier archive et cliquez sur **Extraire**

> **Note:** L'archive `site-complet.tar.gz` contient également les fichiers cachés comme `.htaccess` et `.user.ini` qui sont importants pour le bon fonctionnement du site.

### Option 2: Via FTP

1. Utilisez un client FTP (FileZilla, WinSCP, etc.) pour vous connecter à votre hébergement
2. Assurez-vous que votre client FTP est configuré pour afficher les fichiers cachés (commençant par un point `.`)
3. Naviguez vers le répertoire racine (généralement `public_html`)
4. Téléchargez tout le contenu du dossier `out/` après avoir exécuté une des commandes de déploiement

## 3. Configuration post-déploiement

Après avoir déployé les fichiers, vérifiez:

1. **Fichier .htaccess**: Ce fichier est essentiel pour le routage correct. S'il n'est pas visible, cherchez `htaccess.txt` et renommez-le en `.htaccess`.

2. **Fichier .user.ini**: Ce fichier configure PHP. S'il n'est pas visible, cherchez `user.ini.txt` et renommez-le en `.user.ini`.

3. **SSL/HTTPS**: Activez SSL dans le panneau Hostinger pour une meilleure sécurité et SEO.

## 4. Vérification du site

1. Accédez à votre site via le navigateur
2. Vérifiez que toutes les pages se chargent correctement
3. Testez la navigation entre les différentes sections
4. Vérifiez que les images s'affichent correctement
5. Testez le formulaire de contact

## Maintenance et mise à jour

Pour mettre à jour le site:

1. Effectuez vos modifications dans le code source
2. Exécutez `npm run deploy-optimized` pour générer un nouveau build optimisé avec des noms de dossiers corrects
3. Téléchargez à nouveau les fichiers ou l'archive ZIP/TAR.GZ sur votre hébergement

## Résolution des problèmes

### Les images ne s'affichent pas

- Vérifiez que le dossier `img` a été correctement téléchargé
- Exécutez `npm run verify-images` et corrigez les problèmes signalés
- Vérifiez les permissions des fichiers (644 pour les fichiers, 755 pour les dossiers)
- Exécutez `npm run fix-directory-names` pour corriger les noms de dossiers avec espaces en fin

### Pages 404 lors de la navigation

- Vérifiez que le fichier `.htaccess` est correctement placé à la racine
- Assurez-vous que mod_rewrite est activé sur votre hébergement
- Si vous utilisez l'archive ZIP, essayez plutôt avec l'archive TAR.GZ qui préserve mieux les fichiers cachés

### Site trop lent

- Exécutez `npm run cleanup-cache` pour supprimer les fichiers de cache inutiles
- Exécutez `npm run optimize-large-images` pour optimiser les images volumineuses
- Activez le cache côté serveur dans les paramètres Hostinger

### Images manquantes ou cassées

- Exécutez `npm run fix-missing-images` pour corriger automatiquement les références
- Consultez les originaux dans `out/img/originals` si vous avez besoin de restaurer des images

### Problèmes avec les noms de dossiers

- Exécutez `npm run fix-directory-names` pour corriger les noms de dossiers avec espaces en fin
- Vérifiez les références à ces dossiers dans le code après correction

Pour toute assistance supplémentaire, contactez:
- [Support Hostinger](https://www.hostinger.com/support)
- [contact@africadigitconsulting.com](mailto:contact@africadigitconsulting.com) 