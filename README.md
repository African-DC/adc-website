# Africa Digit Consulting - Site Web

Ce dépôt contient le site web officiel d'Africa Digit Consulting, une agence de communication digitale basée en Côte d'Ivoire.

## Technologies utilisées

- **Next.js** - Framework React pour le rendu côté serveur et la génération de sites statiques
- **TypeScript** - Pour un développement plus robuste et typé
- **Tailwind CSS** - Framework CSS utilitaire pour un design rapide et réactif
- **Framer Motion** - Bibliothèque d'animations pour des transitions fluides

## Prérequis

- Node.js (version 18.0.0 ou supérieure)
- npm ou yarn

## Installation

1. Clonez ce dépôt:
```bash
git clone https://github.com/votre-nom/adc-website.git
cd adc-website
```

2. Installez les dépendances:
```bash
npm install
# ou
yarn install
```

3. Démarrez le serveur de développement:
```bash
npm run dev
# ou
yarn dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## Commandes principales

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Créer une version optimisée pour la production
- `npm run start` - Démarrer le serveur de production
- `npm run lint` - Exécuter le linter pour vérifier la qualité du code

## Déploiement

### Pour Hostinger (recommandé)

Nous avons créé un script optimisé spécifiquement pour Hostinger:

```bash
npm run deploy-optimized
```

Ce script:
1. Nettoie les builds précédents
2. Corrige les noms de dossiers problématiques (espaces en fin)
3. Génère une version optimisée du site
4. Optimise les images volumineuses
5. Nettoie les fichiers de cache
6. Crée des versions WebP des images
7. Génère des archives ZIP et TAR.GZ prêtes à être téléchargées

Pour plus de détails, consultez [DEPLOY-HOSTINGER.md](DEPLOY-HOSTINGER.md).

### Pour d'autres hébergeurs

```bash
npm run deploy-static
```

Pour plus d'informations, consultez [DEPLOY.md](DEPLOY.md).

## Optimisation des images

### Optimisation automatique

Le site inclut plusieurs scripts pour optimiser les images:

```bash
# Optimiser les images volumineuses (>500KB)
npm run optimize-large-images

# Créer des versions WebP des images
npm run create-webp

# Corriger les noms de dossiers avec espaces en fin
npm run fix-directory-names
```

Ces scripts sont exécutés automatiquement lors du déploiement via la commande `deploy-optimized`.

### Outils d'optimisation recommandés

Pour une optimisation maximale, installez ces outils:

```bash
sudo apt-get install imagemagick jpegoptim optipng webp
```

## Structure du projet

- `app/` - Pages et routes du site
- `components/` - Composants React réutilisables
- `public/` - Fichiers statiques (images, etc.)
- `scripts/` - Scripts utilitaires pour le déploiement et l'optimisation
- `lib/` - Bibliothèques et utilitaires

## Styles et design

Le site utilise Tailwind CSS avec une configuration personnalisée dans `tailwind.config.ts`.

Les polices principales sont:
- Montserrat (titres)
- Poppins (texte)

## Contribution

Pour contribuer au projet:

1. Créez une branche pour votre fonctionnalité
2. Effectuez vos modifications
3. Soumettez une pull request

## Licence

Ce projet est la propriété d'Africa Digit Consulting.

## Résolution des problèmes

Si vous rencontrez des erreurs lors du déploiement, consultez le guide de dépannage dans [DEPLOY-HOSTINGER.md](./DEPLOY-HOSTINGER.md).

### Problèmes d'image courants

#### Les images ne s'affichent pas sur certains navigateurs ou appareils

Cette situation peut être causée par plusieurs facteurs:

1. **Incompatibilité de format**:
   - Certains navigateurs anciens ne supportent pas le format WebP
   - Solution: exécutez `npm run fix-and-verify` pour identifier et corriger ces problèmes

2. **Problèmes de chemin d'accès**:
   - Les chemins d'accès peuvent être incorrects entre différents systèmes d'exploitation
   - Solution: exécutez `npm run fix-images` pour standardiser les chemins

3. **Images trop volumineuses**:
   - Les images de plus de 1 Mo peuvent ne pas se charger sur certains appareils ou connexions
   - Solution: exécutez `npm run optimize-large-images` pour réduire la taille sans perdre trop de qualité

4. **Problèmes de cache navigateur**:
   - Les navigateurs peuvent mettre en cache d'anciennes versions
   - Solution: videz le cache du navigateur ou utilisez un mode de navigation privée pour tester

Si vous voyez une erreur comme celle-ci:
```
Error: Image with src "..." has both "width" and "fill" properties. Only one should be used.
```

Assurez-vous que dans vos composants d'image, vous n'utilisez jamais les propriétés `width`/`height` avec la propriété `fill` simultanément. C'est une limitation de Next.js.

## Maintenance

Pour mettre à jour le contenu du site:

1. Les sections principales se trouvent dans `/components/sections/`
2. Les images et autres ressources statiques sont dans `/public/img/`
3. Les métadonnées du site peuvent être modifiées dans `/app/layout.tsx`

## Contact

Pour toute question concernant ce projet, contactez [contact@africadigitconsulting.com](mailto:contact@africadigitconsulting.com).
