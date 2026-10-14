import React, { useState } from 'react';
import { MessageSquare, Menu, X, Phone } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/furnitureData';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenCustomStudio: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, onOpenCustomStudio }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e7e1d5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark in display face */}
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={() => handleNavClick('hero')} 
              className="text-left group cursor-pointer focus:outline-none"
            >
              <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-stone-900 group-hover:text-stone-700 transition-colors uppercase">
                TH Furnishers
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-stone-500 uppercase font-sans">
                Pakistan · Faisalabad
              </span>
            </button>
          </div>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-700">
            <button 
              onClick={() => handleNavClick('collections')} 
              className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 cursor-pointer"
            >
              Collections
            </button>
            <button 
              onClick={() => handleNavClick('custom-studio')} 
              className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 cursor-pointer"
            >
              Custom Dimensions
            </button>
            <button 
              onClick={() => handleNavClick('showroom')} 
              className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 cursor-pointer"
            >
              Showroom & Location
            </button>
            <button 
              onClick={() => handleNavClick('reviews')} 
              className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 cursor-pointer"
            >
              Reviews
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 cursor-pointer"
            >
              Craftsmanship
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=Salam%20TH%20Furnishers!%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20furniture%20collection.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-sm transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${SHOWROOM_INFO.phone}`}
              className="p-2 text-stone-700 hover:text-stone-900"
              title="Call Showroom"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-800 hover:text-stone-950 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e7e1d5] bg-[#faf8f5] px-6 py-5 space-y-4 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-3 text-base font-medium text-stone-800">
            <button 
              onClick={() => handleNavClick('collections')} 
              className="text-left py-2 border-b border-stone-200"
            >
              Collections & Catalog
            </button>
            <button 
              onClick={() => handleNavClick('custom-studio')} 
              className="text-left py-2 border-b border-stone-200"
            >
              Custom Dimensions Studio
            </button>
            <button 
              onClick={() => handleNavClick('showroom')} 
              className="text-left py-2 border-b border-stone-200"
            >
              Canal Road Showroom & Directions
            </button>
            <button 
              onClick={() => handleNavClick('reviews')} 
              className="text-left py-2 border-b border-stone-200"
            >
              Client Reviews (5.0 ★)
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="text-left py-2"
            >
              In-House Manufacturing
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=Salam%20TH%20Furnishers!%20I%20am%20interested%20in%20custom%20furniture.`}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 rounded-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: +92 300 9666700</span>
            </a>
            <a
              href={`tel:${SHOWROOM_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-stone-700 bg-stone-200/70 rounded-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Faisalabad Showroom</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
