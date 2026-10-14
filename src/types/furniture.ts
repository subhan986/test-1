export type ProductCategory = 
  | 'all'
  | 'sofas'
  | 'tables'
  | 'beds'
  | 'dining'
  | 'accents';

export type AvailabilityType = 'all' | 'ready' | 'custom';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'sofas' | 'tables' | 'beds' | 'dining' | 'accents';
  pricePKR: number;
  priceUSDApprox?: number;
  image: string;
  availability: 'Ready in Showroom' | 'Custom Made to Order' | 'Available for Viewing';
  leadTime: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
    customizable: boolean;
  };
  materials: string[];
  cushioning?: string;
  woodType?: string;
  description: string;
  features: string[];
  showroomLocation: string;
  isFlagship?: boolean;
}

export interface CustomInquiryState {
  category: string;
  itemType: string;
  dimensionMode: 'standard' | 'custom';
  customLength: string;
  customWidth: string;
  customHeight: string;
  unit: 'inches' | 'feet';
  woodChoice: string;
  fabricChoice: string;
  cushioning: string;
  clientName: string;
  clientCity: string;
  specialNotes: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPurchase: string;
}
