import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Types
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating?: number;
  reviewCount?: number;
  isFast?: boolean;
  isSale?: boolean;
}

// Mock Data matching the screenshot content
const products: Product[] = [
  {
    id: 1,
    name: "Audionic Spark Pro S-220 Mini Powerbank 20000mAh",
    price: 4799,
    originalPrice: 10500,
    rating: 5.0,
    reviewCount: 4,
    isFast: true,
    isSale: true,
  },
  {
    id: 2,
    name: "Joyroom Mini Magnetic Power Bank JR-W020 (10000mAh)",
    price: 5649,
    originalPrice: 6999,
    rating: 4.8,
    reviewCount: 11,
    isFast: true,
    isSale: true,
  },
  {
    id: 3,
    name: "Anker Nano Power Bank 5000mAh(Built-In Type C Connector)",
    price: 7599,
    originalPrice: 12999,
    rating: 5.0,
    reviewCount: 2,
    isFast: true,
    isSale: false, // Not visible in screenshot
  },
  {
    id: 4,
    name: "Baseus 22.5W Comet Series Dual Cable Digital Display Power Bank",
    price: 6249,
    originalPrice: 15000,
    rating: 5.0,
    reviewCount: 2,
    isFast: true,
    isSale: false,
  },
  {
    id: 5,
    name: "Airox PB19 10000mAh Fast Charge Power Bank",
    price: 3549,
    originalPrice: 5000, // Estimated
    rating: 5.0,
    reviewCount: 2,
    isFast: true,
    isSale: false,
  },
  {
    id: 6,
    name: "Infinix XP05 XPower Go 12W 5000mAh",
    price: 1449,
    originalPrice: 3000,
    rating: 5.0, // Assuming based on nearby items
    reviewCount: 4,
    isFast: true,
    isSale: true,
  },
  {
    id: 7,
    name: "Audionic Spark Pro S-230 Powerbank 20000mAh",
    price: 5149,
    originalPrice: 11000,
    rating: 5.0,
    reviewCount: 1,
    isFast: true,
    isSale: true,
  },
  {
    id: 8,
    name: "Anker Nano Power Bank 5000mAh(Built-In Lightning Connector)",
    price: 7599,
    originalPrice: 12999,
    rating: 5.0,
    reviewCount: 3,
    isFast: true,
    isSale: false,
  },
  {
    id: 9,
    name: "Airox 3G Plus Turbo 22.5W Super Fast Charging 20000mAh Power Bank",
    price: 3249,
    originalPrice: 6999,
    rating: 5.0,
    reviewCount: 2,
    isFast: true,
    isSale: false,
  },
  {
    id: 10,
    name: "Xiaomi 33W Power Bank 10000mAh (Integrated Cable)",
    price: 6199,
    originalPrice: 8999,
    rating: 5.0,
    reviewCount: 5,
    isFast: false,
    isSale: false,
  }
];

const FastBadge = () => (
  <div className="absolute top-0 left-0 z-10">
    <div className="bg-[#F44336] text-white text-[10px] font-bold italic px-2 py-0.5 rounded-br-lg flex items-center gap-0.5 shadow-sm">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span>fast</span>
    </div>
  </div>
);

const SaleBadge = () => (
    <div className="absolute top-0 right-0 z-10">
        <div className="relative">
             <div className="bg-[#2a2a72] text-white text-[9px] font-bold px-1.5 py-1 rounded-bl-lg rounded-tl-none shadow-sm flex flex-col items-center leading-none border-l border-b border-white/20">
                <span className="text-[#FDD835]">12.12</span>
                <span className="text-[#E91E63]">SALE</span>
            </div>
        </div>
    </div>
);

const ProductCard = ({ product }: { product: Product }) => {
  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <Link href="#" className="block min-w-[200px] sm:min-w-[220px] md:min-w-[240px] bg-white rounded-lg p-3 relative hover:shadow-lg transition-shadow duration-200 border border-transparent hover:border-gray-200 snap-start">
      {/* Badges */}
      {product.isFast && <FastBadge />}
      {product.isSale && <SaleBadge />}

      {/* Image Area */}
      <div className="relative h-[160px] w-full mb-3 flex items-center justify-center bg-[#F9F9F9] rounded-md overflow-hidden group">
         <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          {/* Placeholder for Product Image */}
           <div className="w-24 h-32 bg-gray-200 relative flex items-center justify-center text-gray-400">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
           </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1">
        {/* Rating */}
        {product.rating ? (
          <div className="flex items-center gap-1 bg-[#F5F5F5] w-fit px-1.5 py-0.5 rounded-sm">
             <Star className="w-2.5 h-2.5 fill-[#FFC107] text-[#FFC107]" />
             <span className="text-[10px] text-[#2C3E50] font-medium leading-none">{product.rating}</span>
             <span className="text-[10px] text-[#999999] leading-none">{product.reviewCount} Reviews</span>
          </div>
        ) : (
            <div className="h-4"></div> // spacer
        )}

        {/* Title */}
        <h3 className="text-[13px] leading-[1.4] text-[#2C3E50] font-semibold line-clamp-2 h-[38px] group-hover:text-[#1E88E5] transition-colors">
          {product.name}
        </h3>

        {/* Price Section */}
        <div className="mt-1">
          <div className="text-[18px] font-bold text-[#2C3E50] leading-tight">
            <span className="text-[12px] align-top font-semibold mr-0.5">Rs</span>
            {product.price.toLocaleString()}
          </div>
          
          <div className="flex items-center justify-between mt-0.5">
            <div className="text-[11px] text-[#999999] p-0 relative inline-block">
               <span className="line-through decoration-[#F44336] text-[#999999]">
                 Rs {product.originalPrice.toLocaleString()}
               </span>
            </div>
            <div className="text-[11px] text-[#1ABC9C] bg-[#E0F2F1] px-1.5 py-0.5 rounded-[2px] font-semibold">
              {discountPercentage}% OFF
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function ProductCarouselPowerBanks() {
  return (
    <section className="bg-[#E91E63] py-8 md:py-12 relative">
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-white text-[20px] md:text-[24px] font-semibold leading-tight">
            Latest Power Banks
          </h2>
          <Link 
            href="#" 
            className="bg-white text-[#2C3E50] text-[12px] md:text-[13px] font-semibold px-4 py-1.5 rounded-[4px] shadow-sm hover:bg-gray-50 transition-colors"
          >
            View All
          </Link>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
            
            {/* Scrollable Area */}
            <div className="flex overflow-x-auto gap-3 md:gap-4 pb-4 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide snap-x scroll-smooth touch-pan-x" id="power-banks-carousel">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            {/* Spacer for right padding on mobile */}
            <div className="w-1 shrink-0 md:hidden"></div>
            </div>

             {/* Navigation Arrows (Desktop Only) */}
             <button 
                className="absolute left-[-20px] top-[45%] -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#2C3E50] opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 disabled:opacity-0 hidden md:flex z-20 hover:bg-gray-50"
                aria-label="Previous items"
                onClick={() => {
                    const carousel = document.getElementById('power-banks-carousel');
                    if (carousel) carousel.scrollBy({ left: -250, behavior: 'smooth' });
                }}
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
                className="absolute right-[-20px] top-[45%] -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#2C3E50] opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 disabled:opacity-0 hidden md:flex z-20 hover:bg-gray-50"
                aria-label="Next items"
                onClick={() => {
                    const carousel = document.getElementById('power-banks-carousel');
                    if (carousel) carousel.scrollBy({ left: 250, behavior: 'smooth' });
                }}
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
      </div>
      
      {/* Decorative Styles from globals.css usually handle Scrollbar hiding but adding inline just in case */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}