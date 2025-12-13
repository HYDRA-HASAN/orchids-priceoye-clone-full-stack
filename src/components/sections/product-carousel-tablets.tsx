import React from 'react';
import Image from 'next/image';

export default function ProductCarouselTablets() {
  const products = [
    // Column 1
    {
      id: 1,
      title: "Huawei MatePad SE 11-Inch Tablet",
      price: "54,399",
      originalPrice: "70,000",
      discount: "22% OFF",
      rating: 4.7,
      reviews: 5,
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
    },
    {
      id: 6,
      title: "Itel Vista Tab 10 Mini",
      price: "24,849",
      originalPrice: "29,999",
      discount: "17% OFF",
      rating: 5.0,
      reviews: 2,
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
    },
    // Column 2
    {
      id: 2,
      title: "Samsung Galaxy A11 Wifi Tab (1 Year Brand Warranty)",
      price: "43,549",
      originalPrice: "48,000",
      discount: "10% OFF",
      rating: 5.0,
      reviews: 1,
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
    },
    {
      id: 7,
      title: "Samsung Galaxy Tab A9 With Sim (X115)",
      price: "36,599",
      originalPrice: "50,000",
      discount: "27% OFF",
      rating: 4.8,
      reviews: 12,
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
    },
    // Column 3
    {
      id: 3,
      title: "Tecno MegaPad 10",
      price: "35,799",
      originalPrice: "44,999",
      discount: "20% OFF",
      rating: 5.0,
      reviews: 2,
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
    },
    {
      id: 8,
      title: "Xiaomi Pad 7",
      price: "105,999",
      originalPrice: "123,999",
      discount: "15% OFF",
      rating: 5.0,
      reviews: 1,
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
    },
    // Column 4
    {
      id: 4,
      title: "Amiyo A58 Kids Learning Tablet",
      price: "13,999",
      originalPrice: "28,000",
      discount: "50% OFF",
      rating: 4.0,
      reviews: 15,
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
    },
    {
      id: 9,
      title: "Xiaomi Redmi Pad 2 8/256 4GB",
      price: "56,999",
      originalPrice: "79,999",
      discount: "29% OFF",
      rating: 5.0,
      reviews: 6,
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
    },
    // Column 5
    {
      id: 5,
      title: "Apple iPad 10.9 (10th Gen)",
      price: "99,399",
      originalPrice: "110,000",
      discount: "9% OFF",
      rating: 4.9,
      reviews: 25,
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
    },
    {
      id: 10,
      title: "Apple iPad Pro 11 Chip",
      price: "348,999",
      originalPrice: "380,999",
      discount: "8% OFF",
      rating: 5.0,
      reviews: 1,
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
    },
  ];

  return (
    <section className="w-full bg-[#FF9800] py-12 font-sans relative">
      <div className="container mx-auto px-4 md:px-6 relative group">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[22px] md:text-[28px] font-semibold text-white tracking-tight">
            Latest Tablets
          </h2>
          <button className="hidden md:inline-flex items-center justify-center bg-white text-[#FF9800] text-sm font-semibold px-4 py-2 rounded shadow-sm hover:bg-gray-50 transition-colors">
            View All
          </button>
        </div>

        {/* Navigation Buttons (Visual only as native scroll is used) */}
        <div className="absolute top-1/2 -left-4 z-10 hidden md:block">
           <div className="bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-gray-50 text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-1/2">
             <ChevronLeftIcon className="w-6 h-6" />
           </div>
        </div>
        <div className="absolute top-1/2 -right-4 z-10 hidden md:block">
           <div className="bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-gray-50 text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-1/2">
             <ChevronRightIcon className="w-6 h-6" />
           </div>
        </div>

        {/* Scroll Container */}
        <div className="flex overflow-x-auto gap-4 md:gap-3 pb-4 snap-x md:snap-none scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {/* This grid layout forces the 2-row column-flow structure seen in the screenshot */}
          <div className="grid grid-rows-2 grid-flow-col gap-4 md:gap-3 min-w-max">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-4 flex justify-center md:hidden">
             <button className="bg-white text-[#FF9800] text-sm font-semibold px-6 py-2.5 rounded shadow-sm hover:bg-gray-50 transition-colors w-full max-w-xs">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: any }) {
  return (
    <div className="bg-white rounded-lg p-3 w-[160px] md:w-[220px] h-full flex flex-col relative border border-transparent hover:shadow-lg transition-shadow duration-300 snap-center">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10">
        <div className="bg-[#F44336] text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5 italic shadow-sm">
           <span className="transform -skew-x-12">fast</span>
        </div>
      </div>
      <div className="absolute top-3 right-3 z-10">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">
          12.12 SALE
        </div>
      </div>

      {/* Image */}
      <div className="relative w-full aspect-[4/3] mb-2 bg-[#f9f9f9] rounded-md overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain hover:scale-105 transition-transform duration-300 p-2"
          sizes="(max-width: 768px) 160px, 220px"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
           {/* Rating */}
            <div className="flex items-center gap-1 mb-1.5 min-h-[16px]">
            {product.reviews > 0 && (
                <>
                <StarIcon className="w-3 h-3 text-[#FFC107] fill-[#FFC107]" />
                <span className="text-[11px] text-[#2C3E50]">{product.rating}</span>
                <span className="text-[10px] text-[#999999] ml-0.5">
                    ({product.reviews} Reviews)
                </span>
                </>
            )}
            </div>

            {/* Title */}
            <h3 className="text-[13px] md:text-[14px] font-semibold text-[#2C3E50] leading-tight mb-2 line-clamp-2 min-h-[2.5em]">
            {product.title}
            </h3>
        </div>

        {/* Price Section */}
        <div className="mt-auto">
          <div className="text-[16px] md:text-[18px] font-bold text-[#2C3E50] leading-none mb-1">
            <span className="text-[12px] align-top mr-0.5">Rs</span>
            {product.price}
          </div>
          <div className="flex items-center gap-2">
            <div className="text-[11px] md:text-[12px] text-[#999999] line-through decoration-1">
              <span className="text-[9px] align-top mr-0.5">Rs</span>
              {product.originalPrice}
            </div>
            <div className="text-[11px] md:text-[12px] text-[#4CAF50] font-medium bg-[#4CAF50]/10 px-1 rounded-sm">
              {product.discount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple Icons to replace external deps if needed, matching Lucide
function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}