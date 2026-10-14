import React, { useState } from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  Ruler, 
  Layers, 
  MapPin, 
  Send, 
  CheckCircle, 
  Calendar, 
  Feather, 
  ShieldCheck 
} from 'lucide-react';
import { SHOWROOM_INFO } from '../data/furnitureData';
import { CustomInquiryState } from '../types/furniture';

interface CustomStudioProps {
  initialItem?: string;
  onInquirySubmitted?: () => void;
}

export const CustomStudio: React.FC<CustomStudioProps> = ({ initialItem }) => {
  const [formData, setFormData] = useState<CustomInquiryState>({
    category: 'sofas',
    itemType: initialItem || 'Modern Muse L-Shape Down-Feather Sofa',
    dimensionMode: 'custom',
    customLength: '120',
    customWidth: '84',
    customHeight: '32',
    unit: 'inches',
    woodChoice: 'American Walnut (Matte Satin)',
    fabricChoice: 'Premium Belgian Cream Bouclé',
    cushioning: '100% Down-Feather Wrap + High-Density Foam Core',
    clientName: '',
    clientCity: 'Faisalabad',
    specialNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const itemOptions = [
    { label: 'Modern Muse L-Shape Down-Feather Sofa', category: 'sofas' },
    { label: 'The Orca Sculptural Coffee Table', category: 'tables' },
    { label: 'Custom Sovereign Master Bed Suite', category: 'beds' },
    { label: 'Twin Pedestal Fluted Dining Table', category: 'dining' },
    { label: 'Canal Road Down-Feather Cloud Lounge Chair', category: 'sofas' },
    { label: 'Custom Villa Architectural Package (Multiple Rooms)', category: 'all' },
  ];

  const woodOptions = [
    'American Walnut (Matte Satin)',
    'Natural White Oak (Organic Wire-brushed)',
    'Smoked Ash (Deep Charcoal Finish)',
    'Honed Travertine & Solid Timber Hybrid',
  ];

  const fabricOptions = [
    'Premium Belgian Cream Bouclé',
    'Italian Muted Taupe Velvet',
    'Textured Oatmeal Wool Blend',
    'Semi-Aniline Full Grain Leather',
  ];

  const cushioningOptions = [
    '100% Down-Feather Wrap + High-Density Foam Core (Signature TH Comfort)',
    'Dual Down-Feather Micro-Pocket Layer',
    'Firm Architectural Orthopaedic Foam',
  ];

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Salam TH Furnishers Pakistan!

I am reaching out regarding a furniture consultation:

• Item: ${formData.itemType}
• Requirement: ${formData.dimensionMode === 'custom' ? 'Custom Bespoke Dimensions' : 'Ready-Made Stock'}
• Dimensions: ${formData.customLength} × ${formData.customWidth} × ${formData.customHeight} ${formData.unit}
• Wood / Frame: ${formData.woodChoice}
• Upholstery: ${formData.fabricChoice}
• Cushioning: ${formData.cushioning}
• Destination City: ${formData.clientCity || 'Faisalabad'}
${formData.clientName ? `• Client Name: ${formData.clientName}` : ''}
${formData.specialNotes ? `• Space Notes: ${formData.specialNotes}` : ''}

Please let me know availability at your Canal Road, Faisalabad showroom or the estimated quotation and lead time. Thank you!`;

    const encoded = encodeURIComponent(formattedMessage);
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="custom-studio" className="py-16 bg-[#f5f0e6] border-y border-[#ded7c8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-500 font-semibold mb-2">
            In-House Manufacturing & Tailored Architecture
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-medium tracking-tight">
            Custom Dimensions & Availability Studio
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
            Every home possesses distinct proportions. Whether you require an extended 14-foot sectional, custom dimensions for an architectural bedroom alcove, or ready-made stock for immediate viewing in our Faisalabad showroom, configure your requirements below.
          </p>
        </div>

        {/* Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Column */}
          <form 
            onSubmit={handleWhatsAppSend}
            className="lg:col-span-7 bg-white rounded-lg border border-[#e5dfd3] shadow-sm p-6 sm:p-8 space-y-6"
          >
            {/* Step 1: Specific Item */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                1. What specific item are you looking for?
              </label>
              <select
                value={formData.itemType}
                onChange={(e) => setFormData({ ...formData, itemType: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-[#faf8f5] border border-stone-300 rounded-md text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-800"
              >
                {itemOptions.map((opt) => (
                  <option key={opt.label} value={opt.label}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Custom Dimensions vs Ready-Made Stock */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                2. Sizing Preference
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, dimensionMode: 'custom' })}
                  className={`p-3 text-left rounded-md border transition-all cursor-pointer ${
                    formData.dimensionMode === 'custom'
                      ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                      : 'bg-[#faf8f5] text-stone-700 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <span className="font-semibold block text-xs">Custom Dimensions</span>
                  <span className={`text-[11px] block mt-0.5 ${formData.dimensionMode === 'custom' ? 'text-stone-300' : 'text-stone-500'}`}>
                    Tailored to your architectural floor plan
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, dimensionMode: 'standard' })}
                  className={`p-3 text-left rounded-md border transition-all cursor-pointer ${
                    formData.dimensionMode === 'standard'
                      ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                      : 'bg-[#faf8f5] text-stone-700 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <span className="font-semibold block text-xs">Ready-Made Stock</span>
                  <span className={`text-[11px] block mt-0.5 ${formData.dimensionMode === 'standard' ? 'text-stone-300' : 'text-stone-500'}`}>
                    Inspect today at Canal Road Showroom
                  </span>
                </button>
              </div>
            </div>

            {/* Dimensions fields if Custom */}
            {formData.dimensionMode === 'custom' && (
              <div className="bg-[#faf8f5] p-4 rounded-md border border-[#ede7dc] space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-stone-700">
                  <span className="inline-flex items-center gap-1.5">
                    <Ruler className="w-3.5 h-3.5 text-stone-600" />
                    Enter Desired Dimensions
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, unit: 'inches' })}
                      className={`px-2 py-0.5 text-[11px] rounded ${formData.unit === 'inches' ? 'bg-stone-800 text-white' : 'text-stone-600'}`}
                    >
                      Inches
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, unit: 'feet' })}
                      className={`px-2 py-0.5 text-[11px] rounded ${formData.unit === 'feet' ? 'bg-stone-800 text-white' : 'text-stone-600'}`}
                    >
                      Feet
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] text-stone-500 block mb-1">Length</label>
                    <input
                      type="text"
                      value={formData.customLength}
                      onChange={(e) => setFormData({ ...formData, customLength: e.target.value })}
                      placeholder={formData.unit === 'inches' ? 'e.g. 120' : 'e.g. 10'}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded text-stone-900"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-stone-500 block mb-1">Width / Depth</label>
                    <input
                      type="text"
                      value={formData.customWidth}
                      onChange={(e) => setFormData({ ...formData, customWidth: e.target.value })}
                      placeholder={formData.unit === 'inches' ? 'e.g. 84' : 'e.g. 7'}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded text-stone-900"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-stone-500 block mb-1">Height</label>
                    <input
                      type="text"
                      value={formData.customHeight}
                      onChange={(e) => setFormData({ ...formData, customHeight: e.target.value })}
                      placeholder={formData.unit === 'inches' ? 'e.g. 32' : 'e.g. 2.8'}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded text-stone-900"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Material & Finishes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Timber & Finish
                </label>
                <select
                  value={formData.woodChoice}
                  onChange={(e) => setFormData({ ...formData, woodChoice: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-stone-300 rounded-md text-stone-900"
                >
                  {woodOptions.map((wood) => (
                    <option key={wood} value={wood}>
                      {wood}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Fabric & Upholstery
                </label>
                <select
                  value={formData.fabricChoice}
                  onChange={(e) => setFormData({ ...formData, fabricChoice: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-stone-300 rounded-md text-stone-900"
                >
                  {fabricOptions.map((fabric) => (
                    <option key={fabric} value={fabric}>
                      {fabric}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 4: Down-Feather Comfort Specification */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                Cushioning Fill & Density
              </label>
              <select
                value={formData.cushioning}
                onChange={(e) => setFormData({ ...formData, cushioning: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-stone-300 rounded-md text-stone-900"
              >
                {cushioningOptions.map((cush) => (
                  <option key={cush} value={cush}>
                    {cush}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 5: Contact & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  placeholder="e.g. Usman Malik"
                  className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-stone-300 rounded-md text-stone-900"
                >
                </input>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Destination City in Pakistan
                </label>
                <input
                  type="text"
                  value={formData.clientCity}
                  onChange={(e) => setFormData({ ...formData, clientCity: e.target.value })}
                  placeholder="e.g. Faisalabad, Lahore, Islamabad"
                  className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-stone-300 rounded-md text-stone-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Specific Architectural / Room Notes
              </label>
              <textarea
                value={formData.specialNotes}
                onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                rows={2}
                placeholder="Mention any doorway constraints, living room layout, or orientation preferences..."
                className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-stone-300 rounded-md text-stone-900"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-sm shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Send Custom Inquiry to WhatsApp (+92 300 9666700)</span>
              </button>
              
              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 mt-2.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Direct consultation with TH Furnishers master craftsperson in Faisalabad</span>
              </div>
            </div>

          </form>

          {/* Right Column: Live Architectural Specification Summary Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-stone-900 text-stone-100 rounded-lg p-6 sm:p-7 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <span className="text-xs uppercase font-mono tracking-widest text-stone-400">
                  Specification Sheet
                </span>
                <span className="text-[11px] px-2 py-0.5 bg-amber-900/60 text-amber-300 rounded font-mono">
                  Bespoke Crafting
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-normal text-white">
                  {formData.itemType}
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  {formData.dimensionMode === 'custom' 
                    ? `Configured to: ${formData.customLength} × ${formData.customWidth} × ${formData.customHeight} ${formData.unit}`
                    : 'Standard Showroom Proportions'
                  }
                </p>
              </div>

              <div className="space-y-3 text-xs border-t border-stone-800 pt-4">
                <div className="flex items-center justify-between text-stone-300">
                  <span className="text-stone-400">Finish:</span>
                  <span className="font-medium text-right">{formData.woodChoice}</span>
                </div>
                <div className="flex items-center justify-between text-stone-300">
                  <span className="text-stone-400">Upholstery:</span>
                  <span className="font-medium text-right">{formData.fabricChoice}</span>
                </div>
                <div className="flex items-start justify-between text-stone-300 gap-2">
                  <span className="text-stone-400 shrink-0">Cushioning:</span>
                  <span className="font-medium text-right text-[11px]">{formData.cushioning}</span>
                </div>
                <div className="flex items-center justify-between text-stone-300">
                  <span className="text-stone-400">Manufacturing Base:</span>
                  <span className="font-medium">Faisalabad Workshop</span>
                </div>
                <div className="flex items-center justify-between text-stone-300">
                  <span className="text-stone-400">Estimated Lead Time:</span>
                  <span className="font-mono text-emerald-400">
                    {formData.dimensionMode === 'standard' ? 'Ready for immediate dispatch' : '14 – 21 Days Crafting'}
                  </span>
                </div>
              </div>

              <div className="bg-stone-800/80 p-3.5 rounded border border-stone-700 text-xs text-stone-300 space-y-1">
                <div className="flex items-center gap-1.5 text-stone-200 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Showroom Availability Check</span>
                </div>
                <p className="text-[11px] text-stone-400">
                  You can also visit our Canal Road showroom to test fabric swatches, inspect solid wood joints, and experience down-feather comfort in person.
                </p>
              </div>
            </div>

            {/* In-House Guarantee */}
            <div className="bg-white rounded-lg border border-[#e5dfd3] p-5 shadow-2xs space-y-2">
              <h4 className="font-serif text-lg text-stone-900 font-medium">
                The TH Furnishers Pakistan Standard
              </h4>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Seasoned termite-treated solid hardwood frames</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Double-doweled and reinforced corner-blocked joints</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Genuine down-feather channeled baffling to prevent clumping</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
