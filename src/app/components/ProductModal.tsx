import { X, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { Product } from '../data/products';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, size?: string, color?: string) => void;
}

export function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>('Medium');
  const [selectedColor, setSelectedColor] = useState<string>('#4F4631');

  const sizes = ['Small', 'Medium', 'Large', 'X-Large'];
  const colors = ['#4F4631', '#314F4A', '#31344F'];

  const handleAddToCart = () => {
    onAddToCart(product, quantity, selectedSize, selectedColor);
    onClose();
  };

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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[20px] max-w-[900px] w-full max-h-[90vh] overflow-y-auto">
        <div className="p-[40px]">
          <div className="flex justify-between items-start mb-[30px]">
            <h2 className="font-['Integral_CF:Bold',sans-serif] text-[32px] flex-1">
              Product Details
            </h2>
            <button
              onClick={onClose}
              className="w-[40px] h-[40px] rounded-full bg-[#f0f0f0] flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <X className="w-[24px] h-[24px]" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-[40px]">
            {/* Product Image */}
            <div className="bg-[#f0eeed] rounded-[20px] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Product Info */}
            <div>
              <h3 className="font-['Satoshi:Bold',sans-serif] text-[28px] mb-[12px]">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex gap-[13px] items-center mb-[16px]">
                <div className="flex gap-[1px]">{renderStars(product.rating)}</div>
                <p className="font-['Satoshi:Regular',sans-serif] text-[14px]">
                  {product.rating}/<span className="text-[rgba(0,0,0,0.6)]">5</span>
                </p>
              </div>

              {/* Price */}
              <div className="flex gap-[12px] items-center mb-[20px] pb-[20px] border-b border-[rgba(0,0,0,0.1)]">
                <p className="font-['Satoshi:Bold',sans-serif] text-[32px] text-black">
                  ${product.price}
                </p>
                {product.originalPrice && (
                  <>
                    <p className="font-['Satoshi:Bold',sans-serif] text-[32px] text-[rgba(0,0,0,0.4)] line-through">
                      ${product.originalPrice}
                    </p>
                    <div className="bg-[rgba(255,51,51,0.1)] px-[14px] py-[6px] rounded-[62px]">
                      <p className="font-['Satoshi:Medium',sans-serif] text-[12px] text-[#f33]">
                        -{product.discount}%
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="font-['Satoshi:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)] leading-[22px] mb-[24px]">
                This product is made with high-quality materials and designed to last. Perfect for any occasion, it combines style and comfort effortlessly.
              </p>

              {/* Colors */}
              <div className="mb-[24px]">
                <p className="font-['Satoshi:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)] mb-[12px]">
                  Select Colors
                </p>
                <div className="flex gap-[12px]">
                  {colors.map((color, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`w-[37px] h-[37px] rounded-full transition ${
                        selectedColor === color ? 'ring-2 ring-offset-2 ring-black' : 'border-2 border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-[24px]">
                <p className="font-['Satoshi:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)] mb-[12px]">
                  Choose Size
                </p>
                <div className="flex gap-[12px]">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-[24px] py-[12px] rounded-[62px] font-['Satoshi:Regular',sans-serif] text-[16px] transition-colors ${
                        selectedSize === size
                          ? 'bg-black text-white'
                          : 'bg-[#f0f0f0] text-[rgba(0,0,0,0.6)] hover:bg-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex gap-[20px]">
                <div className="bg-[#f0f0f0] rounded-[62px] flex items-center gap-[20px] px-[20px] py-[12px]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="hover:opacity-70 transition-opacity"
                  >
                    <Minus className="w-[20px] h-[20px]" />
                  </button>
                  <span className="font-['Satoshi:Medium',sans-serif] text-[16px] min-w-[20px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="hover:opacity-70 transition-opacity"
                  >
                    <Plus className="w-[20px] h-[20px]" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-black text-white rounded-[62px] px-[54px] py-[16px] font-['Satoshi:Medium',sans-serif] text-[16px] hover:bg-gray-800 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
