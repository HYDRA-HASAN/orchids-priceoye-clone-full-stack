export default function ShopMoreCategories() {
  const categories = [
    {
      title: "Mobiles",
      icon: Smartphone,
      mainIcon: Smartphone,
      href: "/mobiles",
    },
    {
      title: "Wireless Earbuds",
      icon: Headphones,
      mainIcon: Headphones,
      href: "/wireless-earbuds",
    },
    {
      title: "Smart Watches",
      icon: Watch,
      mainIcon: Watch,
      href: "/smart-watches",
    },
    {
      title: "Power Banks",
      icon: BatteryMedium, // Battery icon for power banks
      mainIcon: BatteryMedium,
      href: "/power-banks",
    },
  ];

  return (
    <section className="bg-[#F0E6F6] py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-[#2C3E50] text-xl md:text-[22px] font-bold">
            Shop More Categories
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/40 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Product Image Area Placeholder */}
              <div className="flex h-32 w-full items-center justify-center bg-white p-4 sm:h-40">
                <category.mainIcon
                  className="h-16 w-16 text-gray-100 transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20"
                  strokeWidth={1.5}
                />
              </div>

              {/* Bottom Label Section */}
              <div className="flex flex-col items-center justify-center bg-[#8E24AA] py-3 text-center transition-colors hover:bg-[#7b1fa2]">
                <category.icon className="mb-1 h-5 w-5 text-white/90" strokeWidth={2} />
                <span className="text-sm font-semibold text-white">
                  {category.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}