/**
 * Tipos de dominio compartidos entre el backend (route handlers) y el
 * frontend. Reemplazan a los tipos que antes generaba Payload.
 */

export interface MediaRef {
  url: string;
  alt: string;
}

export interface Evento {
  id: number;
  eventTitle: string;
  eventDescription: string;
  eventImage: MediaRef | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Proyecto {
  id: number;
  projectTitle: string;
  projectDescription: string;
  projectImage: MediaRef | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Home {
  heroTitle: string;
  heroSubtitle: string;
  carouselImages: MediaRef[];
}

export interface Nosotros {
  aboutText: string;
  historyText: string;
  historyImages: MediaRef[];
}
