import Link from 'next/link';
import Image from 'next/image';

const CATEGORIES = [
  {
    id: 1,
    label: "Mobiles",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/images/mobiles-1.webp",
    link: "#"
  },
  {
    id: 2,
    label: "Wireless Earbuds",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/images/wireless-earbuds-2.webp",
    link: "#"
  },
  {
    id: 3,
    label: "Smart Watches",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/images/smart-watches-3.webp",
    link: "#"
  },
  {
    id: 4,
    label: "Trimmers Shaver",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/images/trimmers-shaver-4.webp",
    link: "#"
  },
  {
    id: 5,
    label: "Power Banks",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/images/power-banks-5.webp",
    link: "#"
  },
  {
    id: 6,
    label: "Wall Chargers",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/images/mobile-chargers-6.webp",
    link: "#"
  },
  {
    id: 7,
    label: "Bluetooth Speakers",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/images/bluetooth-speakers-7.webp",
    link: "#"
  },
  {
    id: 8,
    label: "Tablets",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/images/tablets-8.webp",
    link: "#"
  }
];

export default function CategoryCarousel() {
  return (
    <section className="bg-white border-b border-[#E8E8E8]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-row items-start justify-between gap-6 md:gap-8 overflow-x-auto py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.link}
              className="group flex flex-col items-center justify-center gap-2 min-w-[80px] md:min-w-fit cursor-pointer outline-none"
            >
              <div className="relative h-8 w-8 md:h-9 md:w-9 transition-transform duration-200 group-hover:-translate-y-1">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  sizes="(max-width: 768px) 32px, 36px"
                  className="object-contain"
                />
              </div>
              <span className="text-[11px] md:text-xs font-semibold text-[#2C3E50] whitespace-nowrap text-center group-hover:text-[#1E88E5] transition-colors duration-200">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}