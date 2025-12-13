"use client";

import React from 'react';
import Image from 'next/image';
import { Star, Truck } from 'lucide-react';

export default function ProductCarouselSmartWatches() {
  return (
    <section className="w-full bg-[#FF9800] py-8 md:py-12 overflow-hidden font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-[1248px]">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6 text-white">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Latest Smart Watches</h2>
          <a
            href="#"
            className="bg-white text-[#FF9800] hover:bg-gray-50 text-xs md:text-sm font-bold px-4 py-2 rounded shadow-sm transition-colors duration-200"
          >
            View All
          </a>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          <Carousel />
        </div>
      </div>
    </section>
  );
}

// --- Sub Components ---

import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

// Product Data
const PRODUCTS = [
  {
    id: 1,
    name: "Ultra Smart Watch With 7 Straps",
    price: 1549,
    originalPrice: 6000,
    discount: 81,
    rating: 4.7,
    reviews: 248,
    image: "https://static.priceoye.pk/images/listings/smart-watches/t900-ultra-2-smart-watch-pakistan-priceoye-uvl5l.jpg", // Placeholder fallback used in code if this fails
    tags: ["fast", "12.12"]
  },
  {
    id: 2,
    name: "i20 Ultra Smart Watch With Earbuds And 7 Straps",
    price: 1899,
    originalPrice: 8000,
    discount: 76,
    rating: 4.6,
    reviews: 28,
    image: "https://static.priceoye.pk/images/listings/smart-watches/i20-ultra-smart-watch-with-earbuds-and-7-straps-pakistan-priceoye-7s8y3.jpg",
    tags: ["fast", "12.12"]
  },
  {
    id: 3,
    name: "T900 Ultra 2 Smart Watch",
    price: 1199,
    originalPrice: 5000,
    discount: 79,
    rating: 4.7,
    reviews: 81,
    image: "https://static.priceoye.pk/images/listings/smart-watches/t900-ultra-2-smart-watch-pakistan-priceoye-v67r3.jpg",
    tags: ["fast", "12.12"]
  },
  {
    id: 4,
    name: "Samsung Watch 6 Classic 46mm",
    price: 93499,
    originalPrice: 100000,
    discount: 33,
    rating: 4.9,
    reviews: 12,
    image: "https://static.priceoye.pk/images/listings/smart-watches/samsung-galaxy-watch6-classic-47mm-pakistan-priceoye-bsg4s.jpg",
    tags: ["fast", "12.12"]
  },
  {
    id: 5,
    name: "Zero Luna",
    price: 4799,
    originalPrice: 21499,
    discount: 60,
    rating: 4.7,
    reviews: 25,
    image: "https://static.priceoye.pk/images/listings/smart-watches/zero-luna-smart-watch-pakistan-priceoye-brz6s.jpg",
    tags: ["fast"]
  },
  {
    id: 6,
    name: "Ultra Smart Watch With 10 Straps",
    price: 1849,
    originalPrice: 6000,
    discount: 69,
    rating: 4.7,
    reviews: 165,
    image: "https://static.priceoye.pk/images/listings/smart-watches/ultra-smart-watch-with-10-straps-pakistan-priceoye-5n7w3.jpg",
    tags: ["fast", "12.12"]
  },
  {
    id: 7,
    name: "X10 Pro Max Smart Watch",
    price: 1599,
    originalPrice: 3500,
    discount: 54,
    rating: 4.5,
    reviews: 4,
    image: "https://static.priceoye.pk/images/listings/smart-watches/x10-pro-max-smart-watch-pakistan-priceoye-t6r2s.jpg",
    tags: ["fast", "12.12"]
  },
  {
    id: 8,
    name: "Infinix XWatch N4 Pro Smart Watch XW4E",
    price: 8999,
    originalPrice: 17999,
    discount: 50,
    rating: 5.0,
    reviews: 1,
    image: "https://static.priceoye.pk/images/listings/smart-watches/infinix-xwatch-n4-pro-smart-watch-xw4e-pakistan-priceoye-q8y2s.jpg",
    tags: ["fast", "12.12"]
  },
  {
    id: 9,
    name: "Samsung Galaxy Fit 3 (1 Year Brand Warranty)",
    price: 12599,
    originalPrice: 16650,
    discount: 24,
    rating: 5.0,
    reviews: 5,
    image: "https://static.priceoye.pk/images/listings/smart-watches/samsung-galaxy-fit-3-pakistan-priceoye-ebv6s.jpg",
    tags: ["fast", "12.12"]
  },
  {
    id: 10,
    name: "DT900 ULTRA Smart Watch With 7 Straps",
    price: 1699,
    originalPrice: 6500,
    discount: 74,
    rating: 4.7,
    reviews: 25.5,
    image: "https://static.priceoye.pk/images/listings/smart-watches/dt900-ultra-smart-watch-with-7-straps-pakistan-priceoye-3p9q2.jpg",
    tags: ["fast", "12.12"]
  },
];

const Carousel = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const checkScroll = () => {
        if (!scrollContainerRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const scrollAmount = container.clientWidth * 0.8;
        
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative">
             {/* Left Arrow */}
             <button
                onClick={() => scroll('left')}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 md:-translate-x-1/2 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-100 ${
                    showLeftArrow ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                aria-label="Scroll left"
            >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            {/* Scroll Container */}
            <div 
                ref={scrollContainerRef}
                onScroll={checkScroll}
                className="flex overflow-x-auto gap-3 md:gap-4 pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {/* 
                  Using CSS Grid inside the flex container to simulate the 2-row layout shown in screenshots 
                  while maintaining horizontal scroll. 
                  We structure this as columns of 2 items or just a long list wrapped in a grid parent?
                  To achieve the specific layout in screenshot where it scrolls horizontally but has 2 rows:
                  CSS Grid with `grid-template-rows: repeat(2, 1fr)` and `grid-auto-flow: column`.
                */}
                <div className="grid grid-rows-2 grid-flow-col gap-3 md:gap-4 min-w-max">
                    {PRODUCTS.map((product) => (
                        <div key={product.id} className="w-[160px] md:w-[220px] snap-start">
                            <ProductCard product={product} />
                        </div>
                    ))}
                    {/* Duplicate products to demonstrate scroll if needed, or just use the 10 */}
                    {PRODUCTS.map((product) => (
                        <div key={`dup-${product.id}`} className="w-[160px] md:w-[220px] snap-start">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Arrow */}
            <button
                onClick={() => scroll('right')}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 md:translate-x-1/2 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-100 ${
                    showRightArrow ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                aria-label="Scroll right"
            >
                <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
        </div>
    );
};

const ProductCard = ({ product }: { product: any }) => {
    return (
        <a href="#" className="flex flex-col h-full bg-white rounded-lg p-3 md:p-4 hover:shadow-lg transition-shadow duration-200 relative group border border-transparent hover:border-gray-100">
            {/* Badges Overlay */}
            <div className="absolute top-2 left-0 right-0 flex justify-between items-start px-2 z-10 w-full pointer-events-none">
                {product.tags.includes('fast') && (
                    <div className="bg-red-50 text-red-600 px-1.5 py-0.5 rounded text-[10px] md:text-[11px] font-bold italic border border-red-100 flex items-center gap-0.5">
                        <span className="bg-red-500 text-white rounded-full p-[1px] text-[8px] leading-none">⚡</span>
                        fast
                    </div>
                )}
                {product.tags.includes('12.12') && (
                    <div className="ml-auto bg-[#2E1A47] text-[#FBCC26] text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-sm tracking-tighter leading-tight shadow-sm border border-[#4a2b72]">
                        <span className="block text-[8px] text-white">12.12</span>
                        SALE
                    </div>
                )}
            </div>

            {/* Image */}
            <div className="relative w-full aspect-square mb-2 md:mb-3">
                 <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain w-full h-full mix-blend-multiply"
                    loading="lazy"
                />
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-1 bg-[#FBF7EB] self-start px-1.5 py-0.5 rounded md:rounded-md">
                <Star className="w-2.5 h-2.5 md:w-3 md:h-3 fill-[#FFC107] text-[#FFC107]" />
                <span className="text-[10px] md:text-xs font-medium text-gray-700">{product.rating}</span>
                <span className="text-[9px] md:text-[10px] text-gray-400 font-normal">{product.reviews} Reviews</span>
            </div>

            {/* Title */}
            <h3 className="text-xs md:text-sm font-semibold text-[#2C3E50] line-clamp-2 min-h-[2.5em] mb-2 leading-tight md:leading-snug">
                {product.name}
            </h3>

            {/* Price Section */}
            <div className="mt-auto">
                <div className="text-base md:text-lg font-bold text-[#2C3E50] leading-none mb-1">
                    <span className="text-xs md:text-sm align-top font-semibold mr-0.5">Rs</span>
                    {product.price.toLocaleString()}
                </div>
                
                <div className="flex items-center justify-between gap-1 text-[10px] md:text-xs">
                     <div className="text-gray-400 line-through font-normal">
                         Rs {product.originalPrice.toLocaleString()}
                     </div>
                     <div className="text-[#1ABC9C] bg-[#E0F7F3] px-1 py-0.5 rounded-[3px] font-semibold">
                         {product.discount}% OFF
                     </div>
                </div>
            </div>
        </a>
    );
};