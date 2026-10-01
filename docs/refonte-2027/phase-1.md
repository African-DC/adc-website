# Refonte ADC 2027 · Phase 1 : audit et direction

Livrable complet, avec captures avant, planches de direction artistique et wireframes :
https://claude.ai/artifact/Gp7Ku9sV8yR3ECPrGW4TrN

Ce fichier en garde l'essentiel dans le dépôt. Audit du 1er octobre 2026, sur le build de
production de `main` (commit 49a9324). Aucune ligne de la refonte n'est écrite.

## Synthèse

- **Solide** : site soigné, rapide sur ordinateur (Lighthouse 97 à 99), vraies photos, deux
  produits réels, journal de 13 articles, bilinguisme complet, images de partage par page.
- **Problème central** : le site se présente comme une « agence digitale » (titre de chaque page),
  la page Expertise ne décrit que le web, et les preuves fortes (lancement de KLASSCI le
  20 juin 2025, trophée SAFE 9, sélection DigiGreen) restent dans le blog, pendant que des chiffres
  non sourcés sont mis en avant.
- **Recommandation** : direction C, « Construit ici. Construit pour durer. », avec la légende de
  terrain de la direction B et les schémas de système de la direction A.

## Défauts urgents (indépendants de la refonte)

| Constat | Où |
|---|---|
| `tailwind.config.mjs` chargé avant `tailwind.config.ts` : `font-serif` sort en Georgia, les tokens shadcn ne sont pas générés | racine |
| Liens internes anglais sans préfixe : retour au français | 6 fichiers `*-en.tsx` importent `next/link` |
| Pas de `not-found.tsx` : 404 Next.js en anglais, sans navigation | `app/` |
| PostHog chargé mais absent de la politique de confidentialité | `politique-confidentialite` |
| Coquille « AKAWABA » publiée | article `akwaba-klassci` |
| `/nos-realisations/akwaba/opengraph-image` répond 200 alors que la page est masquée | `opengraph-image.tsx` non protégé |
| LinkedIn du pied de page vers la page de KLASSCI | `footer.tsx` |
| Trois oranges : logo `#FE8811`, thème `#ff942b`, interface `#f97316` | mesure du PNG du logo |
| Titres rendus à `opacity:0` côté serveur ; LCP mobile 2,9 à 4,4 s | toutes les pages client |
| Cookie de langue : après une visite en anglais, les URL françaises redirigent (307) vers l'anglais | middleware next-intl |

## Registre des preuves

Publiable : fondation 2023 ; lancement de KLASSCI le 20 juin 2025 (ministère de l'Éducation
nationale, GIZ, Côte d'Ivoire Export, Impact'Lab UNESCO) ; ESBTP Abidjan et ESBTP Yamoussoukro
(déjà publics sur klassci.com) ; 151 livraisons en six mois et 333 permissions (klassci.com) ;
une base de données par établissement ; BTS et LMD ; réconciliation de caisse OHADA ; trophée
SAFE 9 ; sélection DigiGreen (Orange, GIZ, UE) ; SIADE, Orange Business, Conseil national du
tourisme et SODEXAM comme participations.

À confirmer : Ephrata, USAT, ISLG (école) ; HETEC et UCAO Bénin (autorisation) ; nature de chacun
des 13 logos ; témoignage à signer.

À retirer ou sourcer : « 10 établissements, du primaire au doctorat », « 95 % des tâches »,
« 50+ projets », « 10+ experts ».

## Architecture proposée

```
/                         Accueil
/produits                 nouveau : KLASSCI, WOURI, AKWABA (interrupteur)
/produits/klassci         301 depuis /nos-realisations/klassci
/produits/wouri           301 depuis /nos-realisations/wouri
/nos-realisations         index filtrable produits / systèmes clients
/nos-realisations/[x]     gabarit de mission client
/notre-expertise          six capacités par problème
/a-propos                 trajectoire datée, équipe complète
/carrieres                nouveau
/blog                     affiché « Journal », URL conservée
/contact                  intentions : projet, partenariat, presse, carrière
/mentions-legales         nouveau
/politique-confidentialite corrigée
404                       nouveau, bilingue
```

## Tokens de la direction recommandée

| Token | Valeur | Contraste |
|---|---|---|
| ink | `#0A0A0A` | ivory sur ink 17,56:1 |
| signal | `#FE8811` (orange du logo) | ink sur signal 8,24:1 ; jamais en texte sur blanc (2,40:1) |
| signal-text | `#A64B00` | sur ivory 5,14:1 |
| ivory | `#F5F1E8` | lecture longue |
| stone-600 | `#57534B` | sur ivory 6,07:1 |

Typographie : Archivo variable (largeur 100 à 125 pour les titres), Martian Mono (cotes, dates,
statuts), Source Serif 4 (lecture du journal). Échelle 1,25. Rayon 0, traits d'encre de 2 px pour
cadrer les preuves, pas d'ombres. Mouvement ease-out-expo 180 / 280 / 420 ms, contenu visible
avant toute animation, `prefers-reduced-motion` respecté.

## Plan de migration

1. Corrections urgentes, dans une PR séparée.
2. Fondation : contenu bilingue unifié (fin des fichiers `*-en.tsx`), pages serveur, tokens,
   logo SVG, JSON-LD Organization / LocalBusiness / BreadcrumbList / SoftwareApplication,
   gabarits OG à la nouvelle identité.
3. Pages une à une, une PR chacune, captures avant / après aux quatre largeurs.
4. Contenus à fournir par ADC : établissements nommables, 2 ou 3 missions clients, nature des
   logos, témoignage signé, rôles de l'équipe, informations légales, e-mail au domaine, campagne
   photo de terrain.
5. Contrôle : Lighthouse mobile ≥ 90 et LCP < 2,5 s, accessibilité 100, crawl avant / après sans
   404 interne, redirections testées.

## Décisions attendues

1. Direction artistique (recommandée : C).
2. Sort des chiffres non sourcés (recommandé : les remplacer par les faits du registre).
3. Corrections urgentes livrées tout de suite (recommandé : oui).
4. Rubrique « Produits » avec deux redirections 301 (recommandé : oui).
