import React from 'react';
import { Search, SlidersHorizontal, CheckCircle2, Clock } from 'lucide-react';
import { ProductCategory, AvailabilityType } from '../types/furniture';

interface StockFilterProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  availabilityFilter: AvailabilityType;
  onSelectAvailability: (avail: AvailabilityType) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
}

export const StockFilter: React.FC<StockFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  availabilityFilter,
  onSelectAvailability,
  searchQuery,
  onSearchChange,
  totalCount,
}) => {
  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Collections' },
    { id: 'sofas', label: 'Down-Feather & Sofas' },
    { id: 'tables', label: 'Orca & Coffee Tables' },
    { id: 'beds', label: 'Custom Bed Sets' },
    { id: 'dining', label: 'Dining Tables' },
    { id: 'accents', label: 'Executive & Accents' },
  ];

  return (
    <div className="space-y-4 mb-8">
      {/* Top Search & Availability Filter Row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by piece (e.g. Orca, Modern Muse, Down-Feather, Bed, Dining)..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-[#ded7c8] rounded-md text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-800 transition-all shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
            >
              Clear
            </button>
          )}
        </div>

        {/* Ready Stock vs Custom Order Segmented Switch */}
        <div className="flex items-center gap-1 p-1 bg-[#ede7dc] rounded-md border border-[#e1d9cc] self-start sm:self-auto">
          <button
            onClick={() => onSelectAvailability('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
              availabilityFilter === 'all'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            All Pieces
          </button>
          
          <button
            onClick={() => onSelectAvailability('ready')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
              availabilityFilter === 'ready'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ready in Faisalabad Showroom</span>
          </button>

          <button
            onClick={() => onSelectAvailability('custom')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
              availabilityFilter === 'custom'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-amber-700" />
            <span>Custom Made to Order</span>
          </button>
        </div>
      </div>

      {/* Category Segmented Scrollable Tabs */}
      <div className="flex items-center justify-between gap-4 border-b border-[#e5dfd3] pb-2 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer rounded-sm ${
                  isActive
                    ? 'text-stone-950 border-b-2 border-stone-900 font-semibold'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Quiet results count */}
        <div className="text-xs text-stone-500 whitespace-nowrap shrink-0 hidden sm:block">
          Showing {totalCount} {totalCount === 1 ? 'curated piece' : 'curated pieces'}
        </div>
      </div>
    </div>
  );
};
