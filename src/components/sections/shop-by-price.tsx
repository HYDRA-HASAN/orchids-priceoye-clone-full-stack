import Link from 'next/link';

export default function ShopByPrice() {
  const priceRanges = [
    { label: 'Below Rs. 15,000', href: '#' },
    { label: 'Rs. 15,000 - Rs. 25,000', href: '#' },
    { label: 'Rs. 25,000 - Rs. 40,000', href: '#' },
    { label: 'Rs. 40,000 - Rs. 60,000', href: '#' },
    { label: 'Rs. 60,000 - Rs. 80,000', href: '#' },
    { label: 'Rs. 80,000 - Rs. 100,000', href: '#' },
    { label: 'Rs. 100,000 - Rs. 150,000', href: '#' },
    { label: 'Above 150,000', href: '#' },
  ];

  return (
    <section className="bg-[#FDD835] py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="mb-6 text-[20px] font-semibold leading-[1.4] text-[#2C3E50]">
          Shop by Price
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {priceRanges.map((range, index) => (
            <Link
              key={index}
              href={range.href}
              className="group relative flex items-center justify-center rounded-[4px] bg-[#E91E63] py-3 px-4 text-center text-[14px] font-semibold text-white shadow-[0px_2px_4px_rgba(0,0,0,0.08)] transition-all hover:bg-[#d81b5c] hover:shadow-[0px_4px_8px_rgba(0,0,0,0.12)] active:scale-[0.98]"
            >
              {range.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}