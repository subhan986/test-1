import React from 'react';
import { SHOWROOM_INFO } from '../data/furnitureData';
import { Phone, MapPin, MessageSquare, Globe, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#18181b] text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-2xl font-normal text-white uppercase tracking-wider block">
              TH Furnishers Pakistan
            </span>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Luxury furniture and interior design brand located in Faisalabad, Pakistan. Specializing in down-feather sectionals, custom master bed sets, solid walnut dining, and bespoke architectural craftsmanship.
            </p>
            <div className="pt-2 text-xs text-stone-500 font-mono">
              Rating: 5.0 ★ Google Verified · Amin Town, Canal Road
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Collections & Studio
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button 
                  onClick={() => onNavigate('collections')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Modern Muse Living Room
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('collections')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Orca Sculptural Coffee Table
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('collections')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sovereign Master Bed Suites
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('collections')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Twin Pedestal Dining Tables
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('custom-studio')}
                  className="hover:text-white transition-colors cursor-pointer text-amber-300"
                >
                  Custom Dimensions Studio →
                </button>
              </li>
            </ul>
          </div>

          {/* Showroom & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Canal Road Showroom
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>P-3, Near UBL Bank, Kashmir Bridge, Canal Road, Amin Town, Faisalabad</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                <a href={`tel:${SHOWROOM_INFO.phone}`} className="hover:text-white">
                  {SHOWROOM_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=Salam%20TH%20Furnishers!`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: +92 300 9666700
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-stone-400 shrink-0" />
                <a 
                  href={SHOWROOM_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Instagram: @thfurnisherspakistan
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom hairline & copyright */}
        <div className="mt-12 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} TH Furnishers Pakistan. Handcrafted in Faisalabad. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href={SHOWROOM_INFO.googleMapsUrl} 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-stone-300"
            >
              Directions on Canal Road
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
