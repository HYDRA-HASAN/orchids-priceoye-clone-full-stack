'use client';

import HeaderNavigation from '@/components/sections/header-navigation';
import HeroBanner from '@/components/sections/hero-banner';
import CategoryCarousel from '@/components/sections/category-carousel';
import BestSellerShowcase from '@/components/sections/best-seller-showcase';
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
  return (
    <div className="min-h-screen bg-white font-sans">
      <HeaderNavigation />
      <HeroBanner />
      <CategoryCarousel />
      <BestSellerShowcase />
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
