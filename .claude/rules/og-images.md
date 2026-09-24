# Rule: Images de partage (Open Graph / X)

## Quand s'active

Cette rule s'active dès que tu :

- Ajoutes une page, une étude de cas ou un article
- Modifies un texte, un chiffre, une coordonnée ou un produit repris dans une image de partage
- Touches à `lib/og/**`, `lib/og-template.tsx`, `assets/og/**` ou à un fichier `opengraph-image.tsx`
- Modifies le `openGraph` ou le `twitter` d'un `generateMetadata`
- Constates qu'un lien partagé s'affiche sans image, avec le logo seul ou avec une image fausse

## Pourquoi cette rule existe

Septembre 2026 : partagées sur WhatsApp ou LinkedIn, la plupart des pages du site n'affichaient **aucune image**. Chaque page définit son propre `openGraph`, et Next **remplace** alors celui du layout au lieu de le compléter : l'image par défaut disparaît. Les autres pages montraient le logo ADC brut, et les articles un titre seul, sans leur photo.

Depuis, chaque page a une image qui dit ce qu'elle est et montre ce qu'elle contient, avec le logo ADC en signature, en FR et en EN.

## Où vit quoi

| Contenu | Gabarit | Route |
|---|---|---|
| Socle commun : polices, en-tête ADC, pied de page, recadrage des photos | `lib/og/kit.tsx` | — |
| Accueil, À propos, Expertise, Réalisations, Blog, Contact, Confidentialité | `lib/og/pages.tsx` | `app/[locale]/<page>/opengraph-image.tsx` |
| Études de cas (fiche, couleurs, visuel produit) | `lib/og/case-study.tsx` | `app/[locale]/nos-realisations/<slug>/opengraph-image.tsx` |
| Articles (titre + photo du hero) | `lib/og-template.tsx` | `app/[locale]/blog/<slug>/opengraph-image.tsx` — voir `blog-article.md` |
| Visuels préparés (logos, photos recadrées, capture KLASSCI) | — | `assets/og/` |

`app/[locale]/opengraph-image.tsx` (l'accueil) sert aussi de **filet** : il s'applique à toute page qui n'a pas sa propre image.

## Ajouter une page

1. Ajouter une entrée dans `lib/og/pages.tsx` : clé `PageKey`, chemin, texte alternatif, et une fonction qui rend l'eyebrow et le corps.
2. Créer `app/[locale]/<page>/opengraph-image.tsx` en copiant celui d'une autre page, et changer seulement la clé.
3. Ne **pas** mettre d'`images` dans le `openGraph` de la page : le fichier `opengraph-image.tsx` la fournit, et une valeur en dur la masquerait.

## Ajouter une étude de cas

Ajouter l'entrée dans `CASE_STUDIES` (`lib/og/case-study.tsx`) : couleurs du produit, logo, accroche, trois repères, statut et visuel (`screenshot` ou `chat`). Créer ensuite la route. Le logo et la capture se préparent dans `assets/og/` (PNG ou JPEG, pas de WebP, quelques dizaines de Ko).

## Règles absolues

1. **Rien n'est inventé.** Textes, chiffres, statuts et coordonnées viennent des pages ou de leurs métadonnées. Quand ils changent sur le site (chiffres de l'accueil, téléphone, statut d'un produit, offre active), ils changent **aussi** dans `lib/og/`.
2. **Le statut dit la vérité** : WOURI est « En consolidation », pas « En production », tant que sa page le dit.
3. **Tout fichier lu au rendu doit être embarqué.** Les images se génèrent à la demande sur Vercel, et seuls `assets/og/` et `public/img/blog/` sont ajoutés aux fonctions (`outputFileTracingIncludes`, `next.config.mjs`). Un fichier lu ailleurs marche en local et renvoie **une 500 en production**. Il faut soit l'y placer, soit étendre l'inclusion.
4. **Pas de WebP dans le gabarit.** Le moteur de rendu ne le lit pas. Passer par `photoUri()` (conversion par `sharp`) ou préparer un JPEG ou un PNG dans `assets/og/`.
5. **FR et EN ensemble**, avec le même contenu.
6. **Palette** : fond sombre, orange ADC `#ff942b`, et les couleurs propres à un produit seulement sur son étude de cas. Le logo ADC est toujours présent, mais en signature, jamais comme sujet.

## Pièges connus du moteur de rendu

- Un bloc de texte **déborde de sa colonne** si on ne le contraint pas. `Title` et `Lead` du kit portent `width: 100%`, et `TextColumn` porte `maxWidth` et `flexShrink: 0`. Garder ces composants plutôt que des `div` nus.
- Le `+` de la police Fraunces s'affiche mal (« 10+ » devient « 10- »). Les chiffres s'écrivent en Poppins.
- Les triangles faits en bordures CSS ne s'affichent pas. Utiliser un petit `svg`.
- Somme des largeurs : colonne de texte + visuel + 44 px d'écart ≤ **1080 px**.

## Vérification obligatoire

```bash
pnpm lint && pnpm build
pkill -f "next-serve[r]"          # sinon l'ancien serveur garde le port et l'on regarde l'ancienne version
npx next start -p 3111
curl -sL -o /tmp/og.png -w "%{http_code}\n" http://localhost:3111/<page>/opengraph-image      # 200
curl -sL -o /tmp/og-en.png -w "%{http_code}\n" http://localhost:3111/en/<page>/opengraph-image # 200
curl -sL http://localhost:3111/<page> | grep -oE '<meta (property|name)="(og|twitter):image"[^>]*>'
```

Regarder **chaque** image produite, en FR et en EN : un code 200 ne dit rien d'un titre qui chevauche une photo. Pour s'assurer qu'un fichier est bien embarqué, chercher son nom dans `.next/server/app/**/opengraph-image/route.js.nft.json`.

## Anti-patterns à BLOQUER

1. ❌ Une page sans `opengraph-image.tsx` alors qu'elle définit son propre `openGraph` : elle se partage sans image
2. ❌ Revenir au logo ADC seul comme image de partage
3. ❌ Un chiffre, un statut ou une coordonnée qui diverge de la page
4. ❌ Lire un fichier hors de `assets/og/` ou `public/img/blog/` sans étendre `outputFileTracingIncludes`
5. ❌ Passer un WebP directement à `<img>` dans un gabarit
6. ❌ Un gabarit recopié au lieu de réutiliser `lib/og/kit.tsx`
7. ❌ Conclure « c'est bon » sur un simple code 200, sans avoir regardé l'image

## Voir aussi

- `.claude/rules/blog-article.md` — ajouter un article (image de partage comprise)
- `.claude/rules/pr-workflow.md` — discipline PR
