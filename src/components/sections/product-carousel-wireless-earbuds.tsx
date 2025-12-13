"use client";

import React from 'react';
import { ChevronLeft, ChevronRight, Star, Truck } from 'lucide-react';

export default function ProductCarouselWirelessEarbuds() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const products = [
    {
      id: "1",
      title: "A3 Pro Airpods",
      rating: 4.7,
      reviews: 190,
      currentPrice: 1599,
      originalPrice: 5000,
      discount: 68,
      stock: true,
      tag: "fast"
    },
    {
      id: "2",
      title: "M10 TWS Wireless Bluetooth Earbuds",
      rating: 4.7,
      reviews: 2624,
      currentPrice: 759,
      originalPrice: 3000,
      discount: 75,
      stock: true,
      tag: "fast"
    },
    {
      id: "3",
      title: "Zero Carbon Earbuds",
      rating: 4.6,
      reviews: 18,
      currentPrice: 2999,
      originalPrice: 6500,
      discount: 54,
      stock: true,
      tag: "fast"
    },
    {
      id: "4",
      title: "Audionic Airbud 550",
      rating: 4.8,
      reviews: 624,
      currentPrice: 3649,
      originalPrice: 9900,
      discount: 63,
      stock: true,
      tag: "fast"
    },
    {
      id: "5",
      title: "Airs pro 2 Tws wireless Earbuds",
      rating: 4.6,
      reviews: 154,
      currentPrice: 699,
      originalPrice: 2000,
      discount: 65,
      stock: true,
      tag: "fast"
    },
    {
      id: "6",
      title: "M04 TWS Wireless Bluetooth Earbuds",
      rating: 4.2,
      reviews: 37,
      currentPrice: 849,
      originalPrice: 3000,
      discount: 72,
      stock: true,
      tag: "fast"
    },
    {
      id: "7",
      title: "M25 Gaming Wireless Earbuds",
      rating: 4.8,
      reviews: 75,
      currentPrice: 1019,
      originalPrice: 4000,
      discount: 75,
      stock: true,
      tag: "fast"
    },
    {
      id: "8",
      title: "Audionic Wireless Airbuds 425",
      rating: 4.9,
      reviews: 377,
      currentPrice: 3449,
      originalPrice: 8000,
      discount: 57,
      stock: true,
      tag: "fast"
    },
    {
      id: "9",
      title: "Oraimo OEB-E104D Freelance",
      rating: 5.0,
      reviews: 1,
      currentPrice: 3849,
      originalPrice: 7500,
      discount: 49,
      stock: true,
      tag: "fast"
    },
    {
      id: "10",
      title: "Lenovo GM2 Pro",
      rating: 4.5,
      reviews: 120,
      currentPrice: 1849,
      originalPrice: 4500,
      discount: 59,
      stock: true,
      tag: "fast"
    },
    {
        id: "11",
        title: "Galaxy Buds2 Pro",
        rating: 4.9,
        reviews: 450,
        currentPrice: 32999,
        originalPrice: 45000,
        discount: 27,
        stock: true,
        tag: "fast"
    },
    {
        id: "12",
        title: "Redmi Buds 4 Active",
        rating: 4.6,
        reviews: 89,
        currentPrice: 4299,
        originalPrice: 6999,
        discount: 39,
        stock: true,
        tag: "fast"
    }
  ];

  return (
    <section className="w-full bg-[#E91E63] py-8 md:py-12 overflow-hidden font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-[1248px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-[28px] font-semibold text-white leading-tight">
            Latest Wireless Earbuds
          </h2>
          <a
            href="/wireless-earbuds"
            className="hidden md:inline-flex items-center justify-center bg-white text-[#E91E63] text-sm font-semibold px-5 py-2 rounded-[4px] shadow-sm hover:bg-gray-50 transition-colors"
          >
            View All
          </a>
          <a
             href="/wireless-earbuds"
             className="md:hidden text-white text-sm font-semibold hover:underline"
          >
             View All
          </a>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          {/* Navigation Arrows (Desktop) */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300 disabled:opacity-0 focus:outline-none"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-[#2C3E50]" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300 disabled:opacity-0 focus:outline-none"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-[#2C3E50]" />
          </button>

          {/* Product Grid / Slides */}
          {/* 
            Desktop: Grid with 2 rows that flows column-wise to allow horizontal scrolling of "pages" essentially, 
            but creating a true column flow grid.
            Mobile: Single row scroll.
          */}
          <div
            ref={scrollContainerRef}
            className="grid grid-rows-1 grid-flow-col auto-cols-[160px] md:grid-rows-2 md:auto-cols-[240px] gap-3 md:gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg p-3 relative flex flex-col h-full snap-start border border-transparent hover:border-gray-200 hover:shadow-lg transition-all duration-200 md:min-h-[290px] min-h-[260px]"
              >
                {/* Sale Badge */}
                <div className="absolute top-2 right-2 z-10 flex flex-col items-center">
                    <div className="bg-[#5614B0] w-[34px] h-[34px] rounded-md flex flex-col items-center justify-center shadow-sm overflow-hidden">
                        <span className="text-[10px] font-bold text-[#FFD700] leading-none mb-px">12.12</span>
                        <div className="bg-[#E91E63] w-full text-center">
                            <span className="text-[8px] font-bold text-white leading-none block py-px">SALE</span>
                        </div>
                    </div>
                </div>

                {/* Fast Badge */}
                {product.tag === 'fast' && (
                  <div className="absolute top-2 left-2 z-10">
                     <div className="relative bg-white/90 backdrop-blur-[2px] border border-red-500 rounded px-1.5 py-0.5 flex items-center gap-1 shadow-sm">
                        <Truck className="w-3 h-3 text-red-500 fill-red-500" strokeWidth={0} />
                        <span className="text-[10px] font-bold text-red-500 italic uppercase" style={{ fontFamily: 'Segoe UI, sans-serif' }}>fast</span>
                     </div>
                  </div>
                )}

                {/* Product Image Placeholder */}
                <div className="relative w-full aspect-square mb-3 bg-[#f7f7f7] rounded-md overflow-hidden flex items-center justify-center group">
                    <div className="text-gray-300 transition-transform duration-300 group-hover:scale-105">
                         <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                    <Star className="w-3 h-3 fill-[#FFC107] text-[#FFC107]" />
                    <span className="text-xs font-semibold text-[#333]">{product.rating}</span>
                    <span className="text-[11px] text-[#737373]">{product.reviews} Reviews</span>
                </div>

                {/* Title */}
                <h4 className="text-sm font-semibold text-[#2C3E50] leading-snug line-clamp-2 mb-auto" title={product.title}>
                    {product.title}
                </h4>

                {/* Price */}
                <div className="mt-3">
                    <div className="text-lg font-bold text-[#2C3E50] leading-none">
                        <sup className="text-xs font-medium top-[-0.2em] mr-0.5">Rs</sup>
                        {product.currentPrice.toLocaleString()}
                    </div>
                    
                    <div className="flex items-center justify-between mt-1.5">
                        <div className="text-xs text-[#999999] line-through decoration-[#999999]">
                             <sup className="text-[10px] top-[-0.1em] mr-0.5">Rs</sup>
                             {product.originalPrice.toLocaleString()}
                        </div>
                        <div className="text-[11px] font-semibold text-[#4CAF50] bg-[#E8F5E9] px-1.5 py-0.5 rounded">
                            {product.discount}% OFF
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}