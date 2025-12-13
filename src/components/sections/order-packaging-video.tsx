import React from 'react';

const OrderPackagingVideo = () => {
  return (
    <section className="w-full bg-[#3FC1EA] overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative min-h-[180px] sm:min-h-[220px] md:min-h-[280px] flex items-center justify-between">
        
        {/* Left Content Group */}
        <div className="py-8 z-10 flex flex-col items-start gap-3 sm:gap-4 md:gap-5 w-full md:max-w-2xl">
          
          {/* Main Title Block - Pink Background */}
          <div className="bg-[#E91E63] transform -skew-x-12 px-6 py-3 sm:px-8 sm:py-3 md:px-12 md:py-5 shadow-sm origin-left">
             <h2 className="text-white font-bold text-lg sm:text-2xl md:text-3xl lg:text-[36px] leading-none transform skew-x-12 whitespace-nowrap uppercase tracking-tight m-0">
                Order Packaging Video
             </h2>
          </div>

          {/* Subtitle Block - Yellow Background */}
          <div className="bg-[#FDD835] transform -skew-x-12 px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 shadow-sm origin-left"> 
             <p className="text-[#E91E63] font-bold text-xs sm:text-base md:text-xl lg:text-[22px] leading-none transform skew-x-12 whitespace-nowrap m-0 tracking-tight">
                Watch Your Order Prepared for Shipping
             </p>
          </div>

        </div>

        {/* Right Side - Image Area Placeholder */}
        {/*
          The design includes an image of a person packaging orders on the right side.
          Since no asset URL was provided and custom assets are restricted, 
          this placeholder area preserves the layout structure.
        */}
        <div className="hidden md:flex absolute right-0 bottom-0 h-full w-[40%] lg:w-[45%] pointer-events-none items-end justify-center lg:justify-end lg:pr-10">
           <div className="relative w-full max-w-[500px] h-[90%] flex items-end justify-center">
              {/* Visual presence for the image area */}
              <div className="w-[90%] h-full bg-gradient-to-t from-white/10 to-transparent border-t-2 border-l-2 border-r-2 border-white/20 border-dashed rounded-t-xl flex flex-col items-center justify-center text-center p-4">
                  <span className="text-white/60 font-semibold text-sm md:text-base mb-1">Image Placeholder</span>
                  <span className="text-white/40 text-xs">Person with PriceOye Boxes</span>
              </div>
           </div>
        </div>
         
      </div>
    </section>
  );
};

export default OrderPackagingVideo;