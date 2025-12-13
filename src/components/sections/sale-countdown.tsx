"use client";

import { useState, useEffect } from "react";
import { PartyPopper } from "lucide-react";

export default function SaleCountdown() {
  return (
    <div className="w-full bg-[#1ABC9C] overflow-hidden">
      <BannerContent />
    </div>
  );
}

function BannerContent() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 relative">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-full bg-white/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-center w-full max-w-4xl relative">
          
          {/* Left Decorative Element */}
          <div className="hidden md:block absolute left-10 lg:left-20 top-1/2 -translate-y-1/2 transform -rotate-12 opacity-90">
             <PartyPopperIcon className="w-12 h-12 text-[#FDD835]" />
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide drop-shadow-sm">
              12.12 Sale
            </h2>
            <CountdownTimer />
          </div>

          {/* Right Decorative Element */}
          <div className="hidden md:block absolute right-10 lg:right-20 top-1/2 -translate-y-1/2 transform rotate-12 opacity-90">
            <PartyPopperIcon className="w-12 h-12 text-[#E91E63]" />
          </div>
        </div>
      </div>

      {/* View All Button - Absolute positioned to the right on desktop, static or absolute on mobile depending on layout needs. 
          Based on common patterns, it stays right. */}
      <div className="absolute right-4 md:right-6 bottom-6 md:top-1/2 md:-translate-y-1/2">
        <button className="bg-white text-[#2C3E50] hover:bg-gray-50 transition-colors text-xs md:text-sm font-semibold px-4 py-2 rounded shadow-sm border border-transparent whitespace-nowrap">
          View All
        </button>
      </div>
    </div>
  );
}

function CountdownTimer() {
  return (
    <div className="inline-flex items-center justify-center bg-black/10 backdrop-blur-sm px-6 py-1.5 rounded-full text-white text-sm md:text-base font-medium tracking-wide">
      <span className="mr-2 opacity-90">Ending in</span>
      <TimerLogic />
    </div>
  );
}

function TimerLogic() {
  const [time, setTime] = useState({
    days: 8,
    hours: 20,
    minutes: 13,
    seconds: 47,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => num.toString().padStart(2, "0");

  return (
    <span className="font-semibold font-mono tabular-nums">
      {format(time.days)}d : {format(time.hours)}h : {format(time.minutes)}m : {format(time.seconds)}s
    </span>
  );
}

function PartyPopperIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
       <PartyPopper strokeWidth={2.5} />
    </div>
  );
}