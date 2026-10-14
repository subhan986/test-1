import React, { useState } from 'react';
import { TESTIMONIALS, HERO_ASSETS } from '../data/furnitureData';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface TestimonialsSectionProps {
  currency: 'USD' | 'PKR';
  onSpotlightClick: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  currency,
  onSpotlightClick,
}) => {
  const [activeTestimonialId, setActiveTestimonialId] = useState('test-3');
  const [showHotspotTooltip, setShowHotspotTooltip] = useState(true);

  const activeReview = TESTIMONIALS.find((t) => t.id === activeTestimonialId) || TESTIMONIALS[2];

  const sofaPrice = currency === 'USD' ? '$450' : 'PKR 125,000';

  return (
    <section id="testimonials" className="w-full px-1 sm:px-2 py-8 bg-[#f7f3ed]">
      <div className="w-full">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-6">
          <p className="text-[11px] uppercase font-mono tracking-[0.25em] text-[#8c5234] font-semibold mb-1">
            TESTIMONIALS
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#261e19] font-medium tracking-tight">
            Hear from happy customers
          </h2>
        </div>

        {/* 2-Column Layout matching screenshot with elevated earthy glassmorphism reviews UI */}
        <div className="rounded-2xl bg-[#faf7f2]/90 backdrop-blur-2xl p-4 sm:p-6 lg:p-7 border border-[#e8dfd5] shadow-[0_14px_45px_-8px_rgba(38,30,25,0.04)] relative overflow-hidden">
          
          {/* Ambient warm sheen layer */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-[#ede5dc]/60 via-[#dfd4c7]/20 to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-tl from-[#e5dcd1]/50 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: Stack of Customer Cards */}
            <div className="lg:col-span-5 space-y-2.5">
              {TESTIMONIALS.map((t) => {
                const isActive = t.id === activeTestimonialId;
                return (
                  <div
                    key={t.id}
                    onClick={() => setActiveTestimonialId(t.id)}
                    className={`rounded-xl p-3 sm:p-4 transition-all duration-300 cursor-pointer relative overflow-hidden ${
                      isActive
                        ? 'bg-white backdrop-blur-xl border border-[#d9ccbe] shadow-md translate-x-1'
                        : 'bg-[#f4efe8]/70 hover:bg-white backdrop-blur-md border border-[#e8dfd5] shadow-2xs'
                    }`}
                  >
                    {/* Active Accent Bar in Terracotta */}
                    {isActive && (
                      <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#8c5234]" />
                    )}

                    <div className="flex items-start gap-3 pl-1">
                      {/* Styled Customer Avatar with ambient ring */}
                      <div
                        className={`w-11 h-11 rounded-full ${t.avatarColor} text-white font-bold flex items-center justify-center shrink-0 shadow-sm text-sm ring-2 ${
                          isActive ? 'ring-[#8c5234]/40 ring-offset-2' : 'ring-white/80'
                        }`}
                      >
                        {t.avatarLetter}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-sans font-bold text-sm text-[#261e19] truncate">
                            {t.name}
                          </h4>
                          
                          {/* 5-Star Rating */}
                          <div className="flex items-center text-amber-600 text-xs shrink-0">
                            {'★★★★★'}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-[#736256] mt-0.5">
                          <span>{t.role}</span>
                          <span className="text-stone-300">·</span>
                          <span className="text-[#8c5234] font-medium text-[11px] flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 inline shrink-0" />
                            Verified Client
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Review Quote for Active Customer */}
                    {isActive && (
                      <div className="mt-3 pt-3 border-t border-[#ede5dc] pl-1 animate-fadeIn">
                        <p className="text-xs sm:text-sm text-[#3d3129] leading-relaxed italic font-serif">
                          "{t.feedback}"
                        </p>

                        <div className="flex items-center justify-between text-[11px] text-[#8a7a70] font-mono mt-2 pt-1 border-t border-[#f4efe8]">
                          <span>Canal Road, Faisalabad Residence</span>
                          <span className="text-[#8c5234] font-sans font-semibold">Verified Space Design</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: Room Photo with Interactive Floating Hotspot Tag */}
            <div className="lg:col-span-7">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-[#e8dfd5] bg-stone-100 aspect-[4/3] group">
                <img
                  src={HERO_ASSETS.testimonialRoom}
                  alt="Minimalist living room with modern light blue sofa and wooden coffee table"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle contrast scrim for bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Top Corner Badge in Warm Sand Glass */}
                <div className="absolute top-3 left-3 bg-[#faf7f2]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/80 shadow-xs flex items-center gap-1.5 text-[11px] text-[#261e19] font-medium">
                  <Sparkles className="w-3 h-3 text-[#8c5234]" />
                  <span>Customer Living Space</span>
                </div>

                {/* Bottom Bar Info */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="font-serif italic text-stone-200 text-xs sm:text-sm">
                    "Colors and deep ergonomic comfort are commendable"
                  </span>
                  <button
                    onClick={onSpotlightClick}
                    className="px-3 py-1 rounded-full bg-white/25 hover:bg-white/40 backdrop-blur-md text-white text-[11px] font-semibold transition-colors cursor-pointer shrink-0"
                  >
                    View Room Furniture Specs
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Review Trust Matrix */}
          <div className="mt-5 pt-4 border-t border-[#e8dfd5] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6b5c51]">
            <div className="flex items-center gap-3">
              <span className="font-serif font-bold text-[#261e19] text-base">5.0 ★</span>
              <span>Based on 140+ verified residential deliveries in Pakistan</span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-[#8a7a70] font-mono">
              <span>Canal Road Showroom Verified</span>
              <span>·</span>
              <span>100% In-House Woodcraft</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
