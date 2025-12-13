"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming valid import or will define inline utility if needed per environment, but following standard Next.js shadcn pattern usually implies this exists or I should stick to standard classes. I'll use standard classes to be safe.

// Placeholder image since assets are empty
const PLACEHOLDER_IMAGE = "https://placehold.co/200x200/png?text=Mobile+Phone";

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  isFast: boolean;
  isSale: boolean;
}

const products: Product[] = [
  {
    id: 1,
    title: "Xiaomi Redmi Note 14",
    price: 46499,
    originalPrice: 53999,
    discount: 14,
    rating: 5.0,
    reviews: 166,
    image: PLACEHOLDER_IMAGE,
    isFast: true,
    isSale: true,
  },
  {
    id: 2,
    title: "Tecno Spark Go 2",
    price: 22199,
    originalPrice: 24499,
    discount: 9,
    rating: 5.0,
    reviews: 13,
    image: PLACEHOLDER_IMAGE,
    isFast: true,
    isSale: true,
  },
  {
    id: 3,
    title: "Itel A100",
    price: 21699,
    originalPrice: 23999,
    discount: 10,
    rating: 4.5,
    reviews: 2,
    image: PLACEHOLDER_IMAGE,
    isFast: true,
    isSale: true,
  },
  {
    id: 4,
    title: "Realme C63 Pro",
    price: 50999,
    originalPrice: 59999,
    discount: 15,
    rating: 5.0,
    reviews: 1,
    image: PLACEHOLDER_IMAGE,
    isFast: true,
    isSale: true,
  },
  {
    id: 5,
    title: "Oppo A3x",
    price: 48499,
    originalPrice: 54999,
    discount: 11,
    rating: 4.8,
    reviews: 8,
    image: PLACEHOLDER_IMAGE,
    isFast: true,
    isSale: false,
  },
  {
    id: 6,
    title: "Samsung Galaxy A15",
    price: 48999,
    originalPrice: 54999,
    discount: 11,
    rating: 4.9,
    reviews: 12,
    image: PLACEHOLDER_IMAGE,
    isFast: true,
    isSale: true,
  },
  {
    id: 7,
    title: "Infinix Zero 40 4G",
    price: 48299,
    originalPrice: 59999,
    discount: 21,
    rating: 4.6,
    reviews: 62,
    image: PLACEHOLDER_IMAGE,
    isFast: true,
    isSale: true,
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-lg p-3 min-w-[220px] md:min-w-[240px] max-w-[240px] flex flex-col relative group cursor-pointer hover:shadow-lg transition-shadow duration-200 border border-transparent hover:border-[#E8E8E8]">
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        {product.isFast && (
           <div className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm italic flex items-center gap-0.5 h-5 w-fit">
             <span className="transform -skew-x-12">=</span>
             <span className="uppercase tracking-tighter transform -skew-x-12">fast</span>
           </div>
        )}
        {product.isSale && (
          <div className="bg-[#4a00e0] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm h-5 w-fit flex items-center justify-center bg-gradient-to-r from-purple-700 to-indigo-900 border border-white/20 shadow-sm">
            <span className="uppercase leading-none">12.12<br/><span className="text-[8px] block mt-[-2px]">SALE</span></span>
          </div>
        )}
      </div>

      {/* Image Area */}
      <div className="w-full aspect-[4/3] relative mb-3 flex items-center justify-center bg-gray-50 rounded-md overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="object-contain w-full h-full mix-blend-multiply p-4 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-1">
        <Star className="w-3 h-3 text-[#FFC107] fill-[#FFC107]" />
        <span className="text-xs text-[#2C3E50]">{product.rating}</span>
        <span className="text-xs text-[#999999]">{product.reviews} Reviews</span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-[#2C3E50] mb-2 line-clamp-2 h-[40px] leading-tight">
        {product.title}
      </h3>

      {/* Pricing */}
      <div className="mt-auto">
        <div className="text-lg font-bold text-[#2C3E50]">
          <sup className="text-xs font-normal mr-0.5">Rs</sup>
          {product.price.toLocaleString()}
        </div>
        <div className="flex items-center justify-between mt-1">
          <div className="text-xs text-[#999999] line-through decoration-red-500/50 decoration-1">
            <sup className="text-[10px] font-normal mr-0.5">Rs</sup>
            {product.originalPrice.toLocaleString()}
          </div>
          <div className="text-xs font-semibold text-[#1ABC9C] bg-[#1ABC9C]/10 px-1.5 py-0.5 rounded-full">
            {product.discount}% OFF
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProductCarouselMobiles() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-[#FDD835] py-8 md:py-12 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
            Latest Mobiles
          </h2>
          <button className="bg-white text-[#2C3E50] text-sm font-semibold px-4 py-1.5 rounded hover:bg-gray-50 transition-colors shadow-sm">
            View All
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          
          {/* Custom Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0 hidden md:flex hover:bg-gray-50 focus:outline-none"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0 hidden md:flex hover:bg-gray-50 focus:outline-none"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Area */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-3 md:gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory px-0.5"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none' 
            }}
          >
            {products.map((product) => (
              <div key={product.id} className="snap-start flex-shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
            
            {/* View All Card (at the end for mobile experience primarily) */}
            <div className="snap-start flex-shrink-0 min-w-[220px] md:min-w-[240px] max-w-[240px] bg-white/20 rounded-lg p-3 flex items-center justify-center border-2 border-white/40 hover:bg-white/30 transition-colors cursor-pointer group/view-all">
               <div className="text-center">
                 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-3 text-[#FDD835] group-hover/view-all:scale-110 transition-transform shadow-sm">
                   <ChevronRight className="w-6 h-6" />
                 </div>
                 <span className="text-white font-bold text-lg">View All</span>
               </div>
            </div>
          </div>

        </div>

        {/* Decorative Wave/Transition elements would go here if not handled by parent layout */}
        
      </div>
      
      {/* Styles for hiding scrollbar in webkit */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}</style>
    </section>
  );
}