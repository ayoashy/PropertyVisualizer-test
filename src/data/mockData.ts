export interface Apartment {
  id: number;
  unitType: string;
  area: number;
  roomCount: number;
  imageUrl: string;
  price: number;
  status: 'available' | 'reserved' | 'sold';
  features: string[];
  floorPlan: {
    bedrooms: number;
    bathrooms: number;
    balconies: number;
    parking: number;
  };
  amenities: string[];
  view: string;
  orientation: string;
}

export interface Tower {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  totalFloors: number;
  amenities: string[];
  location: string;
}

export const towers: Tower[] = [
  {
    id: 'A',
    name: 'Tower A',
    description: 'Luxury apartments with city views',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    totalFloors: 15,
    amenities: ['Swimming Pool', 'Gym', 'Garden', 'Security'],
    location: 'City Center',
  },
  {
    id: 'B',
    name: 'Tower B',
    description: 'Modern living spaces with park views',
    imageUrl:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    totalFloors: 15,
    amenities: ['Swimming Pool', 'Gym', 'Garden', 'Security'],
    location: 'Park View',
  },
  {
    id: 'C',
    name: 'Tower C',
    description: 'Premium residences with river views',
    imageUrl:
      'https://images.unsplash.com/photo-1673522681878-205dfab569d3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG93ZXIlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    totalFloors: 15,
    amenities: ['Swimming Pool', 'Gym', 'Garden', 'Security'],
    location: 'Riverside',
  },
];

export const apartments: Apartment[] = [
  {
    id: 1,
    unitType: '2BHK Deluxe',
    area: 1200,
    roomCount: 2,
    imageUrl:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: 850000,
    status: 'available',
    features: ['Modern Kitchen', 'Walk-in Closet', 'Smart Home'],
    floorPlan: {
      bedrooms: 2,
      bathrooms: 2,
      balconies: 1,
      parking: 1,
    },
    amenities: ['24/7 Security', 'Power Backup', 'High-speed Internet'],
    view: 'City View',
    orientation: 'North-East',
  },
  {
    id: 2,
    unitType: '3BHK Premium',
    area: 1800,
    roomCount: 3,
    imageUrl:
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: 1200000,
    status: 'reserved',
    features: ['Luxury Kitchen', 'Master Suite', 'Smart Home'],
    floorPlan: {
      bedrooms: 3,
      bathrooms: 3,
      balconies: 2,
      parking: 2,
    },
    amenities: ['24/7 Security', 'Power Backup', 'High-speed Internet'],
    view: 'Park View',
    orientation: 'South-West',
  },
  {
    id: 3,
    unitType: '4BHK Luxury',
    area: 2400,
    roomCount: 4,
    imageUrl:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D',
    price: 1800000,
    status: 'available',
    features: ['Gourmet Kitchen', 'Master Suite', 'Smart Home'],
    floorPlan: {
      bedrooms: 4,
      bathrooms: 4,
      balconies: 3,
      parking: 2,
    },
    amenities: ['24/7 Security', 'Power Backup', 'High-speed Internet'],
    view: 'River View',
    orientation: 'East-West',
  },
];
