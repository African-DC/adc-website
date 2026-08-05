# Rule: Ajouter un article de blog

## Quand s'active

Cette rule s'active dès que tu :

- Ajoutes, modifies ou supprimes un article de blog
- Touches à `lib/blog.ts`, `app/[locale]/blog/**`, `public/img/blog/**`
- Ajoutes des photos ou une vidéo à un article
- Constates un problème de cadrage, d'orientation ou de poids d'image

## La recette : 5 fichiers + les images

Ajouter un article = **5 fichiers de code**. Tout le reste se propage seul.

| # | Fichier | Rôle |
|---|---|---|
| 1 | `lib/blog.ts` → tableau `blogArticles` | **Source de vérité** : slug, titre/sous-titre/excerpt/catégorie FR+EN, hero, auteur, dates, keywords |
| 2 | `app/[locale]/blog/<slug>/page.tsx` | Route + metadata + JSON-LD + bascule FR/EN (~37 l., identique à chaque fois, seul `SLUG` change) |
| 3 | `app/[locale]/blog/<slug>/article-content.tsx` | **Corps FR** |
| 4 | `app/[locale]/blog/<slug>/article-content-en.tsx` | **Corps EN** (miroir fidèle) |
| 5 | `app/[locale]/blog/<slug>/opengraph-image.tsx` | Image OG générée (14 l., template partagé) |
| — | `public/img/blog/<slug>/` | `hero.webp`, `1.webp`, `2.webp`… |

**Propagation automatique, rien à toucher** : la page `/blog` (tri par `publishedAt` décroissant — le plus récent devient l'article à la une), la section « Actualités » de l'accueil, `sitemap.ts`, les balises SEO/OpenGraph/Twitter, le JSON-LD `BlogPosting`, les hreflang FR/EN.

**Modèle à copier** : `wouri-action-climatique-sodexam` (le plus propre).

## Style éditorial

- **Court** : 140–160 lignes par version. Prose fluide, pas de longues listes à puces, pas d'encarts « À propos ».
- Structure : chapô en serif italique → 3 à 5 sections `<h2>` → un `<aside>` de renvoi vers un cas d'étude → une `<blockquote>` → crédit photo → galerie.
- **Ton sobre et factuel.** Pas de superlatifs, pas d'autocélébration.
- **Ne jamais inventer un fait** : date, lieu, nom, chiffre, intitulé d'un prix. Sans information confirmée, rester générique (« l'équipe ADC ») plutôt que de nommer.
- **Prudence juridique** : tant qu'un contrat n'est pas signé, écrire « perspective de collaboration », jamais « partenariat conclu ».
- **FR et EN toujours livrés ensemble**, avec la même structure.

## Images — les pièges vérifiés

### 1. Cadrage des photos en portrait (le piège n°1)

Le hero est très large — **16/10 sur mobile, 21/9 à partir de `md`** — et les cartes le sont aussi (`4/3` à la une et sur l'accueil, `16/10` en liste). Une photo **portrait** y est rognée à **32–56 % de sa hauteur** : avec le recadrage centré par défaut, **les visages sont coupés**.

→ Renseigner **`position`** dans le `hero` de `lib/blog.ts`. C'est la **source unique** : le champ est lu par la page d'article, les cartes `/blog` **et** la section d'accueil.

```ts
hero: {
  src: "/img/blog/<slug>/hero.webp",
  alt: { fr: "…", en: "…" },
  position: "50% 20%",   // portrait uniquement ; omettre pour une photo paysage
}
```

Valeurs de référence : `50% 20%` (deux personnes), `50% 15%` (groupe de quatre, ou sujet coiffé d'un chapeau/casque).

**Corriger en CSS, pas en recadrant le fichier** : une seule image ne peut satisfaire à la fois le 16/10 et le 21/9.

⚠️ La page d'article reçoit aussi `position` via les props de `article-content.tsx` (FR **et** EN). Pour une photo portrait, le renseigner aux **trois endroits** : catalogue + FR + EN.

### 2. Rotation EXIF

Les photos de téléphone portent souvent `orientation=6`. Sans traitement, elles s'affichent **couchées**. Toujours appliquer `ImageOps.exif_transpose()` à la conversion.

### 3. Conversion et poids

WebP, côté le plus long plafonné à ~1600 px, qualité 72–82 → viser **100–250 Ko**. Les photos très détaillées (bitume, foule) demandent une qualité plus basse pour tenir la cible.

### 4. Galerie — même pour une seule photo

Le hero étant fortement rogné, **c'est la galerie qui permet de voir l'image entière** : la lightbox l'affiche en `object-contain`, non rognée. Un article avec une seule photo doit donc **quand même** avoir une galerie.

```tsx
<BlogGallery eyebrow="Galerie · …" columns={2} aspect="landscape" images={[…]} />
```

- Photos toutes en paysage → `columns={2} aspect="landscape"`
- Mélange paysage + portrait, ou 4 photos → `columns={4} aspect="portrait"`
- Photo unique → `columns={2} aspect="portrait"`

**Écarter les quasi-doublons.** Trois cadrages distincts valent mieux que cinq photos presque identiques.

### 5. Vidéo

Transcoder en MP4 H.264 (`-crf 26`, `-movflags +faststart`), côté long ~1280 px, cible **< 8 Mo**, plus un poster WebP. Bloc `<video controls preload="metadata" poster="…">` — voir l'article `akwaba-klassci`.

## Vérification obligatoire

```bash
npm run lint && npm run build     # routes /fr et /en + route OG générées
```

Pour toute photo en portrait, **vérifier le rendu réel dans un navigateur** aux trois tailles — le calcul ne suffit pas :

```bash
npx next start -p 3111
# puis Playwright (Chromium en /opt/pw-browsers/chromium) sur :
#   /blog/<slug>, /en/blog/<slug>, /blog, /en/blog et l'accueil
#   viewports 390x844, 820x1180, 1440x900
```

⚠️ Les captures `fullPage` ne déclenchent pas le lazy-loading des images : scroller puis capturer l'élément visé.

## Anti-patterns à BLOQUER

1. ❌ Publier une photo **portrait** sans renseigner `position` → visages coupés partout
2. ❌ Renseigner `position` seulement dans `article-content` (la page d'article) et pas dans `lib/blog.ts` → corrigé sur l'article, cassé sur `/blog` et l'accueil
3. ❌ Convertir une photo sans `exif_transpose` → image couchée
4. ❌ Article sans galerie : la photo devient impossible à agrandir
5. ❌ Empiler les quasi-doublons dans la galerie
6. ❌ Inventer une date, un lieu, un nom ou l'intitulé d'un prix
7. ❌ Livrer le FR sans l'EN (ou un EN au contenu divergent)
8. ❌ Article deux fois plus long que les existants, avec listes à rallonge
9. ❌ Images > 400 Ko
10. ❌ Conclure « c'est bon » sans avoir regardé le rendu réel dans un navigateur

## Voir aussi

- `.claude/rules/pr-workflow.md` — discipline PR (une PR = un état fini, base `main`)
- `lib/blog.ts` — catalogue et types
- `components/sections/blog-article-layout.tsx` — gabarit d'article (prop `hero.position`)
- `components/gallery/blog-gallery.tsx` — galerie et lightbox
