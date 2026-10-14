import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LATEST_COLLECTION, ProductItem } from '../data/furnitureData';

interface LatestCollectionProps {
  currency: 'USD' | 'PKR';
  onSelectProduct: (product: ProductItem) => void;
}

export const LatestCollection: React.FC<LatestCollectionProps> = ({
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
    <section id="latest-collection" className="w-full px-1 sm:px-2 py-6">
      <div className="w-full">
        
        {/* Header Row matching exact screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#261e19] font-medium tracking-tight">
            Explore latest collection
          </h2>
          <p className="text-xs sm:text-sm text-[#736256] font-normal">
            Furniture that blends with your personal style
          </p>
        </div>

        {/* 3 Horizontal Cards Grid with earthy stone and sand tones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {LATEST_COLLECTION.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProduct(item)}
              className="bg-[#faf7f2]/90 hover:bg-[#ffffff] backdrop-blur-md rounded-xl p-3 sm:p-4 border border-[#e8dfd5] hover:border-[#dbcbbd] shadow-[0_4px_20px_rgba(38,30,25,0.03)] hover:shadow-[0_8px_30px_rgba(38,30,25,0.06)] transition-all duration-300 flex items-center gap-3.5 group cursor-pointer relative overflow-hidden"
            >
              {/* Subtle warm travertine highlight */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#ede5dc]/60 to-transparent rounded-bl-full pointer-events-none" />

              {/* Left: Product Thumbnail Container in Muted Oatmeal / Clay */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-[#f2ece3] p-2 shrink-0 flex items-center justify-center overflow-hidden border border-[#e5dcce] shadow-2xs">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right: Info & Circular Arrow Button */}
              <div className="flex-1 flex flex-col justify-between h-28 sm:h-32 py-1">
                <div>
                  <h3 className="font-sans font-bold text-base text-[#261e19] group-hover:text-[#8c5234] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#736256] line-clamp-2 mt-1">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="font-sans font-bold text-sm text-[#261e19]">
                    {formatPrice(item.priceUSD, item.pricePKR)}{' '}
                    <span className="text-[10px] text-[#8a7a70] font-normal uppercase">
                      / {currency}
                    </span>
                  </div>

                  {/* Circular Arrow Button with terracotta hover */}
                  <div className="w-7 h-7 rounded-full bg-white border border-[#d9ccbe] group-hover:border-[#8c5234] group-hover:bg-[#8c5234] text-[#4a3e35] group-hover:text-white flex items-center justify-center transition-all shadow-2xs">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
