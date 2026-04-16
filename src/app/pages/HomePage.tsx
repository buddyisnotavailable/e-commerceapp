import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import { BrandLogos } from '../components/BrandLogos';
import { ProductCard } from '../components/ProductCard';
import { DressStyleSection } from '../components/DressStyleSection';
import { CustomerReviews } from '../components/CustomerReviews';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';
import { products, Product } from '../data/products';

interface HomePageProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

export function HomePage({ onAddToCart }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get new arrivals
  const newArrivals = filteredProducts.filter((p) => p.isNewArrival);

  // Get top selling
  const topSelling = filteredProducts.filter((p) => p.isTopSelling);

  const handleProductClick = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-white">
      <Hero />
      
      <BrandLogos />

      {/* New Arrivals Section */}
      <section id="new-arrivals" className="px-[100px] py-[80px]">
        <h2 className="text-[40px] md:text-[52px] lg:text-[64px] leading-[1.1] font-extrabold mb-[50px] text-center">
          NEW ARRIVALS
        </h2>
        
        {newArrivals.length > 0 ? (
          <div className="grid grid-cols-4 gap-[20px] mb-[36px]">
            {newArrivals.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={handleProductClick}
              />
            ))}
          </div>
        ) : (
          <p className="text-center font-['Satoshi:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)]">
            No products found matching "{searchQuery}"
          </p>
        )}

        {newArrivals.length > 4 && (
          <div className="flex justify-center">
            <button className="border border-[rgba(0,0,0,0.1)] rounded-[62px] px-[54px] py-[16px] font-['Satoshi:Medium',sans-serif] text-[16px] hover:bg-gray-100 transition-colors">
              View All
            </button>
          </div>
        )}
      </section>

      <div className="h-[1px] bg-[rgba(0,0,0,0.1)] mx-[100px]" />

      {/* Top Selling Section */}
      <section id="top-selling" className="px-[100px] py-[80px]">
        <h2 className="text-[40px] md:text-[52px] lg:text-[64px] leading-[1.1] font-extrabold mb-[50px] text-center">
          TOP SELLING
        </h2>
        
        {topSelling.length > 0 ? (
          <div className="grid grid-cols-4 gap-[20px] mb-[36px]">
            {topSelling.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={handleProductClick}
              />
            ))}
          </div>
        ) : (
          <p className="text-center font-['Satoshi:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)]">
            No products found matching "{searchQuery}"
          </p>
        )}

        {topSelling.length > 4 && (
          <div className="flex justify-center">
            <button className="border border-[rgba(0,0,0,0.1)] rounded-[62px] px-[54px] py-[16px] font-['Satoshi:Medium',sans-serif] text-[16px] hover:bg-gray-100 transition-colors">
              View All
            </button>
          </div>
        )}
      </section>

      <DressStyleSection />

      <CustomerReviews />

      <Newsletter />

      <Footer />
    </div>
  );
}
