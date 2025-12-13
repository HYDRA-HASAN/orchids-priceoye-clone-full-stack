"use client";

import React from 'react';
import Image from 'next/image';
import { Star, Truck } from 'lucide-react';

export default function ProductCarouselPersonalCares() {
  const products = [
    {
      id: 1,
      title: "Dingling RF-609 Professional Hair Clipper Trimmer",
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
      rating: 4.5,
      reviews: "2 Reviews",
      currentPrice: "1,899",
      oldPrice: "3,500",
      discount: "46% OFF",
      fast: true,
      sale: true,
    },
    {
      id: 2,
      title: "Kemei KM-6558 3 in 1 Grooming Kit",
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
      rating: 5.0,
      reviews: "3 Reviews",
      currentPrice: "1,849",
      oldPrice: "3,000",
      discount: "38% OFF",
      fast: false,
      sale: true,
    },
    {
      id: 3,
      title: "REMINGTON Hair Straightener Advanced Color Protect S8605",
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
      rating: null,
      reviews: null,
      currentPrice: "23,849",
      oldPrice: "29,000",
      discount: "18% OFF",
      fast: true,
      sale: true,
    },
    {
      id: 4,
      title: "REMINGTON Power Dry Hair Dryer D3010",
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
      rating: 5.0,
      reviews: "1 Reviews",
      currentPrice: "7,499",
      oldPrice: "8,000",
      discount: "7% OFF",
      fast: true,
      sale: true,
    },
    {
      id: 5,
      title: "Philips Essential Care Hair Dryer (BHC010)",
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
      rating: null,
      reviews: null,
      currentPrice: "5,999",
      oldPrice: "6,500",
      discount: "8% OFF",
      fast: false,
      sale: false,
    },
    {
      id: 6,
      title: "Kemei KM-600 11 in 1 Grooming Kit",
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
      rating: 4.8,
      reviews: "4 Reviews",
      currentPrice: "3,899",
      oldPrice: "5,000",
      discount: "22% OFF",
      fast: true,
      sale: true,
    },
    {
      id: 7,
      title: "REMINGTON Hair Straightener Color Protect S6300",
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
      rating: null,
      reviews: null,
      currentPrice: "9,199",
      oldPrice: "16,000",
      discount: "43% OFF",
      fast: false,
      sale: false,
    },
  ];

  return (
    <section className="bg-[#FF9800] py-8 md:py-12 relative overflow-hidden font-sans">
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[70vh] h-[70vh] bg-white opacity-10 rounded-full blur-3xl transform scale-150"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10 w-full max-w-[1248px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-[20px] md:text-[24px] lg:text-[28px] font-semibold leading-tight">
            Latest Personal Cares
          </h2>
          <a
            href="#"
            className="bg-white text-[#FF9800] px-3 md:px-5 py-2 rounded text-[12px] md:text-[14px] font-bold shadow-sm hover:shadow-md transition-shadow active:scale-95"
          >
            View All
          </a>
        </div>

        {/* Carousel */}
        <div className="flex overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 gap-3 md:gap-4 scrollbar-hide snap-x md:snap-none">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-3 min-w-[190px] w-[190px] md:min-w-[240px] md:w-[240px] snap-start relative flex flex-col h-full border border-gray-100"
            >
              {/* Badges */}
              {product.fast && (
                <div className="absolute top-2 left-2 z-10 bg-[#FF5722] text-white text-[10px] md:text-[11px] font-bold italic px-1.5 py-0.5 rounded-[3px] shadow-sm flex items-center gap-0.5">
                  {/* Custom Truck Icon */}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-0.5"
                  >
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                  fast
                </div>
              )}

              {product.sale && (
                <div className="absolute top-0 right-3 z-10 flex flex-col items-center shadow-md">
                   <div className="bg-[#2C3E50] text-[#FFC107] text-[10px] font-bold px-1.5 pt-1.5 pb-0.5 w-[42px] text-center leading-[1] rounded-t-sm">
                      12.12
                   </div>
                   <div className="bg-[#E91E63] text-white text-[9px] font-bold px-1.5 pt-0.5 pb-1.5 w-[42px] text-center leading-[1] rounded-b-sm">
                      SALE
                   </div>
                </div>
              )}

              {/* Product Image */}
              <div className="relative w-full h-[150px] md:h-[180px] mb-2 flex items-center justify-center p-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-2 h-4">
                {product.rating && (
                  <>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="#FFC107"
                      stroke="#FFC107"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span className="text-[11px] md:text-xs font-medium text-gray-700 pt-[1px]">
                      {product.rating}
                    </span>
                    <span className="text-[10px] md:text-[11px] text-gray-400 pt-[1px] ml-1">
                      {product.reviews}
                    </span>
                  </>
                )}
              </div>

              {/* Title */}
              <h3 className="text-[13px] md:text-[14px] leading-[1.4] font-semibold text-[#2C3E50] mb-2 line-clamp-2 h-[40px]">
                {product.title}
              </h3>

              {/* Price */}
              <div className="mt-auto">
                <div className="text-[18px] md:text-[20px] font-bold text-[#2C3E50] leading-none">
                  <span className="text-[12px] md:text-[14px] font-medium align-top mr-0.5 text-[#2C3E50] relative top-[2px]">
                    Rs
                  </span>
                  {product.currentPrice}
                </div>
                
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[11px] md:text-[12px] text-[#999999] line-through decoration-[#999999]">
                    Rs {product.oldPrice}
                  </span>
                  <span className="text-[11px] md:text-[12px] text-[#4CAF50] font-semibold bg-[#ebf7ee] px-1 rounded-sm">
                    {product.discount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}