export interface RoomCategory {
  id: string;
  name: string;
  badge: string;
  description: string;
  capacity: string;
  bedConfiguration: string;
  image: string;
  facilities: string[];
  isDemoSample: boolean;
  indicativePriceNote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Lobby' | 'Rooms' | 'Bathrooms' | 'Reception';
  imageUrl: string;
  description: string;
  isRepresentative: boolean;
}

export interface HotelConfig {
  name: string;
  brandTagline: string;
  phone: string;
  formattedPhone: string;
  address: {
    line1: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  checkIn: string;
  checkOut: string;
  rating: number;
  reviewCount: number;
  ratingSource: string;
  gstNumber?: string;
  instagram: string;
  googleMapsUrl: string;
  websiteMode: 'demo' | 'production';
  agency: {
    name: string;
    website: string;
    showAttribution: boolean;
  };
  verifiedAmenities: {
    title: string;
    description: string;
    icon: string;
    verified: boolean;
  }[];
  rooms: RoomCategory[];
  gallery: GalleryItem[];
}

export const hotelConfig: HotelConfig = {
  name: "Hotel The Grand Heritage Junagadh",
  brandTagline: "Your Comfortable Stay in Junagadh",
  phone: "919737771871",
  formattedPhone: "+91 97377 71871",
  address: {
    line1: "Second Floor, Axar Plaza-2",
    locality: "Zanzarda",
    city: "Junagadh",
    state: "Gujarat",
    pincode: "362015",
    country: "India",
    full: "Second Floor, Axar Plaza-2, Zanzarda, Junagadh, Gujarat 362015, India",
  },
  checkIn: "11:00 AM",
  checkOut: "10:00 AM",
  rating: 4.9,
  reviewCount: 144,
  ratingSource: "Supplied Google Maps information",
  gstNumber: "24AASFH7375P1ZE",
  instagram: "https://www.instagram.com/hotel_the_grand_heritage/",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+The+Grand+Heritage+Axar+Plaza-2+Zanzarda+Junagadh+Gujarat+362015",
  websiteMode: "demo",
  agency: {
    name: "Daxira InfoTech",
    website: "https://daxirainfo.site",
    showAttribution: true,
  },
  verifiedAmenities: [
    {
      title: "AC Luxurious Rooms",
      description: "Air-conditioned accommodations designed for relaxed and cool comfort during your stay in Junagadh.",
      icon: "snowflake",
      verified: true, // Displayed on official entrance signage
    },
    {
      title: "Front Desk Assistance",
      description: "Dedicated front desk reception counter to assist guests during check-in, check-out, and local travel inquiries.",
      icon: "clock",
      verified: true, // Verified from front desk reception
    },
    {
      title: "Prime Zanzarda Location",
      description: "Conveniently situated on the 2nd Floor of Axar Plaza-2, with swift access to Junagadh city and Girnar transit routes.",
      icon: "map-pin",
      verified: true,
    },
    {
      title: "Attached Private Bathrooms",
      description: "Modern, hygienic private bathrooms fitted with quality fixtures and water heaters.",
      icon: "bath",
      verified: true,
    },
  ],
  rooms: [
    {
      id: "executive-heritage",
      name: "Heritage Executive Room",
      badge: "Sample Category (Tariffs on Request)",
      description: "Comfortable air-conditioned king bedroom featuring warm wood paneling, designer lighting, and a serene ambiance suited for solo travelers and couples.",
      capacity: "Up to 2 Adults",
      bedConfiguration: "1 King-Size Bed",
      image: "/src/assets/images/room_executive_suite_1791886018649.jpg",
      facilities: ["Air Conditioning", "En-suite Bathroom", "Bedside Controls", "LED Television"],
      isDemoSample: true,
      indicativePriceNote: "Direct WhatsApp quote available based on travel dates",
    },
    {
      id: "deluxe-family-suite",
      name: "Grand Family Suite",
      badge: "Sample Category (Tariffs on Request)",
      description: "Spacious multi-guest layout equipped with comfortable sleeping arrangements, ideal for families visiting Girnar, religious sites, or wildlife excursions in Junagadh.",
      capacity: "Up to 3-4 Guests",
      bedConfiguration: "1 Double Bed + 1 Single Bed",
      image: "/src/assets/images/room_deluxe_family_1791886020132.jpg",
      facilities: ["Air Conditioning", "Extra Bedding Space", "En-suite Bathroom", "Wardrobe Storage"],
      isDemoSample: true,
      indicativePriceNote: "Direct WhatsApp quote available based on travel dates",
    },
    {
      id: "deluxe-comfort-room",
      name: "Deluxe Comfort AC Room",
      badge: "Sample Category (Tariffs on Request)",
      description: "Well-appointed air-conditioned room tailored for a peaceful night's rest after exploring the historic sights, stepwells, and forts of Junagadh.",
      capacity: "Up to 2 Adults",
      bedConfiguration: "1 Comfortable Double Bed",
      image: "/src/assets/images/hero_hotel_junagadh_1791886018636.jpg",
      facilities: ["Air Conditioning", "Private Bath", "Luggage Counter", "Intercom Phone"],
      isDemoSample: true,
      indicativePriceNote: "Direct WhatsApp quote available based on travel dates",
    },
  ],
  gallery: [
    {
      id: "gal-1",
      title: "Welcoming Reception & Foyer",
      category: "Reception",
      imageUrl: "/src/assets/images/hotel_reception_hall_1791886020058.jpg",
      description: "Warm reception desk with crystal lighting, wood detailing, and hospitable staff ready to welcome you to Junagadh.",
      isRepresentative: true,
    },
    {
      id: "gal-2",
      title: "Heritage Executive Bedroom",
      category: "Rooms",
      imageUrl: "/src/assets/images/room_executive_suite_1791886018649.jpg",
      description: "Comfortable king-size bed with crisp white linens and emerald accents for a restful night.",
      isRepresentative: true,
    },
    {
      id: "gal-3",
      title: "Grand Family Accommodations",
      category: "Rooms",
      imageUrl: "/src/assets/images/room_deluxe_family_1791886020132.jpg",
      description: "Spacious layout with artful linen arrangements, perfect for family vacations and pilgrimage tours.",
      isRepresentative: true,
    },
    {
      id: "gal-4",
      title: "En-suite Marble Bathroom",
      category: "Bathrooms",
      imageUrl: "/src/assets/images/suite_marble_bath_1791886020730.jpg",
      description: "Clean, stone-tiled bathroom with deep soaking tub and modern sanitary fixtures.",
      isRepresentative: true,
    },
    {
      id: "gal-5",
      title: "Grand Lounge & Architectural Heritage",
      category: "Lobby",
      imageUrl: "/src/assets/images/hero_hotel_junagadh_1791886018636.jpg",
      description: "Rich Indian architectural accents and warm ambient hospitality honoring the regal heritage of Saurashtra.",
      isRepresentative: true,
    },
  ],
};
