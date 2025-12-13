import React from 'react';
import Image from 'next/image';
import { Star, Check } from 'lucide-react';

// Types for our mock data
interface TextReview {
  id: number;
  initials: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  verified: boolean;
}

// Mock Data for Text Reviews based on screenshot 07
const TEXT_REVIEWS: TextReview[] = [
  {
    id: 1,
    initials: 'MF',
    name: 'Muhammad Farhan',
    date: '05 December 2024',
    rating: 5,
    text: 'wow goodservice and very fast',
    verified: true,
  },
  {
    id: 2,
    initials: 'FM',
    name: 'Faraz Maqbool',
    date: '18 November 2024',
    rating: 5,
    text: 'Good product 👍',
    verified: true,
  },
  {
    id: 3,
    initials: 'MH',
    name: 'Muhammad Hassan',
    date: '11 December 2024',
    rating: 5,
    text: 'Thank you for Price oye team ☺️',
    verified: true,
  },
  {
    id: 4,
    initials: 'MU',
    name: 'Ma na Mobile User',
    date: '03 August 2024',
    rating: 4,
    text: 'Ma na Mobile check kya hn Bht ache ha. Thanks.',
    verified: true,
  },
  {
    id: 5,
    initials: 'AR',
    name: 'Ali Raza',
    date: '25 November 2024',
    rating: 5,
    text: 'Received original product. Highly recommended.',
    verified: true,
  },
  {
    id: 6,
    initials: 'SK',
    name: 'Sana Khan',
    date: '01 December 2024',
    rating: 5,
    text: 'Original product in best price. Delivery was super fast.',
    verified: true,
  }
];

// Mock placeholders for the photo gallery based on screenshot 06
// Using placeholders since no assets were provided
const PHOTO_REVIEWS = Array(10).fill(null).map((_, i) => ({
  id: `photo-${i}`,
  alt: `Customer Review Photo ${i + 1}`,
  src: `https://placehold.co/300x200/e2e8f0/64748b?text=Review+Image+${i + 1}`
}));

export default function CustomerReviews() {
  return (
    <section className="w-full bg-[#f5f5f5] py-12">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <h3 className="text-[20px] md:text-[24px] font-semibold text-[#2C3E50] mb-1">
            Customer Reviews
          </h3>
          <p className="text-[13px] md:text-[14px] text-[#737373]">
            What our Customers say about Priceoye.pk
          </p>
        </div>

        {/* Photo Gallery Carousel */}
        <div className="relative w-full mb-8">
          <div className="flex overflow-x-auto snap-x space-x-3 pb-4 scrollbar-hide no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {PHOTO_REVIEWS.map((photo) => (
              <div 
                key={photo.id} 
                className="flex-none snap-start w-[140px] md:w-[160px] aspect-[4/3] rounded-md overflow-hidden bg-gray-200 border border-gray-200"
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={photo.src} 
                    alt={photo.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 140px, 160px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text Review Cards Carousel */}
        <div className="relative w-full">
          <div className="flex overflow-x-auto snap-x space-x-4 pb-4 scrollbar-hide no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {TEXT_REVIEWS.map((review) => (
              <div 
                key={review.id} 
                className="flex-none snap-start w-[280px] md:w-[300px] bg-white rounded-lg p-4 shadow-sm border border-[#E8E8E8] hover:shadow-md transition-shadow duration-200"
              >
                {/* Card Header: Avatar & Info */}
                <div className="flex items-start mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-semibold text-sm mr-3 shrink-0">
                    {review.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-[#2C3E50] leading-tight">
                      {review.name}
                    </span>
                    {review.verified && (
                      <div className="flex items-center mt-1">
                        <div className="bg-[#4CAF50] text-white rounded-full p-[1px] mr-1">
                            <Check className="w-2 h-2" strokeWidth={4} />
                        </div>
                        <span className="text-[10px] text-[#4CAF50] font-medium uppercase tracking-wide">
                          Verified
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center space-x-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-[#FFC107] text-[#FFC107]' : 'fill-gray-200 text-gray-200'}`} 
                    />
                  ))}
                  <span className="ml-2 text-[10px] text-gray-400">
                    {review.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-[13px] text-[#4A4A4A] leading-relaxed line-clamp-3 min-h-[40px]">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>

      {/* Inline styles for hiding scrollbar visually but keeping functionality - fallback if Tailwind util not configured */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}