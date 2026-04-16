import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
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
    <div 
      className="cursor-pointer hover:scale-105 transition-transform duration-300" 
      onClick={() => onClick(product)}
    >
      {/* Image */}
      <div className="bg-[#f0eeed] h-[298px] overflow-hidden rounded-[20px] mb-[16px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div>
        <h3 className="font-['Satoshi:Bold',sans-serif] text-[20px] text-black mb-[8px]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex gap-[13px] items-center mb-[8px]">
          <div className="flex gap-[1px]">{renderStars(product.rating)}</div>
          <p className="font-['Satoshi:Regular',sans-serif] text-[14px]">
            {product.rating}/<span className="text-[rgba(0,0,0,0.6)]">5</span>
          </p>
        </div>

        {/* Price */}
        <div className="flex gap-[10px] items-center">
          <p className="font-['Satoshi:Bold',sans-serif] text-[24px] text-black">
            ${product.price}
          </p>
          {product.originalPrice && (
            <>
              <p className="font-['Satoshi:Bold',sans-serif] text-[24px] text-[rgba(0,0,0,0.4)] line-through">
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
      </div>
    </div>
  );
}
