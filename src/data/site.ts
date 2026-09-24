// Données du site réunies au même endroit.
// Toute valeur marquée [À CONFIRMER …] est affichée telle quelle sur le site
// pour rester visible ; la remplacer ici suffit à la mettre à jour partout.

export const SITE = {
  name: 'Lou Tandem',
  tagline: 'Livraison à vélo cargo pour les commerces de Nice',
  description:
    "Lou Tandem, c'est Paulo : il récupère la marchandise chez votre commerce et la livre à vos clients, à vélo cargo, dans Nice centre, du mardi au samedi.",
  city: 'Nice',
  zone: 'Nice centre',
  zoneExtension: '[À CONFIRMER PAULO : quartiers/communes acceptés, limite]',
  days: 'Du mardi au samedi',
  hours: '[À CONFIRMER PAULO]',
  pricing: 'Selon vos besoins, sur devis.',
  pricingMarker: '[À CONFIRMER PAULO : formulation]',
  replyDelay: '[À CONFIRMER PAULO]',
} as const;

export const CONTACT = {
  // Coordonnées publiques pas encore fournies : liens placeholders.
  whatsappUrl: 'https://wa.me/[À CONFIRMER PAULO]', // format : https://wa.me/33XXXXXXXXX
  whatsappLabel: '[À CONFIRMER PAULO]',
  phoneHref: 'tel:[À CONFIRMER PAULO]', // format : tel:+33XXXXXXXXX
  phoneLabel: '[À CONFIRMER PAULO]',
  email: '[À CONFIRMER PAULO]',
} as const;

// Formulaire de contact : Web3Forms (https://web3forms.com).
// La clé d'accès est publique par conception (elle ne sert qu'à router les envois vers l'email de Paulo).
// Créer la clé sur web3forms.com avec l'email de réception, puis la coller ici.
export const FORM = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: '', // [À CONFIRMER : clé d'accès Web3Forms]
  subject: 'Nouvelle demande — Travailler avec Lou Tandem',
  thanksPath: '/merci',
} as const;

export const NAV = [
  { href: '/livraison', label: 'Le service' },
  { href: '/a-propos', label: 'Qui est Paulo' },
] as const;

export const CTA = { href: '/contact', label: 'Travailler avec Lou Tandem' } as const;
