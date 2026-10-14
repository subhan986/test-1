import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Eye } from 'lucide-react';
import { FLAGSHIP_IMAGES } from '../data/furnitureData';

interface LookbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProductById: (productId: string) => void;
}

export const LookbookModal: React.FC<LookbookModalProps> = ({
  isOpen,
  onClose,
  onSelectProductById,
}) => {
  if (!isOpen) return null;

  const slides = [
    {
      title: 'Flagship Living Showroom',
      caption: 'Canal Road Showroom displaying the Modern Muse Down-Feather Sectional & Sculptural Tables',
      image: FLAGSHIP_IMAGES.hero,
      productId: 'th-modern-muse-sofa',
    },
    {
      title: 'The Orca Table',
      caption: 'Sculpted American walnut organic silhouette resting on a rough-hewn travertine base',
      image: FLAGSHIP_IMAGES.orcaTable,
      productId: 'th-orca-table',
    },
    {
      title: 'Modern Muse Sectional',
      caption: 'Contemporary low-profile down-feather sectional in Belgian ivory bouclé',
      image: FLAGSHIP_IMAGES.modernMuse,
      productId: 'th-modern-muse-sofa',
    },
    {
      title: 'The Sovereign Master Bed Suite',
      caption: 'Curved fluted headboard in Italian velvet with integrated floating walnut nightstands',
      image: FLAGSHIP_IMAGES.luxuryBed,
      productId: 'th-master-bed-suite',
    },
    {
      title: 'Architectural Twin Pedestal Dining Suite',
      caption: 'Solid walnut chamfered tabletop with fluted twin cylindrical columns',
      image: FLAGSHIP_IMAGES.diningTable,
      productId: 'th-architectural-dining-suite',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const current = slides[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative max-w-5xl w-full max-h-[95vh] flex flex-col bg-stone-900 rounded-lg overflow-hidden border border-stone-800 shadow-2xl">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 text-stone-200">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
              TH Furnishers Pakistan Lookbook
            </span>
            <h3 className="font-serif text-lg text-white font-medium">
              {current.title} ({currentIndex + 1} of {slides.length})
            </h3>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-full transition-colors cursor-pointer"
            aria-label="Close lookbook"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image View */}
        <div className="relative flex-1 min-h-[400px] sm:min-h-[500px] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-contain max-h-[65vh]"
            referrerPolicy="no-referrer"
          />

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-stone-900/70 hover:bg-stone-900 text-white rounded-full backdrop-blur-sm transition-all cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-stone-900/70 hover:bg-stone-900 text-white rounded-full backdrop-blur-sm transition-all cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Footer with caption & direct product link */}
        <div className="p-4 sm:p-5 bg-stone-900 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs sm:text-sm text-stone-300">
              {current.caption}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-stone-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>P-3, Canal Road, Amin Town, Faisalabad</span>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                onClose();
                onSelectProductById(current.productId);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-900 bg-white hover:bg-stone-200 rounded-sm transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Piece Specs</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
