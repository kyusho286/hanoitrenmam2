export interface Dish {
  id: number;
  name: string;
  shortDesc: string;
  fullDesc: string;
  history: string;
  location: string;
  image: string;
}

export interface MapPoint {
  id: number;
  name: string;
  top: string; // CSS percentage for positioning
  left: string; // CSS percentage for positioning
  specialties: string[];
  famousShops: string[];
  description: string;
  iframeUrl: string; // Google Maps Embed URL
}

export interface Story {
  id: number;
  title: string;
  excerpt: string;
  content: string; // In a real app this might be HTML or Markdown
  image: string;
}