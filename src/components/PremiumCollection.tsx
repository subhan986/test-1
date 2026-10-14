import React from 'react';
import { PREMIUM_COLLECTION, ProductItem } from '../data/furnitureData';
import { Plus } from 'lucide-react';

interface PremiumCollectionProps {
  currency: 'USD' | 'PKR';
  onSelectProduct: (product: ProductItem) => void;
}

export const PremiumCollection: React.FC<PremiumCollectionProps> = ({
  currency,
  onSelectProduct,
}) => {
  const formatPrice = (usd: number, pkr: number) => {
    if (currency === 'USD') {
      return `$${usd}`;
    }
    return `PKR ${pkr.toLocaleString('en-PK')}`;
  };

  return (
    <section id="premium-collection" className="w-full px-1 sm:px-2 py-8 bg-[#f5efe8]">
      <div className="w-full">
        
        {/* Header matching screenshot */}
        <div className="mb-6 text-center sm:text-left">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#261e19] font-medium tracking-tight">
            Our premium collection
          </h2>
        </div>

        {/* 4-Column Product Cards Grid with earthy tones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PREMIUM_COLLECTION.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProduct(item)}
              className="bg-[#faf7f2] rounded-xl p-3.5 sm:p-4 border border-[#e8ded3] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Product Isolated Image Area in Warm Muted Oatmeal */}
              <div className="w-full aspect-square rounded-xl bg-[#f2ece3] flex items-center justify-center p-4 mb-4 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Quick Add Overlay Button in Terracotta */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-[#8c5234] text-white flex items-center justify-center shadow-md">
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-1">
                <h3 className="font-sans font-bold text-sm text-[#261e19] group-hover:text-[#8c5234] transition-colors line-clamp-1">
                  {item.name}
                </h3>

                <div className="flex items-center justify-between pt-1">
                  <div className="font-sans font-bold text-sm text-[#261e19]">
                    {formatPrice(item.priceUSD, item.pricePKR)}
                  </div>
                  
                  {item.featureNote && (
                    <span className="text-[11px] text-[#736256] font-medium">
                      {item.featureNote}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
