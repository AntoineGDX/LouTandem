// Préfixe les chemins internes avec la base du site (ex. /LouTandem sur GitHub Pages).
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => (path === '/' ? `${BASE}/` : `${BASE}${path}`);

// Avant le lancement : pages exclues de Google (noindex). Passer à false quand le site est finalisé.
export const PRE_LAUNCH = true;

// Données du site réunies au même endroit.
// Toute valeur marquée [À CONFIRMER …] est affichée telle quelle sur le site
// pour rester visible ; la remplacer ici suffit à la mettre à jour partout.

export const SITE = {
  name: 'Lou Tandem',
  tagline: 'Livraison à vélo cargo pour les commerces de Nice',
  description:
    "Lou Tandem récupère la marchandise chez votre commerce et la livre à vos clients, à vélo cargo, dans Nice centre, du mardi au samedi.",
  city: 'Nice',
  zone: 'Nice centre',
  quartiers: 'Riquier, le Port, Carabacel, le Carré d’Or et Jean-Médecin',
  days: 'Du mardi au samedi',
  pricing: 'Selon vos besoins, sur devis.',
  pricingMarker: '[À CONFIRMER PAUL : formulation]',
} as const;

export const CONTACT = {
  // Contact par WhatsApp et email uniquement (pas d'appel téléphonique proposé).
  whatsappUrl: 'https://wa.me/33640328175',
  whatsappLabel: '+33 6 40 32 81 75',
  email: 'paul.company.b@gmail.com',
} as const;

// Formulaire de contact : Web3Forms (https://web3forms.com).
// La clé d'accès est publique par conception (elle ne sert qu'à router les envois vers l'email de Lou Tandem).
// Créer la clé sur web3forms.com avec l'email de réception, puis la coller ici.
export const FORM = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: '', // [À CONFIRMER : clé d'accès Web3Forms]
  subject: 'Nouvelle demande via le site Lou Tandem',
  thanksPath: url('/merci'),
} as const;

export const NAV = [
  { href: url('/livraison'), label: 'Le service' },
  { href: url('/a-propos'), label: 'Les deux pédalent' },
] as const;

export const CTA = { href: url('/contact'), label: 'Travailler avec nous' } as const;
