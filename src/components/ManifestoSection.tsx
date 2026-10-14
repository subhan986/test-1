import React from 'react';
import { HERO_ASSETS } from '../data/furnitureData';

export const ManifestoSection: React.FC = () => {
  return (
    <section id="manifesto" className="w-full px-2 sm:px-4 py-8 sm:py-12 bg-[#eee7dc]/80 border-y border-[#dfd5c5]">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Kicker: WHY FROM US? */}
        <p className="text-[11px] uppercase font-mono tracking-[0.25em] text-[#8c5234] font-semibold mb-4">
          WHY FROM US?
        </p>

        {/* Big Serif Typography with inline miniature furniture preview chips */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#261e19] font-medium leading-[1.35] sm:leading-[1.4] tracking-tight">
          We are crafting amazing{' '}
          {/* Inline Blue Sofa */}
          <span className="inline-flex items-center align-middle mx-1.5 sm:mx-2 px-2 py-0.5 sm:py-1 rounded-xl bg-[#e4dacd] border border-[#cfbeab] shadow-xs translate-y-[-2px] sm:translate-y-[-4px]">
            <img
              src={HERO_ASSETS.heroBlueSofa}
              alt="Blue Modular Sofa"
              className="w-7 h-5 sm:w-10 sm:h-7 object-cover rounded-md"
              referrerPolicy="no-referrer"
            />
          </span>{' '}
          product that{' '}
          {/* Inline Green/Taupe Sofa */}
          <span className="inline-flex items-center align-middle mx-1.5 sm:mx-2 px-2 py-0.5 sm:py-1 rounded-xl bg-[#dcd2c4] border border-[#c4b5a3] shadow-xs translate-y-[-2px] sm:translate-y-[-4px]">
            <img
              src={HERO_ASSETS.modernMuse}
              alt="Plush Down-Feather Lounge"
              className="w-7 h-5 sm:w-10 sm:h-7 object-cover rounded-md"
              referrerPolicy="no-referrer"
            />
          </span>{' '}
          delight, constantly uplift the home, office{' '}
          {/* Inline Mustard Armchair */}
          <span className="inline-flex items-center align-middle mx-1.5 sm:mx-2 px-2 py-0.5 sm:py-1 rounded-xl bg-[#edd9c0] border border-[#d8be9c] shadow-xs translate-y-[-2px] sm:translate-y-[-4px]">
            <img
              src={HERO_ASSETS.chairMustard}
              alt="Mustard Curved Armchair"
              className="w-5 h-5 sm:w-7 sm:h-7 object-contain rounded-md"
              referrerPolicy="no-referrer"
            />
          </span>{' '}
          environment
        </h2>

      </div>
    </section>
  );
};
