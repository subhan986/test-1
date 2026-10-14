export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  priceUSD: number;
  pricePKR: number;
  image: string;
  tag?: string;
  featureNote?: string;
}

export const HERO_ASSETS = {
  heroBlueSofa: '/src/assets/images/hero_blue_sofa_interior_1791964400404.jpg',
  spotlightSofa: '/src/assets/images/spotlight_executive_sofa_1791964401649.jpg',
  testimonialRoom: '/src/assets/images/testimonial_living_room_1791964403005.jpg',
  chairGray: '/src/assets/images/chair_royal_gray_1791964402476.jpg',
  chairMustard: '/src/assets/images/chair_windsor_mustard_1791964402145.jpg',
  orcaTable: '/src/assets/images/orca_table_showcase_1791963560958.jpg',
  modernMuse: '/src/assets/images/modern_muse_sofa_1791963561176.jpg',
  luxuryBed: '/src/assets/images/custom_luxury_bed_1791963561581.jpg',
  diningTable: '/src/assets/images/sculptural_dining_table_1791963561848.jpg',
};

export const SHOWROOM_INFO = {
  name: 'TH Furnishers Pakistan',
  subtitle: 'Luxury Furniture & Interior Design',
  city: 'Faisalabad',
  country: 'Pakistan',
  rating: 5.0,
  reviewCount: 1,
  address: 'P-3, Near UBL Bank, Kashmir Bridge, Canal Road, Amin Town, Faisalabad',
  phone: '+92 300 9666700',
  whatsapp: '923009666700',
  instagram: 'thfurnisherspakistan',
  instagramUrl: 'https://instagram.com/thfurnisherspakistan',
  googleMapsUrl: 'https://maps.google.com/?q=TH+Furnishers+Canal+Road+Amin+Town+Faisalabad',
  openingHours: '11:00 AM – 10:00 PM PKT',
};

export const FLAGSHIP_IMAGES = {
  hero: HERO_ASSETS.heroBlueSofa,
  orcaTable: HERO_ASSETS.orcaTable,
  modernMuse: HERO_ASSETS.modernMuse,
  luxuryBed: HERO_ASSETS.luxuryBed,
  diningTable: HERO_ASSETS.diningTable,
};

export const CLIENT_REVIEWS = [
  {
    id: 'rev-1',
    author: 'Hamza Tariq',
    location: 'Canal Road, Faisalabad',
    rating: 5,
    date: 'February 2026',
    comment: 'Exceptional craftsmanship! We ordered the Modern Muse sofa and Orca table. The down-feather cushioning quality is on par with imported Italian brands.',
    verifiedPurchase: 'Modern Muse L-Shape & Orca Table',
  },
];

export const PRODUCTS: any[] = [];


export const LATEST_COLLECTION: ProductItem[] = [
  {
    id: 'col-1',
    name: 'Royal Club Chair',
    category: 'Chairs',
    description: 'Sleek, durable arm chair with slim steel legs',
    priceUSD: 470,
    pricePKR: 130000,
    image: HERO_ASSETS.chairGray,
    tag: 'Popular Choice',
  },
  {
    id: 'col-2',
    name: 'Windsor Armchair',
    category: 'Armchairs',
    description: 'Stylish, accessible and comfortable armchair',
    priceUSD: 510,
    pricePKR: 142000,
    image: HERO_ASSETS.chairMustard,
    tag: 'Oak Wood Frame',
  },
  {
    id: 'col-3',
    name: 'Luxury Velvet Sofa',
    category: 'Sofas',
    description: 'Comfortable with deep ergonomic support',
    priceUSD: 795,
    pricePKR: 220000,
    image: HERO_ASSETS.heroBlueSofa,
    tag: 'Down-Feather',
  },
];

export const PREMIUM_COLLECTION: ProductItem[] = [
  {
    id: 'prem-1',
    name: 'Executive Armchair',
    category: 'Chairs',
    description: 'Sculpted oak frame with mustard bouclé finish',
    priceUSD: 470,
    pricePKR: 130000,
    image: HERO_ASSETS.chairMustard,
    featureNote: 'Free Cushion Included',
  },
  {
    id: 'prem-2',
    name: 'Windsor Office Chair',
    category: 'Office',
    description: 'Ergonomic high-density weave with arm support',
    priceUSD: 320,
    pricePKR: 89000,
    image: HERO_ASSETS.chairGray,
    featureNote: 'Polyester Cover',
  },
  {
    id: 'prem-3',
    name: 'Royal Club Chair',
    category: 'Chairs',
    description: 'Minimalist silhouette with matte black framework',
    priceUSD: 380,
    pricePKR: 105000,
    image: HERO_ASSETS.chairGray,
    featureNote: 'Natural Cotton',
  },
  {
    id: 'prem-4',
    name: 'Wooden Armchair',
    category: 'Lounge',
    description: 'Solid seasoned hardwood frame with plush seat',
    priceUSD: 450,
    pricePKR: 125000,
    image: HERO_ASSETS.chairMustard,
    featureNote: 'Ortho Cushion',
  },
];

export const TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'Wade Davis',
    role: 'Interior Designer',
    avatarColor: 'bg-amber-400',
    avatarLetter: 'W',
    feedback: 'The craftsmanship and timber finishing exceeded all expectations. Flawless proportions for open-plan luxury homes.',
  },
  {
    id: 'test-2',
    name: 'Christina Keller',
    role: 'Architect',
    avatarColor: 'bg-emerald-500',
    avatarLetter: 'C',
    feedback: 'Specifying these pieces for our residential villas in Pakistan was the best decision. True architectural integrity.',
  },
  {
    id: 'test-3',
    name: 'Mark Gebhart',
    role: 'UI & Space Designer',
    avatarColor: 'bg-orange-500',
    avatarLetter: 'M',
    feedback: 'This product is wonderful and the colors with deep design are very commendable! Down-feather comfort is unmatched.',
  },
  {
    id: 'test-4',
    name: 'Jane Cooper',
    role: 'Director of Arts',
    avatarColor: 'bg-blue-500',
    avatarLetter: 'J',
    feedback: 'A delightful experience from the initial dimensions consultation to the white-glove living room installation.',
  },
];
