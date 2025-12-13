export default function ProductCarouselAirPurifiers() {
  return (
    <section className="bg-[#FF9800] py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-6 text-white">
          <h2 className="text-[22px] md:text-[28px] font-semibold leading-tight">
            Latest Air Purifiers
          </h2>
          <Link
            href="#"
            className="bg-white text-[#2C3E50] text-sm font-semibold py-2 px-4 rounded hover:bg-gray-100 transition-colors"
          >
            View All
          </Link>
        </div>

        {/* Scrollable Grid Container */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar scroll-smooth">
          <div
            className="grid grid-rows-2 grid-flow-col gap-3 md:gap-4 w-max"
            style={{
              // Explicitly defining template to ensure 2 rows
              gridTemplateRows: 'repeat(2, min-content)',
            }}
          >
            {AIR_PURIFIERS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// -- Components --

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative bg-white rounded-lg p-3 w-[240px] md:w-[280px] h-full shadow-[0px_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0px_4px_12px_rgba(0,0,0,0.15)] transition-shadow duration-200 border border-transparent hover:border-gray-200 flex flex-col justify-between">
      {/* Badges */}
      <div className="absolute top-3 left-0 z-10">
        <div className="bg-[#F44336] text-white text-[10px] font-bold px-2 py-0.5 rounded-r-full shadow-sm italic flex items-center gap-1">
          <TruckIcon className="w-3 h-3 fill-white" />
          <span>fast</span>
        </div>
      </div>

      <div className="absolute top-3 right-3 z-10 flex flex-col items-end gap-1">
        <div className="bg-gradient-to-r from-[#8e44ad] to-[#E91E63] text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm leading-tight text-center">
          <span className="block text-[8px] leading-tight opacity-90">12.12</span>
          <span className="block leading-tight">SALE</span>
        </div>
      </div>

      <Link href="#" className="block flex-1">
        {/* Image Area */}
        <div className="relative w-full aspect-[4/3] mb-2 flex items-center justify-center bg-[#f9f9f9] rounded-md overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content Area */}
        <div className="space-y-1">
          {/* Rating */}
          {product.rating > 0 && (
            <div className="flex items-center gap-1 mb-1 bg-[#FBFBFB] w-fit px-1.5 py-0.5 rounded text-[10px] text-[#2C3E50]">
              <Star className="w-2.5 h-2.5 fill-[#FFC107] text-[#FFC107]" />
              <span className="font-semibold">{product.rating.toFixed(1)}</span>
              <span className="text-[#999999] font-normal">
                {product.reviews} Reviews
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-[14px] font-semibold text-[#2C3E50] leading-snug line-clamp-2 h-[42px]">
            {product.name}
          </h3>

          {/* Price Section */}
          <div className="pt-1">
            <div className="text-[18px] font-bold text-[#2C3E50] leading-tight">
              <span className="text-xs align-top mr-0.5 font-semibold">Rs</span>
              {product.price.toLocaleString()}
            </div>
            
            {(product.originalPrice > product.price) && (
              <div className="flex items-center gap-2 mt-0.5 text-[12px]">
                <span className="text-[#999999] line-through decoration-1 decoration-[#999999]">
                  <span className="text-[10px] mr-0.5">Rs</span>
                  {product.originalPrice.toLocaleString()}
                </span>
                <span className="text-[#1ABC9C] bg-[#1ABC9C]/10 px-1 rounded text-[10px] font-semibold">
                  {product.discount}% OFF
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

// -- Icons --

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 3h15v13h-3.238a3.001 3.001 0 0 0-5.524 0H4V3zm16 5V3h4v3h-4zm0 2h4v3h-4v-3zM5.5 16a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
      <path d="M22 13h-4v-2h5v4.615c0 .325-.054.646-.158.949-.57 2.083-2.616 3.436-4.842 2.936v-1.12c1.332 0 2.45-.884 2.809-2.093.036-.123.056-.251.056-.379a1.503 1.503 0 0 0-1.5-1.5c-1.222 0-2.228.847-2.455 1.983L17 17h-3.238A3.001 3.001 0 0 1 12.5 16H1v-3H0V2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2h5v9z" fillOpacity="0" stroke="none"/>
    </svg>
  );
}

// -- Types & Data --

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
}

const AIR_PURIFIERS: Product[] = [
  {
    id: '1',
    name: 'Infinix Air Purifier XAP02',
    price: 36499,
    originalPrice: 50000,
    discount: 27,
    rating: 5.0,
    reviews: 2,
    image: 'https://placehold.co/200x200/png?text=Infinix+XAP02',
  },
  {
    id: '2',
    name: 'Xiaomi Smart Air Purifier 4 Lite',
    price: 48999,
    originalPrice: 65000,
    discount: 25,
    rating: 5.0,
    reviews: 4,
    image: 'https://placehold.co/200x200/png?text=Xiaomi+4+Lite',
  },
  {
    id: '3',
    name: 'Xiaomi Smart Air Purifier Elite',
    price: 107999,
    originalPrice: 114999,
    discount: 6,
    rating: 5.0,
    reviews: 1,
    image: 'https://placehold.co/200x200/png?text=Xiaomi+Elite',
  },
  {
    id: '4',
    name: 'Beurer Air Purifier (LR310)',
    price: 77999,
    originalPrice: 85000,
    discount: 8,
    rating: 4.8,
    reviews: 8,
    image: 'https://placehold.co/200x200/png?text=Beurer+LR310',
  },
  {
    id: '5',
    name: 'Air Dehumidifier',
    price: 114499,
    originalPrice: 120000,
    discount: 5,
    rating: 4.5,
    reviews: 2,
    image: 'https://placehold.co/200x200/png?text=Dehumidifier',
  },
  {
    id: '6',
    name: 'Xiaomi Smart Air Purifier 4',
    price: 57999,
    originalPrice: 70000,
    discount: 17,
    rating: 5.0,
    reviews: 2,
    image: 'https://placehold.co/200x200/png?text=Xiaomi+4',
  },
  {
    id: '7',
    name: 'Xiaomi Smart Air Purifier 4 Compact',
    price: 35999,
    originalPrice: 40000,
    discount: 10,
    rating: 5.0,
    reviews: 2,
    image: 'https://placehold.co/200x200/png?text=Xiaomi+Compact',
  },
  {
    id: '8',
    name: 'Beurer Air Purifier (LR210)',
    price: 47999,
    originalPrice: 50000,
    discount: 4,
    rating: 4.5,
    reviews: 1,
    image: 'https://placehold.co/200x200/png?text=Beurer+LR210',
  },
  {
    id: '9',
    name: 'Beurer Air Purifier (LR401)',
    price: 97999,
    originalPrice: 105000,
    discount: 7,
    rating: 5.0,
    reviews: 1,
    image: 'https://placehold.co/200x200/png?text=Beurer+LR401',
  },
  {
    id: '10',
    name: 'Xiaomi Smart Air Purifier Filter Pro',
    price: 10799,
    originalPrice: 12000,
    discount: 10,
    rating: 5.0,
    reviews: 3,
    image: 'https://placehold.co/200x200/png?text=Filter+Pro',
  },
];