"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, Zap } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  currentPrice: string;
  originalPrice: string;
  discount: number;
  isFast: boolean;
  isSale: boolean;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Tecno Spark 40",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/images/tecno-spark-40-pakistan-priceoye-t2m4m-270x270-21.webp",
    rating: 4.8,
    reviews: 23,
    currentPrice: "30,999",
    originalPrice: "33,999",
    discount: 9,
    isFast: true,
    isSale: true
  },
  {
    id: 2,
    name: "Tecno Spark Go 2",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/images/tecno-spark-go-2-pakistan-priceoye-554fi-270x270-23.webp",
    rating: 5.0,
    reviews: 13,
    currentPrice: "22,199",
    originalPrice: "24,499",
    discount: 9,
    isFast: true,
    isSale: true
  },
  {
    id: 3,
    name: "Infinix Hot 60 Pro",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/images/infinix-hot-60i-pakistan-priceoye-1r9tw-270x270-22.webp",
    rating: 4.5,
    reviews: 25,
    currentPrice: "43,499",
    originalPrice: "47,999",
    discount: 9,
    isFast: true,
    isSale: true
  },
  {
    id: 4,
    name: "Xiaomi Redmi A5",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/images/xiaomi-redmi-a5-pakistan-priceoye-4jqr9-270x270-20.webp",
    rating: 4.9,
    reviews: 62,
    currentPrice: "19,999",
    originalPrice: "22,999",
    discount: 13,
    isFast: false,
    isSale: true
  },
  {
    id: 5,
    name: "Infinix Smart 10",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/images/infinix-smart-10-pakistan-priceoye-wtjs7-270x270-24.webp",
    rating: 4.9,
    reviews: 166,
    currentPrice: "21,699",
    originalPrice: "24,499",
    discount: 11,
    isFast: true,
    isSale: true
  }
];

function BestSellerSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#1ABC9C] py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-[1248px]">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[28px] font-semibold text-white leading-tight">
            Best Seller
          </h2>
          <button className="bg-white text-[#1ABC9C] text-[14px] font-semibold px-5 py-2.5 rounded hover:bg-[#F5F5F5] transition-colors shadow-sm">
            View All
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Products Grid / Carousel */}
          <div 
            ref={containerRef}
            className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {PRODUCTS.map((product) => (
              <div 
                key={product.id}
                className="flex-none w-[200px] md:w-[220px] lg:w-[228px] bg-white rounded-lg p-3 shadow-md border border-transparent hover:border-[#E8E8E8] transition-shadow snap-start relative"
              >
                {/* Badges */}
                <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                  {product.isFast && (
                    <div className="bg-[#F44336] text-white h-[18px] px-1.5 rounded-[2px] flex items-center gap-1 shadow-sm">
                      <Zap className="fill-white w-2.5 h-2.5" />
                      <span className="text-[10px] font-bold italic leading-none pt-[1px]">fast</span>
                    </div>
                  )}
                </div>

                {product.isSale && (
                  <div className="absolute top-2 right-2 z-10">
                    <div className="bg-[#2E1A47] text-white text-[10px] font-bold px-1.5 py-1 rounded-[4px] leading-tight text-center shadow-sm border-[1px] border-white/20">
                      <div className="text-[11px] text-[#FFC107]">12.12</div>
                      <div className="text-[9px]">SALE</div>
                    </div>
                  </div>
                )}

                {/* Product Image */}
                <div className="relative w-full h-[180px] mb-3 flex items-center justify-center bg-[#F9F9F9] rounded overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-2 hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 200px, 228px"
                  />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-1.5 bg-[#F5F5F5] w-fit px-2 py-0.5 rounded-full">
                  <Star className="w-3 h-3 fill-[#FFC107] text-[#FFC107]" />
                  <span className="text-[11px] text-[#2C3E50]">
                    {product.rating} <span className="text-[#737373]">({product.reviews} Reviews)</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[14px] font-semibold text-[#2C3E50] leading-snug mb-2 line-clamp-2 h-[40px]">
                  {product.name}
                </h3>

                {/* Price Section */}
                <div className="flex flex-col gap-0.5">
                  <span className="text-[18px] font-bold text-[#2C3E50] leading-none">
                    <sup className="text-[12px] font-semibold top-[-4px]">Rs </sup>
                    {product.currentPrice}
                  </span>
                  
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[12px] text-[#999999] line-through decoration-[#F44336]">
                      <sup className="text-[10px]">Rs </sup>
                      {product.originalPrice}
                    </span>
                    <span className="text-[11px] font-semibold text-[#1ABC9C] bg-[#E0F2F1] px-1.5 py-0.5 rounded-[2px]">
                      {product.discount}% OFF
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={scrollLeft}
            className="absolute left-[-20px] md:left-[-24px] top-[calc(50%-16px)] -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#2C3E50] hover:text-[#1ABC9C] hover:scale-110 transition-all z-20 opacity-0 group-hover:opacity-100 disabled:opacity-50"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-[-20px] md:right-[-24px] top-[calc(50%-16px)] -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#2C3E50] hover:text-[#1ABC9C] hover:scale-110 transition-all z-20 opacity-0 group-hover:opacity-100 disabled:opacity-50"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function ProductCarouselBestSeller() {
  return <BestSellerSection />;
}