"use client";

import React, { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Truck } from 'lucide-react';
import Link from 'next/link';

// Mock data based on the "Latest Trimmers Shaver" section screenshot
const products = [
  {
    id: 1,
    title: "Denglong RF-609 Professional Hair Clipper Trimmer",
    price: "1,899",
    originalPrice: "3,699",
    discount: "48% OFF",
    rating: 4.5,
    reviews: 2,
    imagePlaceholder: "Trimmer",
    badges: ["fast", "sale"],
  },
  {
    id: 2,
    title: "Kemei KM-6558 3 in 1 Grooming Kit",
    price: "1,849",
    originalPrice: "3,000",
    discount: "38% OFF",
    rating: 5.0,
    reviews: 3,
    imagePlaceholder: "Grooming Kit",
    badges: ["fast", "sale"],
  },
  {
    id: 3,
    title: "Kemei KM-1015 10 in 1 Hair Trimmer",
    price: "4,299",
    originalPrice: "5,550",
    discount: "22% OFF",
    rating: 5.0,
    reviews: 1,
    imagePlaceholder: "10in1 Kit",
    badges: ["fast", "sale"],
  },
  {
    id: 4,
    title: "KM-6330 3 in 1 Grooming Kit",
    price: "1,599",
    originalPrice: "4,000",
    discount: "60% OFF",
    rating: 4.0,
    reviews: 1,
    imagePlaceholder: "Kit",
    badges: ["fast", "sale"],
  },
  {
    id: 5,
    title: "VGR V-055 Hair Trimmer With IPX7 Waterproof",
    price: "5,949",
    originalPrice: "12,999",
    discount: "54% OFF",
    rating: 5.0,
    reviews: 1,
    imagePlaceholder: "VGR Trimmer",
    badges: ["fast", "sale"],
  },
  {
    id: 6,
    title: "Dingling RF-609 Professional Hair Clipper",
    price: "3,099",
    originalPrice: "6,000",
    discount: "48% OFF",
    rating: 5.0,
    reviews: 6,
    imagePlaceholder: "Dingling",
    badges: ["fast", "sale"],
  },
  {
    id: 7,
    title: "Kemei KM-1551 Professional Hair Clipper",
    price: "3,999",
    originalPrice: "6,000",
    discount: "33% OFF",
    rating: 4.8,
    reviews: 4,
    imagePlaceholder: "Clipper",
    badges: ["fast", "sale"],
  },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  return (
    <div className="bg-white rounded-lg p-3 min-w-[200px] sm:min-w-[220px] md:min-w-[240px] shadow-sm border border-gray-100 relative flex flex-col h-full hover:shadow-md transition-shadow duration-200">
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        {product.badges.includes("fast") && (
          <div className="bg-[#F44336] text-white text-[10px] sm:text-xs font-bold italic px-1.5 py-0.5 rounded-sm flex items-center gap-0.5 w-fit">
            <Truck size={10} className="stroke-[3]" />
            <span className='scale-x-110 tracking-tighter'>fast</span>
          </div>
        )}
      </div>

      {product.badges.includes("sale") && (
        <div className="absolute top-0 right-0 z-10">
            <div className="flex flex-col items-center shadow-sm">
                <div className="bg-[#2C3E50] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-t-sm w-full text-center leading-none">
                    12.12
                </div>
                <div className="bg-[#E91E63] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-b-sm w-full text-center leading-none">
                    SALE
                </div>
            </div>
        </div>
      )}

      {/* Product Image Placeholder */}
      <div className="w-full aspect-square bg-gray-50 rounded-md mb-3 flex items-center justify-center relative overflow-hidden group">
         <div className="text-gray-300 text-xs text-center font-medium px-2">
           {/* Fallback visual for missing asset */}
           <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 bg-gray-200 rounded-full flex items-center justify-center">
             <span className="text-gray-400 text-[10px]">{product.imagePlaceholder}</span>
           </div>
           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-200" />
         </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-[#2C3E50] text-sm font-semibold line-clamp-2 mb-1.5 leading-snug min-h-[2.5em]">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
            <div className="flex bg-[#FFF8E1] px-1.5 py-0.5 rounded-md items-center">
                <Star className="w-3 h-3 fill-[#FFC107] text-[#FFC107]" />
                <span className="text-xs text-[#2C3E50] font-medium ml-1 pt-[1px]">{product.rating}</span>
            </div>
            <span className="text-[10px] text-gray-400 pt-[1px]">{product.reviews} Reviews</span>
        </div>

        <div className="mt-auto">
          {/* Price */}
          <div className="flex flex-col">
            <span className="text-[#2C3E50] text-lg font-bold leading-none">
              <span className="text-sm align-top mr-[1px]">Rs</span>
              {product.price}
            </span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[#999999] text-xs line-through decorations-gray-400">
                <span className="text-[10px] align-top mr-[1px]">Rs</span>
                {product.originalPrice}
              </span>
              <span className="text-[#4CAF50] text-xs font-semibold bg-[#E8F5E9] px-1 rounded-sm">
                {product.discount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function LatestTrimmersShaverSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#E91E63] py-8 sm:py-12">
      <div className="container mx-auto px-4 max-w-[1250px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-xl sm:text-2xl lg:text-[28px] font-semibold tracking-tight">
            Latest Trimmers Shaver
          </h2>
          <button className="bg-white text-[#E91E63] text-sm font-semibold px-4 py-2 rounded shadow-sm hover:bg-gray-50 transition-colors">
            View All
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 sm:-translate-x-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#2C3E50] hover:text-[#1E88E5] transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
          )}

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 sm:translate-x-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#2C3E50] hover:text-[#1E88E5] transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} strokeWidth={2.5} />
            </button>
          )}

          {/* Scrollable Area */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {products.map((product) => (
              <div key={product.id} className="snap-start flex-shrink-0 w-[180px] sm:w-[220px] md:w-[240px]">
                  <Link href="#" className='block h-full'>
                    <ProductCard product={product} />
                  </Link>
              </div>
            ))}
            
            {/* View All Card styled as the end of carousel */}
            <div className="snap-start flex-shrink-0 w-[180px] sm:w-[220px] md:w-[240px] flex">
                <div className="bg-white/10 rounded-lg p-3 w-full border border-white/20 flex flex-col items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer min-h-[300px]">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                        <ChevronRight className="w-8 h-8" />
                    </div>
                    <span className="font-semibold text-lg">View All</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}