export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  salePrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  category: string;
  colors: string[];
  sizes: string[];
  description: string;
  features: string[];
  inStock: boolean;
  stockCount: number;
}

export interface FilterState {
  categories: string[];
  brands: string[];
  colors: string[];
  sizes: string[];
  priceRange: [number, number];
  inStockOnly: boolean;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}
