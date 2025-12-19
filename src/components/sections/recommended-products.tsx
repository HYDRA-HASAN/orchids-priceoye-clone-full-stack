import Image from "next/image";

export default function RecommendedProducts() {
  const products = [
    {
      id: 1,
      title: "Sovo Dynamo-X 22.5W 20000mAh Power Bank SPB-...",
      image: "https://images.unsplash.com/photo-1609091839311-d536819bc248?w=400&q=80",
      rating: "5.0",
      reviews: "4",
      price: "4,199",
      originalPrice: "7,999",
      discount: "47% OFF",
      category: "Power Bank",
      fastDelivery: true,
      saleBadge: false,
    },
    {
      id: 2,
      title: "Amazon Echo Buds",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80",
      rating: "4.8",
      reviews: "12",
      price: "23,899",
      originalPrice: "38,000",
      discount: "37% OFF",
      category: "Earbuds",
      fastDelivery: false,
      saleBadge: false,
    },
    {
      id: 3,
      title: "Oppo A3x",
      image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400&q=80",
      rating: "4.9",
      reviews: "30",
      price: "25,500",
      originalPrice: "28,000",
      discount: "9% OFF",
      category: "Mobile",
      fastDelivery: true,
      saleBadge: true,
    },
    {
      id: 4,
      title: "Google Pixel Watch 2",
      image: "https://images.unsplash.com/photo-1508685096489-7aac291ba59e?w=400&q=80",
      rating: "5.0",
      reviews: "2",
      price: "78,299",
      originalPrice: "120,000",
      discount: "35% OFF",
      category: "Smart Watch",
      fastDelivery: true,
      saleBadge: false,
    },
    {
      id: 5,
      title: "Airox E5 Wireless Earbuds",
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&q=80",
      rating: "4.7",
      reviews: "8",
      price: "2,599",
      originalPrice: "4,900",
      discount: "47% OFF",
      category: "Earbuds",
      fastDelivery: false,
      saleBadge: false,
    },
    {
      id: 6,
      title: "Airox PB10 Power Bank 27000mAh",
      image: "https://images.unsplash.com/photo-1625517431475-49d97d75605f?w=400&q=80",
      rating: "5.0",
      reviews: "5",
      price: "4,699",
      originalPrice: "6,999",
      discount: "33% OFF",
      category: "Power Bank",
      fastDelivery: true,
      saleBadge: false,
    },
    {
      id: 7,
      title: "Zero Caliber Pro All-Metal Appearance",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
      rating: "4.8",
      reviews: "8",
      price: "6,999",
      originalPrice: "11,500",
      discount: "60% OFF",
      category: "Smart Watch",
      fastDelivery: false,
      saleBadge: false,
    },
    {
      id: 8,
      title: "Itel City 100",
      image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=400&q=80",
      rating: "4.5",
      reviews: "19",
      price: "23,999",
      originalPrice: "26,999",
      discount: "11% OFF",
      category: "Mobile",
      fastDelivery: true,
      saleBadge: true,
    },
    {
      id: 9,
      title: "Nothing Buds Pro 2",
      image: "https://images.unsplash.com/photo-1631867675167-90a456a9099d?w=400&q=80",
      rating: "4.9",
      reviews: "25",
      price: "16,499",
      originalPrice: "20,000",
      discount: "18% OFF",
      category: "Earbuds",
      fastDelivery: true,
      saleBadge: false,
    },
    {
      id: 10,
      title: "Oneplus Bullets Wireless Z2 Neckband",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80",
      rating: "5.0",
      reviews: "156",
      price: "6,799",
      originalPrice: "8,999",
      discount: "24% OFF",
      category: "Earphones",
      fastDelivery: true,
      saleBadge: false,
    },
  ];

  return (
    <section className="bg-white py-8 w-full animate-fadeIn">
      <div className="container mx-auto px-4 md:px-6 max-w-[1248px]">
        <h2 className="text-[20px] md:text-[22px] font-semibold text-[#2C3E50] mb-6 text-left">
          Recommended Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white border border-[#E8E8E8] rounded-lg p-3 hover:shadow-xl hover:border-[#1E88E5]/20 transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              {/* Badges */}
              <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                {product.fastDelivery && (
                  <div className="bg-red-50 border border-red-100 rounded px-1.5 py-0.5 flex items-center gap-1">
                    <span className="text-[10px] font-bold text-[#F44336] italic leading-none">
                      fast
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-3 h-3 text-[#F44336]"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {product.saleBadge && (
                <div className="absolute top-0 right-0 z-10">
                   <div className="bg-[#2a0e4b] text-white text-[10px] font-bold px-1.5 py-1 rounded-bl-lg rounded-tr-lg leading-tight text-center">
                    <div>12.12</div>
                    <div className="text-[8px] text-[#E91E63]">SALE</div>
                  </div>
                </div>
              )}

                {/* Product Image */}
                <div className="relative w-full aspect-square bg-[#F9F9F9] rounded mb-3 flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
                    className="object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                 {/* Rating */}
                 <div className="flex items-center gap-1 mb-1.5 bg-[#F5F5F5] w-fit px-1.5 py-0.5 rounded-full">
                  <svg
                    className="w-2.5 h-2.5 text-[#FFC107] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-[10px] text-[#2C3E50] font-medium leading-none mt-[1px]">
                    {product.rating} <span className="text-[#737373] font-normal">{product.reviews} Reviews</span>
                  </span>
                </div>

                <h3 className="text-[13px] md:text-[14px] font-semibold text-[#2C3E50] leading-[1.4] mb-2 line-clamp-2 min-h-[2.8em] group-hover:text-[#1E88E5] transition-colors">
                  {product.title}
                </h3>

                <div className="mt-auto">
                    <div className="text-[16px] md:text-[18px] font-bold text-[#2C3E50] leading-tight">
                        <span className="text-[12px] align-top relative top-0.5 mr-0.5">Rs</span>
                        {product.price}
                    </div>
                    
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-[11px] md:text-[12px] text-[#999999] line-through decoration-1">
                        Rs {product.originalPrice}
                        </span>
                        <span className="text-[10px] md:text-[11px] font-semibold text-[#4CAF50] bg-[#E8F5E9] px-1 rounded">
                        {product.discount}
                        </span>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
             <button className="px-6 py-2.5 text-[14px] font-semibold text-[#1E88E5] border border-[#1E88E5] rounded hover:bg-[#F0F7FF] transition-all duration-300">
                Load More
             </button>
        </div>
      </div>
    </section>
  );
}