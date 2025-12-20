export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[]; // use array for multiple images
  category?: string;
}

'use client';

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];  // <-- now it's an array
  category?: string;
}

interface BestSellerShowcaseProps {
  products: Product[];
}

interface ProductCardProps extends Product {
  className?: string;
  imageAspect?: string;
  heightClass?: string;
  onAddToCart: () => void;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  images,          // <-- use images array
  className,
  imageAspect = "aspect-[3/4]",
  heightClass = "h-full",
  onAddToCart,
}: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className={cn("group relative", heightClass)}>
      <div className={cn(
          "bg-white rounded-[8px] p-4 flex flex-col h-full border border-gray-100 hover:shadow-lg hover:border-transparent transition-all duration-300 ease-in-out relative overflow-hidden",
          className
        )}
      >
        {discount > 0 && (
          <div className="absolute top-0 right-0 z-10 flex flex-col">
            <div className="bg-[#E91E63] text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg shadow-sm leading-tight text-center min-w-[40px]">
              <div className="text-[11px]">{discount}%</div>
              <div className="text-[9px] uppercase">OFF</div>
            </div>
          </div>
        )}

        <Link href={`/product/${id}`}>
          <h4 className="text-[14px] font-semibold text-[#2C3E50] mb-2 z-10 line-clamp-2 leading-[1.4] group-hover:text-[#1E88E5] transition-colors">
            {name}
          </h4>
        </Link>

        <Link
          href={`/product/${id}`}
          className={cn(
            "relative w-full flex-1 flex items-center justify-center mb-4 bg-gray-50/50 rounded-md overflow-hidden block",
            imageAspect
          )}
        >
          <div className="w-full h-full flex items-center justify-center text-gray-300">
            <Image
              src={images[0]}        // <-- use first image from array
              alt={name}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              loading="lazy"
              className="object-contain p-4 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>

        <div className="mt-auto space-y-2">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-[#FFC107] fill-[#FFC107]" />
            <span className="text-[12px] font-semibold text-[#2C3E50]">4.5</span>
            <span className="text-[12px] text-[#999999] font-normal">(24 Reviews)</span>
          </div>

          <div className="flex items-end justify-between w-full">
            <div className="flex flex-col">
              <span className="text-[18px] font-bold text-[#2C3E50] leading-none mb-1">
                <span className="text-[12px] align-top mr-0.5">Rs</span>
                {price.toLocaleString()}
              </span>
              {originalPrice && (
                <span className="text-[12px] text-[#999999] line-through font-normal">
                  <span className="text-[10px] align-top mr-0.5">Rs</span>
                  {originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={(e) => { e.preventDefault(); onAddToCart(); }}
            className="w-full bg-[#1E88E5] text-white py-2 rounded-md hover:bg-[#1565C0] transition-colors flex items-center justify-center gap-2 text-sm font-semibold"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default function BestSellerShowcase({ products }: BestSellerShowcaseProps) {
  const { addToCart } = useCart();

  if (!products || products.length === 0) return <div className="p-4 text-center">No products found.</div>;

  const FEATURED_PRODUCT = products[0];
  const GRID_PRODUCTS = products.slice(1, 5);

  const handleAddToCart = (product: Product) => {
    addToCart({ id: product.id, name: product.name, price: product.price, image: product.images[0] });
  };

  return (
    <section className="bg-[#f5f5f5] py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-[1248px]">
        <div className="text-center mb-8 space-y-1">
          <h2 className="text-[24px] lg:text-[28px] font-semibold text-[#2C3E50]">Best Seller</h2>
          <p className="text-[14px] text-[#737373]">Get the best prices in town</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-[650px] items-stretch">
          <div className="lg:col-span-1 h-auto lg:h-full">
            <ProductCard {...FEATURED_PRODUCT} heightClass="h-full" imageAspect="aspect-[4/5] lg:aspect-auto lg:h-[60%]" className="lg:p-6" onAddToCart={() => handleAddToCart(FEATURED_PRODUCT)} />
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4 h-auto lg:h-full">
            {GRID_PRODUCTS.map(product => (
              <ProductCard key={product.id} {...product} heightClass="h-auto" imageAspect="aspect-[1/1]" onAddToCart={() => handleAddToCart(product)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
