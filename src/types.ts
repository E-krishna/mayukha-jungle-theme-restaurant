export type MenuCategory =
  | 'all'
  | 'biryani'
  | 'starters'
  | 'soups'
  | 'main-course'
  | 'vegetarian'
  | 'non-vegetarian'
  | 'beverages';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  type: 'veg' | 'non-veg' | 'beverage';
  description: string;
  isConfirmedHighlight?: boolean;
  pricePlaceholder: string;
  image: string;
  tags?: string[];
}

export type GalleryCategory = 'all' | 'interior' | 'decor' | 'food' | 'gatherings';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  alt: string;
  tag: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  verified: boolean;
  highlightDish?: string;
  text: string;
}

export interface OccasionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
}

export interface ReservationFormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
  specialRequests?: string;
}
