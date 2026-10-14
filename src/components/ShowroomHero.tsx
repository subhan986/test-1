import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  MessageSquare, 
  Share2, 
  Bookmark, 
  Globe, 
  Check, 
  Clock, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { SHOWROOM_INFO, FLAGSHIP_IMAGES } from '../data/furnitureData';

interface ShowroomHeroProps {
  onExploreClick: () => void;
  onCustomDimensionsClick: () => void;
  onViewShowroomMap: () => void;
  onOpenPhotos: () => void;
}

export const ShowroomHero: React.FC<ShowroomHeroProps> = ({
  onExploreClick,
  onCustomDimensionsClick,
  onViewShowroomMap,
  onOpenPhotos,
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [currentTimePKT, setCurrentTimePKT] = useState('');

  // Calculate live Pakistan Time (UTC+5) for showroom open/close status
  useEffect(() => {
    const updateShowroomHours = () => {
      try {
        const now = new Date();
        // Convert to Pakistan Time
        const pktString = now.toLocaleString('en-US', { timeZone: 'Asia/Karachi', hour12: false, hour: 'numeric', minute: 'numeric' });
        const [hourStr, minStr] = pktString.split(':');
        const hour = parseInt(hourStr, 10);
        setCurrentTimePKT(`${hour % 12 || 12}:${minStr} ${hour >= 12 ? 'PM' : 'AM'} PKT`);
        // Showroom hours: 11:00 AM to 10:00 PM (11:00 to 22:00)
        setIsOpenNow(hour >= 11 && hour < 22);
      } catch {
        // Fallback
        setIsOpenNow(true);
      }
    };

    updateShowroomHours();
    const interval = setInterval(updateShowroomHours, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: 'TH Furnishers Pakistan | Luxury Furniture Faisalabad',
      text: 'Explore luxury furniture, down-feather sofas, and custom bed sets at TH Furnishers Canal Road, Faisalabad.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2500);
    } catch {
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2500);
    }
  };

  const handleSaveToggle = () => {
    setIsSaved(!isSaved);
  };

  return (
    <section id="hero" className="relative pt-6 pb-16 bg-[#faf8f5] border-b border-[#e7e1d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Google Profile / Showroom Overview Card (Matching User Brief) */}
        <div className="bg-white rounded-lg border border-[#e5dfd3] shadow-sm p-5 sm:p-6 mb-8 transition-shadow hover:shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Identity & Status */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <h1 className="font-serif text-2xl sm:text-3xl text-stone-900 font-semibold tracking-tight">
                  TH Furnishers Pakistan
                </h1>
                
                {/* Rating & Category (Clean metadata, no pill badge) */}
                <div className="flex items-center gap-1.5 text-xs text-stone-600 font-sans">
                  <span className="font-semibold text-amber-700 flex items-center">
                    5.0 ★★★★★
                  </span>
                  <span className="text-stone-400">·</span>
                  <span className="text-stone-600">(1 Google Review)</span>
                  <span className="text-stone-400">·</span>
                  <span className="text-stone-700">Furniture store in Faisalabad</span>
                  <span className="text-stone-400">·</span>
                  <span className={`inline-flex items-center font-medium ${isOpenNow ? 'text-emerald-700' : 'text-stone-500'}`}>
                    <Clock className="w-3.5 h-3.5 mr-1 inline" />
                    {isOpenNow ? 'Open Now (11 AM – 10 PM)' : 'Closed · Opens 11:00 AM'}
                  </span>
                </div>
              </div>

              {/* Showroom Address */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-600">
                <MapPin className="w-4 h-4 text-stone-500 shrink-0" />
                <span>Primary Location: P-3, Near UBL Bank, Kashmir Bridge, Canal Road, Amin Town, Faisalabad</span>
              </div>
            </div>

            {/* Quick Action Bar (Exact actions from Google profile overview) */}
            <div className="flex flex-wrap items-center gap-2 pt-2 lg:pt-0">
              <a
                href={`tel:${SHOWROOM_INFO.phone}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-800 bg-[#f4efe6] hover:bg-[#eae3d5] rounded-md transition-colors"
                title="Call Showroom"
              >
                <Phone className="w-3.5 h-3.5 text-stone-700" />
                <span>Call</span>
              </a>

              <button
                onClick={onViewShowroomMap}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-800 bg-[#f4efe6] hover:bg-[#eae3d5] rounded-md transition-colors cursor-pointer"
                title="Directions on Canal Road"
              >
                <Compass className="w-3.5 h-3.5 text-stone-700" />
                <span>Directions</span>
              </button>

              <a
                href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=Salam%20TH%20Furnishers!%20I%20am%20inquiring%20about%20your%20furniture%20collection.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-md transition-colors"
                title="Text / WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Text / WhatsApp</span>
              </a>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-800 bg-[#f4efe6] hover:bg-[#eae3d5] rounded-md transition-colors cursor-pointer"
                title="Share Showroom"
              >
                {shareCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Link Copied</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-stone-700" />
                    <span>Share</span>
                  </>
                )}
              </button>

              <a
                href={SHOWROOM_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-800 bg-[#f4efe6] hover:bg-[#eae3d5] rounded-md transition-colors"
                title="Instagram @thfurnisherspakistan"
              >
                <Globe className="w-3.5 h-3.5 text-stone-700" />
                <span>Instagram</span>
              </a>

              <button
                onClick={handleSaveToggle}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  isSaved 
                    ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                    : 'bg-[#f4efe6] hover:bg-[#eae3d5] text-stone-800'
                }`}
                title="Save Showroom"
              >
                <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-amber-700 text-amber-700' : 'text-stone-700'}`} />
                <span>{isSaved ? 'Saved' : 'Save'}</span>
              </button>

              <button
                onClick={onOpenPhotos}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-700 hover:text-stone-900 underline underline-offset-4 cursor-pointer"
              >
                <span>View Photos</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Editorial Showcase Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Brand Story & Interactive Direct Routes */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-stone-500 font-semibold mb-3">
                Architectural Interiors & Bespoke Woodcraft
              </p>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-medium leading-[1.15] text-balance mb-5">
                Luxury Down-Feather Comfort & Sculptural Furniture
              </h2>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl mb-6">
                TH Furnishers Pakistan is a premier luxury furniture brand in Faisalabad, specializing in contemporary minimalist aesthetics, statement down-feather sofa sets (including the celebrated <span className="text-stone-900 font-medium">Modern Muse</span>), the iconic <span className="text-stone-900 font-medium">Orca Table</span>, custom bedroom suites, and grand dining tables.
              </p>

              {/* In-House Manufacturing Highlights */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#e7e1d5] mb-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">
                    01. In-House Manufacturing
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700">
                    Handcrafted in our Faisalabad workshops with seasoned hardwoods and precision joinery.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">
                    02. 100% Bespoke Dimensions
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700">
                    Customized to your exact room blueprints, fabric palettes, and down-feather densities.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-sm transition-all shadow-sm cursor-pointer group"
              >
                <span>Explore Current Collections</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onCustomDimensionsClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-stone-900 bg-white hover:bg-stone-100 border border-stone-300 rounded-sm transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Custom Dimensions Studio</span>
              </button>
            </div>
            
            {/* Trust Marker Note */}
            <div className="flex items-center gap-2 text-xs text-stone-500 mt-4">
              <ShieldCheck className="w-4 h-4 text-stone-600 shrink-0" />
              <span>Showroom viewings available daily on Canal Road · White-glove delivery across Pakistan</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[360px] sm:h-[460px] lg:h-full min-h-[400px] w-full rounded-lg overflow-hidden bg-stone-200 border border-[#e5dfd3] shadow-md group">
              <img
                src={FLAGSHIP_IMAGES.hero}
                alt="TH Furnishers Luxury Showroom Living Space with Modern Muse Down-Feather Sofa and Sculptural Coffee Table"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle Scrim for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/15 to-transparent pointer-events-none" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-auto">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest uppercase text-stone-300 block mb-1">
                      Flagship Display · Canal Road Showroom
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-white">
                      The Modern Muse & Sculptural Walnut Living
                    </h3>
                  </div>
                  <button 
                    onClick={onExploreClick}
                    className="text-xs bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-3 py-1.5 rounded transition-colors cursor-pointer shrink-0"
                  >
                    View Specs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
