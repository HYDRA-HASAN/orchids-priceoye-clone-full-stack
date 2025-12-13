export default function ProductCarouselNewArrivals() {
  const products = [
    {
      id: 1,
      name: 'VIVO V50 Lite',
      price: 65999,
      originalPrice: 79999,
      rating: 5.0,
      reviews: 2,
      discount: 18,
      isFast: true,
      isOnSale: true,
    },
    {
      id: 2,
      name: 'ZTE Blade A35e',
      price: 13999,
      originalPrice: 16999,
      rating: 4.5,
      reviews: 2,
      discount: 18,
      isFast: true,
      isOnSale: true,
    },
    {
      id: 3,
      name: 'Ronin R-7050 Eminence Wireless Earbuds',
      price: 5099,
      originalPrice: 7500,
      rating: 4.5,
      reviews: 3,
      discount: 32,
      isFast: true,
      isOnSale: true,
    },
    {
      id: 4,
      name: 'Lenovo Tab M11 (K11)',
      price: 40999,
      originalPrice: 59999,
      rating: 5.0,
      reviews: 2,
      discount: 32,
      isFast: true,
      isOnSale: false,
    },
  ];

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
        
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-[22px] md:text-[28px] font-semibold leading-tight text-[#2C3E50]">
            <span className="text-[#F44336] mr-1.5">New</span>
            Arrivals
          </h2>
        </div>

        {/* Product Grid / Carousel */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-6 -mx-4 px-4 space-x-4 md:grid md:grid-cols-4 md:space-x-0 md:gap-4 md:overflow-visible md:pb-0 scrollbar-hide snap-x snap-mandatory">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative flex-shrink-0 w-[240px] md:w-auto flex flex-col rounded-lg border border-[#E8E8E8] bg-white p-3 transition-shadow duration-200 hover:shadow-[0px_4px_12px_rgba(0,0,0,0.15)] snap-start"
              >
                {/* Badges */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
                  {product.isFast && (
                    <div className="relative h-5">
                      {/* CSS-only approximation of the 'fast' logo */}
                      <div className="flex items-center">
                        <span className="text-sm font-bold italic text-[#F44336] bg-red-50 px-1 rounded-sm border border-red-100/50">
                          fast
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {product.isOnSale && (
                  <div className="absolute top-0 right-0 z-10">
                     <div className="bg-[#5B2D92] text-white text-[10px] font-bold px-1.5 py-1 rounded-bl-lg rounded-tr-lg leading-none flex flex-col items-center justify-center h-[38px] w-[34px]">
                        <span>12.12</span>
                        <span>SALE</span>
                     </div>
                  </div>
                )}

                {/* Product Image Placeholder */}
                <div className="relative mb-3 flex h-[180px] w-full items-center justify-center bg-[#F9F9F9] rounded-md overflow-hidden">
                    <div className="text-gray-300">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                    </div>
                </div>

                {/* Rating */}
                <div className="mb-1 flex items-center space-x-1 text-xs">
                    <div className="flex items-center text-[#FFC107]">
                         <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-3 w-3"
                          >
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                    </div>
                  <span className="font-medium text-[#2C3E50]">{product.rating}</span>
                  <span className="text-[#999999]">{product.reviews} Reviews</span>
                </div>

                {/* Product Name */}
                <h3 className="mb-2 text-[14px] font-semibold leading-snug text-[#2C3E50] line-clamp-2 min-h-[42px]">
                  {product.name}
                </h3>

                {/* Price Section */}
                <div className="mt-auto">
                  <div className="text-[18px] font-bold leading-none text-[#2C3E50]">
                    <span className="text-sm align-top mr-0.5">Rs</span>
                    {product.price.toLocaleString()}
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-[12px] text-[#999999] line-through decoration-[#999999]">
                      <span className="text-[10px] align-top mr-0.5">Rs</span>
                      {product.originalPrice.toLocaleString()}
                    </span>
                    <span className="px-1.5 py-0.5 text-[10px] sm:text-[11px] font-medium text-[#1ABC9C] bg-[#E0F7F3] rounded-full">
                      {product.discount}% OFF
                    </span>
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