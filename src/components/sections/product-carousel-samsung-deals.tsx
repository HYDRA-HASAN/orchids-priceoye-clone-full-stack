"use client";

import React from 'react';
import Image from 'next/image';
import { Star, Truck } from 'lucide-react';

export default function SamsungDealsSection() {
  const products = [
    {
      id: 1,
      name: "Samsung Galaxy Tab S9 FE Plus (WiFi)",
      image: "https://images.priceoye.pk/samsung-galaxy-tab-s9-fe-plus-wifi-pakistan-priceoye-7925i-270x270.jpg",
      rating: "5.0",
      reviews: "1 Reviews",
      price: "141,999",
      originalPrice: "169,000",
      discount: "16% OFF",
      type: "tablet",
      isFast: true,
      hasSaleBadge: true,
    },
    {
      id: 2,
      name: "Samsung EP-T4510 45W 3 Pin Power Adapter",
      image: "https://images.priceoye.pk/samsung-45w-power-adapter-ep-t4510-pakistan-priceoye-cw621-270x270.jpg",
      rating: "4.9",
      reviews: "168 Reviews",
      price: "4,649",
      originalPrice: "8,500",
      discount: "45% OFF",
      type: "charger",
      isFast: true,
      hasSaleBadge: true,
    },
    {
      id: 3,
      name: "Samsung Watch 6 40mm",
      image: "https://images.priceoye.pk/samsung-galaxy-watch-6-40mm-pakistan-priceoye-0l88q-270x270.jpg",
      rating: "5.0",
      reviews: "2 Reviews",
      price: "61,999",
      originalPrice: "109,999",
      discount: "44% OFF",
      type: "watch",
      isFast: true,
      hasSaleBadge: true,
    },
    {
      id: 4,
      name: "Samsung Galaxy Tab S6 Lite WiFi (2022)",
      image: "https://images.priceoye.pk/samsung-galaxy-tab-s6-lite-2022-octa-core-pakistan-priceoye-l6j0h-270x270.jpg",
      rating: "5.0",
      reviews: "4 Reviews",
      price: "99,999",
      originalPrice: "130,000",
      discount: "23% OFF",
      type: "tablet",
      isFast: false,
      hasSaleBadge: true,
    },
    {
      id: 5,
      name: "Samsung Watch 6 44mm",
      image: "https://images.priceoye.pk/samsung-galaxy-watch-6-44mm-pakistan-priceoye-w627u-270x270.jpg",
      rating: "4.8",
      reviews: "11 Reviews",
      price: "68,999",
      originalPrice: "149,999",
      discount: "54% OFF",
      type: "watch",
      isFast: true,
      hasSaleBadge: true,
    },
    {
      id: 6,
      name: "Samsung Galaxy S23 FE",
      image: "https://images.priceoye.pk/samsung-galaxy-s23-fe-pakistan-priceoye-64j5u-270x270.jpg",
      rating: "4.8",
      reviews: "11 Reviews",
      price: "184,999",
      originalPrice: "218,999",
      discount: "15% OFF",
      type: "mobile",
      isFast: true,
      hasSaleBadge: true,
    },
    {
      id: 7,
      name: "Samsung Galaxy A14",
      image: "https://images.priceoye.pk/samsung-galaxy-a14-pakistan-priceoye-3j7j6-270x270.jpg",
      rating: "4.7",
      reviews: "89 Reviews",
      price: "48,999",
      originalPrice: "54,999",
      discount: "11% OFF",
      type: "mobile",
      isFast: false,
      hasSaleBadge: true,
    },
    {
      id: 8,
      name: "Samsung Galaxy Buds 2 Pro",
      image: "https://images.priceoye.pk/samsung-galaxy-buds-2-pro-pakistan-priceoye-th42l-270x270.jpg",
      rating: "4.9",
      reviews: "23 Reviews",
      price: "10,499",
      originalPrice: "43,999",
      discount: "76% OFF",
      type: "earbuds",
      isFast: false,
      hasSaleBadge: true,
    },
    {
      id: 9,
      name: "Samsung 25W PD Adapter (USB-C)",
      image: "https://images.priceoye.pk/samsung-25w-pd-adapter-usb-c-pakistan-priceoye-3j7j6-270x270.jpg",
      rating: "5.0",
      reviews: "45 Reviews",
      price: "5,099",
      originalPrice: "7,999",
      discount: "36% OFF",
      type: "charger",
      isFast: true,
      hasSaleBadge: true,
    },
    {
      id: 10,
      name: "Samsung Galaxy A05",
      image: "https://images.priceoye.pk/samsung-galaxy-a05-pakistan-priceoye-3j7j6-270x270.jpg",
      rating: "4.6",
      reviews: "102 Reviews",
      price: "34,999",
      originalPrice: "39,999",
      discount: "12% OFF",
      type: "mobile",
      isFast: true,
      hasSaleBadge: true,
    },
  ];

  return (
    <section className="w-full bg-[#F5F5F5] py-8 sm:py-12">
      <div className="container mx-auto max-w-[1248px] px-4 font-sans sm:px-6">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-[20px] font-semibold leading-tight sm:text-[24px]">
            <span className="text-[#F44336]">Top Deals</span>{" "}
            <span className="text-[#2C3E50]">In Samsung</span>
          </h2>
        </div>

        {/* Product Grid/Carousel */}
        <div className="relative">
          <div className="flex snap-x snap-mandatory overflow-x-auto pb-4 scrollbar-hide sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:overflow-visible xl:pb-0">
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[180px] max-w-[220px] shrink-0 snap-start px-2 sm:min-w-0 sm:max-w-none sm:px-0"
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-[#E8E8E8] bg-white p-3 shadow-none transition-shadow hover:shadow-[0px_4px_12px_rgba(0,0,0,0.15)]">
                  {/* Badges */}
                  <div className="absolute left-0 top-0 z-10 flex w-full justify-between px-0">
                    {/* Fast Badge */}
                    {product.isFast && (
                      <div className="relative ml-2 mt-2">
                        <div className="flex h-[20px] items-center rounded-sm bg-[#F44336] px-1.5 slanted-badge">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-1 h-3 w-3 -skew-x-12 text-white"
                          >
                            <line x1="2" y1="12" x2="10" y2="12"></line>
                            <line x1="14" y1="12" x2="22" y2="12"></line>
                            <line x1="2" y1="16" x2="10" y2="16"></line>
                            <line x1="14" y1="16" x2="22" y2="16"></line>
                            <line x1="6" y1="8" x2="18" y2="8"></line>
                          </svg>
                          <span className="text-[11px] font-bold italic leading-none text-white">
                            fast
                          </span>
                        </div>
                        <style jsx>{`
                          .slanted-badge {
                            transform: skewX(-10deg);
                          }
                          .slanted-badge > * {
                            transform: skewX(10deg);
                          }
                        `}</style>
                      </div>
                    )}

                    {/* Sale Badge */}
                    {product.hasSaleBadge && (
                      <div className="absolute right-2 top-0 flex flex-col items-center overflow-hidden rounded-b-md shadow-sm">
                        <div className="bg-[#2C3E50] px-1.5 py-[2px]">
                          <span className="block text-[10px] font-bold leading-none text-white">
                            12.12
                          </span>
                        </div>
                        <div className="w-full bg-[#E91E63] px-1.5 py-[2px] text-center">
                          <span className="block text-[10px] font-bold leading-none text-white">
                            SALE
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Image Area */}
                  <div className="relative mb-2 mt-6 flex min-h-[140px] items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      width={160}
                      height={160}
                      className="h-auto max-h-[140px] w-auto max-w-[160px] object-contain text-transparent"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='12' fill='%23999' text-anchor='middle' dy='.3em'%3EProduct Image%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>

                  {/* Content Area */}
                  <div className="flex grow flex-col">
                    {/* Rating */}
                    <div className="mb-1 flex items-center space-x-1">
                      <svg
                        className="h-3 w-3 fill-[#FFC107] text-[#FFC107]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-[11px] font-medium text-[#2C3E50]">
                        {product.rating}
                        <span className="ml-1 text-[#999999] font-normal">
                           {product.reviews}
                        </span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 line-clamp-2 min-h-[40px] text-[13px] font-semibold leading-[1.4] text-[#2C3E50]">
                      {product.name}
                    </h3>

                    {/* Price Section */}
                    <div className="mt-auto">
                      <div className="text-[18px] font-bold leading-tight text-[#2C3E50]">
                        <span className="text-[12px] font-bold align-top">
                          Rs
                        </span>{" "}
                        {product.price}
                      </div>

                      <div className="mt-1 flex items-center space-x-2">
                        <span className="text-[12px] text-[#999999] line-through decoration-1">
                          Rs {product.originalPrice}
                        </span>
                        <span className="text-[12px] font-semibold text-[#4CAF50]">
                          {product.discount}
                        </span>
                      </div>
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