import React from 'react';
import { HERO_ASSETS } from '../data/furnitureData';

interface SpotlightSectionProps {
  currency: 'USD' | 'PKR';
  onBuyNow: () => void;
}

export const SpotlightSection: React.FC<SpotlightSectionProps> = ({
  currency,
  onBuyNow,
}) => {
  const priceUSD = 2850.65;
  const pricePKR = 795000;

  const displayPrice = currency === 'USD' ? `$${priceUSD.toFixed(2)}` : `PKR ${pricePKR.toLocaleString('en-PK')}`;

  return (
    <section id="spotlight" className="w-full px-1 sm:px-2 py-8 bg-[#f5efe8]">
      <div className="w-full">
        
        {/* Top Header matching exact screenshot */}
        <div className="text-center max-w-xl mx-auto mb-4">
          <p className="text-[11px] uppercase font-mono tracking-[0.25em] text-[#8c5234] font-semibold mb-1">
            EXCELLENT QUALITY
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#261e19] font-medium tracking-tight">
            Executive office sofa
          </h2>
        </div>

        {/* Center Spotlight Card with warm travertine earthy tones */}
        <div className="bg-[#faf7f2] rounded-xl sm:rounded-2xl p-4 sm:p-7 border border-[#e8ded3] shadow-[0_12px_40px_-5px_rgba(38,30,25,0.04)] relative overflow-hidden group">
          
          {/* Main Hero Product Image */}
          <div className="w-full h-[220px] sm:h-[320px] flex items-center justify-center my-1">
            <img
              src={HERO_ASSETS.spotlightSofa}
              alt="Executive office sofa with natural oak legs and grey upholstery"
              className="max-h-full max-w-full object-contain group-hover:scale-103 transition-transform duration-500 ease-out"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Bottom Info Bar matching screenshot */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#eee5dc]">
            <p className="text-xs sm:text-sm text-[#736256] max-w-md leading-relaxed">
              Smooth, innovative office sofa collection with comfortable posture and durable seasoned hardwood frame.
            </p>

            <div className="flex items-center gap-4 self-end sm:self-auto">
              <span className="font-sans font-bold text-xl sm:text-2xl text-[#261e19] tabular-nums">
                {displayPrice}
              </span>
              
              <button
                onClick={onBuyNow}
                className="px-6 py-2.5 bg-[#945330] hover:bg-[#7e4322] text-white font-sans text-xs font-semibold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                BUY NOW
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
