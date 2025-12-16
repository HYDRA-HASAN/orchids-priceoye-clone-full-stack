export default function LowestPricesSection() {
  const products = [
    {
      id: 1,
      title: "Sony ULT Field 3 SRS-ULT30 Wireless Portable Bluetooth...",
      price: 56979,
      originalPrice: 80000,
      discount: 29,
      rating: 5.0,
      reviews: 2,
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg", // Placeholder
      type: "speaker",
    },
    {
      id: 2,
      title: "ORAIMO SpaceBox Pro Portable Bluetooth Speaker...",
      price: 22499,
      originalPrice: 44000,
      discount: 49,
      rating: 4.8,
      reviews: 8,
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
      type: "speaker",
    },
    {
      id: 3,
      title: "Vivo X Fold 3",
      price: 539999,
      originalPrice: 600000,
      discount: 10,
      rating: 5.0,
      reviews: 1,
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
      type: "phone",
    },
    {
      id: 4,
      title: "Nothing CMF-Headphone 1",
      price: 67999,
      originalPrice: 90000,
      discount: 24,
      rating: 4.5,
      reviews: 12,
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
      type: "headphone",
    },
    {
      id: 5,
      title: "Samsung Watch 8 44mm",
      price: 68999,
      originalPrice: 150000,
      discount: 54,
      rating: 4.9,
      reviews: 24,
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
      type: "smartwatch",
    },
    {
      id: 6,
      title: "Sony WH-1000XM5 Wireless Headphones",
      price: 107999,
      originalPrice: 150000,
      discount: 28,
      rating: 4.9,
      reviews: 156,
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
      type: "headphone",
    },
    {
      id: 7,
      title: "Apple iPad Pro M4 Chip 13 Inches WiFi 2024 256GB...",
      price: 434999,
      originalPrice: 500000,
      discount: 13,
      rating: 5.0,
      reviews: 4,
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
      type: "tablet",
    },
    {
      id: 8,
      title: "Samsung Galaxy Tab S10 Lite WiFi X400 With One Year...",
      price: 99999,
      originalPrice: 130000,
      discount: 23,
      rating: 4.7,
      reviews: 18,
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
      type: "tablet",
    },
    {
      id: 9,
      title: "Samsung Galaxy S25 FE",
      price: 184999,
      originalPrice: 220000,
      discount: 16,
      rating: 4.8,
      reviews: 8,
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
      type: "phone",
    },
    {
      id: 10,
      title: "Huawei Watch GT5 Pro",
      price: 82999,
      originalPrice: 150000,
      discount: 45,
      rating: 4.6,
      reviews: 32,
      image: "https://static.priceoye.pk/images/placeholder-product-mobile.jpg",
      type: "smartwatch",
    },
  ];

  return (
    <section className="w-full bg-[#ffffff] py-8 sm:py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-[1248px]">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[20px] md:text-[28px] font-semibold leading-tight">
            <span className="text-[#F44336]">Lowest Prices</span>{" "}
            <span className="text-[#2C3E50]">of the Year</span>
          </h2>
          <button className="hidden sm:block text-[14px] font-semibold text-[#1E88E5] bg-white border border-[#1E88E5] px-4 py-2 rounded-[4px] hover:bg-[#F0F7FF] transition-colors">
            View All
          </button>
        </div>

        {/* Product Grid/Carousel */}
        <div className="relative w-full">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-4 pb-4 md:grid md:grid-cols-4 lg:grid-cols-5 md:pb-0 scrollbar-hide">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative flex-none w-[160px] xs:w-[180px] sm:w-[220px] md:w-auto snap-start bg-white border border-[#E8E8E8] rounded-[8px] p-3 hover:shadow-lg transition-shadow duration-200"
              >
                {/* Badges */}
                <div className="absolute top-0 left-0 z-10 flex flex-col items-start gap-1 p-0">
                  <div className="bg-[#F44336] text-white text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-br-[4px] rounded-tl-[8px] flex items-center gap-1">
                     <span className="italic">fast</span>
                  </div>
                </div>
                 
                 <div className="absolute top-0 right-0 z-10">
                    <div className="bg-[#E91E63] text-white text-[10px] font-bold px-1.5 py-1 rounded-bl-[4px] rounded-tr-[8px] leading-none text-center">
                        <span className="block text-[8px]">12.12</span>
                        <span>SALE</span>
                    </div>
                 </div>

                  {/* Product Image */}
                  <div className="relative w-full h-[140px] sm:h-[180px] mb-3 flex items-center justify-center bg-[#F9F9F9] rounded-[4px] overflow-hidden">
                    {product.type === 'phone' ? (
                      <img
                        src={`https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop`}
                        alt={product.title}
                        loading="lazy"
                        className="w-full h-full object-contain mix-blend-multiply p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        className="w-full h-full object-contain mix-blend-multiply p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>

                {/* Rating - Only visible if we assume standard card or if requested, often hidden on compact views but visible in screenshot */}
                <div className="flex items-center gap-1 mb-1.5">
                    <svg
                      className="w-3 h-3 text-[#FFC107] fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  <span className="text-[10px] sm:text-[11px] text-[#2C3E50] font-medium">
                    {product.rating} <span className="text-[#999999] font-normal">{product.reviews} Reviews</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[12px] sm:text-[14px] font-semibold text-[#2C3E50] leading-snug line-clamp-2 h-[34px] sm:h-[40px] mb-2">
                  {product.title}
                </h3>

                {/* Price Section */}
                <div className="flex flex-col gap-0.5">
                  <div className="text-[16px] sm:text-[18px] font-bold text-[#2C3E50] leading-tight">
                    <span className="text-[12px] sm:text-[14px] align-top relative top-0.5 mr-0.5">Rs</span>
                    {product.price.toLocaleString()}
                  </div>
                  
                  <div className="flex items-center justify-between mt-1">
                    <div className="text-[10px] sm:text-[12px] text-[#999999] line-through decoration-red-500/50">
                      <span className="text-[9px] sm:text-[10px] align-top mr-0.5">Rs</span>
                      {product.originalPrice.toLocaleString()}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-[#1E88E5] bg-[#F0F7FF] px-1.5 py-0.5 rounded-[2px] ml-auto">
                      {product.discount}% OFF
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 sm:hidden flex justify-center">
            <button className="text-[13px] font-semibold text-[#1E88E5] border border-[#1E88E5] px-6 py-2 rounded-[4px] hover:bg-[#F0F7FF] w-full max-w-[200px]">
                View All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}