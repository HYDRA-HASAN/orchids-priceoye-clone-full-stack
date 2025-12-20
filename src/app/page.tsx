'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

import HeaderNavigation from '@/components/sections/header-navigation';
import HeroBanner from '@/components/sections/hero-banner';
import CategoryCarousel from '@/components/sections/category-carousel';
import BestSellerShowcase, { Product } from '@/components/sections/best-seller-showcase';
import SaleCountdown from '@/components/sections/sale-countdown';
import FeaturesBanner from '@/components/sections/features-banner';
import ShopByBrand from '@/components/sections/shop-by-brand';
import ShopByPrice from '@/components/sections/shop-by-price';
import LowestPrices from '@/components/sections/lowest-prices';
import CraziestDeals from '@/components/sections/craziest-deals';
import ReasonToBuy from '@/components/sections/reason-to-buy';
import EasyInstallmentBanner from '@/components/sections/easy-installment-banner';
import CustomerReviews from '@/components/sections/customer-reviews';
import OrderPackagingVideo from '@/components/sections/order-packaging-video';
import OfficialRetailerSection from '@/components/sections/official-retailer';
import ShopMoreCategories from '@/components/sections/shop-more-categories';
import RecommendedProducts from '@/components/sections/recommended-products';
import YouMightAlsoLikeSection from '@/components/sections/you-might-also-like';
import Footer from '@/components/sections/footer';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*').eq('category', 'Mobile').limit(5);
      if (error) console.error(error);
      else setProducts(data || []);
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <HeaderNavigation />
      <HeroBanner />
      <CategoryCarousel />
      <BestSellerShowcase products={products} />
      <SaleCountdown />
      <FeaturesBanner />
      <ShopByBrand />
      <ShopByPrice />
      <LowestPrices />
      <CraziestDeals />
      <ReasonToBuy />
      <EasyInstallmentBanner />
      <CustomerReviews />
      <OrderPackagingVideo />
      <OfficialRetailerSection />
      <ShopMoreCategories />
      <RecommendedProducts />
      <YouMightAlsoLikeSection />
      <Footer />
    </div>
  );
}
