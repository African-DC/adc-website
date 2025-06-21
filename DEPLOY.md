# Guide de Déploiement pour MilesWeb et autres hébergeurs

Ce guide explique comment déployer le site Africa Digit Consulting sur MilesWeb et d'autres hébergeurs partagés similaires.

## Étapes pour déployer le site

### 1. Préparation des fichiers

Exécutez la commande suivante pour préparer les fichiers de déploiement:

```bash
npm run deploy-static
```

Cette commande:
- Nettoie les anciens builds
- Génère un nouveau build optimisé
- Prépare les fichiers de configuration nécessaires pour l'hébergement partagé

Le résultat se trouve dans le dossier `out` de votre projet.

### 2. Configuration de l'hébergement MilesWeb

1. **Créez un sous-domaine** ou utilisez votre domaine principal dans le panneau MilesWeb
2. **Activez PHP** pour le sous-domaine (même si nous n'utilisons pas PHP, cela permet d'avoir un répertoire correct)
3. **Obtenez les informations FTP** depuis votre panneau de contrôle

### 3. Téléchargement des fichiers

Utilisez un client FTP (FileZilla, WinSCP, etc.) pour télécharger les fichiers:

1. Connectez-vous au serveur FTP avec les identifiants fournis par MilesWeb
2. Naviguez vers le répertoire racine du site (généralement `public_html`, `www` ou un dossier au nom de votre sous-domaine)
3. Téléchargez **tout le contenu** du dossier `out` à cet emplacement

**Important :** Assurez-vous que les fichiers cachés (`.htaccess`, etc.) sont également téléchargés.

#### Gestion des fichiers cachés

Les fichiers commençant par un point (.) sont "cachés" et peuvent ne pas apparaître dans certains gestionnaires de fichiers ou lors de la compression:

1. **Dans votre client FTP**:
   - FileZilla: Allez dans Affichage > Afficher les fichiers cachés
   - WinSCP: Activer l'option "Afficher les fichiers cachés" dans les préférences

2. **Si vous utilisez la compression ZIP**:
   - Certains outils de compression ignorent les fichiers cachés par défaut
   - Utilisez plutôt l'archive `site-complet.tar.gz` générée automatiquement
   - Ou utilisez la commande `zip -r site.zip .` qui inclut les fichiers cachés

3. **Alternative si vous ne trouvez pas le fichier .htaccess**:
   - Le script de préparation crée également un fichier visible nommé `htaccess.txt`
   - Après décompression/upload, renommez ce fichier en `.htaccess`

4. **Vérification de la présence du fichier .htaccess**:
   - Utilisez un client FTP configuré pour afficher les fichiers cachés
   - Ou utilisez la commande SSH `ls -la` pour lister tous les fichiers, y compris les cachés

### 4. Vérification

Accédez à votre domaine pour vérifier que le site fonctionne correctement.

## Résolution des problèmes courants

### Les images ne s'affichent pas

Si les images ne s'affichent pas:
- Vérifiez que le dossier `img` a été correctement téléchargé
- Assurez-vous que les chemins des images dans le code sont corrects (ils doivent être relatifs à la racine)
- Vérifiez les permissions des fichiers (644 pour les fichiers, 755 pour les dossiers)

### Les routes ne fonctionnent pas

Si vous obtenez des erreurs 404 en navigant sur le site:
- Vérifiez que le fichier `.htaccess` a été correctement téléchargé dans la racine
- Assurez-vous que votre hébergeur supporte mod_rewrite pour Apache
- Contactez le support de MilesWeb pour activer mod_rewrite si nécessaire

### Problèmes de CORS

Si vous voyez des erreurs de CORS dans la console du navigateur:
- Vérifiez que les en-têtes CORS sont correctement configurés dans le fichier `.htaccess`
- Assurez-vous que votre hébergeur permet la personnalisation des en-têtes HTTP

## Optimisations supplémentaires

### Activer HTTPS

Pour une meilleure sécurité et SEO:
1. Installez un certificat SSL depuis votre panneau MilesWeb (Let's Encrypt est souvent gratuit)
2. Activez la redirection HTTPS dans le panneau de contrôle

### Optimisation de la mise en cache

Pour améliorer les performances:
1. Activez la mise en cache du navigateur via le panneau de contrôle MilesWeb
2. Le fichier `.htaccess` fourni contient déjà des directives de mise en cache

## Support

Si vous rencontrez des problèmes, contactez:
- [Support MilesWeb](https://www.milesweb.com/support)
- [contact@africadigitconsulting.com](mailto:contact@africadigitconsulting.com) 