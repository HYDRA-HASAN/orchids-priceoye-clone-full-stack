"use client";

import HeaderNavigation from "@/components/sections/header-navigation";
import CategoryCarousel from "@/components/sections/category-carousel";
import HeroBanner from "@/components/sections/hero-banner";
import SaleCountdown from "@/components/sections/sale-countdown";
import ProductCarouselBestSeller from "@/components/sections/product-carousel-best-seller";
import ProductCarouselPersonalCares from "@/components/sections/product-carousel-personal-cares";
import ProductCarouselWirelessEarbuds from "@/components/sections/product-carousel-wireless-earbuds";
import EasyInstallmentBanner from "@/components/sections/easy-installment-banner";
import ProductCarouselSmartWatches from "@/components/sections/product-carousel-smart-watches";
import BestSellerShowcase from "@/components/sections/best-seller-showcase";
import ProductCarouselMobiles from "@/components/sections/product-carousel-mobiles";
import ShopByPrice from "@/components/sections/shop-by-price";
import ShopByBrand from "@/components/sections/shop-by-brand";
import CustomerReviews from "@/components/sections/customer-reviews";
import ProductCarouselAirPurifiers from "@/components/sections/product-carousel-air-purifiers";
import ProductCarouselBluetoothSpeakers from "@/components/sections/product-carousel-bluetooth-speakers";
import CraziestDeals from "@/components/sections/craziest-deals";
import ProductCarouselTablets from "@/components/sections/product-carousel-tablets";
import ShopMoreCategories from "@/components/sections/shop-more-categories";
import OrderPackagingVideo from "@/components/sections/order-packaging-video";
import ProductCarouselLaptops from "@/components/sections/product-carousel-laptops";
import OfficialRetailer from "@/components/sections/official-retailer";
import ProductCarouselSamsungDeals from "@/components/sections/product-carousel-samsung-deals";
import ProductCarouselWallChargers from "@/components/sections/product-carousel-wall-chargers";
import LowestPrices from "@/components/sections/lowest-prices";
import ProductCarouselTrimmersShaver from "@/components/sections/product-carousel-trimmers-shaver";
import ReasonToBuy from "@/components/sections/reason-to-buy";
import ProductCarouselNewArrivals from "@/components/sections/product-carousel-new-arrivals";
import ProductCarouselPowerBanks from "@/components/sections/product-carousel-power-banks";
import ProductCarouselXiaomiDeals from "@/components/sections/product-carousel-xiaomi-deals";
import YouMightAlsoLike from "@/components/sections/you-might-also-like";
import RecommendedProducts from "@/components/sections/recommended-products";
import FeaturesBanner from "@/components/sections/features-banner";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderNavigation />
      <CategoryCarousel />
      <HeroBanner />
      <SaleCountdown />
      <ProductCarouselBestSeller />
      <ProductCarouselPersonalCares />
      <ProductCarouselWirelessEarbuds />
      <EasyInstallmentBanner />
      <ProductCarouselSmartWatches />
      <BestSellerShowcase />
      <ProductCarouselMobiles />
      <ShopByPrice />
      <ShopByBrand />
      <CustomerReviews />
      <ProductCarouselAirPurifiers />
      <ProductCarouselBluetoothSpeakers />
      <CraziestDeals />
      <ProductCarouselTablets />
      <ShopMoreCategories />
      <OrderPackagingVideo />
      <ProductCarouselLaptops />
      <OfficialRetailer />
      <ProductCarouselSamsungDeals />
      <ProductCarouselWallChargers />
      <LowestPrices />
      <ProductCarouselTrimmersShaver />
      <ReasonToBuy />
      <ProductCarouselNewArrivals />
      <ProductCarouselPowerBanks />
      <ProductCarouselXiaomiDeals />
      <YouMightAlsoLike />
      <RecommendedProducts />
      <FeaturesBanner />
      <Footer />
    </div>
  );
}
