# Lou Tandem — site vitrine

Livraison à vélo cargo pour les commerces de Nice. Site statique Astro, sans base de données.

Sources de vérité : `docs/brief.md`, `docs/arborescence.md`, `docs/design.md`.

## Commandes

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # génère dist/ (HTML statique + images AVIF/WebP)
npm run preview   # sert dist/ en local
npm run markers   # liste toutes les informations [À CONFIRMER] restantes
```

## Structure

```
docs/                     brief, arborescence, design (sources de vérité)
public/images/            emblem-tomette.svg (servi tel quel)
src/assets/images/        logo-lou-tandem.png, illustration-cargo.png (WebP 480/952), paul-cargo.jpg (AVIF/WebP 640/1080/1500)
src/data/site.ts          coordonnées, zone, jours, formulaire : toutes les infos à compléter
src/styles/tokens.css     variables CSS de docs/design.md
src/styles/global.css     base, boutons, cartes, marqueurs
src/components/           Header, Footer, Logo, Button, StepCard, HeroIllustration, PhotoPaul, PhotoFrame,
                          PageIntro, FinalCta, ContactForm, Marker
src/layouts/Base.astro    <head> SEO (canonical, Open Graph, JSON-LD LocalBusiness)
src/pages/                /, /livraison, /a-propos, /contact, /merci,
                          /mentions-legales, /confidentialite, 404, robots.txt
```

## Hébergement

GitHub Pages, via `.github/workflows/deploy.yml` : chaque push sur `main` republie le site sur
https://antoinegdx.github.io/LouTandem/ (réglage du dépôt : Settings → Pages → Source : GitHub Actions).
Les liens internes passent par `url()` (`src/data/site.ts`) pour tenir compte du préfixe `/LouTandem`.

## À faire avant le lancement

0. Passer `PRE_LAUNCH` à `false` dans `src/data/site.ts` (retire le `noindex` qui cache le site de Google).

1. Remplacer toutes les valeurs `[À CONFIRMER …]` (`npm run markers`). La plupart sont dans `src/data/site.ts`.
2. Formulaire : créer une clé d'accès sur web3forms.com avec l'email de réception de Paul,
   puis la coller dans `FORM.accessKey` (`src/data/site.ts`).
3. Nom de domaine : mettre `site` au domaine et supprimer `base` dans `astro.config.mjs`.
4. Sections au texte provisoire : repérables par l'attribut `data-provisoire`.
