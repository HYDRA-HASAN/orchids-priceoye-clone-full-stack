<file_path>
src/components/sections/official-retailer.tsx
</file_path>

<content>
import React from "react";
import Image from "next/image";

const brands = [
  {
    name: "Samsung",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/samsung-az6v0-8.svg",
    fallbackText: "SAMSUNG",
  },
  {
    name: "Infinix",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/infinix-gn1ip-9.svg",
    fallbackText: "Infinix",
  },
  {
    name: "Nokia",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/nokia-hsejy-17.svg",
    fallbackText: "NOKIA",
  },
  {
    name: "ZTE",
    logo: null,
    fallbackText: "ZTE",
  },
  {
    name: "Itel",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/itel-zqykn-23.svg",
    fallbackText: "itel",
  },
  {
    name: "Honor",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/honor-32olp-16.svg",
    fallbackText: "HONOR",
  },
  {
    name: "Faywa",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/faywa-dpowq-24.svg",
    fallbackText: "Faywa",
  },
  {
    name: "Geive",
    logo: null,
    fallbackText: "GFIVE",
  },
  {
    name: "Motorola",
    logo: null,
    fallbackText: "motorola",
  },
  {
    name: "Q Mobile",
    logo: null,
    fallbackText: "QMobile",
  },
  {
    name: "Villaon",
    logo: null,
    fallbackText: "VILLAON",
  },
  {
    name: "KXD",
    logo: null,
    fallbackText: "KXD",
  },
];

export default function OfficialRetailerSection() {
  return (
    <section className="bg-[#F5F5F5] py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        {/* Section Heading */}
        <h3 className="text-[18px] md:text-[20px] font-semibold text-[#2C3E50] mb-6 md:mb-8 text-left">
          Online Official Retailer
        </h3>

        {/* Honeycomb Grid
            The design uses a grid of hexagons.
            The clip-path creates the hexagon shape with points at left/right and flat top/bottom.
            Geometry: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)
        */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6 justify-items-center">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group relative flex items-center justify-center w-[100px] h-[86px] sm:w-[120px] sm:h-[104px] md:w-[140px] md:h-[120px] transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              {/* Hexagon Background Shape */}
              <div 
                className="absolute inset-0 bg-[#1E88E5] shadow-sm"
                style={{
                  clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                }}
              />
              
              {/* Content (Logo or Text) */}
              <div className="relative z-10 w-3/4 flex justify-center items-center">
                {brand.logo ? (
                  <div className="relative w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} Official Retailer`}
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                ) : (
                  <span className="text-white font-bold text-sm sm:text-base md:text-lg uppercase tracking-wider text-center px-2">
                    {brand.fallbackText}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
</content>