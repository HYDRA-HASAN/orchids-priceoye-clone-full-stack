"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Package, MessageSquareWarning, User, Bell, LogOut, X, ChevronRight, Menu, ShoppingCart } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { useCart } from "@/lib/cart-context";

export default function HeaderNavigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = async () => {
    await signOut();
    toggleSidebar();
  };

  return (
    <>
      <header className="relative w-full z-40 bg-[#1E88E5]">
        <div className="container mx-auto px-4 lg:px-6 h-14 md:h-16 flex items-center justify-between">
          
          {/* Left Section: Hamburger (Mobile) & Logo */}
          <div className="flex items-center gap-4">
            {/* Hamburger Menu - Mobile Only */}
            <button 
              onClick={toggleSidebar}
              className="md:hidden flex-shrink-0 text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/bar-1.svg" 
                alt="bar" 
                width={24} 
                height={24} 
                className="w-6 h-6 md:w-7 md:h-7"
              />
            </button>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
               <Image 
                 src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/logo-2.svg" 
                 alt="Priceoye.pk" 
                 width={130} 
                 height={48} 
                 className="w-28 md:w-[130px] h-auto object-contain"
                 priority
               />
            </Link>
          </div>

          {/* Center Section: Search Bar (Desktop Only as per common responsive patterns for this layout) */}
          <div className="hidden md:flex flex-grow max-w-[600px] mx-8">
            <div className="relative w-full">
              <form className="w-full">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full h-10 px-4 pr-10 rounded-[4px] border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm text-[#2C3E50] placeholder-[#999999]"
                />
                <button 
                  type="button" 
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Voice Search"
                >
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/mic-blue-3.svg" 
                    alt="voice search" 
                    width={18} 
                    height={23} 
                    className="w-[14px] h-[18px]"
                  />
                </button>
              </form>
            </div>
          </div>

            {/* Right Section: Auth Buttons */}
            <div className="flex items-center gap-3">
              {user ? (
                <div className="hidden md:flex items-center gap-3">
                  <span className="text-white text-sm">
                    {user.user_metadata?.full_name || user.email}
                  </span>
                  <button
                    onClick={signOut}
                    className="inline-flex items-center justify-center bg-white text-[#1E88E5] text-[14px] font-semibold px-5 py-1.5 rounded-[4px] hover:shadow-md transition-shadow"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link 
                    href="/login" 
                    className="hidden md:inline-flex items-center justify-center bg-white text-[#1E88E5] text-[14px] font-semibold px-5 py-1.5 rounded-[4px] hover:shadow-md transition-shadow"
                  >
                    Log in
                  </Link>
                  <Link 
                    href="/register" 
                    className="hidden md:inline-flex items-center justify-center bg-transparent border border-white text-white text-[14px] font-semibold px-5 py-1.5 rounded-[4px] hover:bg-white/10 transition-colors"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 transition-opacity" 
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-white z-[60] transform transition-transform duration-300 ease-in-out shadow-xl overflow-y-auto ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="bg-[#f5f5f5] p-4 flex flex-col gap-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/logo-2.svg" 
                        alt="Priceoye.pk" 
                        width={100} 
                        height={38} 
                        className="w-24 h-auto brightness-0 invert-[.3] grayscale" // Adjusting logo for light bg side menu
                        style={{ filter: "invert(46%) sepia(35%) saturate(996%) hue-rotate(170deg) brightness(88%) contrast(85%)" }} // Attempt to match brand blue roughly or just dark
                    />
                     <button 
                        onClick={toggleSidebar} 
                        className="p-1 rounded-full hover:bg-gray-200"
                    >
                        <X className="w-6 h-6 text-gray-500" />
                    </button>
                </div>
                
                  {user ? (
                    <div className="flex flex-col gap-2">
                      <p className="text-sm text-gray-700">
                        Welcome, <span className="font-semibold">{user.user_metadata?.full_name || user.email}</span>
                      </p>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                        <Link 
                            href="/login"
                            className="flex-1 bg-[#1E88E5] text-white text-center py-2 rounded-[4px] text-sm font-semibold"
                        >
                            Login
                        </Link>
                        <Link 
                            href="/register"
                            className="flex-1 bg-white border border-[#1E88E5] text-[#1E88E5] text-center py-2 rounded-[4px] text-sm font-semibold"
                        >
                            Register
                        </Link>
                    </div>
                  )}
            </div>

            {/* Sidebar Menu Items */}
            <nav className="flex-1 py-2">
                <ul className="flex flex-col">
                    <li>
                        <Link href="/track-order" className="flex items-center px-5 py-3 text-[#2C3E50] hover:bg-gray-50 transition-colors">
                            <Package className="w-5 h-5 mr-4 text-gray-400" />
                            <span className="text-[14px] font-normal">Track my Order</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/complaints" className="flex items-center px-5 py-3 text-[#2C3E50] hover:bg-gray-50 transition-colors">
                            <MessageSquareWarning className="w-5 h-5 mr-4 text-gray-400" />
                            <span className="text-[14px] font-normal">Launch a Complaint</span>
                        </Link>
                    </li>
                     
                     {/* Divider */}
                    <li className="my-2 border-t border-gray-100"></li>

                    <li>
                        <Link href="/account" className="flex items-center px-5 py-3 text-[#2C3E50] hover:bg-gray-50 transition-colors">
                            <User className="w-5 h-5 mr-4 text-gray-400" />
                            <span className="text-[14px] font-normal">My Account</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/notifications" className="flex items-center px-5 py-3 text-[#2C3E50] hover:bg-gray-50 transition-colors">
                             <Bell className="w-5 h-5 mr-4 text-gray-400" />
                            <span className="text-[14px] font-normal">Notifications</span>
                        </Link>
                    </li>
                      {user && (
                        <li>
                            <button onClick={handleLogout} className="w-full flex items-center px-5 py-3 text-[#2C3E50] hover:bg-gray-50 transition-colors">
                                <LogOut className="w-5 h-5 mr-4 text-gray-400" />
                                <span className="text-[14px] font-normal">Logout</span>
                            </button>
                        </li>
                      )}
                </ul>
            </nav>

            {/* Sidebar Footer Categories Preview */}
            <div className="p-4 bg-gray-50">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Top Categories</h4>
                <div className="grid grid-cols-2 gap-2">
                    {['Mobiles', 'Smart Watches', 'Earbuds', 'Laptops'].map((cat) => (
                        <Link key={cat} href={`/category/${cat.toLowerCase()}`} className="text-xs text-sidebar-foreground bg-white p-2 border border-gray-200 rounded text-center">
                            {cat}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
      </aside>
    </>
  );
}