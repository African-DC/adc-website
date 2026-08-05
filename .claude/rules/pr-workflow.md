# Rule: Discipline PR — une PR = un état fini, base toujours `main`

## Quand s'active

Cette rule s'active dès que tu :

- Ouvres une pull request sur `African-DC/adc-website`
- Veux ajouter, corriger ou compléter quelque chose **après** avoir annoncé une PR
- Envisages de baser une PR sur autre chose que `main` (PR « chaînée » / stacked)
- Reprends une branche dont la PR a déjà été mergée
- Constates qu'un contenu livré « n'apparaît pas sur le site »

## Pourquoi cette rule existe

**Quatre incidents le 5 août 2026, tous de la même famille.** Le repo est mergé
très vite (souvent moins d'une minute après l'ouverture de la PR — c'est une
bonne pratique côté produit). Conséquence : **tout ce qui est poussé sur une
branche après l'annonce de sa PR arrive après le merge et n'est jamais intégré.**

| # | Ce qui s'est passé | Conséquence |
|---|---|---|
| 1 | PR #2 mergée ~1 min après ouverture ; commits poussés ensuite sur la même branche | Travail orphelin, invisible |
| 2 | PR #3 mergée avec **1 seul commit sur 5** | Deux articles jamais intégrés |
| 3 | PR #5 basée sur la branche de la PR #4 (stacked) puis mergée | Article vélo intégré dans une **branche intermédiaire**, jamais dans `main` → **jamais déployé**, découvert uniquement parce que le site ne l'affichait pas |
| 4 | PR #4 mergée avant qu'un correctif y soit poussé | Correctif de cadrage perdu |

Le point commun n'est pas une erreur de merge : c'est **l'hypothèse fausse
qu'une branche reste ouverte après l'annonce de sa PR**.

⚠️ Rappel d'infrastructure : **seul `main` est déployé** (Vercel). Une PR mergée
dans une autre branche ne met rien en ligne.

## Règles absolues

1. **Une PR = un état fini.** Une fois la PR annoncée, on ne pousse plus rien sur
   sa branche. Tout ajout, correctif ou complément part dans une **nouvelle
   branche issue de `main`** avec une **nouvelle PR**.
2. **Base toujours `main`.** Jamais de PR chaînée sur une branche de feature,
   même pour éviter un conflit. Une PR chaînée mergée n'atteint pas `main`.
3. **Les conflits se résolvent par rebase sur `main`**, pas par chaînage. Deux
   articles qui insèrent une entrée au même endroit de `lib/blog.ts` entrent en
   conflit : c'est normal, on le résout, on ne le contourne pas.
4. **Ne jamais réutiliser une branche dont la PR est mergée.** Repartir de `main`
   (`git checkout -B <branche> origin/main`), en **rebasant** les commits non
   mergés plutôt qu'en les jetant.
5. **`--force-with-lease`, jamais `--force`.** Cette protection a déjà évité
   d'effacer un article entier qui avait été mergé dans la branche entre-temps.
   Un rejet `stale info` n'est pas un obstacle à contourner : c'est un signal
   qu'il faut **fetch et inspecter** avant toute chose.
6. **Vérifier que le contenu est réellement dans `main`** après un merge — le
   statut « merged » d'une PR ne suffit pas, il dépend de sa base.

## Vérifications

Avant d'ouvrir une PR :

```bash
git fetch origin main
git rebase origin/main
git log --oneline origin/main..HEAD     # exactement ce que la PR contiendra
npm run lint && npm run build
```

Après un merge, confirmer que le contenu est bien en ligne :

```bash
git fetch origin main
git log --oneline origin/main..HEAD     # doit être VIDE si tout est intégré
git ls-tree origin/main "app/[locale]/blog/<slug>/"   # vide = absent de main
```

Diagnostiquer une PR mergée « qui n'a rien déployé » — vérifier sa base :

```bash
git show --no-patch --format="parents: %p" <sha-du-merge>
```

Si le premier parent n'est pas un commit de `main`, la PR a été mergée ailleurs.

## Anti-patterns à BLOQUER

1. ❌ Pousser un commit sur une branche dont la PR est déjà annoncée ou ouverte
2. ❌ Ouvrir une PR dont la `base` n'est pas `main`
3. ❌ Empiler les PR pour éviter un conflit dans `lib/blog.ts`
4. ❌ Continuer à committer sur une branche dont la PR a été mergée
5. ❌ `git push --force` (utiliser `--force-with-lease`)
6. ❌ Forcer un push après un rejet `stale info` sans avoir inspecté le distant
7. ❌ Conclure « c'est livré » sur la seule foi du statut « merged » d'une PR
8. ❌ Regrouper plusieurs sujets sans lien dans une même PR : si un seul pose
   problème, tout est bloqué — et un merge rapide n'en emporte qu'une partie

## Voir aussi

- `README.md` — commandes du projet
- `DEPLOY.md` / `DEPLOY-HOSTINGER.md` — déploiement (seul `main` part en production)
