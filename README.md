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
public/images/            frise-tomettes.svg, emblem-tomette.svg (servis tels quels)
src/assets/images/        paulo-cargo.jpg (optimisée au build : AVIF/WebP 640/1080/1500)
src/data/site.ts          coordonnées, zone, jours, formulaire : toutes les infos à compléter
src/styles/tokens.css     variables CSS de docs/design.md
src/styles/global.css     base, boutons, cartes, marqueurs
src/components/           Header, Footer, Button, StepCard, Frieze, HeroPhoto, PhotoFrame,
                          PageIntro, FinalCta, ContactForm, Marker, Emblem
src/layouts/Base.astro    <head> SEO (canonical, Open Graph, JSON-LD LocalBusiness)
src/pages/                /, /livraison, /a-propos, /contact, /merci,
                          /mentions-legales, /confidentialite, 404, robots.txt
```

## À faire avant la mise en ligne

1. Remplacer toutes les valeurs `[À CONFIRMER …]` (`npm run markers`). La plupart sont dans `src/data/site.ts`.
2. Formulaire : créer une clé d'accès sur web3forms.com avec l'email de réception de Paulo,
   puis la coller dans `FORM.accessKey` (`src/data/site.ts`).
3. Nom de domaine : remplacer `site` dans `astro.config.mjs`.
4. Sections au texte provisoire : repérables par l'attribut `data-provisoire`.
