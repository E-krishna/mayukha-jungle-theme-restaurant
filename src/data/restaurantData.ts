import { MenuItem, GalleryItem, ReviewItem, OccasionItem } from '../types';

export const RESTAURANT_INFO = {
  name: 'Mayukha',
  fullName: 'Mayukha Jungle Theme Restaurant',
  subtitle: 'JUNGLE THEME RESTAURANT',
  tagline: 'Where the wild meets the wonderful.',
  heroHeadline: 'Step Into a World of Flavor',
  heroSubheadline: 'Where the wild meets the wonderful.',
  heroBody:
    'Discover a unique jungle-themed dining experience in the heart of KPHB, Hyderabad—crafted for delicious moments, celebrations, and unforgettable memories.',
  phone: '089779 33805',
  phoneFormatted: '+91 89779 33805',
  address: {
    line1: '1st Floor, PNR Empire, KPHB Main Road',
    line2: 'Above Lalitha Jewellery',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500072',
    country: 'India',
    full: '1st Floor, PNR Empire, KPHB Main Road, Above Lalitha Jewellery, Hyderabad, Telangana 500072, India.'
  },
  ratings: {
    score: 3.9,
    maxScore: 5.0,
    reviewCount: 3458,
    platform: 'Google Reviews',
    distribution: [
      { stars: 5, percentage: 58 },
      { stars: 4, percentage: 22 },
      { stars: 3, percentage: 10 },
      { stars: 2, percentage: 4 },
      { stars: 1, percentage: 6 }
    ]
  },
  services: [
    { name: 'Dine-in', description: 'Immersive jungle interior dining' },
    { name: 'Kerbside pickup', description: 'Convenient takeaway at PNR Empire' },
    { name: 'No-contact delivery', description: 'Fresh hot delivery to your doorstep' }
  ],
  googleMapsUrl: 'https://maps.google.com/?q=Mayukha+Jungle+Theme+Restaurant+PNR+Empire+KPHB+Hyderabad',
  googleReviewUrl: 'https://www.google.com/search?q=Mayukha+Jungle+Theme+Restaurant+KPHB+reviews'
};

export const CONFIRMED_HIGHLIGHT_DISHES: MenuItem[] = [
  {
    id: 'boneless-biryani',
    name: 'Boneless Chicken Biryani',
    category: 'biryani',
    type: 'non-veg',
    description:
      'Aromatic long-grain basmati dum biryani layered with marinated tender boneless chicken morsels and slow-cooked in traditional fragrant spice blend.',
    isConfirmedHighlight: true,
    pricePlaceholder: '₹369',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    tags: ['Customer Favorite', 'Signature Dum']
  },
  {
    id: 'apollo-fish',
    name: 'Apollo Fish',
    category: 'starters',
    type: 'non-veg',
    description:
      'Classic Hyderabad specialty featuring crispy boneless fish batons tossed with fiery green chillies, aromatic curry leaves, garlic, and fresh lime.',
    isConfirmedHighlight: true,
    pricePlaceholder: '₹349',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    tags: ['Hyderabad Special', 'Must Try']
  },
  {
    id: 'chicken-wings',
    name: 'Chicken Wings',
    category: 'starters',
    type: 'non-veg',
    description:
      'Succulent chicken wings wok-tossed in signature rustic seasonings, roasted spices, and zesty herb glaze.',
    isConfirmedHighlight: true,
    pricePlaceholder: '₹299',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
    tags: ['Appetizer', 'Crispy & Juicy']
  },
  {
    id: 'veg-corn-soup',
    name: 'Veg Corn Soup',
    category: 'soups',
    type: 'veg',
    description:
      'Steaming velvety sweet corn soup simmered with garden vegetables, gentle aromatic spices, and a hint of white pepper.',
    isConfirmedHighlight: true,
    pricePlaceholder: '₹179',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    tags: ['Comforting', 'Vegetarian']
  },
  {
    id: 'classic-mojito',
    name: 'Mojito',
    category: 'beverages',
    type: 'beverage',
    description:
      'Crisp, refreshing cooler handcrafted with fresh muddled garden mint, tangy citrus wedges, sparkling club soda, and crushed ice.',
    isConfirmedHighlight: true,
    pricePlaceholder: '₹149',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    tags: ['Refreshing', 'Signature Mocktail']
  },
  {
    id: 'water-bottle',
    name: 'Water Bottle',
    category: 'beverages',
    type: 'beverage',
    description: 'Packaged premium sealed drinking water chilled to your preference.',
    isConfirmedHighlight: true,
    pricePlaceholder: 'MRP',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80',
    tags: ['Packaged']
  }
];

export const ADDITIONAL_MENU_ITEMS: MenuItem[] = [
  {
    id: 'paneer-tikka',
    name: 'Paneer Tikka Safari',
    category: 'vegetarian',
    type: 'veg',
    description:
      'Marinated cottage cheese cubes roasted with bell peppers and onions in clay oven with robust herbs.',
    pricePlaceholder: '₹289',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
    tags: ['Clay Oven', 'Vegetarian']
  },
  {
    id: 'natu-kodi-curry',
    name: 'Mayukha Special Country Chicken Curry',
    category: 'main-course',
    type: 'non-veg',
    description:
      'Traditional Telangana-Andhra village style spicy country chicken simmered in rich poppy seed and roasted coconut gravy.',
    pricePlaceholder: '₹379',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    tags: ['Regional Special']
  },
  {
    id: 'veg-dum-biryani',
    name: 'Nizami Veg Dum Biryani',
    category: 'biryani',
    type: 'veg',
    description:
      'Fragrant basmati rice infused with saffron, layered with seasonal garden vegetables, fried cashews, and mint.',
    pricePlaceholder: '₹259',
    image: 'https://images.unsplash.com/photo-1642821373181-696a54913e9a?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Aromatic Dum']
  },
  {
    id: 'dal-tadka',
    name: 'Yellow Dal Lasooni Tadka',
    category: 'main-course',
    type: 'veg',
    description:
      'Slow-tempered yellow lentils cooked with roasted garlic, cumin seeds, dried red chillies, and fresh coriander.',
    pricePlaceholder: '₹199',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    tags: ['Comfort Food', 'Vegetarian']
  },
  {
    id: 'crispy-corn',
    name: 'Crispy Pepper Corn',
    category: 'starters',
    type: 'veg',
    description:
      'Golden sweet corn kernels tossed with chopped spring onions, cracked pepper, and aromatic spices.',
    pricePlaceholder: '₹219',
    image: 'https://images.unsplash.com/photo-1584278860047-22db9ff82bed?auto=format&fit=crop&w=800&q=80',
    tags: ['Crunchy', 'Vegetarian']
  },
  {
    id: 'manchow-soup',
    name: 'Hot & Sour Chicken Soup',
    category: 'soups',
    type: 'non-veg',
    description:
      'Hearty, spicy-tangy chicken broth infused with shredded chicken, ginger, and crispy fried noodles.',
    pricePlaceholder: '₹199',
    image: 'https://images.unsplash.com/photo-1607528971899-2e89e6c0ec69?auto=format&fit=crop&w=800&q=80',
    tags: ['Spicy']
  }
];

export const ALL_MENU_ITEMS: MenuItem[] = [
  ...CONFIRMED_HIGHLIGHT_DISHES,
  ...ADDITIONAL_MENU_ITEMS
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Canopy Dining Tables',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Mayukha Jungle Theme Restaurant dining tables surrounded by lush greenery',
    tag: 'Restaurant Interior'
  },
  {
    id: 'gal-2',
    title: 'Forest Ambient Lighting',
    category: 'decor',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80',
    alt: 'Atmospheric warm golden hanging lights weaving through jungle foliage',
    tag: 'Jungle Decor'
  },
  {
    id: 'gal-3',
    title: 'Signature Dum Biryani Platter',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80',
    alt: 'Fragrant Boneless Chicken Biryani served fresh in earthen tableware',
    tag: 'Signature Cuisine'
  },
  {
    id: 'gal-4',
    title: 'Family Gathering Table',
    category: 'gatherings',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1000&q=80',
    alt: 'Large dining table set for celebration in lush forest ambience',
    tag: 'Group Dining'
  },
  {
    id: 'gal-5',
    title: 'Handcrafted Mocktails',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80',
    alt: 'Freshly muddled Mojito cooler with botanical mint and lime',
    tag: 'Coolers & Drinks'
  },
  {
    id: 'gal-6',
    title: 'Tropical Botanical Canopy',
    category: 'decor',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1000&q=80',
    alt: 'Natural wood furniture surrounded by dense tropical leaf arrangements',
    tag: 'Ambiance Details'
  }
];

export const OCCASION_CARDS: OccasionItem[] = [
  {
    id: 'family',
    title: 'Family Dining',
    subtitle: 'Wonders for All Ages',
    description:
      'A welcoming haven where kids marvel at the jungle canopy and parents enjoy a relaxed, flavorful meal in comfortable spacious seating.',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
    badge: 'Family Favorite'
  },
  {
    id: 'friends',
    title: 'Friends & Gatherings',
    subtitle: 'Unwind & Connect',
    description:
      'From weekend catch-ups to post-work dining, share steaming platters of biryani and starters in an atmosphere that sparks conversation.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    badge: 'Vibrant & Lively'
  },
  {
    id: 'celebrations',
    title: 'Celebrations & Parties',
    subtitle: 'Moments to Remember',
    description:
      'Make birthdays, anniversaries, and personal milestones unforgettable against the memorable backdrop of our nature-inspired restaurant.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    badge: 'Special Occasions'
  }
];

export const VERIFIED_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Verified KPHB Diner',
    rating: 5,
    date: 'Recent Google Review',
    verified: true,
    highlightDish: 'Boneless Chicken Biryani',
    text: 'A very different and enjoyable dining experience in KPHB! The jungle theme is executed nicely with greenery and warm ambient lighting. The Boneless Chicken Biryani was flavorful, fragrant, and portion size was generous.'
  },
  {
    id: 'rev-2',
    author: 'Hyderabad Family Guest',
    rating: 4,
    date: 'Verified Google Diner',
    verified: true,
    highlightDish: 'Apollo Fish & Starters',
    text: 'Brought our kids here for a Sunday lunch. The kids were thrilled with the jungle aesthetic and animal-themed touches. The Apollo Fish was crispy, tangy, and well spiced. Great place above Lalitha Jewellery on KPHB Main Road.'
  },
  {
    id: 'rev-3',
    author: 'Local Food Enthusiast',
    rating: 4,
    date: 'Verified Google Diner',
    verified: true,
    highlightDish: 'Jungle Ambience',
    text: 'Good place for team dinners or family get-togethers. The staff is polite, and the atmosphere stands out compared to regular plain restaurants in the area. Starters and soups came out hot and fresh.'
  }
];
