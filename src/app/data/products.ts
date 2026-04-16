// Product data for the e-commerce store

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  image: string;
  category: 'casual' | 'formal' | 'party' | 'gym';
  isNewArrival?: boolean;
  isTopSelling?: boolean;
}

export const products: Product[] = [
  // New Arrivals
  {
    id: 1,
    name: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
    image: "/assets/images/image7.png",
    category: 'casual',
    isNewArrival: true,
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3.5,
    image: "/assets/images/image8.png",
    category: 'casual',
    isNewArrival: true,
  },
  {
    id: 3,
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: "/assets/images/image9.png",
    category: 'casual',
    isNewArrival: true,
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
    image: "/assets/images/image10.png",
    category: 'casual',
    isNewArrival: true,
  },
  // Top Selling
  {
    id: 5,
    name: "Vertical Striped Shirt",
    price: 212,
    originalPrice: 232,
    discount: 20,
    rating: 5.0,
    image: "/assets/images/image7(1).png",
    category: 'casual',
    isTopSelling: true,
  },
  {
    id: 6,
    name: "Courage Graphic T-shirt",
    price: 145,
    rating: 4.0,
    image: "/assets/images/image8(1).png",
    category: 'casual',
    isTopSelling: true,
  },
  {
    id: 7,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 3.0,
    image: "/assets/images/image9(1).png",
    category: 'casual',
    isTopSelling: true,
  },
  {
    id: 8,
    name: "Faded Skinny Jeans",
    price: 210,
    rating: 4.5,
    image: "/assets/images/image10(1).png",
    category: 'casual',
    isTopSelling: true,
  },
  // Additional products for other categories
  {
    id: 9,
    name: "Classic Blazer",
    price: 350,
    rating: 4.8,
    image: "/assets/images/classic.webp",
    category: 'formal',
  },
  {
    id: 10,
    name: "Party Dress",
    price: 280,
    rating: 4.6,
    image: "/assets/images/party.png",
    category: 'party',
  },
  {
    id: 11,
    name: "Gym Tank Top",
    price: 45,
    rating: 4.3,
    image: "/assets/images/tank.jpg",
    category: 'gym',
  },
];
