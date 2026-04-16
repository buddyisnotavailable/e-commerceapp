import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface Review {
  id: number;
  name: string;
  rating: 5;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 2,
    name: 'Alex K.',
    rating: 5,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    id: 3,
    name: 'James L.',
    rating: 5,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    id: 4,
    name: 'Olivia P.',
    rating: 5,
    text: "Shop.co has completely transformed my wardrobe. The quality is exceptional and the customer service is top-notch. I highly recommend it to anyone looking for stylish and affordable fashion.",
  },
  {
    id: 5,
    name: 'Michael R.',
    rating: 5,
    text: "I've been shopping at Shop.co for months now and I'm consistently impressed. The clothes are high quality, fit perfectly, and the prices are unbeatable. Five stars all the way!",
  },
];

export function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % (reviews.length - 2));
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + (reviews.length - 2)) % (reviews.length - 2));
  };

  const renderStars = () => {
    return (
      <div className="flex gap-[6px]">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="23" height="23" viewBox="0 0 23 23" fill="none">
            <path
              d="M11.2895 2.70475e-06L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 2.70475e-06Z"
              fill="#FFC633"
            />
          </svg>
        ))}
      </div>
    );
  };

  const visibleReviews = [
    reviews[currentIndex],
    reviews[currentIndex + 1],
    reviews[currentIndex + 2],
  ];

  return (
    <div className="px-[100px] py-[80px]">
      <div className="flex items-end justify-between mb-[40px]">
        <h2 className="font-['Integral_CF:Bold',sans-serif] text-[48px]">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="flex gap-[16px]">
          <button
            onClick={prevReview}
            className="w-[48px] h-[48px] rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-[24px] h-[24px]" />
          </button>
          <button
            onClick={nextReview}
            className="w-[48px] h-[48px] rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-[24px] h-[24px]" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[20px]">
        {visibleReviews.map((review) => (
          <div
            key={review.id}
            className="border border-[rgba(0,0,0,0.1)] rounded-[20px] p-[32px]"
          >
            {renderStars()}
            <div className="flex items-center gap-[4px] mt-[15px] mb-[12px]">
              <p className="font-['Satoshi:Bold',sans-serif] text-[20px]">{review.name}</p>
              <CheckCircle className="w-[24px] h-[24px] text-[#01AB31] fill-[#01AB31]" />
            </div>
            <p className="font-['Satoshi:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)] leading-[22px]">
              "{review.text}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
