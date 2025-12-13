"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// Mock Data based on the visible product cards in the screenshot
const PRODUCTS = [
  {
    id: 1,
    name: 'Anker Zolo 20w 2 Pin Mini Charger (A2699)11',
    price: 2749,
    originalPrice: 4499,
    discount: 39,
    rating: 4.8,
    reviews: 8,
    image: 'https://images.unsplash.com/photo-1616440347437-b1c73ac80053?q=80&w=200&auto=format&fit=crop', // Placeholder for charger
    isFast: true,
    isSale: true,
  },
  {
    id: 2,
    name: 'Apple USB-C Power Adapter (20W)',
    price: 5299,
    originalPrice: 6999,
    discount: 24,
    rating: 4.9,
    reviews: 165,
    image: 'https://images.unsplash.com/photo-1610438235354-a6ae5528385c?q=80&w=200&auto=format&fit=crop',
    isFast: true,
    isSale: true,
  },
  {
    id: 3,
    name: 'Oraimo Compact 20W Charger Kit USB-C (OCW-1111E+C53)',
    price: 799,
    originalPrice: 999,
    discount: 20,
    rating: 0,
    reviews: 0,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=200&auto=format&fit=crop',
    isFast: true,
    isSale: true,
  },
  {
    id: 4,
    name: 'Samsung 3 Pin 25W Travel Adapter',
    price: 3399,
    originalPrice: 5999,
    discount: 43,
    rating: 0,
    reviews: 0,
    image: 'https://images.unsplash.com/photo-1541572520845-8c760cd4208a?q=80&w=200&auto=format&fit=crop',
    isFast: true,
    isSale: false,
  },
  {
    id: 5,
    name: 'Samsung 45W 3 Pin Adapter',
    price: 6799,
    originalPrice: 12900,
    discount: 46,
    rating: 5.0,
    reviews: 25,
    image: 'https://images.unsplash.com/photo-1678822003732-c659556d7827?q=80&w=200&auto=format&fit=crop',
    isFast: true,
    isSale: false,
  },
  {
    id: 6,
    name: 'Anker Zolo 30W 2 Pin Mini Charger (A2690)11',
    price: 3299,
    originalPrice: 4999,
    discount: 34,
    rating: 5.0,
    reviews: 3,
    image: 'https://images.unsplash.com/photo-1631526804533-333e248b1156?q=80&w=200&auto=format&fit=crop',
    isFast: true,
    isSale: true,
  },
  {
    id: 7,
    name: 'Reclad 45W Type-C Adapter',
    price: 2499,
    originalPrice: 5300,
    discount: 53,
    rating: 5.0,
    reviews: 11,
    image: 'https://images.unsplash.com/photo-1622616239126-c22ae249826f?q=80&w=200&auto=format&fit=crop',
    isFast: true,
    isSale: true,
  },
  {
    id: 8,
    name: 'Ronin R-215 65W Charger',
    price: 1899,
    originalPrice: 5799,
    discount: 67,
    rating: 5.0,
    reviews: 3,
    image: 'https://images.unsplash.com/photo-1596752042125-9273c52e4184?q=80&w=200&auto=format&fit=crop',
    isFast: true,
    isSale: true,
  },
  {
    id: 9,
    name: 'Samsung 45W 2 Pin Travel Adapter',
    price: 4999,
    originalPrice: 14999,
    discount: 67,
    rating: 4.8,
    reviews: 3,
    image: 'https://images.unsplash.com/photo-1585250462723-5e921dcd53e2?q=80&w=200&auto=format&fit=crop',
    isFast: true,
    isSale: true,
  },
];

interface ProductCardProps {
  product: typeof PRODUCTS[0];
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative min-w-[200px] md:min-w-[240px] bg-white rounded-lg p-3 md:p-4 flex flex-col gap-2 shadow-sm border border-transparent hover:shadow-lg transition-all duration-300">
      {/* Badges Overlay */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        {product.isFast && (
          <div className="bg-[#cc2b1e] text-white text-[10px] sm:text-[11px] font-bold px-1.5 py-0.5 rounded-sm italic inline-flex items-center gap-0.5 w-fit">
            <span className="not-italic">⚡</span> fast
          </div>
        )}
      </div>

      <div className="absolute top-0 right-0 z-10">
        {product.isSale && (
          <div className="relative">
             <div className="bg-[#240b35] text-[#FFC107] text-[10px] font-bold px-2 py-3 rounded-bl-lg rounded-tr-lg shadow-md leading-none text-center">
                <span className="block text-white text-[9px] mb-0.5">12.12</span>
                SALE
             </div>
          </div>
        )}
      </div>

      {/* Image */}
      <div className="relative w-full aspect-square mb-2 bg-[#f9f9f9] rounded-md overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
        />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-auto">
        {product.rating > 0 && (
          <>
            <Star className="w-3 h-3 text-[#FFC107] fill-[#FFC107]" />
            <span className="text-xs font-medium text-[#5a5a5a]">{product.rating}</span>
            <span className="text-[10px] text-gray-400 mt-0.5">{product.reviews} Reviews</span>
          </>
        )}
        {product.rating === 0 && (
          <div className="h-[18px]"></div> /* Spacer to maintain height alignment */
        )}
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-[#2C3E50] line-clamp-2 leading-tight h-10" title={product.name}>
        {product.name}
      </h3>

      {/* Price Section */}
      <div className="mt-1">
        <div className="text-lg font-bold text-[#2C3E50]">
          <span className="text-sm font-normal align-top mr-0.5">Rs</span>
          {product.price.toLocaleString()}
        </div>
        
        <div className="flex items-center justify-between mt-1">
          <div className="text-xs text-gray-400 line-through decoration-gray-400">
            <span className="text-[10px] align-top mr-0.5">Rs</span>
            {product.originalPrice.toLocaleString()}
          </div>
          <div className="text-xs font-medium text-[#1ABC9C] bg-[#E0F2F1] px-1.5 py-0.5 rounded">
            {product.discount}% OFF
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProductCarouselWallChargers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Approximate card width + gap
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full bg-[#FF9800] py-8 md:py-12 relative font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-[1248px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-wide">
            Latest Wall Chargers
          </h2>
          <Link 
            href="#" 
            className="hidden md:inline-block bg-white text-[#FF9800] hover:bg-gray-50 text-sm font-semibold px-5 py-2 rounded shadow-sm transition-colors"
          >
            View All
          </Link>
          {/* Mobile View All is usually minimal or hidden, sticking to desktop layout for consistency unless specified */}
          <Link 
             href="#"
             className="md:hidden bg-white text-[#FF9800] text-xs font-semibold px-3 py-1.5 rounded shadow-sm"
          >
            View All
          </Link>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          
          {/* Left Arrow - Positioned absolutely left center */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:text-[#FF9800] hover:scale-110 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 focus:outline-none"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Scrollable Area */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-3 md:gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              overflowY: 'hidden'
            }}
          >
            {PRODUCTS.map((product) => (
              <div 
                key={product.id} 
                className="snap-start shrink-0 w-[160px] xs:w-[180px] sm:w-[200px] md:w-[218px]"
              >
                <ProductCard product={product} />
              </div>
            ))}
            
            {/* View All Card at end of carousel (Often seen in such designs) */}
            <div className="snap-start shrink-0 w-[160px] xs:w-[180px] sm:w-[200px] md:w-[218px] flex items-center justify-center">
                 <Link href="#" className="flex flex-col items-center justify-center gap-2 group/viewall">
                    <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white flex items-center justify-center group-hover/viewall:bg-white group-hover/viewall:text-[#FF9800] text-white transition-colors">
                        <ChevronRight className="w-6 h-6" />
                    </div>
                    <span className="text-white font-semibold text-sm">View All</span>
                 </Link>
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:text-[#FF9800] hover:scale-110 transition-all opacity-80 md:opacity-0 md:group-hover:opacity-100 focus:outline-none"
             aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}