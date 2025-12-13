"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Infinix X501 Pocket Beat Wireless Bluetooth Speaker",
    price: "1,529",
    originalPrice: "5,000",
    discount: "69% OFF",
    rating: 5.0,
    reviews: 1,
    image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
    isFast: false,
    isSale: false,
  },
  {
    id: 2,
    name: "Audionic Akasaki Bluetooth Speaker",
    price: "999",
    originalPrice: "2,450",
    discount: "59% OFF",
    rating: 4.5,
    reviews: 18,
    image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
    isFast: false,
    isSale: false,
  },
  {
    id: 3,
    name: "ORAIMO ROVER 12W FM Wireless Speaker OBS-53D",
    price: "7,899",
    originalPrice: "21,500",
    discount: "63% OFF",
    rating: 5.0,
    reviews: 5,
    image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
    isFast: false,
    isSale: true,
  },
  {
    id: 4,
    name: "JBL M3 Mini Wireless Bluetooth Speaker",
    price: "819",
    originalPrice: "1,500",
    discount: "45% OFF",
    rating: 4.9,
    reviews: 12,
    image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
    isFast: false,
    isSale: false,
  },
  {
    id: 5,
    name: "Airox SP07 Bluetooth Speaker",
    price: "2,099",
    originalPrice: "4,000",
    discount: "48% OFF",
    rating: 4.0,
    reviews: 8,
    image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
    isFast: false,
    isSale: false,
  },
  {
    id: 6,
    name: "Infinix Beat Bluetooth Speaker",
    price: "1,619",
    originalPrice: "4,500",
    discount: "64% OFF",
    rating: 4.8,
    reviews: 12,
    image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
    isFast: true,
    isSale: true,
  },
  {
    id: 7,
    name: "ORAIMO SpaceBox 80W Wireless Speaker OBS-82",
    price: "4,799",
    originalPrice: "12,000",
    discount: "60% OFF",
    rating: 3.5,
    reviews: 4,
    image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
    isFast: true,
    isSale: true,
  },
  {
    id: 8,
    name: "Airox SP04 Portable Bluetooth Speaker",
    price: "2,199",
    originalPrice: "5,000",
    discount: "56% OFF",
    rating: 5.0,
    reviews: 2,
    image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
    isFast: false,
    isSale: false,
  },
  {
    id: 9,
    name: "JBL M3 Mini Wireless Speaker (Memory Card)",
    price: "849",
    originalPrice: "2,000",
    discount: "58% OFF",
    rating: 4.3,
    reviews: 12,
    image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
    isFast: false,
    isSale: false,
  },
  {
    id: 10,
    name: "K12 Speaker Portable Children",
    price: "1,099",
    originalPrice: "2,500",
    discount: "56% OFF",
    rating: 5.0,
    reviews: 1,
    image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
    isFast: true,
    isSale: true,
  },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  return (
    <div className="relative flex flex-col bg-white rounded-lg p-3 min-w-[220px] w-[220px] md:min-w-[232px] md:w-[232px] snap-start hover:shadow-lg transition-shadow duration-200">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {product.isFast && (
           <div className="bg-[#F44336] text-white text-[10px] font-bold italic px-1.5 py-0.5 rounded-[2px] shadow-sm tracking-tighter w-fit">
           fast
         </div>
        )}
      </div>
      
      <div className="absolute top-3 right-3 z-10">
        {product.isSale && (
          <div className="bg-[#4b1d68] text-white text-[8px] font-bold px-1 py-0.5 rounded-[2px] leading-none text-center border border-white/20 shadow-sm">
            <div>12.12</div>
            <div className="text-[7px] text-[#ff69b4]">SALE</div>
          </div>
        )}
      </div>

      {/* Image */}
      <div className="relative w-full h-[160px] mb-3 flex items-center justify-center bg-[#F5F5F5] rounded-md overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-2 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 gap-1">
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-1">
            {product.rating > 0 && (
                <>
                <Star className="w-3 h-3 fill-[#FFC107] text-[#FFC107]" />
                <span className="text-xs font-medium text-gray-700">{product.rating.toFixed(1)}</span>
                <span className="text-xs text-gray-400 font-light">{product.reviews} Reviews</span>
                </>
            )}
        </div>

        {/* Title */}
        <h4 className="text-[14px] leading-[1.4] font-semibold text-[#2C3E50] line-clamp-2 min-h-[40px] mb-2" title={product.name}>
          {product.name}
        </h4>

        {/* Price Section */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-1">
            <span className="text-[10px] font-bold align-top relative top-[-4px]">Rs</span>
            <span className="text-[20px] font-bold text-[#2C3E50] leading-none">{product.price}</span>
          </div>
          
          <div className="flex items-center justify-between mt-1">
            <div className="flex items-center gap-1">
              <span className="text-[11px] text-[#999999] line-through decoration-slate-400/80">
                Rs {product.originalPrice}
              </span>
            </div>
            <div className="text-[11px] font-medium text-[#1ABC9C] bg-[#E0F7FA]/30 px-1 rounded">
              {product.discount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BluetoothSpeakersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-[#E91E63] py-8 md:py-12 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[20px] md:text-[24px] font-semibold text-white tracking-tight">
            Latest Bluetooth Speakers
          </h2>
          <a
            href="#"
            className="hidden md:inline-flex items-center justify-center bg-white text-[#2C3E50] text-[13px] font-bold px-4 py-2 rounded-[4px] shadow-sm hover:bg-gray-50 transition-colors"
          >
            View All
          </a>
          <a
            href="#"
            className="md:hidden inline-flex items-center justify-center bg-white text-[#E91E63] text-[11px] font-bold px-3 py-1.5 rounded-[4px] shadow-sm"
          >
            View All
          </a>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
            
            {/* Scroll Buttons - Desktop Only */}
            <button
                onClick={() => scroll('left')}
                className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center text-gray-700 hover:text-gray-900 border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-50"
                aria-label="Scroll left"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={() => scroll('right')}
                className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center text-gray-700 hover:text-gray-900 border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-50"
                aria-label="Scroll right"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Scroll Area */}
            <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
                
                {/* View More Card for Mobile/End of List */}
                <div className="flex flex-col items-center justify-center bg-white/10 rounded-lg min-w-[120px] md:min-w-[220px] snap-start border-2 border-dashed border-white/30 cursor-pointer hover:bg-white/20 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-3">
                        <ChevronRight className="w-6 h-6 text-[#E91E63]" />
                    </div>
                    <span className="text-white font-semibold text-sm">View All</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}