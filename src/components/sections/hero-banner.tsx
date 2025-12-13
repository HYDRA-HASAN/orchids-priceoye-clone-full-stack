import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F5F5F5] font-sans">
      {/* Container */ }
      <div className="container relative mx-auto flex min-h-[480px] flex-col-reverse items-center justify-between px-4 py-8 md:flex-row md:items-center md:px-8 md:py-12">
        
        {/* Left Content Column */}
        <div className="relative z-10 mt-8 flex w-full flex-col items-center space-y-4 text-center md:mt-0 md:w-[45%] md:items-start md:space-y-6 md:text-left">
            {/* Easypaisa Logo & Branding */}
            <div className="flex items-center justify-center gap-2 md:justify-start">
                 {/* Logo mark approximation */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00C853] shadow-sm">
                    <span className="text-2xl font-bold italic leading-none text-white pb-1 pr-0.5">e</span>
                </div>
                <span className="text-4xl font-bold tracking-tight text-[#2C3E50] md:text-5xl lg:text-5xl">
                    easypaisa
                </span>
            </div>

            {/* Main Promotional Text */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:justify-start md:gap-4">
                <span className="text-5xl font-bold text-[#2C3E50] md:text-6xl lg:text-[70px] leading-tight">
                    Get
                </span>
                <div className="flex items-center justify-center rounded-xl bg-[#00C853] px-3 py-1 shadow-md md:px-5 md:py-2 transform -rotate-2 md:rotate-0 transition-transform hover:rotate-2">
                    <span className="text-5xl font-bold text-white md:text-6xl lg:text-[70px] leading-none">
                        15%
                    </span>
                </div>
                <span className="text-5xl font-bold text-[#2C3E50] md:text-6xl lg:text-[70px] leading-tight">
                    off
                </span>
            </div>

            {/* Disclaimer / Subtext */}
            <div className="flex flex-col items-center space-y-1.5 text-sm font-medium text-gray-500 md:items-start md:text-base">
                <p className="leading-snug">*Save up to Rs. 2,000 on your purchase</p>
                <p className="leading-snug">*Offer applicable on selected products</p>
            </div>
        </div>

        {/* Right Content Column (Visuals) */}
        <div className="relative flex min-h-[400px] w-full items-center justify-center md:min-h-[500px] md:w-[55%] md:justify-end">
            
            {/* Green Curved Background Element */}
            {/* Used large border radius to simulate the convex curve seen in design */}
            <div className="absolute bottom-0 right-[-20%] h-[95%] w-[130%] origin-bottom-right rounded-tl-[160px] bg-[#00C853] shadow-lg md:h-[110%] md:w-[100%] md:rounded-tl-[300px] lg:right-[-10%] lg:w-[90%]"></div>

            {/* Phone Mockup - CSS Only implementation for pixel perfect control without assets */}
            <div className="relative z-10 mx-auto w-[240px] rotate-[-6deg] transform rounded-[40px] border-[10px] border-[#2C3E50] bg-white shadow-2xl transition-transform duration-500 hover:rotate-0 md:mr-10 md:w-[260px] lg:w-[290px]">
                {/* Phone Speaker/Notch Area */}
                <div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-xl bg-[#2C3E50]"></div>
                
                {/* Screen Content */}
                <div className="h-[480px] w-full overflow-hidden rounded-[30px] bg-white pt-8 md:h-[540px]">
                    <div className="flex h-full flex-col">
                        {/* App Header */}
                        <div className="flex items-center justify-between bg-[#1E88E5] px-4 py-3 text-white shadow-sm">
                            <span className="text-sm font-bold tracking-wide">Priceoye</span>
                            <div className="flex gap-2">
                                <div className="h-4 w-4 rounded-full bg-white/20"></div>
                                <div className="h-4 w-4 rounded-full bg-white/20"></div>
                            </div>
                        </div>
                        
                        {/* App Body - Mock Interface */}
                        <div className="flex-1 space-y-3 bg-gray-50 p-3">
                            {/* Inner promotional banner */}
                            <div className="relative flex h-28 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 p-2 text-center shadow-sm">
                                <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-white/20"></div>
                                <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-white/20"></div>
                                <span className="relative z-10 text-xs font-bold uppercase tracking-wider text-white shadow-sm">Exclusive Deal</span>
                                <span className="relative z-10 text-2xl font-extrabold text-white drop-shadow-md">12.12 SALE</span>
                            </div>

                            {/* Section Title */}
                            <div className="flex justify-between px-1">
                                <div className="h-3 w-20 rounded bg-gray-300"></div>
                                <div className="h-3 w-10 rounded bg-gray-200"></div>
                            </div>

                            {/* Product Grid Mockup */}
                            <div className="grid grid-cols-2 gap-2">
                                {[1, 2, 3, 4].map((item) => (
                                    <div key={item} className="flex h-24 flex-col justify-end rounded-md bg-white p-2 shadow-sm border border-gray-100">
                                        <div className="mb-auto flex justify-center pt-1">
                                             <div className="h-10 w-10 rounded bg-gray-100"></div>
                                        </div>
                                        <div className="mb-1 h-2 w-full rounded bg-gray-100"></div>
                                        <div className="h-2 w-10 rounded bg-[#00C853]/40"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Static Overlay Badge on Phone Screen */}
                        <div className="absolute bottom-6 left-1/2 w-[90%] -translate-x-1/2 transform">
                             <div className="flex items-center justify-center gap-3 rounded-xl border border-[#00C853] bg-white py-3 shadow-lg">
                                {/* Small Logo */}
                                 <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00C853] text-xs font-bold italic text-white pb-0.5 pr-0.5">e</div>
                                 <div className="flex flex-col leading-none">
                                     <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Shop with</span>
                                     <span className="text-base font-bold text-[#00C853]">easypaisa</span>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating 'Shop with easypaisa' Badge - Visual Flair outside phone */}
            <div className="absolute right-[2%] top-[20%] z-20 hidden rotate-6 animate-pulse rounded-2xl border-2 border-[#00C853] bg-white px-5 py-2.5 shadow-xl md:block lg:right-[15%]">
                <div className="flex flex-col items-center leading-tight">
                    <span className="text-xs font-bold text-[#2C3E50]">Shop with</span>
                    <span className="text-xl font-bold tracking-tight text-[#00C853]">easypaisa</span>
                </div>
            </div>

        </div>

        {/* Carousel Navigation Buttons (Visual only as requested is section clone) */}
        <button className="group absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/80 p-3 text-gray-600 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:text-black hover:shadow-lg md:block lg:left-8">
            <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
        </button>
        <button className="group absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/80 p-3 text-gray-600 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:text-black hover:shadow-lg md:block lg:right-8">
            <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
        </button>

      </div>
    </section>
  );
}