import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Truck, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// --- Types ---

interface Product {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  isFast?: boolean;
  saleBadge?: boolean;
}

// --- Mock Data ---

const LAPTOP_DATA: Product[] = [
  {
    id: '1',
    name: 'Apple Macbook Air 13 M1 MGN63 (8GB-256GB)',
    image: 'https://placehold.co/400x300/f5f5f5/333333?text=MacBook+Air+M1',
    rating: 5.0,
    reviewCount: 2,
    price: 203999,
    originalPrice: 280000,
    discountPercentage: 27,
    isFast: true,
    saleBadge: true,
  },
  {
    id: '2',
    name: 'ASUS Zenbook 14 UX3405CA Intel Core Ultra 7',
    image: 'https://placehold.co/400x300/f5f5f5/333333?text=ASUS+Zenbook',
    rating: 0,
    reviewCount: 0,
    price: 285999,
    originalPrice: 355000,
    discountPercentage: 19,
    isFast: false,
    saleBadge: true,
  },
  {
    id: '3',
    name: 'Lenovo IdeaPad Slim 3 Ryzen 7 (8GB-512GB)',
    image: 'https://placehold.co/400x300/f5f5f5/333333?text=Lenovo+IdeaPad',
    rating: 0,
    reviewCount: 0,
    price: 146999,
    originalPrice: 170000,
    discountPercentage: 14,
    isFast: true,
    saleBadge: true,
  },
  {
    id: '4',
    name: 'Dell Latitude 3540 CIS-1235U (8GB-256GB SSD)',
    image: 'https://placehold.co/400x300/f5f5f5/333333?text=Dell+Latitude',
    rating: 5.0,
    reviewCount: 1,
    price: 169999,
    originalPrice: 249000,
    discountPercentage: 32,
    isFast: false,
    saleBadge: false, // Not seen in screenshot but safe to toggle
  },
  {
    id: '5',
    name: 'HP 15s-fq5329nia Laptop (8GB-512GB)',
    image: 'https://placehold.co/400x300/f5f5f5/333333?text=HP+15s',
    rating: 4.8,
    reviewCount: 12,
    price: 115999,
    originalPrice: 145000,
    discountPercentage: 20,
    isFast: true,
    saleBadge: true,
  },
  {
    id: '6',
    name: 'Lenovo ThinkPad E16 Gen 2 - Intel Core Ultra 7',
    image: 'https://placehold.co/400x300/f5f5f5/333333?text=ThinkPad+E16',
    rating: 0,
    reviewCount: 0,
    price: 287999,
    originalPrice: 350000,
    discountPercentage: 18,
    isFast: true,
    saleBadge: true,
  },
];

// --- Sub-Components ---

const StarRating = ({ rating, count }: { rating: number; count: number }) => {
  return (
    <div className="flex items-center gap-1 mb-1">
      {rating > 0 && (
         <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
      )}
      <span className={`text-xs ${rating > 0 ? 'text-yellow-500 font-medium' : 'text-gray-300'}`}>
        {rating > 0 ? rating.toFixed(1) : ''}
      </span>
      {count > 0 && <span className="text-[10px] text-gray-400 ml-0.5">{count} Reviews</span>}
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-lg p-3 w-[220px] md:w-[240px] flex-shrink-0 transition-shadow hover:shadow-lg cursor-pointer flex flex-col h-full justify-between">
      {/* Badges Overlay */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
        {product.saleBadge && (
           <div className="bg-[#E91E63] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm shadow-sm leading-tight flex flex-col items-center">
             <span>12.12</span>
             <span>SALE</span>
           </div>
        )}
        {product.isFast && (
          <div className="bg-red-500 text-white text-[10px] italic font-bold px-1.5 py-0.5 rounded-sm flex items-center gap-1 shadow-sm mt-1">
             <Truck className="w-3 h-3" strokeWidth={3} />
             <span>fast</span>
          </div>
        )}
      </div>

      <div className="flex flex-col">
        {/* Image */}
        <div className="relative w-full h-[180px] mb-3 flex items-center justify-center bg-gray-50 rounded-md overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
        />
        </div>

        {/* Rating */}
        <div className="min-h-[20px]">
          <StarRating rating={product.rating} count={product.reviewCount} />
        </div>

        {/* Title */}
        <h3 className="text-[#2C3E50] text-sm font-semibold leading-snug line-clamp-2 h-10 mb-2 group-hover:text-[#1E88E5] transition-colors">
            {product.name}
        </h3>
      </div>

      {/* Pricing */}
      <div className="mt-auto">
        <div className="flex items-baseline gap-1">
          <span className="text-xs align-top relative top-[-4px]">Rs</span>
          <span className="text-lg font-bold text-[#2C3E50]">
            {product.price.toLocaleString()}
          </span>
        </div>
        
        {product.originalPrice && product.originalPrice > product.price && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-slate-400 line-through decoration-slate-400">
               Rs {product.originalPrice.toLocaleString()}
            </span>
             {product.discountPercentage && (
                <span className="text-xs text-[#1ABC9C] bg-[#1ABC9C]/10 px-1 rounded font-medium">
                  {product.discountPercentage}% OFF
                </span>
             )}
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main Section Component ---

const LatestLaptopsCarousel = () => {
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

  return (
    <section className="bg-[#FDD835] py-8 md:py-12 border-b border-gray-100">
      <div className="max-w-[1248px] mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-2xl md:text-[28px] font-bold tracking-tight drop-shadow-sm">
            Latest Laptops
          </h2>
          <Button variant="outline" />
          <Link 
            href="/laptops" 
            className="hidden md:inline-flex items-center justify-center bg-white hover:bg-gray-50 text-[#2C3E50] text-[13px] font-bold py-2 px-5 rounded shadow-sm transition-all duration-200"
          >
            View All
          </Link>
          
          {/* Mobile View All (if different, but usually consistent) */}
           <Link 
            href="/laptops" 
            className="md:hidden inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#2C3E50] text-xs font-bold py-1.5 px-3 rounded shadow-sm"
          >
            View All
          </Link>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative group">
           {/* Navigation Arrows (Desktop) */}
           <button 
             onClick={scrollLeft}
             className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white items-center justify-center rounded-full shadow-md text-slate-700 hover:text-[#1E88E5] transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 cursor-pointer border border-gray-100"
             aria-label="Scroll left"
           >
             <ChevronLeft className="w-6 h-6" />
           </button>

           <button 
             onClick={scrollRight}
             className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white items-center justify-center rounded-full shadow-md text-slate-700 hover:text-[#1E88E5] transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 cursor-pointer border border-gray-100"
              aria-label="Scroll right"
           >
             <ChevronRight className="w-6 h-6" />
           </button>

          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-3 md:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-black/10 scroll-smooth -mx-4 px-4 md:mx-0 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {LAPTOP_DATA.map((product) => (
              <div key={product.id} className="snap-start">
                 <ProductCard product={product} />
              </div>
            ))}
            
            {/* "View All" Card at end of carousel often seen in designs */}
             <div className="snap-start hidden md:flex flex-col items-center justify-center bg-white/10 border-2 border-white/40 rounded-lg p-3 w-[220px] md:w-[240px] flex-shrink-0 h-auto min-h-[350px] cursor-pointer hover:bg-white/20 transition-colors group/view-all">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm group-hover/view-all:scale-110 transition-transform">
                   <ArrowRight className="w-6 h-6 text-[#1E88E5]" />
                </div>
                <span className="text-white font-bold text-lg">View All</span>
                <span className="text-white/80 text-sm mt-1">Laptops</span>
             </div>
          </div>
        </div>
      </div>

      {/* Tailwind Custom Utilities for hiding scrollbar if needed inline */}
      <style jsx global>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}</style>
    </section>
  );
};

// --- Button Helper for consistency if needed, though Link is used ---
function Button({ variant = 'default', ...props }: { variant?: 'default' | 'outline' }) {
    return null; // Just a placeholder to satisfying imports if strictly needed, but logic used inline
}

export default LatestLaptopsCarousel;