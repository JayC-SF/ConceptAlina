
export interface Service {
  id: string;
  name: string;
  price: string;
  description: string;
  category: 'cut' | 'color' | 'treatment' | 'men';
}

export interface GalleryImage {
  url: string;
  alt: string;
  category: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  description: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
