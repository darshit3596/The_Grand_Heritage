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
  category: 'Lobby' | 'Rooms' | 'Bathrooms' | 'Reception' | 'Entrance';
  imageUrl: string;
  description: string;
  isRepresentative: boolean;
}

export interface HotelConfig {
  name: string;
  brandTagline: string;
  logoUrl?: string;
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
  brandTagline: "A legacy of hospitality",
  logoUrl: "/images/logo.jpg",
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
  reviewCount: 0,
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
      title: "Front Desk & Reception",
      description: "Dedicated front desk reception counter with illuminated hotel branding to assist guests with check-in and travel inquiries.",
      icon: "clock",
      verified: true, // Verified from front desk reception photo
    },
    {
      title: "Bathtub & Marble Bathrooms",
      description: "Private en-suite bathrooms finished with marble wall tiles, soaking bathtub, and modern fixtures.",
      icon: "bath",
      verified: true, // Verified from bathroom photo
    },
    {
      title: "Prime Zanzarda Location",
      description: "Conveniently situated on the 2nd Floor of Axar Plaza-2, with swift access to Junagadh city and Girnar transit routes.",
      icon: "map-pin",
      verified: true,
    },
  ],
  rooms: [
    {
      id: "heritage-deluxe-bird-sconces",
      name: "Heritage Executive AC Room",
      badge: "Real Property Category",
      description: "Spacious air-conditioned bedroom featuring custom wood-textured headboard wall, iconic golden bird sconce lamps, king-size bed with emerald green quilted cushions, and bedside telephone controls.",
      capacity: "Up to 2-3 Guests",
      bedConfiguration: "1 King-Size Bed (+ extra single bed available)",
      image: "/images/bedroom_bird.jpg",
      facilities: ["Air Conditioning", "Bird Sconce Designer Lamps", "En-suite Marble Bath", "Intercom Phone", "Bedside Switches"],
      isDemoSample: false,
      indicativePriceNote: "Direct quote available on WhatsApp based on your travel dates",
    },
    {
      id: "deluxe-swan-lion-suite",
      name: "Deluxe Suite with Gir Lion Art",
      badge: "Real Property Category",
      description: "Elegantly appointed room honoring Junagadh's heritage with framed Asiatic Lion wall art, delicate floral wallpaper, swan folded towel art, and contemporary LED accent lighting.",
      capacity: "Up to 2 Adults",
      bedConfiguration: "1 Plush King / Double Bed",
      image: "/images/bedroom_swan.jpg",
      facilities: ["Air Conditioning", "Swan Linen Presentation", "Asiatic Lion Artwork", "Toiletries Amenity Kit", "En-suite Bathroom"],
      isDemoSample: false,
      indicativePriceNote: "Direct quote available on WhatsApp based on your travel dates",
    },
    {
      id: "comfort-tv-console-room",
      name: "Comfort AC Room with Entertainment Console",
      badge: "Real Property Category",
      description: "Modern room equipped with a floating wooden media console, flat-screen LED TV, spacious wardrobe storage, and tiled flooring, perfect for pilgrimage or business trips.",
      capacity: "Up to 2 Adults",
      bedConfiguration: "1 Comfortable Bed",
      image: "/images/tv_console.jpg",
      facilities: ["Air Conditioning", "Wall-mounted LED TV", "Wooden Wardrobe Closet", "Floating Desk Console", "Private Bath"],
      isDemoSample: false,
      indicativePriceNote: "Direct quote available on WhatsApp based on your travel dates",
    },
  ],
  gallery: [
    {
      id: "gal-1",
      title: "Front Desk & Glowing Brand Signage",
      category: "Reception",
      imageUrl: "/images/reception.jpg",
      description: "Our authentic reception desk at Hotel The Grand Heritage Junagadh, with marble counter, festive marigolds, and chandelier.",
      isRepresentative: false,
    },
    {
      id: "gal-2",
      title: "Hotel Entrance & Welcome Doors",
      category: "Entrance",
      imageUrl: "/images/entrance.jpg",
      description: "Main entrance of Hotel The Grand Heritage featuring our official signboard, AC Luxurious Rooms branding, and welcome glass doors.",
      isRepresentative: false,
    },
    {
      id: "gal-3",
      title: "Executive Bed with Golden Bird Lamps",
      category: "Rooms",
      imageUrl: "/images/bedroom_bird.jpg",
      description: "Comfortable guest bedroom with emerald quilted cushions, rustic wood texture wall, and golden bird wall sconce lamps.",
      isRepresentative: false,
    },
    {
      id: "gal-4",
      title: "Deluxe Bedroom & Gir Lion Decor",
      category: "Rooms",
      imageUrl: "/images/bedroom_swan.jpg",
      description: "Beautifully made bed with swan folded towels, floral wallpaper, and Gir National Park Asiatic Lion pride wall art.",
      isRepresentative: false,
    },
    {
      id: "gal-5",
      title: "En-suite Marble Bathroom & Soaking Tub",
      category: "Bathrooms",
      imageUrl: "/images/bathroom.jpg",
      description: "Grey swirl marble tiled bathroom fitted with built-in soaking bathtub and mountain landscape roller blind.",
      isRepresentative: false,
    },
    {
      id: "gal-6",
      title: "Entertainment Console & Wardrobe",
      category: "Rooms",
      imageUrl: "/images/tv_console.jpg",
      description: "Modern floating wooden TV entertainment unit and wardrobe storage inside guest room.",
      isRepresentative: false,
    },
    {
      id: "gal-7",
      title: "Hotel Facade & Welcoming Foyer",
      category: "Lobby",
      imageUrl: "/images/hero.jpg",
      description: "Grand illumination of Hotel The Grand Heritage entrance with majestic Girnar mountain view.",
      isRepresentative: false,
    },
  ],
};
