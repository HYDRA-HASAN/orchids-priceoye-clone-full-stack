'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Truck, 
  MessageSquareWarning, 
  User, 
  Bell, 
  LogOut 
} from 'lucide-react';

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      label: 'Track my Order',
      icon: <Truck className="w-[22px] h-[22px]" />,
      href: '/account/orders'
    },
    {
      label: 'Launch a Complaint',
      icon: <MessageSquareWarning className="w-[22px] h-[22px]" />,
      href: '/account/complaints'
    },
    {
      label: 'My Account',
      icon: <User className="w-[22px] h-[22px]" />,
      href: '/account'
    },
    {
      label: 'Notifications',
      icon: <Bell className="w-[22px] h-[22px]" />,
      href: '/account/notifications'
    },
    {
      label: 'Logout',
      icon: <LogOut className="w-[22px] h-[22px]" />,
      href: '/logout'
    }
  ];

  return (
    <div className="font-sans antialiased text-[#2C3E50]">
      {/* Trigger Button - Simulating the hamburger in the header */}
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
        aria-label="Open Menu"
      >
        <Menu className="w-7 h-7 text-[#2C3E50]" />
      </button>

      {/* Overlay Backdrop */}
      <div 
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ease-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar Drawer */}
      <aside 
        className={`fixed top-0 left-0 bottom-0 z-50 w-[85%] max-w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="flex flex-col h-full bg-white relative">
          
          {/* Header Section: Logo and Close Button */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4">
            <div className="relative w-[130px] h-[48px]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ca3df42-fbd7-4e8d-9d55-305933189c05-priceoye-pk/assets/svgs/logo-2.svg"
                alt="Priceoye.pk"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 -mr-2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto px-6 py-2">
            
            {/* Login Button */}
            <div className="mb-8">
              <Link 
                href="/login" 
                className="flex items-center justify-center w-full bg-[#1E88E5] text-white font-semibold text-[14px] py-3 rounded-[4px] shadow-sm hover:bg-[#1565C0] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Log in
              </Link>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col gap-1">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-4 py-4 px-2 border-b border-[#F5F5F5] last:border-0 hover:bg-[#F0F7FF] transition-colors rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[#999999] group-hover:text-[#1E88E5] transition-colors">
                    {item.icon}
                  </span>
                  <span className="text-[15px] font-medium text-[#2C3E50] group-hover:text-[#1E88E5] transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

          </div>
          
          {/* Optional Footer Decoration or Padding */}
          <div className="h-6" />
        </div>
      </aside>
    </div>
  );
}
