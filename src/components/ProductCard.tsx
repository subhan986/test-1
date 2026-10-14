import React from 'react';
import { Product } from '../types/furniture';
import { SHOWROOM_INFO } from '../data/furnitureData';
import { ArrowUpRight, MessageSquare, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onOpenCustomInquiry: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onOpenCustomInquiry,
}) => {
  const formatPKR = (amount: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleWhatsAppQuick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Salam TH Furnishers! I am interested in "${product.name}" (${formatPKR(product.pricePKR)}). Is it currently available to inspect at your Canal Road, Faisalabad showroom?`
    );
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div
      onClick={() => onSelect(product)}
      className="group bg-white rounded-lg border border-[#e5dfd3] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
    >
      {/* Visual Slot: 65-75% visual balance */}
      <div className="relative aspect-[4/3] w-full bg-stone-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Hover Quick Action Overlay */}
        <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(product);
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-900 bg-white/95 hover:bg-white rounded shadow-md transition-all cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Specifications</span>
          </button>
        </div>

        {/* Subtle Availability Status (Quiet unboxed badge in top corner) */}
        <div className="absolute top-3 left-3">
          <span className="text-[11px] font-medium tracking-wide px-2 py-1 bg-stone-900/80 backdrop-blur-sm text-stone-100 rounded-xs">
            {product.availability}
          </span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Category & Showroom Location Marker */}
          <div className="flex items-center justify-between text-xs text-stone-500 mb-1 font-mono uppercase tracking-wider">
            <span>{product.category}</span>
            <span>{product.dimensions.length}</span>
          </div>

          {/* Product Name */}
          <h3 className="font-serif text-lg sm:text-xl font-medium text-stone-900 group-hover:text-stone-700 transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-stone-600 line-clamp-2 mt-1">
            {product.tagline}
          </p>

          {/* Key Materials Unboxed Metadata */}
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-stone-500 mt-2.5">
            {product.materials.slice(0, 3).map((mat, idx) => (
              <React.Fragment key={mat}>
                <span>{mat}</span>
                {idx < Math.min(product.materials.length - 1, 2) && (
                  <span className="text-stone-300" aria-hidden="true">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Price & Primary Inquire Footer */}
        <div className="pt-3 border-t border-[#f0ece1] flex items-center justify-between gap-3">
          <div>
            <div className="font-sans font-semibold text-stone-900 text-base sm:text-lg tabular-nums">
              {formatPKR(product.pricePKR)}
            </div>
            <div className="text-[10px] text-stone-500 font-mono">
              Custom dimensions available
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleWhatsAppQuick}
              className="p-2 text-stone-700 hover:text-emerald-700 hover:bg-emerald-50 rounded transition-colors cursor-pointer"
              title="Quick WhatsApp availability check"
            >
              <MessageSquare className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelect(product)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 hover:text-stone-600 cursor-pointer"
            >
              <span>Specs</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
