// Forma exactă a documentelor așa cum vin din backend (MongoDB) — vezi
// chronartis-site/backend/models/. Diferite de tipurile din src/types/index.ts,
// care erau construite pentru mockData și rămân doar pentru ce n-a fost încă
// migrat pe date reale (ex. Arhiva).

export interface SponsorDb {
  _id: string;
  nume: string;
  logoUrl: string;
  websiteUrl: string;
}

export interface StatisticaDb {
  _id: string;
  eticheta: string;
  valoare: number;
  inCrestere: boolean;
  ordine: number;
}

export interface TicketLinkDb {
  platforma: string;
  url: string;
}

export interface SpectacolDb {
  _id: string;
  titlu: string;
  categorie: string;
  afis: string;
  data: string;
  ora: string;
  locatie: string;
  descriere: string;
  linkuriBilete: TicketLinkDb[];
}

export interface GalerieItemDb {
  _id?: string;
  tip: 'image' | 'video';
  url: string;
  descriere?: string;
}

export interface ArhivaDb {
  _id: string;
  // Slug scris de mână în Mongo (ex. "oscar-si-tanti-roz-iasi-2026") — ăsta
  // apare în URL, nu _id-ul generat de Mongo. Opțional, ca documentele mai
  // vechi, fără slug completat încă, să nu rupă tipul.
  id?: string;
  titlu: string;
  categorie: string;
  afis: string;
  data: string;
  locatie: string;
  oras: string;
  descriere: string;
  regizor?: string;
  distributie?: string[];
  galerie: GalerieItemDb[];
}
