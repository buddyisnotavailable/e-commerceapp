import { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
  color?: string;
}
