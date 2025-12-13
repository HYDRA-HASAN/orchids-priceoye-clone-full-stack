import Image from "next/image";

export default function FeaturesBanner() {
  const features = [
    {
      id: 1,
      title: "PTA Approved",
      subtitle: "Mobile Phone",
      iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/approved-feature-34.svg",
      alt: "PTA Approved Mobile Phone",
    },
    {
      id: 2,
      title: "1 Year",
      subtitle: "Brand Warranty",
      iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/warranty-feature-35.svg",
      alt: "1 Year Brand Warranty",
    },
    {
      id: 3,
      title: "Packaging Video",
      subtitle: "See Your Product",
      iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/video-shooting-camera-36.svg",
      alt: "Packaging Video See Your Product",
    },
    {
      id: 4,
      title: "Fast Delivery",
      subtitle: "All Over Pakistan",
      iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/shipping-feature-37.svg",
      alt: "Fast Delivery All Over Pakistan",
    },
  ];

  return (
    <section className="bg-white py-10 md:py-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 md:gap-8 justify-items-center">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="flex flex-col items-center text-center group w-full"
            >
              <div className="relative w-16 h-16 md:w-[70px] md:h-[70px] lg:w-20 lg:h-20 mb-4 transition-transform duration-300 md:group-hover:scale-105">
                <Image
                  src={feature.iconSrc}
                  alt={feature.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 64px, (max-width: 1024px) 70px, 80px"
                />
              </div>
              
              <div className="flex flex-col gap-1">
                <h3 className="text-[#2C3E50] font-bold text-sm md:text-base lg:text-[18px] leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[#2C3E50] text-xs md:text-sm font-normal">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}