import React from 'react';
import { Layers, ShieldCheck, Hammer, Sparkles, Feather, Compass } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/furnitureData';

export const CraftsmanshipSection: React.FC = () => {
  const pillars = [
    {
      step: '01',
      title: 'In-House Kiln Seasoning',
      description: 'We source sustainably harvested American walnut, ash, and seasoned pine, drying them to optimal moisture content for multi-generational stability in Pakistan’s climate.',
      icon: Hammer,
    },
    {
      step: '02',
      title: 'Down-Feather Channel Quilting',
      description: 'Our signature cushions employ dual-chamber down-feather envelopes over high-resilience foam cores, preventing feather leakage while providing the ultimate sink-in feel.',
      icon: Feather,
    },
    {
      step: '03',
      title: 'Architectural Tailoring',
      description: 'Every curve, radius, and chamfer is calibrated by our in-house furniture architects in Faisalabad to integrate seamlessly with residential and commercial blueprints.',
      icon: Compass,
    },
    {
      step: '04',
      title: 'Double-Doweled Joinery',
      description: 'Zero flat-pack shortcuts. All frames are mortise-and-tenon reinforced with corner blocking and stress-tested before upholstery.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-20 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-semibold mb-2">
            The Faisalabad Workshop
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight">
            In-House Manufacturing & Contemporary Craftsmanship
          </h2>
          <p className="text-sm sm:text-base text-stone-300 mt-4 leading-relaxed">
            Unlike standard showrooms that resell imported goods, TH Furnishers operates a dedicated manufacturing facility in Faisalabad. This gives clients complete authority over dimensions, cushion firmness, timber selection, and bespoke architectural detailing.
          </p>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.step} 
                className="bg-stone-800/60 rounded-lg p-6 border border-stone-800 flex flex-col justify-between space-y-4 hover:border-stone-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-stone-400 font-mono text-xs mb-4">
                    <span>{pillar.step}</span>
                    <Icon className="w-4 h-4 text-amber-400" />
                  </div>
                  <h3 className="font-serif text-lg text-white font-medium mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-serif text-lg text-white">
              Have an architect’s blueprint or custom moodboard?
            </h4>
            <p className="text-xs text-stone-400">
              Send your room layouts to our WhatsApp engineering team for structural feasibility analysis.
            </p>
          </div>
          
          <a
            href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=Salam%20TH%20Furnishers!%20I%20have%20an%20architectural%20blueprint%20for%20a%20residence%20and%20would%20like%20to%20discuss%20custom%20furniture.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-900 bg-white hover:bg-stone-200 rounded-sm transition-colors cursor-pointer shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Consult Workshop Architect</span>
          </a>
        </div>

      </div>
    </section>
  );
};
