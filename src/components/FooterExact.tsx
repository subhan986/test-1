import React, { useState } from 'react';
import { HERO_ASSETS } from '../data/furnitureData';
import { Check } from 'lucide-react';

interface FooterExactProps {
  onJoinClick: () => void;
}

export const FooterExact: React.FC<FooterExactProps> = ({ onJoinClick }) => {
  const [emailInput, setEmailInput] = useState('');
  const [joined, setJoined] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setJoined(true);
      setTimeout(() => setJoined(false), 3000);
      setEmailInput('');
    } else {
      onJoinClick();
    }
  };

  return (
    <footer id="footer" className="w-full bg-[#1c1613] text-[#d5cbbe] pt-10 pb-8 px-2 sm:px-4 rounded-t-2xl">
      <div className="w-full space-y-8">
        
        {/* Main 4-Column Navigation Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-3 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <svg className="w-4 h-4 text-[#e8dfd5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="font-sans font-bold text-lg text-white tracking-tight">
                Kernova
              </span>
            </div>
            <p className="text-xs text-[#a39486] leading-relaxed">
              Curated luxury furniture & interior space creation with contemporary minimalist craftsmanship.
            </p>
          </div>

          {/* Col 2: Discover */}
          <div className="md:col-span-2 space-y-2">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Discover
            </h4>
            <ul className="space-y-1.5 text-xs text-[#a39486]">
              <li><a href="#latest-collection" className="hover:text-white transition-colors">Armchairs</a></li>
              <li><a href="#spotlight" className="hover:text-white transition-colors">Executive Sofas</a></li>
              <li><a href="#premium-collection" className="hover:text-white transition-colors">Down-Feather Living</a></li>
              <li><a href="#manifesto" className="hover:text-white transition-colors">Space Planning</a></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="md:col-span-2 space-y-2">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li><a href="#testimonials" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="https://instagram.com/thfurnisherspakistan" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#footer" className="hover:text-white transition-colors">Faisalabad Workshop</a></li>
              <li><a href="#footer" className="hover:text-white transition-colors">Canal Road Gallery</a></li>
            </ul>
          </div>

          {/* Col 4: Support */}
          <div className="md:col-span-2 space-y-2">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li><a href="https://wa.me/923009666700" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp Desk</a></li>
              <li><a href="tel:+923009666700" className="hover:text-white transition-colors">+92 300 9666700</a></li>
              <li><a href="#footer" className="hover:text-white transition-colors">Custom Blueprints</a></li>
              <li><a href="#footer" className="hover:text-white transition-colors">White Glove Delivery</a></li>
            </ul>
          </div>

          {/* Col 5: Right Copyright & Socials */}
          <div className="md:col-span-3 text-left md:text-right space-y-3">
            <p className="text-xs text-stone-400">
              © Kernova 25 · TH Furnishers Pakistan.
              <br />All rights reserved.
            </p>
            <div className="flex items-center md:justify-end gap-3 text-xs text-stone-400">
              <a href="#" className="hover:text-white transition-colors">Dribbble</a>
              <span>·</span>
              <a href="https://instagram.com/thfurnisherspakistan" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>

        </div>

        {/* Bottom Floating Membership / Promo Banner in roasted chestnut and terracotta */}
        <div className="bg-[#28211b] rounded-2xl p-4 sm:p-5 border border-[#3d3229] flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg">
          
          {/* Left Mini Blue Sofa Thumbnail */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="w-20 h-14 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-black/40">
              <img
                src={HERO_ASSETS.heroBlueSofa}
                alt="Mini Blue Sofa"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="text-left">
              <h5 className="font-serif text-base text-[#faf7f2] font-medium">
                Find out how in-style furnitures
              </h5>
              <p className="text-xs text-[#a8988a] max-w-sm line-clamp-1">
                Be a member and get modern aesthetics interior design tips and exclusive deals.
              </p>
            </div>
          </div>

          {/* Right Action / Email or Join Button */}
          <form onSubmit={handleJoin} className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your email"
              className="px-3.5 py-2 text-xs bg-black/40 border border-[#4a3e35] rounded-full text-white placeholder:text-[#8a7c70] focus:outline-none focus:border-[#945330] w-full sm:w-48"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#945330] hover:bg-[#7e4322] text-white font-sans text-xs font-semibold uppercase tracking-wider rounded-full shadow-md transition-all shrink-0 cursor-pointer"
            >
              {joined ? (
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Done
                </span>
              ) : (
                'JOIN NOW'
              )}
            </button>
          </form>

        </div>

      </div>
    </footer>
  );
};
