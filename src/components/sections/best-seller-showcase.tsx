'use client';

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { products } from "@/lib/products-data";
import { useCart } from "@/lib/cart-context";

// Mock Data for the Best Seller Section
const FEATURED_PRODUCT = {
  id: "featured-1",
  title: "Tecno spark 40",
  currentPrice: "30,999",
  oldPrice: "33,999",
  discount: "9% OFF",
  rating: "4.8",
  reviews: "23 Reviews",
  badgeLabels: ["12.12", "SALE"],
  imageUrl: "https://placehold.co/400x500/transparent/2C3E50/png?text=Spark+40",
};

const GRID_PRODUCTS = [
  {
    id: "gp-1",
    title: "Realme Note 70",
    currentPrice: "26,999",
    oldPrice: "29,999",
    discount: "10% OFF",
    rating: "5.0",
    reviews: "8 Reviews",
    badgeLabels: ["12.12", "SALE"],
    imageUrl: "https://placehold.co/200x250/transparent/2C3E50/png?text=Realme+Note+70",
  },
  {
    id: "gp-2",
    title: "Samsung Galaxy A07",
    currentPrice: "23,999",
    oldPrice: "27,999",
    discount: "15% OFF",
    rating: "4.8",
    reviews: "52 Reviews",
    badgeLabels: ["12.12", "SALE"],
    imageUrl: "https://placehold.co/200x250/transparent/2C3E50/png?text=Samsung+A07",
  },
  {
    id: "gp-3",
    title: "Infinix Hot 60 Pro",
    currentPrice: "43,499",
    oldPrice: "47,999",
    discount: "9% OFF",
    rating: "4.5",
    reviews: "25 Reviews",
    badgeLabels: ["12.12", "SALE"],
    imageUrl: "https://placehold.co/200x250/transparent/2C3E50/png?text=Infinix+Hot+60",
  },
  {
    id: "gp-4",
    title: "Xiaomi Redmi A5",
    currentPrice: "19,999",
    oldPrice: "22,999",
    discount: "13% OFF",
    rating: "4.9",
    reviews: "62 Reviews",
    badgeLabels: ["12.12", "SALE"],
    imageUrl: "https://placehold.co/200x250/transparent/2C3E50/png?text=Redmi+A5",
  },
];

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
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
  image,
  className,
  imageAspect = "aspect-[3/4]",
  heightClass = "h-full",
  onAddToCart,
}: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  
  return (
    <div className={cn("group relative", heightClass)}>
      <div
        className={cn(
          "bg-white rounded-[8px] p-4 flex flex-col h-full border border-gray-100 hover:shadow-lg hover:border-transparent transition-all duration-300 ease-in-out relative overflow-hidden",
          className
        )}
      >
        {/* Sale Badge */}
        {badgeLabels && (
          <div className="absolute top-0 right-0 z-10 flex flex-col">
            <div className="bg-[#E91E63] text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg shadow-sm leading-tight text-center min-w-[40px]">
              <div className="text-[11px]">{badgeLabels[0]}</div>
              <div className="text-[9px] uppercase">{badgeLabels[1]}</div>
            </div>
          </div>
        )}

        {/* Product Title */}
        <h4 className="text-[14px] font-semibold text-[#2C3E50] mb-2 z-10 line-clamp-2 leading-[1.4] group-hover:text-[#1E88E5] transition-colors">
          {title}
        </h4>

        {/* Product Image */}
        <div
          className={cn(
            "relative w-full flex-1 flex items-center justify-center mb-4 bg-gray-50/50 rounded-md overflow-hidden",
            imageAspect
          )}
        >
          {/* Placeholder Fallback using generic div since assets are limited */}
          <div className="w-full h-full flex items-center justify-center text-gray-300">
             <Image 
                src={imageUrl} 
                alt={title}
                fill
                className="object-contain p-4 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
             />
          </div>
        </div>

        {/* Product Details (Rating & Price) */}
        <div className="mt-auto">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-3 h-3 text-[#FFC107] fill-[#FFC107]" />
            <span className="text-[12px] font-semibold text-[#2C3E50]">{rating}</span>
            <span className="text-[12px] text-[#999999] font-normal">{reviews}</span>
          </div>

          {/* Pricing */}
          <div className="flex items-end justify-between w-full">
            <div className="flex flex-col">
              <span className="text-[18px] font-bold text-[#2C3E50] leading-none mb-1">
                <span className="text-[12px] align-top mr-0.5">Rs</span>
                {currentPrice}
              </span>
              <span className="text-[12px] text-[#999999] line-through font-normal">
                <span className="text-[10px] align-top mr-0.5">Rs</span>
                {oldPrice}
              </span>
            </div>
            
            <div className="bg-green-50 px-2 py-0.5 rounded text-right">
               <span className="text-[12px] font-semibold text-[#4CAF50] block">
                 {discount}
               </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function BestSellerShowcase() {
  return (
    <section className="bg-[#f5f5f5] py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-[1248px]">
        {/* Section Header */}
        <div className="text-center mb-8 space-y-1">
          <h2 className="text-[24px] lg:text-[28px] font-semibold text-[#2C3E50]">
            Best Seller
          </h2>
          <p className="text-[14px] text-[#737373]">
            Get the best prices in town
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-[650px] items-stretch">
          {/* Large Featured Product (Left Side) */}
          <div className="lg:col-span-1 h-auto lg:h-full">
            <ProductCard
              {...FEATURED_PRODUCT}
              heightClass="h-full"
              imageAspect="aspect-[4/5] lg:aspect-auto lg:h-[60%]"
              className="lg:p-6"
            />
          </div>

          {/* Grid Products (Right Side) */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 h-auto lg:h-full">
            {GRID_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                heightClass="h-auto"
                imageAspect="aspect-[1/1]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}'use client';

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { products } from "@/lib/products-data";
import { useCart } from "@/lib/cart-context";

// Mock Data for the Best Seller Section
const FEATURED_PRODUCT = {
  id: "featured-1",
  title: "Tecno spark 40",
  currentPrice: "30,999",
  oldPrice: "33,999",
  discount: "9% OFF",
  rating: "4.8",
  reviews: "23 Reviews",
  badgeLabels: ["12.12", "SALE"],
  imageUrl: "https://placehold.co/400x500/transparent/2C3E50/png?text=Spark+40",
};

const GRID_PRODUCTS = [
  {
    id: "gp-1",
    title: "Realme Note 70",
    currentPrice: "26,999",
    oldPrice: "29,999",
    discount: "10% OFF",
    rating: "5.0",
    reviews: "8 Reviews",
    badgeLabels: ["12.12", "SALE"],
    imageUrl: "https://placehold.co/200x250/transparent/2C3E50/png?text=Realme+Note+70",
  },
  {
    id: "gp-2",
    title: "Samsung Galaxy A07",
    currentPrice: "23,999",
    oldPrice: "27,999",
    discount: "15% OFF",
    rating: "4.8",
    reviews: "52 Reviews",
    badgeLabels: ["12.12", "SALE"],
    imageUrl: "https://placehold.co/200x250/transparent/2C3E50/png?text=Samsung+A07",
  },
  {
    id: "gp-3",
    title: "Infinix Hot 60 Pro",
    currentPrice: "43,499",
    oldPrice: "47,999",
    discount: "9% OFF",
    rating: "4.5",
    reviews: "25 Reviews",
    badgeLabels: ["12.12", "SALE"],
    imageUrl: "https://placehold.co/200x250/transparent/2C3E50/png?text=Infinix+Hot+60",
  },
  {
    id: "gp-4",
    title: "Xiaomi Redmi A5",
    currentPrice: "19,999",
    oldPrice: "22,999",
    discount: "13% OFF",
    rating: "4.9",
    reviews: "62 Reviews",
    badgeLabels: ["12.12", "SALE"],
    imageUrl: "https://placehold.co/200x250/transparent/2C3E50/png?text=Redmi+A5",
  },
];

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
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
  image,
  className,
  imageAspect = "aspect-[3/4]",
  heightClass = "h-full",
  onAddToCart,
}: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  
  return (
    <div className={cn("group relative", heightClass)}>
      <div
        className={cn(
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

          <Link href={`/product/${id}`} className={cn(
            "relative w-full flex-1 flex items-center justify-center mb-4 bg-gray-50/50 rounded-md overflow-hidden block",
            imageAspect
          )}>
            <div className="w-full h-full flex items-center justify-center text-gray-300">
               <Image 
                  src={image} 
                  alt={name}
                  fill
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
              onClick={(e) => {
                e.preventDefault();
                onAddToCart();
              }}
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

export default function BestSellerShowcase() {
  return (
    <section className="bg-[#f5f5f5] py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-[1248px]">
        {/* Section Header */}
        <div className="text-center mb-8 space-y-1">
          <h2 className="text-[24px] lg:text-[28px] font-semibold text-[#2C3E50]">
            Best Seller
          </h2>
          <p className="text-[14px] text-[#737373]">
            Get the best prices in town
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-[650px] items-stretch">
          {/* Large Featured Product (Left Side) */}
          <div className="lg:col-span-1 h-auto lg:h-full">
            <ProductCard
              {...FEATURED_PRODUCT}
              heightClass="h-full"
              imageAspect="aspect-[4/5] lg:aspect-auto lg:h-[60%]"
              className="lg:p-6"
            />
          </div>

          {/* Grid Products (Right Side) */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 h-auto lg:h-full">
            {GRID_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                heightClass="h-auto"
                imageAspect="aspect-[1/1]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}'use client';

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { products } from "@/lib/products-data";
import { useCart } from "@/lib/cart-context";

const mobileProducts = products.filter(p => p.category === 'Mobile');
const FEATURED_PRODUCT = mobileProducts[0];
const GRID_PRODUCTS = mobileProducts.slice(1, 5);

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
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
  image,
  className,
  imageAspect = "aspect-[3/4]",
  heightClass = "h-full",
  onAddToCart,
}: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  
  return (
    <div className={cn("group relative", heightClass)}>
      <div
        className={cn(
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

          <Link href={`/product/${id}`} className={cn(
            "relative w-full flex-1 flex items-center justify-center mb-4 bg-gray-50/50 rounded-md overflow-hidden block",
            imageAspect
          )}>
            <div className="w-full h-full flex items-center justify-center text-gray-300">
               <Image 
                  src={image} 
                  alt={name}
                  fill
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
              onClick={(e) => {
                e.preventDefault();
                onAddToCart();
              }}
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

export default function BestSellerShowcase() {
  return (
    <section className="bg-[#f5f5f5] py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-[1248px]">
        {/* Section Header */}
        <div className="text-center mb-8 space-y-1">
          <h2 className="text-[24px] lg:text-[28px] font-semibold text-[#2C3E50]">
            Best Seller
          </h2>
          <p className="text-[14px] text-[#737373]">
            Get the best prices in town
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-[650px] items-stretch">
          {/* Large Featured Product (Left Side) */}
          <div className="lg:col-span-1 h-auto lg:h-full">
            <ProductCard
              {...FEATURED_PRODUCT}
              heightClass="h-full"
              imageAspect="aspect-[4/5] lg:aspect-auto lg:h-[60%]"
              className="lg:p-6"
            />
          </div>

          {/* Grid Products (Right Side) */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 h-auto lg:h-full">
            {GRID_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                heightClass="h-auto"
                imageAspect="aspect-[1/1]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}'use client';

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { products } from "@/lib/products-data";
import { useCart } from "@/lib/cart-context";

const mobileProducts = products.filter(p => p.category === 'Mobile');
const FEATURED_PRODUCT = mobileProducts[0];
const GRID_PRODUCTS = mobileProducts.slice(1, 5);

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
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
  image,
  className,
  imageAspect = "aspect-[3/4]",
  heightClass = "h-full",
  onAddToCart,
}: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  
  return (
    <div className={cn("group relative", heightClass)}>
      <div
        className={cn(
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

          <Link href={`/product/${id}`} className={cn(
            "relative w-full flex-1 flex items-center justify-center mb-4 bg-gray-50/50 rounded-md overflow-hidden block",
            imageAspect
          )}>
            <div className="w-full h-full flex items-center justify-center text-gray-300">
               <Image 
                  src={image} 
                  alt={name}
                  fill
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
              onClick={(e) => {
                e.preventDefault();
                onAddToCart();
              }}
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

export default function BestSellerShowcase() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof FEATURED_PRODUCT) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <section className="bg-[#f5f5f5] py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-[1248px]">
        {/* Section Header */}
        <div className="text-center mb-8 space-y-1">
          <h2 className="text-[24px] lg:text-[28px] font-semibold text-[#2C3E50]">
            Best Seller
          </h2>
          <p className="text-[14px] text-[#737373]">
            Get the best prices in town
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-[650px] items-stretch">
          {/* Large Featured Product (Left Side) */}
          <div className="lg:col-span-1 h-auto lg:h-full">
            <ProductCard
              {...FEATURED_PRODUCT}
              heightClass="h-full"
              imageAspect="aspect-[4/5] lg:aspect-auto lg:h-[60%]"
              className="lg:p-6"
            />
          </div>

          {/* Grid Products (Right Side) */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 h-auto lg:h-full">
            {GRID_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                heightClass="h-auto"
                imageAspect="aspect-[1/1]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}'use client';

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { products } from "@/lib/products-data";
import { useCart } from "@/lib/cart-context";

const mobileProducts = products.filter(p => p.category === 'Mobile');
const FEATURED_PRODUCT = mobileProducts[0];
const GRID_PRODUCTS = mobileProducts.slice(1, 5);

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
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
  image,
  className,
  imageAspect = "aspect-[3/4]",
  heightClass = "h-full",
  onAddToCart,
}: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  
  return (
    <div className={cn("group relative", heightClass)}>
      <div
        className={cn(
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

          <Link href={`/product/${id}`} className={cn(
            "relative w-full flex-1 flex items-center justify-center mb-4 bg-gray-50/50 rounded-md overflow-hidden block",
            imageAspect
          )}>
            <div className="w-full h-full flex items-center justify-center text-gray-300">
               <Image 
                  src={image} 
                  alt={name}
                  fill
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
              onClick={(e) => {
                e.preventDefault();
                onAddToCart();
              }}
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

export default function BestSellerShowcase() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof FEATURED_PRODUCT) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <section className="bg-[#f5f5f5] py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-[1248px]">
        {/* Section Header */}
        <div className="text-center mb-8 space-y-1">
          <h2 className="text-[24px] lg:text-[28px] font-semibold text-[#2C3E50]">
            Best Seller
          </h2>
          <p className="text-[14px] text-[#737373]">
            Get the best prices in town
          </p>
        </div>

          {/* Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-[650px] items-stretch">
            {/* Large Featured Product (Left Side) */}
            <div className="lg:col-span-1 h-auto lg:h-full">
              <ProductCard
                {...FEATURED_PRODUCT}
                heightClass="h-full"
                imageAspect="aspect-[4/5] lg:aspect-auto lg:h-[60%]"
                className="lg:p-6"
                onAddToCart={() => handleAddToCart(FEATURED_PRODUCT)}
              />
            </div>

            {/* Grid Products (Right Side) */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4 h-auto lg:h-full">
              {GRID_PRODUCTS.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  heightClass="h-auto"
                  imageAspect="aspect-[1/1]"
                  onAddToCart={() => handleAddToCart(product)}
                />
              ))}
            </div>
          </div>
      </div>
    </section>
  );
}