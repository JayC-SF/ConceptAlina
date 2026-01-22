
import { Service, GalleryImage, Product } from './types';

export const SERVICES: Service[] = [
  { id: '1', name: 'Coupe Femme', price: 'à partir de 65$', description: 'Consultation personnalisée, shampoing, massage capillaire et mise en plis.', category: 'cut' },
  { id: '2', name: 'Balayage Signature', price: 'à partir de 180$', description: 'Technique de coloration artistique pour un rendu naturel et lumineux.', category: 'color' },
  { id: '3', name: 'Coloration Racine', price: '75$+', description: 'Retouche couleur avec des produits haut de gamme sans ammoniaque.', category: 'color' },
  { id: '4', name: 'Coupe Homme', price: '45$', description: 'Coupe moderne ou classique, incluant shampoing et coiffage.', category: 'men' },
  { id: '5', name: 'Traitement Kérastase', price: '35$', description: 'Soin intensif adapté aux besoins spécifiques de votre fibre capillaire.', category: 'treatment' },
  { id: '6', name: 'Mise en plis Événementielle', price: '55$+', description: 'Pour vos soirées spéciales ou mariages.', category: 'cut' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Elixir Ultime L\'Huile Originale',
    brand: 'Kérastase',
    price: '68$',
    description: 'Huile capillaire sublimatrice multi-usages pour une brillance éclatante.',
    imageUrl: 'https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p2',
    name: 'Bain Régénérant Chronologiste',
    brand: 'Kérastase',
    price: '54$',
    description: 'Shampoing jeunesse prodige pour purifier et revitaliser le cuir chevelu.',
    imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p3',
    name: 'Sérum Absolut Repair Molecular',
    brand: 'L\'Oréal Professionnel',
    price: '48$',
    description: 'Réparation instantanée de la structure moléculaire du cheveu.',
    imageUrl: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p4',
    name: 'Metal Detox Huile Protectrice',
    brand: 'L\'Oréal Professionnel',
    price: '42$',
    description: 'Empêche la casse du cheveu et préserve l\'éclat de la coloration.',
    imageUrl: 'https://images.unsplash.com/photo-1598454123302-3c870911fe76?auto=format&fit=crop&q=80&w=800'
  }
];

export const GALLERY: GalleryImage[] = [
  { url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800', alt: 'Blond polaire balayage', category: 'Coloration' },
  { url: 'https://images.unsplash.com/photo-1595476108010-b4d1f8c2b3f1?auto=format&fit=crop&q=80&w=800', alt: 'Coupe dégradée moderne', category: 'Coupe' },
  { url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800', alt: 'Brushing volumineux', category: 'Style' },
  { url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800', alt: 'Chignon de mariée', category: 'Événement' },
  { url: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&q=80&w=800', alt: 'Copper hair trend', category: 'Coloration' },
  { url: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=800', alt: 'Bob classique', category: 'Coupe' },
];

export const SALON_INFO = {
  name: 'Concept Alina',
  address: '3369 Rue Masson, Montréal, QC H1X 1R5',
  phone: '514-303-0350',
  hours: [
    { day: 'Lundi', hours: 'Fermé' },
    { day: 'Mardi', hours: '9h30 - 17h' },
    { day: 'Mercredi', hours: '10h - 17h' },
    { day: 'Jeudi', hours: '9h30 - 18h' },
    { day: 'Vendredi', hours: '9h30 - 18h' },
    { day: 'Samedi', hours: '9h30 - 17h' },
    { day: 'Dimanche', hours: 'Fermé' },
  ]
};
