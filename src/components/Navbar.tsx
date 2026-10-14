import React, { useState } from 'react';
import { ChevronDown, ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  currency: 'USD' | 'PKR';
  onToggleCurrency: () => void;
  onOpenShop: () => void;
  cartCount: number;
  currentView: 'home' | 'products';
  onNavigateView: (view: 'home' | 'products') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currency,
  onToggleCurrency,
  onOpenShop,
  cartCount,
  currentView,
  onNavigateView,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full px-2 sm:px-4 py-2.5 bg-[#f7f3ed]/90 backdrop-blur-xl border-b border-[#e6ddd2] shadow-[0_4px_20px_-4px_rgba(38,30,25,0.04)] transition-all">
      <div className="w-full flex items-center justify-between">
        
        {/* Brand Logo with Architectural Icon matching screenshot */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onNavigateView('home')} 
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            {/* Custom geometric logo icon in dark walnut */}
            <div className="w-8 h-8 rounded-lg bg-[#261e19] flex items-center justify-center text-white shadow-xs">
              <svg 
                className="w-5 h-5 text-[#f4efe8]" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-sans font-bold text-lg sm:text-xl tracking-tight text-[#261e19] group-hover:text-[#8c5234] transition-colors">
                Kernova
              </span>
              <span className="text-[9px] tracking-widest text-[#8a7a70] uppercase -mt-1 font-mono">
                TH Furnishers
              </span>
            </div>
          </button>
        </div>

        {/* Center Navigation Links with Dropdowns matching mockup & View Toggle */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#4a3e35]">
          <button
            onClick={() => onNavigateView('home')}
            className={`py-1 transition-colors cursor-pointer ${
              currentView === 'home' ? 'text-[#261e19] font-semibold border-b-2 border-[#261e19]' : 'text-[#6b5c51] hover:text-[#261e19]'
            }`}
          >
            Overview
          </button>

          <button
            onClick={() => onNavigateView('products')}
            className={`py-1 transition-colors cursor-pointer inline-flex items-center gap-1.5 ${
              currentView === 'products' ? 'text-[#8c5234] font-semibold border-b-2 border-[#8c5234]' : 'text-[#6b5c51] hover:text-[#8c5234]'
            }`}
          >
            <span>Products</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#eee5dc] text-[#8c5234] border border-[#dfd4c7]">
              Studio
            </span>
          </button>

          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 200)}
              className="flex items-center gap-1 hover:text-[#261e19] transition-colors py-1 cursor-pointer"
            >
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#8a7a70]" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-[#faf7f2]/95 backdrop-blur-xl rounded-xl shadow-xl border border-[#e2d8cb] py-2 z-50 animate-fadeIn">
                <a href="#manifesto" className="block px-4 py-2 text-xs text-[#4a3e35] hover:bg-[#eee7dc]">
                  Interior Space Creation
                </a>
                <a href="#testimonials" className="block px-4 py-2 text-xs text-[#4a3e35] hover:bg-[#eee7dc]">
                  Architect Consultation
                </a>
                <a href="#footer" className="block px-4 py-2 text-xs text-[#4a3e35] hover:bg-[#eee7dc]">
                  Faisalabad Workshop & Delivery
                </a>
              </div>
            )}
          </div>

          <a href="#latest-collection" className="hover:text-[#261e19] transition-colors">
            Collections
          </a>
          <a href="#manifesto" className="hover:text-[#261e19] transition-colors">
            Bespoke
          </a>
        </nav>

        {/* Right Action: Currency Switcher & Earthy Terracotta Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleCurrency}
            className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#ede5dc] hover:bg-[#e4dbd0] text-[#3d3129] transition-colors cursor-pointer"
            title="Toggle USD / PKR Currency"
          >
            {currency === 'USD' ? 'USD ($)' : 'PKR (Rs)'}
          </button>

          <button
            onClick={onOpenShop}
            className="relative p-2 text-[#3d3129] hover:text-[#261e19] rounded-full hover:bg-[#ede5dc] transition-colors cursor-pointer"
            title="View Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#8c5234] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Earthy Terracotta/Clay Pill Button */}
          <button
            onClick={onOpenShop}
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-[#945330] hover:bg-[#7e4322] text-white font-sans text-xs font-semibold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            SHOP NOW
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-800 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 bg-white/95 backdrop-blur-xl rounded-xl p-5 border border-white/80 shadow-xl space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-stone-100">
            <button
              onClick={() => {
                onNavigateView('home');
                setMobileMenuOpen(false);
              }}
              className={`py-2 text-xs font-semibold rounded-lg text-center ${
                currentView === 'home' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => {
                onNavigateView('products');
                setMobileMenuOpen(false);
              }}
              className={`py-2 text-xs font-semibold rounded-lg text-center ${
                currentView === 'products' ? 'bg-[#2f65f6] text-white' : 'bg-blue-50 text-blue-600'
              }`}
            >
              Products Glass Page
            </button>
          </div>

          <a
            href="#latest-collection"
            onClick={() => {
              onNavigateView('home');
              setMobileMenuOpen(false);
            }}
            className="block py-2 text-sm font-medium text-stone-800 border-b border-stone-100"
          >
            Collections & Products
          </a>
          <a
            href="#spotlight"
            onClick={() => {
              onNavigateView('home');
              setMobileMenuOpen(false);
            }}
            className="block py-2 text-sm font-medium text-stone-800 border-b border-stone-100"
          >
            Executive Office Sofa
          </a>
          <a
            href="#testimonials"
            onClick={() => {
              onNavigateView('home');
              setMobileMenuOpen(false);
            }}
            className="block py-2 text-sm font-medium text-stone-800 border-b border-stone-100"
          >
            Customer Stories
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenShop();
            }}
            className="w-full mt-2 py-3 bg-[#2f65f6] text-white font-semibold rounded-full text-xs uppercase tracking-wider text-center"
          >
            SHOP NOW
          </button>
        </div>
      )}
    </header>
  );
};
