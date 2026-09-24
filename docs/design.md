Dernière mise à jour : 24/09/2026

# Identité visuelle — Lou Tandem (piste « Tomettes », typo Baie des Anges, validée)

Inspiration : tomettes niçoises (carreaux hexagonaux en terre cuite), façades ocre et volets verts du Vieux-Nice.
Référence visuelle : maquette « Tomettes — typo Baie des Anges » (canevas Lou Tandem) et design system « Lou Tandem ».

## Couleurs (variables CSS)

```css
:root {
  --creme: #F7F1E6;          /* fond de page, fond des cartes posées sur ocre */
  --ocre: #F0DFBF;           /* sections alternées, cadres photo */
  --tomette: #A3472A;        /* marque : bouton principal, favicon, numéros d'étapes */
  --tomette-foncee: #7E3520; /* survol bouton principal */
  --tomette-rose: #B8603F;   /* réservé (ancienne frise) — plus utilisé, jamais pour du texte */
  --tomette-claire: #C9784F; /* réservé (ancienne frise) — plus utilisé, jamais pour du texte */
  --volet: #2F5D50;          /* liens, bouton secondaire (contour), surtitres, focus */
  --encre: #2A211B;          /* texte principal */
  --encre-douce: #6B5A4C;    /* texte secondaire */
  --trait: #D5BF9C;          /* bordures de cartes, séparateurs */
  --trait-champ: #8C7A66;    /* bordures des champs de formulaire */
  --sur-tomette: #FFFFFF;    /* texte sur tomette */
  --erreur: #A1261B;         /* erreurs de formulaire */
}
```

Règles :
- Un seul bouton principal `tomette` par écran ; les actions secondaires en contour `volet`.
- Contrastes vérifiés (≥ 4,5:1) : encre, encre-douce, volet sur creme et ocre ; sur-tomette sur tomette.
- Pas de mode sombre.

## Typographie

Google Fonts :
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Atkinson+Hyperlegible:wght@400;700&display=swap" rel="stylesheet">
```

| Style | Police | Desktop | Mobile | Graisse |
|---|---|---|---|---|
| display (titre hero) | Bricolage Grotesque | 64/66px, espacement −1,5px | 40/44px, −1px | 800 |
| heading (titres de section) | Bricolage Grotesque | 32/38px | 26/32px | 800 |
| subheading (cartes, étapes) | Bricolage Grotesque | 22/28px | 20/26px | 700 |
| lead (chapeau hero) | Atkinson Hyperlegible | 19/29px | 17/26px | 400 |
| body | Atkinson Hyperlegible | 17/26px | 16/24px | 400 |
| body-small | Atkinson Hyperlegible | 15/22px | 14/20px | 400 |
| label (surtitres en capitales, espacement 1,5px ; libellés) | Atkinson Hyperlegible | 14/18px | 13/16px | 700 |
| button | Atkinson Hyperlegible | 17/20px | 16/20px | 700 |

Nom « Lou Tandem » : Bricolage Grotesque 800, sans italique, espacement −0,5px, 28px dans l'en-tête.

## Espacements et arrondis

Espacements : 4, 8, 12, 16, 24, 32, 48, 64px. Marges latérales 64px desktop, 16px mobile. Sections : 48px de padding vertical (desktop).
Arrondis : 6px (boutons, champs), 10px (cartes), 16px (photos).
Cibles tactiles ≥ 44px (boutons du hero : 52px de haut).

## Logo et motif tomette — usage limité

1. **Logo** : lettrage « LouTandem » (PNG transparent, `src/assets/images/logo-lou-tandem.png`, 1196×246, couleur #A9451D), servi en WebP + PNG de secours (1x/2x/3x). Hauteur 36px dans l'en-tête, 32px dans le pied de page, texte alternatif « Lou Tandem ».
   L'emblème hexagonal ne reste que comme icône d'onglet (`public/images/emblem-tomette.svg`).
2. **Numéros d'étapes** : hexagone `--tomette` de 44px, chiffre en Bricolage Grotesque 800 20px `--creme`, centré.
3. **Pas de frise** : la bande de tomettes a été retirée (24/09/2026). Entre l'en-tête de page (hero) et la section suivante : un filet de 1px `--trait`.
4. Pas d'hexagones ailleurs (illustration, photos, cartes, boutons).

## Composants de base (d'après la maquette)

- **En-tête** : logo à gauche ; liens « Le service », « Les deux pédalent » ; bouton principal « Travailler avec nous ». Menu repliable sur mobile.
- **Bouton principal** : fond tomette, texte blanc, radius 6px, hauteur 52px (44px dans l'en-tête), survol tomette-foncee.
- **Bouton secondaire** : contour 2px volet, texte volet, fond transparent.
- **Surtitre** : label en capitales, couleur volet.
- **Carte d'étape** : fond creme, bordure 1px trait, radius 10px, padding 24px, pastille hexagonale + titre + texte.
- **Illustration du hero** : posée directement sur creme, sans cadre ni fond (voir « Illustration et photos »).
- **Cadre photo** (page « Les deux pédalent ») : fond ocre, radius 16px ; placeholder « [Photo : …] » tant qu'une photo manque (Louis).
- **Champs de formulaire** : bordure 1px trait-champ, radius 6px, hauteur ≥ 44px, libellé visible au-dessus, focus anneau volet.

## Illustration et photos

- **Image du hero (accueil)** : `public/images/illustration-cargo.png` (952×863, PNG transparent). Livreur à vélo cargo au trait rouge tomette #A3472A, caisse chargée de légumes et de baguettes.
  - Posée directement sur le fond creme : pas de cadre, pas de fond, pas d'arrondi, pas d'ombre.
  - Toujours affichée en entier (`object-fit: contain`), jamais recadrée. Desktop : colonne de droite du hero, hauteur 400px. Mobile : sous le texte, pleine largeur.
  - Texte alternatif : « Illustration : un livreur à vélo cargo, la caisse remplie de légumes et de baguettes, salue en disant « Salut, ça roule ? ». Sur la caisse : « Produits locaux, bonne humeur ». »
  - Servir en WebP (avec transparence) et PNG de secours, largeurs 480 / 952.
  - [À CONFIRMER PAUL] la mention « Produits locaux » visible sur la caisse. [À CONFIRMER] les droits d'utilisation de l'illustration.
- **Photo de Paul** : `public/images/paul-cargo.jpg` (1500×2000, portrait), pour la page « Les deux pédalent », à côté de la photo de Louis (à fournir, même cadre).
  - Cadre carré (1:1), fond ocre, radius 16px, `object-fit: cover`, `object-position: 50% 32%`.
  - Texte alternatif : « Paul sur son vélo cargo chargé de sacs de livraison, dans une rue de Nice ».
  - Garder le bas de l'image hors cadre (impression partielle sur un sac, marque non validée [ACCORD CLIENT ?]).
  - Servir en WebP/AVIF, largeurs 640 / 1080 / 1500.

Note technique : dans le code, l'illustration et la photo sont rangées dans `src/assets/images/` (et non `public/images/`) pour qu'Astro génère les formats WebP/AVIF au build.

## Iconographie

Pas de jeu d'icônes défini. Si besoin : icônes au trait (1,5–2px) en encre ou volet. Pas d'emoji.

---

## Points restants [À CONFIRMER]
- Logo en version vectorielle (SVG), pour une netteté parfaite
- Photo de Louis
- Autres photos (vélo seul, livraison en situation)
- Mention « Produits locaux » sur l'illustration
- Droits d'utilisation de l'illustration
