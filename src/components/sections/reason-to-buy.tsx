import React from 'react';
import Image from 'next/image';
import { PackageOpen } from 'lucide-react';

export default function ReasonToBuy() {
  const reasons = [
    {
      id: 1,
      title: "Priceoye Extended Warranty",
      asset: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/extended-warranty-30.svg",
      type: "image",
      bgClass: "bg-[#1E88E5]", // Primary Blue
      alt: "Extended Warranty 1 Year Badge"
    },
    {
      id: 2,
      title: "Packaging Video",
      asset: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/order-packaging-31.svg",
      type: "image",
      bgClass: "bg-[#1E88E5]",
      alt: "Packaging Video Camera Icon"
    },
    {
      id: 3,
      title: "Open Parcel (ISB - LHR - KHI)",
      asset: null, // Missing asset from list
      type: "icon",
      bgClass: "bg-[#1E88E5]",
      alt: "Open Parcel Service"
    },
    {
      id: 4,
      title: "Easy Installments",
      asset: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/easy_instalment-33.svg",
      type: "image",
      bgClass: "bg-[#1E88E5]",
      alt: "Easy Installments Bank Icon"
    }
  ];

  return (
    <section className="bg-[#F5F5F5] py-8 md:py-12">
      <div className="container mx-auto px-4 lg:px-6 max-w-[1200px]">
        <h2 className="text-[#2C3E50] text-[20px] md:text-[24px] font-semibold mb-6">
          Reason to Buy
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {reasons.map((reason) => (
            <div 
              key={reason.id} 
              className={`
                group
                flex flex-row items-center justify-center md:justify-start 
                ${reason.bgClass} 
                rounded-xl p-6 md:p-8 
                shadow-sm hover:shadow-md transition-all duration-300
                gap-6 min-h-[160px]
              `}
            >
              {/* Icon / Image Section */}
              <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center relative">
                {reason.type === 'image' && reason.asset ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={reason.asset}
                      alt={reason.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <PackageOpen className="w-16 h-16 text-white opacity-90" strokeWidth={1.5} />
                )}
              </div>

              {/* Content Section */}
              <div className="flex flex-col items-start gap-3 flex-1">
                <h3 className="text-white text-[18px] md:text-[20px] font-bold leading-tight max-w-[250px]">
                  {reason.title}
                </h3>
                
                <button 
                  className="bg-[#FF9800] hover:bg-[#F57C00] text-white text-[12px] font-bold uppercase py-2 px-5 rounded-[4px] shadow-sm transition-colors duration-200 tracking-wide"
                  aria-label={`Know more about ${reason.title}`}
                >
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}