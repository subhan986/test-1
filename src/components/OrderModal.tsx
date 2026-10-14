import React, { useState } from 'react';
import { X, MessageSquare, Check, Phone, ShieldCheck, ShoppingCart } from 'lucide-react';
import { ProductItem } from '../data/furnitureData';

interface OrderModalProps {
  product: ProductItem | null;
  currency: 'USD' | 'PKR';
  onClose: () => void;
  onAddToCart: (product: ProductItem) => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  product,
  currency,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedFinish, setSelectedFinish] = useState('American Walnut & Oak');
  const [needCustomDimensions, setNeedCustomDimensions] = useState(false);
  const [customSpecs, setCustomSpecs] = useState('');
  const [orderedSuccess, setOrderedSuccess] = useState(false);

  const price = currency === 'USD' 
    ? `$${(product.priceUSD * quantity).toFixed(2)}` 
    : `PKR ${(product.pricePKR * quantity).toLocaleString('en-PK')}`;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Salam TH Furnishers! I am interested in purchasing:\n\n• Item: ${product.name} (${price})\n• Quantity: ${quantity}\n• Finish: ${selectedFinish}\n${needCustomDimensions ? `• Custom Dimensions: ${customSpecs || 'Requested'}\n` : ''}\nIs this ready in stock or what is the lead time for Canal Road, Faisalabad?`
    );
    window.open(`https://wa.me/923009666700?text=${text}`, '_blank');
  };

  const handleConfirmOrder = () => {
    onAddToCart(product);
    setOrderedSuccess(true);
    setTimeout(() => {
      setOrderedSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1c1613]/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="bg-[#faf7f2]/95 backdrop-blur-2xl rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-[#e8ded3] shadow-[0_20px_50px_rgba(38,30,25,0.2)] relative overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {orderedSuccess ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-stone-900 font-semibold">
              Added to Your Order List!
            </h3>
            <p className="text-sm text-stone-600 max-w-sm mx-auto">
              Our Canal Road showroom team has reserved this item in your session.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Header Product Glance */}
            <div className="flex items-start gap-4 sm:gap-6 border-b border-stone-100 pb-5">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#f8f9fa] border border-stone-200/80 p-2 shrink-0 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 font-semibold">
                  {product.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 leading-tight">
                  {product.name}
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  {product.description}
                </p>
                <div className="font-sans font-bold text-xl text-stone-900 mt-2">
                  {price}
                </div>
              </div>
            </div>

            {/* Customization Options */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Timber & Upholstery Finish
                </label>
                <select
                  value={selectedFinish}
                  onChange={(e) => setSelectedFinish(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-[#fafafa] border border-stone-200 rounded-xl text-stone-900"
                >
                  <option value="American Walnut & Oak">Natural Oak & Seasoned Walnut</option>
                  <option value="Belgian Bouclé Ivory">Belgian Bouclé Ivory</option>
                  <option value="Italian Muted Taupe Velvet">Italian Muted Taupe Velvet</option>
                  <option value="Smoked Ash & Black Steel">Smoked Ash & Matte Steel</option>
                </select>
              </div>

              {/* Sizing toggle */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200">
                <div className="text-xs">
                  <span className="font-semibold block text-stone-900">Custom Architectural Dimensions</span>
                  <span className="text-stone-500 text-[11px]">Need special sizing for your room?</span>
                </div>
                <input
                  type="checkbox"
                  checked={needCustomDimensions}
                  onChange={(e) => setNeedCustomDimensions(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded cursor-pointer"
                />
              </div>

              {needCustomDimensions && (
                <div className="animate-fadeIn">
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Enter Desired Width / Depth / Height (Inches or Feet)
                  </label>
                  <input
                    type="text"
                    value={customSpecs}
                    onChange={(e) => setCustomSpecs(e.target.value)}
                    placeholder="e.g. 120 inch length, 40 inch depth"
                    className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg text-stone-900"
                  />
                </div>
              )}

              {/* Quantity Selector */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-semibold text-stone-700">Quantity</span>
                <div className="flex items-center gap-3 bg-stone-100 px-3 py-1.5 rounded-full">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-stone-700 hover:text-stone-950 font-bold px-1"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold text-stone-900">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-stone-700 hover:text-stone-950 font-bold px-1"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-stone-100 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider rounded-full flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp (+92 300 9666700)</span>
                </button>

                <button
                  type="button"
                  onClick={handleConfirmOrder}
                  className="w-full py-3 px-4 bg-[#945330] hover:bg-[#7e4322] text-white text-xs font-semibold uppercase tracking-wider rounded-full flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Order Bag</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-500" />
                <span>Showroom inspection available at Canal Road, Amin Town, Faisalabad</span>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};
