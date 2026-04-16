import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Minus, Plus, Share2, Heart } from 'lucide-react';
import { Product, products } from '../data/products';

interface ProductDetailPageProps {
  onAddToCart: (product: Product, quantity: number, size: string, color: string) => void;
}

export function ProductDetailPage({ onAddToCart }: ProductDetailPageProps) {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(productId));
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>('Medium');
  const [selectedColor, setSelectedColor] = useState<string>('#4F4631');
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const sizes = ['Small', 'Medium', 'Large', 'X-Large'];
  const colors = ['#4F4631', '#314F4A', '#31344F'];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} width="19" height="18" viewBox="0 0 19 18" fill="none">
          <path
            d="M9.24494 5.08466e-05L11.8641 5.63996L18.0374 6.38815L13.4829 10.622L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.622L0.452479 6.38815L6.62573 5.63996L9.24494 5.08466e-05Z"
            fill="#FFC633"
          />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" width="10" height="18" viewBox="0 0 10 18" fill="none">
          <path
            d="M9.24494 5.08466e-05L11.8641 5.63996L18.0374 6.38815L13.4829 10.622L14.679 16.7243L9.24494 13.701V5.08466e-05Z"
            fill="#FFC633"
          />
        </svg>
      );
    }

    return stars;
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity, selectedSize, selectedColor);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  // Get related products (same category, different product)
  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="px-[40px] py-[16px] border-b border-[rgba(0,0,0,0.1)]">
        <button
          onClick={() => navigate('/')}
          className="text-[14px] text-[rgba(0,0,0,0.6)] hover:text-black transition"
        >
          Home {'>'} Shop {'>'} <span className="text-black">{product.name}</span>
        </button>
      </div>

      {/* Product Detail Section */}
      <div className="px-[40px] py-[40px]">
        <div className="grid grid-cols-2 gap-[40px] mb-[60px]">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <div className="bg-[#f0eeed] rounded-[20px] overflow-hidden w-full aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-['Integral_CF:Bold',sans-serif] text-[48px] mb-[16px] text-black">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex gap-[13px] items-center mb-[20px]">
              <div className="flex gap-[1px]">{renderStars(product.rating)}</div>
              <p className="font-['Satoshi:Regular',sans-serif] text-[16px]">
                {product.rating}/<span className="text-[rgba(0,0,0,0.6)]">5</span>
              </p>
            </div>

            {/* Price */}
            <div className="flex gap-[12px] items-center mb-[20px] pb-[20px] border-b border-[rgba(0,0,0,0.1)]">
              <p className="font-['Satoshi:Bold',sans-serif] text-[40px] text-black">
                ${product.price}
              </p>
              {product.originalPrice && (
                <>
                  <p className="font-['Satoshi:Bold',sans-serif] text-[40px] text-[rgba(0,0,0,0.4)] line-through">
                    ${product.originalPrice}
                  </p>
                  <p className="ml-[12px] bg-[#ff4444] text-white px-[12px] py-[6px] rounded-[62px] text-[12px] font-['Satoshi:Bold',sans-serif]">
                    -{product.discount}%
                  </p>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-[16px] text-[rgba(0,0,0,0.7)] mb-[24px] leading-relaxed">
              This product is crafted with premium quality materials and modern design.
              Perfect for any occasion and available in multiple sizes and colors.
            </p>

            {/* Colors */}
            <div className="mb-[24px]">
              <p className="text-[14px] font-['Satoshi:Bold',sans-serif] mb-[12px]">
                Select Colors
              </p>
              <div className="flex gap-[16px]">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-[37px] h-[37px] rounded-full transition ${
                      selectedColor === color ? 'ring-2 ring-offset-2 ring-black' : ''
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-[24px]">
              <p className="text-[14px] font-['Satoshi:Bold',sans-serif] mb-[12px]">
                Choose Size
              </p>
              <div className="flex gap-[12px]">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-[20px] py-[12px] rounded-[62px] border-2 transition font-['Satoshi:Regular',sans-serif] ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'bg-transparent text-black border-[rgba(0,0,0,0.1)] hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex gap-[12px] mb-[24px]">
              <div className="flex items-center gap-[16px] px-[20px] py-[12px] rounded-[62px] bg-[#f0f0f0] w-fit">
                <button onClick={handleDecrement} className="hover:opacity-70 transition">
                  <Minus className="w-[20px] h-[20px]" />
                </button>
                <span className="font-['Satoshi:Bold',sans-serif] text-[16px] w-[40px] text-center">
                  {quantity}
                </span>
                <button onClick={handleIncrement} className="hover:opacity-70 transition">
                  <Plus className="w-[20px] h-[20px]" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white rounded-[62px] py-[12px] font-['Satoshi:Bold',sans-serif] hover:bg-gray-900 transition"
              >
                Add to Cart
              </button>

              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`w-[52px] h-[52px] rounded-[62px] flex items-center justify-center border-2 transition ${
                  isWishlisted
                    ? 'bg-red-100 border-red-500'
                    : 'bg-transparent border-[rgba(0,0,0,0.1)] hover:border-black'
                }`}
              >
                <Heart
                  className="w-[24px] h-[24px]"
                  fill={isWishlisted ? '#ef4444' : 'none'}
                  stroke={isWishlisted ? '#ef4444' : 'currentColor'}
                />
              </button>
            </div>

            {/* Share */}
            <button className="flex items-center gap-[12px] text-[16px] font-['Satoshi:Bold',sans-serif] text-black hover:opacity-70 transition">
              <Share2 className="w-[20px] h-[20px]" />
              Share
            </button>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-['Integral_CF:Bold',sans-serif] text-[32px] mb-[24px]">
              Related Products
            </h2>
            <div className="grid grid-cols-4 gap-[20px]">
              {relatedProducts.map((relProduct) => (
                <div
                  key={relProduct.id}
                  onClick={() => navigate(`/product/${relProduct.id}`)}
                  className="cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <div className="bg-[#f0eeed] h-[200px] rounded-[20px] mb-[12px] overflow-hidden">
                    <img
                      src={relProduct.image}
                      alt={relProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-['Satoshi:Bold',sans-serif] text-[14px] mb-[8px]">
                    {relProduct.name}
                  </h3>
                  <p className="font-['Satoshi:Bold',sans-serif] text-[16px]">
                    ${relProduct.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
