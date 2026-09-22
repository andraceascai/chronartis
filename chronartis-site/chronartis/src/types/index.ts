export type ShowCategory = 'concert' | 'theater' | 'eveniment' | 'other';

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  caption?: string;
}

export interface PastShow {
  id: string;
  title: string;
  category: ShowCategory;
  coverImage: string;
  date: string;
  venue: string;
  city: string;
  shortDescription: string;
  fullDescription: string;
  director?: string;
  cast?: string[];
  gallery: GalleryItem[];
}

export interface Sponsor {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}
