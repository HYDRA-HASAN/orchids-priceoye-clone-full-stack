"use client";

import React from 'react';
import Image from 'next/image';
import { Star, Truck } from 'lucide-react';

export default function ProductCarouselXiaomiDeals() {
  const products = [
    {
      id: 1,
      name: "Xiaomi Redmi Pad 2 8/256 4G",
      rating: "5.0",
      reviews: "5 Reviews",
      price: "56,999",
      originalPrice: "80,280",
      discount: "29% OFF",
      image: "https://placehold.co/200x200/png?text=Redmi+Pad",
      hasFastBadge: true,
      hasSaleBadge: true,
    },
    {
      id: 2,
      name: "Xiaomi 13T Pro",
      rating: "5.0",
      reviews: "3 Reviews",
      price: "226,699",
      originalPrice: "239,999",
      discount: "5% OFF",
      image: "https://placehold.co/200x200/png?text=Xiaomi+13T",
      hasFastBadge: true,
      hasSaleBadge: false,
    },
    {
      id: 3,
      name: "Xiaomi Smart Air Purifier Elite",
      rating: null,
      reviews: null,
      price: "14,799",
      originalPrice: "29,000",
      discount: "49% OFF",
      image: "https://placehold.co/200x200/png?text=Air+Purifier",
      hasFastBadge: true,
      hasSaleBadge: false,
    },
    {
      id: 4,
      name: "Xiaomi Smart Air Purifier 4 Lite Filter Pro",
      rating: null,
      reviews: null,
      price: "10,799",
      originalPrice: "21,175",
      discount: "49% OFF",
      image: "https://placehold.co/200x200/png?text=Filter+Pro",
      hasFastBadge: true,
      hasSaleBadge: false,
    },
    {
      id: 5,
      name: "Xiaomi PB2050ZM 20000mAh Power Bank",
      rating: "5.0",
      reviews: "2 Reviews",
      price: "6,499",
      originalPrice: "12,499",
      discount: "48% OFF",
      image: "https://placehold.co/200x200/png?text=Power+Bank",
      hasFastBadge: true,
      hasSaleBadge: true,
    },
  ];

  return (
    <section className="w-full bg-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-[22px] md:text-[28px] font-semibold leading-tight text-[#2C3E50]">
            <span className="text-[#F44336]">Top Deals</span> In Xiaomi
          </h2>
          {/* View All button is typically absent in Top Deals sections based on design reference, 
              but layout structure allows for it if needed. Leaving empty to match 'Top Deals in Samsung' pattern. */}
        </div>

        {/* Product Grid/Carousel Container */}
        <div className="relative">
          <div className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative flex min-w-[200px] snap-center flex-col rounded-lg border border-[#E8E8E8] bg-white p-3 transition-shadow hover:shadow-lg md:min-w-0"
              >
                {/* Badges */}
                <div className="absolute left-3 top-3 z-10 flex flex-col gap-1">
                  {product.hasFastBadge && (
                    <div className="flex h-5 items-center gap-1 rounded bg-transparent">
                      <div className="relative h-4 w-6">
                         {/* CSS-only approximation of the 'fast' truck icon for pixel perfection preference without external SVGs */}
                         <div className="absolute left-0 top-[2px] h-[2px] w-2 rounded-full bg-[#F44336] opacity-60"></div>
                         <div className="absolute left-0 top-[6px] h-[2px] w-3 rounded-full bg-[#F44336] opacity-80"></div>
                         <div className="absolute left-0 bottom-[2px] h-[2px] w-1 rounded-full bg-[#F44336] opacity-60"></div>
                         <svg 
                           className="absolute right-0 top-0 h-4 w-4 text-[#F44336]" 
                           fill="currentColor" 
                           viewBox="0 0 24 24"
                         >
                           <path d="M1 3h15v13h-3a3 3 0 0 1-6 0H1V3zm14 3h3l4 4v6h-4a3 3 0 0 1-6 0v-1h3V6zM5 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm14 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                         </svg>
                      </div>
                      <span className="text-[10px] font-bold italic text-[#F44336]">fast</span>
                    </div>
                  )}
                </div>

                {product.hasSaleBadge && (
                  <div className="absolute right-0 top-0 z-10">
                    <div className="flex flex-col items-center justify-center rounded-bl-lg bg-[#2C2C54] px-1.5 py-1 text-center shadow-sm">
                        <span className="text-[10px] font-bold leading-none text-[#FFD700]">12.12</span>
                        <span className="text-[8px] font-bold leading-none text-white">SALE</span>
                    </div>
                  </div>
                )}

                {/* Product Image */}
                <div className="mb-3 flex h-[160px] w-full items-center justify-center overflow-hidden bg-[#f9f9f9]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-2 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-1 flex-col justify-between">
                  <div className="space-y-1">
                    {/* Rating */}
                    {product.rating ? (
                      <div className="flex items-center gap-1">
                        <svg
                          className="h-3 w-3 text-[#FFC107]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span className="text-[11px] text-[#2C3E50]">{product.rating}</span>
                        <span className="text-[10px] text-[#999999]">{product.reviews}</span>
                      </div>
                    ) : (
                      <div className="h-4"></div> /* Spacer for alignment */
                    )}

                    {/* Title */}
                    <h3 className="line-clamp-2 min-h-[40px] text-[13px] font-semibold leading-tight text-[#2C3E50]">
                      {product.name}
                    </h3>
                  </div>

                  {/* Price Section */}
                  <div className="mt-2">
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-[12px] font-bold text-[#2C3E50]">Rs</span>
                      <span className="text-[18px] font-bold text-[#2C3E50]">{product.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-[#999999] line-through decoration-1">
                        Rs {product.originalPrice}
                      </span>
                      <span className="rounded bg-[#E8F5E9] px-1 py-0.5 text-[10px] font-medium text-[#4CAF50]">
                        {product.discount}
                      </span>
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