import React from 'react';
import { 
  X, 
  MessageSquare, 
  Ruler, 
  Feather, 
  TreePine, 
  Sparkles, 
  Phone, 
  Check, 
  MapPin, 
  Clock 
} from 'lucide-react';
import { Product } from '../types/furniture';
import { SHOWROOM_INFO } from '../data/furnitureData';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onCustomizeThis: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onCustomizeThis,
}) => {
  if (!product) return null;

  const formatPKR = (amount: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Salam TH Furnishers Pakistan! I am inquiring about the "${product.name}" (${formatPKR(product.pricePKR)}).\n\nShowroom Location: ${product.showroomLocation}\nIs this piece currently in stock at Canal Road for inspection or what is the lead time?`
    );
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#ded7c8] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-stone-700 hover:text-stone-950 rounded-full transition-colors shadow-xs cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Image Gallery Column */}
          <div className="md:col-span-6 bg-stone-100 relative min-h-[320px] md:min-h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute bottom-4 left-4 right-4 bg-stone-950/80 backdrop-blur-md text-white p-3 rounded-xs text-xs">
              <div className="flex items-center gap-1.5 text-stone-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-mono">{product.showroomLocation}</span>
              </div>
            </div>
          </div>

          {/* Details & Inquire Column */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between text-xs text-stone-500 font-mono uppercase tracking-wider mb-2">
                <span>{product.category}</span>
                <span className="text-emerald-700 font-semibold">{product.availability}</span>
              </div>

              {/* Title & Price */}
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 leading-tight">
                {product.name}
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                {product.tagline}
              </p>

              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-sans text-2xl font-bold text-stone-950 tabular-nums">
                  {formatPKR(product.pricePKR)}
                </span>
                <span className="text-xs text-stone-500">
                  Includes in-house delivery & assembly within Faisalabad
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-stone-700 leading-relaxed mt-4 border-t border-stone-100 pt-4">
                {product.description}
              </p>

              {/* Specifications Matrix */}
              <div className="mt-5 space-y-3 bg-[#faf8f5] p-4 rounded-md border border-[#ede7dc]">
                <div className="flex items-start gap-2.5 text-xs text-stone-800">
                  <Ruler className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-stone-900">Standard Dimensions:</span>
                    <span>{product.dimensions.length} × {product.dimensions.width} × {product.dimensions.height}</span>
                    <span className="text-stone-500 block text-[11px] mt-0.5">
                      (Bespoke lengths and depths made to measure in our workshop)
                    </span>
                  </div>
                </div>

                {product.cushioning && (
                  <div className="flex items-start gap-2.5 text-xs text-stone-800">
                    <Feather className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-stone-900">Cushioning & Padding:</span>
                      <span>{product.cushioning}</span>
                    </div>
                  </div>
                )}

                {product.woodType && (
                  <div className="flex items-start gap-2.5 text-xs text-stone-800">
                    <TreePine className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-stone-900">Wood & Joinery:</span>
                      <span>{product.woodType}</span>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-2.5 text-xs text-stone-800">
                  <Clock className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-stone-900">Lead Time:</span>
                    <span>{product.leadTime}</span>
                  </div>
                </div>
              </div>

              {/* Architectural Features */}
              <div className="mt-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  Craftsmanship Highlights
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-700">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-stone-200 space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  onClick={handleWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-sm transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Check Availability on WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    onCustomizeThis(product);
                    onClose();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-stone-900 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-sm transition-colors cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-700" />
                  <span>Request Custom Dimensions</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-stone-400" />
                  <span>Direct Showroom Desk: +92 300 9666700</span>
                </div>
                <span>Canal Road, Amin Town, Faisalabad</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
