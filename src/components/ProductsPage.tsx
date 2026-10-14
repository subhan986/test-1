import React, { useState, useMemo } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ProductItem, HERO_ASSETS } from '../data/furnitureData';
import { 
  Search, 
  SlidersHorizontal, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Eye,
  Filter
} from 'lucide-react';

interface ProductsPageProps {
  currency: 'USD' | 'PKR';
  onSelectProduct: (product: ProductItem) => void;
  onBackToHome: () => void;
}

export const ALL_PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'Royal Club Chair',
    category: 'Chairs',
    description: 'Sleek, durable dark grey armchair with slim angled black steel framework.',
    priceUSD: 470,
    pricePKR: 130000,
    image: HERO_ASSETS.chairGray,
    tag: 'Ready in Showroom',
    featureNote: 'Natural Cotton',
  },
  {
    id: 'prod-2',
    name: 'Windsor Armchair',
    category: 'Chairs',
    description: 'Contemporary curved mustard yellow ochre armchair with warm oak frame.',
    priceUSD: 510,
    pricePKR: 142000,
    image: HERO_ASSETS.chairMustard,
    tag: 'Ready in Showroom',
    featureNote: 'Free Cushion',
  },
  {
    id: 'prod-3',
    name: 'Executive Office Sofa',
    category: 'Sofas',
    description: 'Smooth, innovative office sofa with tapered oak legs and side bolster cushions.',
    priceUSD: 2850.65,
    pricePKR: 795000,
    image: HERO_ASSETS.spotlightSofa,
    tag: 'Flagship Choice',
    featureNote: 'Solid Seasoned Oak',
  },
  {
    id: 'prod-4',
    name: 'Luxury Modular Sectional',
    category: 'Sofas',
    description: 'Vibrant royal blue modular sectional sofa with plush ergonomic support.',
    priceUSD: 795,
    pricePKR: 220000,
    image: HERO_ASSETS.heroBlueSofa,
    tag: 'Down-Feather',
    featureNote: 'Goose Down Wrap',
  },
  {
    id: 'prod-5',
    name: 'The Orca Sculptural Table',
    category: 'Tables',
    description: 'Organic American walnut fluid silhouette resting on a hand-carved travertine base.',
    priceUSD: 630,
    pricePKR: 175000,
    image: HERO_ASSETS.orcaTable,
    tag: 'In-House Sculpted',
    featureNote: 'Travertine Stone',
  },
  {
    id: 'prod-6',
    name: 'Modern Muse Down-Feather Sofa',
    category: 'Sofas',
    description: 'Signature low-profile modular living collection in textured Belgian ivory bouclé.',
    priceUSD: 1380,
    pricePKR: 385000,
    image: HERO_ASSETS.modernMuse,
    tag: 'Showroom Display',
    featureNote: 'Belgian Bouclé',
  },
  {
    id: 'prod-7',
    name: 'Sovereign Master Bed Suite',
    category: 'Beds',
    description: 'Arched vertical fluted headboard in taupe velvet with integrated floating walnut nightstands.',
    priceUSD: 1580,
    pricePKR: 440000,
    image: HERO_ASSETS.luxuryBed,
    tag: 'Custom Dimensions',
    featureNote: 'Ambient LED System',
  },
  {
    id: 'prod-8',
    name: 'Twin Pedestal Fluted Dining Table',
    category: 'Dining',
    description: 'Chamfered solid American walnut top supported by twin fluted cylindrical columns.',
    priceUSD: 1150,
    pricePKR: 320000,
    image: HERO_ASSETS.diningTable,
    tag: 'Seats 8–10',
    featureNote: 'Solid American Walnut',
  },
  {
    id: 'prod-9',
    name: 'Trenola Modern Sofa',
    category: 'Sofas',
    description: 'Minimalist powder blue sofa with deep sink-in comfort and durable oak legs.',
    priceUSD: 450,
    pricePKR: 125000,
    image: HERO_ASSETS.testimonialRoom,
    tag: 'Customer Favorite',
    featureNote: 'Ortho Cushion',
  },
  {
    id: 'prod-10',
    name: 'Windsor Office Chair',
    category: 'Chairs',
    description: 'Ergonomic high-density weave with curved lumbar contouring.',
    priceUSD: 320,
    pricePKR: 89000,
    image: HERO_ASSETS.chairGray,
    tag: 'Ready in Showroom',
    featureNote: 'Polyester Cover',
  },
];

export const ProductsPage: React.FC<ProductsPageProps> = ({
  currency,
  onSelectProduct,
  onBackToHome,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<'featured' | 'low-to-high' | 'high-to-low'>('featured');

  const categories = ['All', 'Chairs', 'Sofas', 'Tables', 'Beds', 'Dining'];

  const formatPrice = (usd: number, pkr: number) => {
    if (currency === 'USD') {
      return `$${usd.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
    }
    return `PKR ${pkr.toLocaleString('en-PK')}`;
  };

  const filteredProducts = useMemo(() => {
    let result = ALL_PRODUCTS.filter((item) => {
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
        );
      }
      return true;
    });

    if (sortOption === 'low-to-high') {
      result = [...result].sort((a, b) => a.priceUSD - b.priceUSD);
    } else if (sortOption === 'high-to-low') {
      result = [...result].sort((a, b) => b.priceUSD - a.priceUSD);
    }

    return result;
  }, [selectedCategory, searchQuery, sortOption]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#f7f3ed] via-[#f4efe8] to-[#ede5dc] py-6 px-1 sm:px-3 text-[#261e19]">
      
      {/* Earthy Ambient Backdrops (Warm travertine & amber glow) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-[#ede5dc]/60 rounded-full blur-3xl opacity-80" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#e3d7c9]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-[#ddd0c0]/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1536px] mx-auto space-y-6">
        
        {/* Breadcrumb & Header Bar */}
        <ScrollReveal direction="down" duration={500}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e2d8cb] pb-4">
            <div className="flex items-center gap-2 text-xs text-[#736256] font-mono">
              <button
                onClick={onBackToHome}
                className="hover:text-[#261e19] transition-colors underline underline-offset-4 cursor-pointer"
              >
                Home
              </button>
              <span>/</span>
              <span className="text-[#261e19] font-semibold">Products Studio</span>
              <span>/</span>
              <span className="text-[#8c5234] font-semibold">{filteredProducts.length} Pieces</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onBackToHome}
                className="px-4 py-1.5 text-xs font-medium text-[#3d3129] bg-[#fbf9f5]/80 hover:bg-[#ffffff] backdrop-blur-md border border-[#e2d8cb] rounded-full shadow-2xs transition-all cursor-pointer"
              >
                ← Back to Overview
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Hero Banner for Products in Warm Sand & Travertine */}
        <ScrollReveal duration={600} delay={100}>
          <div className="relative rounded-2xl overflow-hidden p-6 sm:p-10 bg-[#faf7f2]/90 backdrop-blur-2xl border border-[#e8dfd5] shadow-[0_12px_40px_-10px_rgba(38,30,25,0.04)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eee5dc] backdrop-blur-md border border-[#dfd4c7] text-[#8c5234] text-[10px] font-mono uppercase tracking-widest shadow-2xs">
                <Sparkles className="w-3 h-3 text-[#8c5234]" />
                <span>ARCHITECTURAL FURNITURE COLLECTION</span>
              </div>
              
              <h1 className="font-serif text-3xl sm:text-5xl text-[#261e19] font-medium tracking-tight">
                Curated Design Pieces
              </h1>

              <p className="text-xs sm:text-sm text-[#736256] leading-relaxed">
                Sculptural armchairs, down-feather sectionals, American walnut dining, and bespoke master bedroom suites engineered with in-house craftsmanship.
              </p>
            </div>

            {/* Glass Stat Pods in Warm Earthy Whites & Sand */}
            <div className="grid grid-cols-3 gap-2.5 w-full md:w-auto shrink-0">
              <div className="p-3 sm:p-4 rounded-xl bg-white/90 backdrop-blur-md border border-[#e2d8cb] shadow-2xs text-center">
                <div className="font-serif text-xl sm:text-2xl font-bold text-[#261e19]">100%</div>
                <div className="text-[10px] text-[#8a7a70] font-mono uppercase">Solid Wood</div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-[#f5efe7] backdrop-blur-md border border-[#dfd4c7] shadow-2xs text-center">
                <div className="font-serif text-xl sm:text-2xl font-bold text-[#8c5234]">5.0 ★</div>
                <div className="text-[10px] text-[#8a7a70] font-mono uppercase">Verified</div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-white/90 backdrop-blur-md border border-[#e2d8cb] shadow-2xs text-center">
                <div className="font-serif text-xl sm:text-2xl font-bold text-[#261e19]">Custom</div>
                <div className="text-[10px] text-[#8a7a70] font-mono uppercase">Dimensions</div>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* Floating Earthy Filter & Search Bar */}
        <ScrollReveal duration={600} delay={150}>
          <div className="sticky top-2 z-20 p-2 sm:p-3 rounded-2xl bg-[#faf7f2]/95 backdrop-blur-2xl border border-[#e8dfd5] shadow-[0_8px_30px_rgba(38,30,25,0.05)] flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            
            {/* Search Input in Warm Sand */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a7a70] pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search chair, sofa, dining, orca, bed..."
                className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-[#ded5c8] rounded-full text-[#261e19] placeholder:text-[#9e9085] focus:outline-none focus:ring-1 focus:ring-[#8c5234] shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8a7a70] hover:text-[#261e19]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Earthy Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap cursor-pointer shadow-2xs ${
                      isActive
                        ? 'bg-[#945330] text-white shadow-sm'
                        : 'bg-white hover:bg-[#f5efe7] text-[#4a3e35] border border-[#ded5c8]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 self-end lg:self-auto shrink-0">
              <span className="text-[11px] text-[#8a7a70] font-mono hidden sm:inline">Sort:</span>
              <select
                value={sortOption}
                onChange={(e: any) => setSortOption(e.target.value)}
                className="px-3 py-1.5 text-xs font-medium bg-white border border-[#ded5c8] rounded-full text-[#3d3129] shadow-2xs focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured Order</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
              </select>
            </div>

          </div>
        </ScrollReveal>

        {/* Products Grid with Scroll Reveal Animations */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 pt-2">
            {filteredProducts.map((product, idx) => (
              <ScrollReveal
                key={product.id}
                delay={(idx % 4) * 80}
                duration={500}
                direction="up"
              >
                <div
                  onClick={() => onSelectProduct(product)}
                  className="group rounded-2xl p-4 bg-[#faf7f2] hover:bg-[#ffffff] backdrop-blur-xl border border-[#e8ded3] hover:border-[#dbcbbd] shadow-[0_8px_30px_rgba(38,30,25,0.03)] hover:shadow-[0_16px_40px_rgba(38,30,25,0.07)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
                >
                  {/* Glass Accent Sheen */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#ede5dc]/60 to-transparent rounded-bl-full pointer-events-none" />

                  {/* Product Image Area in Muted Oatmeal / Clay */}
                  <div className="relative w-full aspect-square rounded-xl bg-[#f2ece3] p-4 mb-4 flex items-center justify-center overflow-hidden border border-[#e5dcce]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />

                    {/* Tag Capsule in Warm Sand */}
                    {product.tag && (
                      <div className="absolute top-2.5 left-2.5">
                        <span className="text-[10px] font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[#3d3129] border border-[#ded5c8] shadow-2xs">
                          {product.tag}
                        </span>
                      </div>
                    )}

                    {/* Quick View Glass Button */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 backdrop-blur-2xs transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#261e19] text-xs font-semibold shadow-md">
                        <Eye className="w-3.5 h-3.5 text-[#8c5234]" />
                        <span>Inspect Specs</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-[#8a7a70] font-mono uppercase tracking-wider">
                        <span>{product.category}</span>
                        {product.featureNote && (
                          <span className="text-[#6b5c51]">{product.featureNote}</span>
                        )}
                      </div>

                      <h3 className="font-sans font-bold text-base text-[#261e19] group-hover:text-[#8c5234] transition-colors line-clamp-1 mt-0.5">
                        {product.name}
                      </h3>

                      <p className="text-xs text-[#736256] line-clamp-2 mt-1">
                        {product.description}
                      </p>
                    </div>

                    {/* Price and Action Row */}
                    <div className="pt-3 border-t border-[#ede5dc] flex items-center justify-between">
                      <div>
                        <div className="font-sans font-bold text-base text-[#261e19] tabular-nums">
                          {formatPrice(product.priceUSD, product.pricePKR)}
                        </div>
                        <div className="text-[10px] text-[#8a7a70] font-mono">
                          Ready or Bespoke
                        </div>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#8c5234] text-[#4a3e35] group-hover:text-white border border-[#ded5c8] flex items-center justify-center transition-all shadow-2xs">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-2xl bg-white/50 backdrop-blur-xl border border-white/80 p-8 space-y-4">
            <p className="text-stone-500 text-sm">
              No pieces found matching "{searchQuery}" in "{selectedCategory}".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#2f65f6] rounded-full shadow-sm cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
