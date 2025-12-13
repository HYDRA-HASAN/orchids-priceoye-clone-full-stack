import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ASSETS = {
  logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/po-footer-logo-white-38.svg",
  paymentMethods: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/payment_method-39.svg",
  social: {
    youtube: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/social-youtube-40.svg",
    facebook: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/social-fb-41.svg",
    instagram: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/social-instagram-42.svg",
    tiktok: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/tiktok-43.svg",
    linkedin: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/linkedin-44.svg"
  }
};

const Footer = () => {
  return (
    <footer className="bg-[#48AFFF] pt-12 pb-6 text-white font-sans border-t border-transparent">
      <div className="container mx-auto px-4 lg:px-6 max-w-[1240px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          <div className="flex flex-col items-start space-y-6">
            <Link href="/" className="mb-2 block">
              <Image 
                src={ASSETS.logo} 
                alt="Priceoye Logo" 
                width={130} 
                height={48} 
                className="w-32 h-auto"
              />
            </Link>
            <ul className="space-y-2 text-[14px] leading-6 font-normal">
              <li><Link href="#" className="hover:underline">About Us</Link></li>
              <li><Link href="#" className="hover:underline">FAQs</Link></li>
              <li><Link href="#" className="hover:underline">Contact Us</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
              <li><Link href="#" className="hover:underline">Press & Blog</Link></li>
              <li><Link href="#" className="hover:underline">Terms & Condition</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-start space-y-6">
            <h3 className="text-[16px] font-bold mt-2">Customer Service</h3>
            <ul className="space-y-2 text-[14px] leading-6 font-normal">
              <li><Link href="#" className="hover:underline">Help Center</Link></li>
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:underline">Installments Plan</Link></li>
              <li><Link href="#" className="hover:underline">E-Warranty Activation</Link></li>
              <li><Link href="#" className="hover:underline">Sell on Priceoye</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-start space-y-6">
            <h3 className="text-[16px] font-bold mt-2">Secure Payments Methods</h3>
            
            <div className="relative w-full max-w-[280px]">
              <Image 
                src={ASSETS.paymentMethods} 
                alt="Secure Payments: Mastercard, Visa, HBL" 
                width={250} 
                height={30} 
                className="w-auto h-8 object-contain object-left"
              />
            </div>

            <div className="mt-4">
              <Link href="#" className="inline-flex items-center bg-black text-white px-3 py-1.5 rounded-lg border border-white/20 hover:bg-gray-900 transition-colors gap-2 min-w-[150px]">
                 <div className="w-6 h-6 flex items-center justify-center">
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                     <path d="M5,20.53L19.12,13.47L19.12,13.47L5,6.41V20.53M4,4.2C3.15,4.2 2.76,5.33 3.37,5.92L11.83,13.91L4,6.51V4.2M5,21.9L11.83,15.45L4.06,22.78C3.66,23.16 3,22.88 3,22.33V22.25C3,22.12 3.03,22 3.1,21.89L5,21.9M20.24,13.11L13.88,16.29L12.92,15.22L20.23,11.66C20.5,11.53 20.76,11.88 20.62,12.13C20.56,12.24 20.47,13 20.24,13.11Z" />
                   </svg>
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[10px] leading-none opacity-80 uppercase font-medium">Get it on</span>
                   <span className="text-[14px] leading-tight font-bold font-sans">Google Play</span>
                 </div>
              </Link>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
          <div className="mb-4 md:mb-0">
            <p className="text-[14px] font-normal">Copyright © 2025 Priceoye.pk</p>
          </div>
          
          <div className="flex items-center gap-3">
             <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image src={ASSETS.social.youtube} alt="YouTube" width={28} height={28} className="w-9 h-9" />
             </Link>
             <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image src={ASSETS.social.facebook} alt="Facebook" width={28} height={28} className="w-9 h-9" />
             </Link>
             <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image src={ASSETS.social.instagram} alt="Instagram" width={28} height={28} className="w-9 h-9" />
             </Link>
             <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image src={ASSETS.social.tiktok} alt="TikTok" width={28} height={28} className="w-9 h-9" />
             </Link>
             <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image src={ASSETS.social.linkedin} alt="LinkedIn" width={28} height={28} className="w-9 h-9" />
             </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;