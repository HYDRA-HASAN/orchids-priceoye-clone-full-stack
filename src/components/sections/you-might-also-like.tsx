'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Truck, Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating?: number;
  reviews?: number;
  image: string;
  isFast?: boolean;
  isSale?: boolean;
  category: string;
}

const CATEGORIES = [
  'You Might Also Like',
  'Mobiles',
  'Wireless Earbuds',
  'Smart Watches',
  'Power Banks',
];

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Sovo Dynamo-X 22.5W Power Bank SPB-22',
    price: 4199,
    originalPrice: 7999,
    discountPercentage: 47,
    rating: 5.0,
    reviews: 4,
    image: 'https://placehold.co/200x200/png?text=Power+Bank',
    isFast: true,
    isSale: true,
    category: 'Power Banks',
  },
  {
    id: '2',
    name: 'Amazon Echo Buds',
    price: 23899,
    originalPrice: 31000,
    discountPercentage: 23,
    image: 'https://placehold.co/200x200/png?text=Echo+Buds',
    category: 'Wireless Earbuds',
  },
  {
    id: '3',
    name: 'Oppo A3x',
    price: 25500,
    originalPrice: 25999,
    discountPercentage: 2,
    rating: 4.9,
    reviews: 30,
    image: 'https://placehold.co/200x200/png?text=Oppo+A3x',
    isFast: true,
    category: 'Mobiles',
  },
  {
    id: '4',
    name: 'Google Pixel Watch 2',
    price: 78299,
    originalPrice: 120000,
    discountPercentage: 35,
    image: 'https://placehold.co/200x200/png?text=Pixel+Watch',
    isFast: true,
    category: 'Smart Watches',
  },
  {
    id: '5',
    name: 'Airox E5 Wireless Earbuds',
    price: 2599,
    originalPrice: 4900,
    discountPercentage: 47,
    rating: 4.8,
    reviews: 12,
    image: 'https://placehold.co/200x200/png?text=Airox+E5',
    isFast: true,
    category: 'Wireless Earbuds',
  },
  {
    id: '6',
    name: 'Airox PB10 Power Bank 27000mAh',
    price: 4699,
    originalPrice: 6999,
    discountPercentage: 33,
    image: 'https://placehold.co/200x200/png?text=Airox+PB10',
    isFast: true,
    category: 'Power Banks',
  },
  {
    id: '7',
    name: 'Zero Caliber Pro All-Metal Appearance',
    price: 6999,
    originalPrice: 11599,
    discountPercentage: 40,
    rating: 4.8,
    reviews: 8,
    image: 'https://placehold.co/200x200/png?text=Zero+Caliber',
    category: 'Smart Watches',
  },
  {
    id: '8',
    name: 'Itel City 100',
    price: 23999,
    originalPrice: 26999,
    discountPercentage: 11,
    image: 'https://placehold.co/200x200/png?text=Itel+City',
    isFast: true,
    isSale: true,
    category: 'Mobiles',
  },
  {
    id: '9',
    name: 'Nothing Buds Pro 2',
    price: 16499,
    originalPrice: 20000,
    discountPercentage: 18,
    rating: 4.5,
    reviews: 21,
    image: 'https://placehold.co/200x200/png?text=Nothing+Buds',
    isFast: true,
    category: 'Wireless Earbuds',
  },
  {
    id: '10',
    name: 'Oneplus Bullets Wireless Z2 Neckband',
    price: 6799,
    originalPrice: 8999,
    discountPercentage: 24,
    rating: 5.0,
    reviews: 99,
    image: 'https://placehold.co/200x200/png?text=Oneplus+Z2',
    isFast: true,
    category: 'Wireless Earbuds',
  },
];

export default function YouMightAlsoLikeSection() {
  return <YouMightAlsoLike />;
}

function YouMightAlsoLike() {
  const [activeTab, setActiveTab] = useState('You Might Also Like');

  const filteredProducts = activeTab === 'You Might Also Like' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeTab);

  return (
    <section className="w-full bg-[#F5F5F5] py-8 sm:py-12">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="mb-6 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-6 min-w-max">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`text-sm font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  activeTab === category
                    ? 'text-[#1E88E5]'
                    : 'text-[#2C3E50] hover:text-[#1E88E5]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <h2 className="text-[#2C3E50] text-2xl md:text-[28px] font-semibold mb-6">
          Recommended Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filteredProducts.length === 0 && (
             <div className="col-span-full h-40 flex items-center justify-center text-gray-500 text-sm">
                No products found in this category.
             </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-lg border border-[#E8E8E8] p-3 flex flex-col relative transition-shadow hover:shadow-lg h-full">
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
        {product.isFast && (
          <div className="bg-gradient-to-r from-[#F44336] to-[#E91E63] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm flex items-center gap-1 shadow-sm">
            <Truck className="w-3 h-3 fill-white" strokeWidth={0} />
            <span className="italic tracking-wider uppercase">fast</span>
          </div>
        )}
      </div>

      {product.isSale && (
        <div className="absolute top-0 right-0 z-10">
            <div className="bg-[#E91E63] text-white text-[10px] font-bold px-1.5 py-1 rounded-bl-lg rounded-tr-lg shadow-sm leading-none flex flex-col items-center justify-center min-w-[36px] min-h-[36px]">
                <span>12.12</span>
                <span>SALE</span>
            </div>
        </div>
      )}

      <div className="relative w-full aspect-[1/1] mb-3 bg-[#F9F9F9] rounded-md overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-2 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="mb-2">
        {product.rating ? (
          <div className="flex items-center gap-1 bg-[#F5F5F5] rounded-full px-2 py-0.5 w-fit">
            <Star className="w-2.5 h-2.5 fill-[#FFC107] text-[#FFC107]" />
            <span className="text-[10px] font-medium text-[#2C3E50]">
              {product.rating} <span className="text-[#999999] ml-0.5">{product.reviews} Reviews</span>
            </span>
          </div>
        ) : (
          <div className="h-[21px]" />
        )}
      </div>

      <h3 className="text-[14px] leading-[1.4] font-semibold text-[#2C3E50] mb-2 line-clamp-2 min-h-[40px] group-hover:text-[#1E88E5] transition-colors">
        {product.name}
      </h3>

      <div className="mt-auto">
        <div className="text-[18px] font-bold text-[#2C3E50] leading-none mb-1">
          <sup className="text-[12px] font-semibold mr-0.5">Rs</sup>
          {product.price.toLocaleString()}
        </div>
        
        <div className="flex items-center justify-between text-[12px]">
          <div className="text-[#999999] line-through decoration-red-500/60 decoration-1">
            <sup className="text-[10px]">Rs</sup>
            {product.originalPrice.toLocaleString()}
          </div>
          <div className="text-[#1ABC9C] bg-[#E0F2F1] px-1.5 py-0.5 rounded text-[10px] font-bold">
            {product.discountPercentage}% OFF
          </div>
        </div>
      </div>
    </div>
  );
}