import Image from "next/image";
import Link from "next/link";

interface Brand {
  name: string;
  url: string;
  bgColor: string;
}

const BRANDS: Brand[] = [
  {
    name: "Samsung",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/samsung-az6v0-8.svg",
    bgColor: "#101010",
  },
  {
    name: "Infinix",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/infinix-gn1ip-9.svg",
    bgColor: "#D5E334", // Chartreuse/Lime green from screenshot
  },
  {
    name: "Oppo",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/oppo-11l8m-10.svg",
    bgColor: "#00785D", // Dark teal
  },
  {
    name: "Xiaomi",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/xiaomi-vypan-11.svg",
    bgColor: "#FF6900", // Orange
  },
  {
    name: "Vivo",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/vivo-svnd6-12.svg",
    bgColor: "#415FFF", // Royal Blue
  },
  {
    name: "Nothing",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/nothing-w0elp-13.svg",
    bgColor: "#000000",
  },
  {
    name: "Tecno",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/tecno-1iq96-14.svg",
    bgColor: "#000000",
  },
  {
    name: "Realme",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/realme-scnhp-15.svg",
    bgColor: "#FFC217", // Golden Yellow
  },
  {
    name: "Honor",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/honor-32olp-16.svg",
    bgColor: "#000000",
  },
];

export default function ShopByBrand() {
  return (
    <section className="bg-[#FDD835] w-full pb-8 pt-2">
      <div className="container">
        <h3 className="mb-4 text-[20px] font-semibold text-[#2C3E50] leading-[1.4]">
          Shop by Brand
        </h3>
        
        {/* Scrollable Container */}
        <div 
          className="flex gap-4 overflow-x-auto pb-2 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 md:mx-0 md:px-0"
        >
          {BRANDS.map((brand) => (
            <Link
              key={brand.name}
              href="#"
              className="group flex-shrink-0"
              aria-label={`Shop ${brand.name}`}
            >
              <div
                className="flex h-[80px] w-[125px] items-center justify-center rounded-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: brand.bgColor }}
              >
                <div className="relative h-[40px] w-[80px]">
                  <Image
                    src={brand.url}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain p-1"
                    priority={true}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}