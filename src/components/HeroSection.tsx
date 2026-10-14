import React from 'react';
import { HERO_ASSETS } from '../data/furnitureData';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="w-full px-1 sm:px-2 pt-1 pb-4">
      <div className="w-full">
        
        {/* Outer Frame with Rounded Container and tight edge cushioning */}
        <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[580px] rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-stone-200/90 bg-stone-900 group">
          
          {/* Main Hero Background Image */}
          <img
            src={HERO_ASSETS.heroBlueSofa}
            alt="Shape your space with inspired pieces - Royal blue sofa in architectural living space"
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />

          {/* Gradients for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Hero Bottom-Left Floating Overlay Content matching mockup */}
          <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-12 max-w-2xl text-left pointer-events-auto">
            
            {/* Pill Capsule Badge: SPECIALIZED INTERIOR SPACE CREATION */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>SPECIALIZED INTERIOR SPACE CREATION</span>
            </div>

            {/* Exact Serif Headline: Shape your space with inspired pieces */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-medium leading-[1.1] tracking-tight drop-shadow-sm mb-4">
              Shape your space with inspired pieces
            </h1>

            {/* Quick interactive route */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-950 hover:bg-stone-100 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md cursor-pointer group/btn"
              >
                <span>View Collection</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              
              <span className="text-xs text-stone-300 hidden sm:inline-block">
                Down-Feather Living · Solid Hardwood · Custom Sizing
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
