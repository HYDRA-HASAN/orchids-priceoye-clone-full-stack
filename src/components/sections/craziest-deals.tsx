import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  rating: string;
  reviews: string;
  currentPrice: string;
  originalPrice: string;
  discount: string;
  isFast: boolean;
  isSale: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Dinglong RF-609 Pro Professional Hair Clipper Trimmer",
    image: "https://placehold.co/300x300/f5f5f5/2C3E50?text=Trimmer",
    rating: "4.5",
    reviews: "2 Reviews",
    currentPrice: "1,899",
    originalPrice: "3,500",
    discount: "46% OFF",
    isFast: true,
    isSale: true
  },
  {
    id: 2,
    name: "Beclab 45W Type-C Adapter",
    image: "https://placehold.co/300x300/f5f5f5/2C3E50?text=Adapter",
    rating: "5.0",
    reviews: "11 Reviews",
    currentPrice: "2,499",
    originalPrice: "5,999",
    discount: "58% OFF",
    isFast: true,
    isSale: true
  },
  {
    id: 3,
    name: "Audionic Trance Airbud 815 with ANC",
    image: "https://placehold.co/300x300/f5f5f5/2C3E50?text=Airbuds",
    rating: "4.8",
    reviews: "6 Reviews",
    currentPrice: "5,349",
    originalPrice: "11,999",
    discount: "55% OFF",
    isFast: true,
    isSale: true
  },
  {
    id: 4,
    name: "Samsung Galaxy Buds Core",
    image: "https://placehold.co/300x300/f5f5f5/2C3E50?text=Galaxy+Buds",
    rating: "5.0",
    reviews: "6 Reviews",
    currentPrice: "10,499",
    originalPrice: "14,399",
    discount: "27% OFF",
    isFast: true,
    isSale: true
  }
];

export default function CraziestDealsSection() {
  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-6 text-[20px] md:text-[24px] font-semibold leading-tight">
          <span className="text-[#F44336]">Craziest Deals</span>{' '}
          <span className="text-[#2C3E50]">of the Year</span>
        </h2>

        <div className="flex overflow-x-auto gap-4 pb-4 md:grid md:grid-cols-4 md:gap-4 md:pb-0 scrollbar-hide snap-x">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex-shrink-0 w-[240px] md:w-full bg-white rounded-lg border border-[#E8E8E8] hover:shadow-[0px_4px_12px_rgba(0,0,0,0.15)] transition-shadow duration-200 snap-center p-3 flex flex-col justify-between"
            >
              {/* Badges */}
              <div className="absolute top-3 left-3 z-10">
                {product.isFast && (
                  <div className="bg-[#F44336] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm italic inline-flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    <span>fast</span>
                  </div>
                )}
              </div>

              <div className="absolute top-0 right-0 z-10">
                {product.isSale && (
                  <div className="flex flex-col items-center">
                    <div className="bg-[#2C3E50] text-white text-[10px] font-bold px-1.5 py-0.5 w-full text-center rounded-tl-sm">
                      12.12
                    </div>
                    <div className="bg-[#E91E63] text-white text-[10px] font-bold px-1.5 py-0.5 w-full text-center rounded-br-sm rounded-bl-sm">
                      SALE
                    </div>
                  </div>
                )}
              </div>

              {/* Product Image */}
              <div className="relative w-full h-[180px] mb-3 flex items-center justify-center p-2">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 240px, 280px"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-1">
                  <Star className="w-3 h-3 fill-[#FFC107] text-[#FFC107]" />
                  <span className="text-[12px] text-[#2C3E50] bg-[#F5F5F5] px-1.5 rounded-full">
                    {product.rating}
                  </span>
                  <span className="text-[11px] text-[#999999] ml-0.5">
                    {product.reviews}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[14px] font-semibold text-[#2C3E50] leading-snug line-clamp-2 h-[42px]">
                  {product.name}
                </h3>

                {/* Price Section */}
                <div className="mt-2">
                  <div className="text-[18px] font-bold text-[#2C3E50]">
                    <span className="text-[14px] align-top font-semibold mr-0.5">Rs</span>
                    {product.currentPrice}
                  </div>
                  
                  <div className="flex items-center justify-between text-[12px] mt-1">
                    <div className="text-[#999999] line-through decoration-[#999999]">
                      <span className="text-[10px] font-medium mr-0.5">Rs</span>
                      {product.originalPrice}
                    </div>
                    <div className="text-[#1ABC9C] font-medium bg-[#E0F7FA] px-1.5 py-0.5 rounded-[4px]">
                      {product.discount}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}