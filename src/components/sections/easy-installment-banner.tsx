import React from 'react';

const banks = [
  "Askari Bank",
  "Bank Alfalah",
  "Faysal Bank",
  "HBL",
  "JS Bank",
  "MCB",
  "SBP",
  "UBL",
];

export default function EasyInstallmentBanner() {
  return (
    <section className="container mx-auto px-4 md:px-6 my-8">
      <div className="flex flex-col md:flex-row w-full bg-[#fdd835] rounded-xl overflow-hidden shadow-sm min-h-[220px]">
        
        {/* Left Side - Blue Section */}
        <div className="relative z-10 w-full md:w-[45%] bg-[#00c4ff] flex flex-col justify-center items-center py-8 md:py-0 text-center">
          
          {/* Arrow Triangle (Desktop only) */}
          <div 
            className="hidden md:block absolute top-0 right-[-49px] h-full w-[50px] bg-[#00c4ff] z-20"
            style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
          />

          {/* Content Wrapper */}
          <div className="flex flex-col items-center gap-3 z-30 transform md:-translate-y-1">
            {/* BUY NOW Badge */}
            <button className="bg-[#e91e63] hover:bg-[#d81557] text-white text-[11px] md:text-sm font-bold px-6 py-1.5 rounded-full shadow-md uppercase tracking-wide transition-colors">
              Buy Now
            </button>

            {/* PAY LATER Box */}
            <div className="bg-[#fff200] text-[#e91e63] px-8 py-2 rounded-xl shadow-sm transform -skew-x-6 mx-2 mt-1">
              <span className="block text-4xl md:text-5xl font-black tracking-tighter transform skew-x-6 whitespace-nowrap">
                PAY LATER
              </span>
            </div>

            {/* Bottom Text */}
            <p className="text-white text-[10px] md:text-xs font-bold tracking-wider uppercase mt-1 opacity-90">
              Monthly Installment Plans
            </p>
          </div>
        </div>

        {/* Right Side - Yellow Section */}
        <div className="relative w-full md:w-[55%] bg-[#fdd835] flex flex-col justify-center items-center py-8 md:py-0 md:pl-12">
          
          {/* Credit Cards Illustration (CSS Only for lightweight accuracy) */}
          <div className="relative w-48 h-24 mb-6 md:mr-12">
            {/* Card 3 (Back) */}
            <div className="absolute top-0 left-12 w-32 h-20 bg-gray-800 rounded-lg shadow-md transform -rotate-12 border-t border-white/20"></div>
            {/* Card 2 (Middle) */}
            <div className="absolute top-1 left-6 w-32 h-20 bg-[#1E88E5] rounded-lg shadow-md transform -rotate-6 border-t border-white/20"></div>
            {/* Card 1 (Front) */}
            <div className="absolute top-2 left-0 w-32 h-20 bg-gray-900 rounded-lg shadow-lg transform rotate-0 border-t border-white/20 flex flex-col justify-between p-2.5">
               <div className="w-6 h-4 bg-yellow-500/20 rounded-sm"></div>
               <div className="flex justify-between items-end">
                  <div className="h-1.5 w-12 bg-white/40 rounded"></div>
                  <div className="flex -space-x-1.5">
                    <div className="h-4 w-4 rounded-full bg-red-500/90"></div>
                    <div className="h-4 w-4 rounded-full bg-yellow-500/90"></div>
                  </div>
               </div>
            </div>
          </div>

          {/* Bank Logos */}
          <div className="flex flex-wrap justify-center gap-2 max-w-[320px] px-2 md:pr-12">
            {banks.map((bank) => (
              <div 
                key={bank} 
                className="bg-white rounded px-2 py-1 shadow-sm flex items-center justify-center min-w-[50px] h-[24px] border border-gray-100"
              >
                <span className="text-[8px] font-bold text-gray-600 leading-none text-center uppercase tracking-tight">
                  {bank.replace(' Bank', '')} 
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}