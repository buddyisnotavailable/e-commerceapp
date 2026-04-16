import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { Product } from './data/products';
import { CartItem } from './types/cart';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (
    product: Product,
    quantity: number,
    size = 'Medium',
    color = '#4F4631'
  ) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) =>
          item.product.id === product.id &&
          item.size === size &&
          item.color === color
      );

      if (existingItem) {
        return prev.map((item) =>
          item === existingItem
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { product, quantity, size, color }];
    });
  };

  const handleUpdateCartQuantity = (
    productId: number,
    size: string | undefined,
    color: string | undefined,
    delta: number
  ) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (
            item.product.id === productId &&
            item.size === size &&
            item.color === color
          ) {
            return { ...item, quantity: Math.max(1, item.quantity + delta) };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveCartItem = (
    productId: number,
    size: string | undefined,
    color: string | undefined
  ) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.size === size &&
            item.color === color
          )
      )
    );
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header onSearchChange={() => {}} cartItemCount={totalCartItems} />
        
        <Routes>
          <Route 
            path="/" 
            element={<HomePage onAddToCart={handleAddToCart} />} 
          />
          <Route
            path="/category/:categoryName"
            element={<CategoryPage />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                onUpdateQuantity={handleUpdateCartQuantity}
                onRemoveItem={handleRemoveCartItem}
              />
            }
          />
          <Route
            path="/checkout"
            element={<CheckoutPage cartItems={cartItems} />}
          />
          <Route 
            path="/product/:productId" 
            element={<ProductDetailPage onAddToCart={handleAddToCart} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}
