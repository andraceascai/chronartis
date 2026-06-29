export type ShowCategory = 'concert' | 'theater' | 'opera' | 'dance' | 'other';

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  caption?: string;
}

export interface TicketLink {
  platform: string;
  url: string;
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

export interface UpcomingShow {
  id: string;
  title: string;
  category: ShowCategory;
  coverImage: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  description: string;
  ticketLinks: TicketLink[];
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
