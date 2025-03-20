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

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run start` - Démarre le serveur de production
- `npm run lint` - Exécute le linter pour vérifier la qualité du code
- `npm run analyze` - Analyse la taille du bundle avec @next/bundle-analyzer
- `npm run deploy` - Construit et démarre l'application pour la production
- `npm run export` - Exporte l'application en HTML statique pour l'hébergement

## Déploiement

### Déploiement sur un hébergeur traditionnel

1. Générer la version de production:
```bash
npm run build
```

2. Les fichiers optimisés pour la production se trouvent dans le dossier `.next/`. Si vous utilisez un hébergeur Node.js, transférez l'ensemble du projet et exécutez:
```bash
npm run start
```

3. Pour un hébergement statique, utilisez:
```bash
npm run export
```
Puis téléchargez le contenu du dossier `out/` sur votre hébergeur.

### Configurations importantes

- Le fichier `.env.production` contient les variables d'environnement pour la production
- `next.config.mjs` inclut les optimisations pour un déploiement en production
- `public/.htaccess` contient les configurations pour un serveur Apache
- `public/robots.txt` et `public/sitemap.xml` sont configurés pour le SEO

### Déploiement sur Vercel (recommandé)

Le moyen le plus simple de déployer ce site est d'utiliser [Vercel](https://vercel.com), la plateforme des créateurs de Next.js:

1. Créez un compte sur Vercel
2. Importez votre dépôt GitHub
3. Vercel détectera automatiquement qu'il s'agit d'un projet Next.js et configurera le déploiement

## Structure du projet

- `/app` - Pages et composants de l'application (structure App Router de Next.js)
- `/components` - Composants réutilisables
- `/lib` - Utilitaires et fonctions auxiliaires
- `/public` - Fichiers statiques (images, favicon, etc.)
- `/scripts` - Scripts utilitaires comme la génération du sitemap

## Maintenance

Pour mettre à jour le contenu du site:

1. Les sections principales se trouvent dans `/components/sections/`
2. Les images et autres ressources statiques sont dans `/public/img/`
3. Les métadonnées du site peuvent être modifiées dans `/app/layout.tsx`

## Contact

Pour toute question concernant ce projet, contactez [contact@africadigitconsulting.com](mailto:contact@africadigitconsulting.com).
