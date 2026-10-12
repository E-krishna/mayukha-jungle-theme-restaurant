import React, { useState, useMemo } from 'react';
import { Sparkles, Utensils, Check, Eye, X, ChevronRight } from 'lucide-react';
import { MenuCategory, MenuItem } from '../types';
import { ALL_MENU_ITEMS, CONFIRMED_HIGHLIGHT_DISHES } from '../data/restaurantData';

interface MenuSectionProps {
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenReservation }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [activeDishModal, setActiveDishModal] = useState<MenuItem | null>(null);
  const [showFullMenuModal, setShowFullMenuModal] = useState(false);

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'all', label: 'All Dishes' },
    { id: 'biryani', label: 'Biryani' },
    { id: 'starters', label: 'Starters' },
    { id: 'soups', label: 'Soups' },
    { id: 'main-course', label: 'Main Course' },
    { id: 'vegetarian', label: 'Vegetarian' },
    { id: 'non-vegetarian', label: 'Non-Vegetarian' },
    { id: 'beverages', label: 'Beverages' },
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return ALL_MENU_ITEMS;
    }
    if (selectedCategory === 'vegetarian') {
      return ALL_MENU_ITEMS.filter((item) => item.type === 'veg');
    }
    if (selectedCategory === 'non-vegetarian') {
      return ALL_MENU_ITEMS.filter((item) => item.type === 'non-veg');
    }
    return ALL_MENU_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="menu" className="relative bg-[#F7F1E3] py-20 lg:py-28 text-[#17231D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F6045] uppercase tracking-[0.25em] mb-3">
            <span className="w-5 h-[2px] bg-[#D6A84F]" />
            <span>FROM OUR MENU</span>
            <span className="w-5 h-[2px] bg-[#D6A84F]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#123B2A] tracking-tight mb-4">
            Favorites Worth Discovering
          </h2>
          <p className="text-base sm:text-lg text-[#17231D]/80 font-light">
            Explore dishes and refreshing choices made for a memorable dining experience.
          </p>
        </div>

        {/* Filter Navigation Bar (Horizontal Scrollable on Mobile) */}
        <div className="flex items-center justify-start lg:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#123B2A] text-[#F7F1E3] shadow-md shadow-[#123B2A]/20 scale-105'
                    : 'bg-[#E8D8B8]/60 hover:bg-[#E8D8B8] text-[#17231D]/80'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {filteredItems.map((dish) => (
            <div
              key={dish.id}
              id={`dish-${dish.id}`}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E8D8B8] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Zoom & Tag */}
                <div className="relative h-56 w-full overflow-hidden bg-[#17231D]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-40 transition-opacity" />

                  {/* Veg / Non-Veg Indicator */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md shadow-md ${
                        dish.type === 'veg'
                          ? 'bg-emerald-800/90 text-emerald-100 border border-emerald-400/40'
                          : dish.type === 'non-veg'
                          ? 'bg-rose-900/90 text-rose-100 border border-rose-400/40'
                          : 'bg-amber-900/90 text-amber-100 border border-amber-400/40'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          dish.type === 'veg' ? 'bg-emerald-400' : dish.type === 'non-veg' ? 'bg-rose-400' : 'bg-amber-400'
                        }`}
                      />
                      {dish.type === 'veg' ? 'Vegetarian' : dish.type === 'non-veg' ? 'Non-Veg' : 'Beverage'}
                    </span>
                  </div>

                  {/* Confirmed Highlight Badge */}
                  {dish.isConfirmedHighlight && (
                    <div className="absolute top-4 right-4 z-10 bg-[#D6A84F] text-[#17231D] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>House Special</span>
                    </div>
                  )}

                  {/* Price Tag in Image */}
                  <div className="absolute bottom-4 right-4 bg-[#123B2A]/90 backdrop-blur-sm text-[#D6A84F] font-serif font-bold text-sm px-3 py-1 rounded-full border border-[#D6A84F]/30 shadow">
                    {dish.pricePlaceholder}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-serif font-bold text-[#123B2A] group-hover:text-[#1F6045] transition-colors">
                      {dish.name}
                    </h3>
                  </div>

                  <p className="text-sm text-[#17231D]/75 leading-relaxed line-clamp-3 mb-4 font-light">
                    {dish.description}
                  </p>

                  {/* Tags */}
                  {dish.tags && dish.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {dish.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-medium bg-[#F7F1E3] text-[#1F6045] px-2 py-0.5 rounded-md border border-[#E8D8B8]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Quick Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-[#E8D8B8]/50 flex items-center justify-between">
                <button
                  onClick={() => setActiveDishModal(dish)}
                  className="text-xs font-semibold text-[#1F6045] hover:text-[#123B2A] flex items-center gap-1 group/btn cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <button
                  onClick={onOpenReservation}
                  className="text-xs font-bold text-[#123B2A] bg-[#E8D8B8]/70 hover:bg-[#D6A84F] hover:text-[#17231D] px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                >
                  Dine In & Taste
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner & Explore Full Menu CTA */}
        <div className="text-center bg-[#123B2A] text-[#F7F1E3] rounded-3xl p-8 sm:p-10 border border-[#D6A84F]/30 shadow-xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-serif font-bold text-[#F7F1E3] mb-2">
              Craving More Jungle Delicacies?
            </h3>
            <p className="text-sm text-[#E8D8B8]/80 max-w-md">
              From flavorful biryanis to sizzling appetisers and chilled mocktails, discover our entire kitchen repertoire.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setShowFullMenuModal(true)}
              id="explore-full-menu-btn"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#D6A84F] hover:bg-[#E5BC68] text-[#17231D] font-bold text-sm rounded-full transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Utensils className="w-4 h-4" />
              <span>Explore Full Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dish Detail Modal */}
      {activeDishModal && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveDishModal(null)}
        >
          <div
            className="bg-[#F7F1E3] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#D6A84F]/40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 w-full">
              <img
                src={activeDishModal.image}
                alt={activeDishModal.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveDishModal(null)}
                className="absolute top-4 right-4 p-2 bg-[#123B2A]/80 text-[#F7F1E3] hover:text-[#D6A84F] rounded-full backdrop-blur-md cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#123B2A] text-[#D6A84F] px-3.5 py-1 rounded-full text-xs font-serif font-bold">
                  {activeDishModal.pricePlaceholder}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-serif font-bold text-[#123B2A]">
                  {activeDishModal.name}
                </h3>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-bold uppercase ${
                    activeDishModal.type === 'veg'
                      ? 'bg-emerald-100 text-emerald-800'
                      : activeDishModal.type === 'non-veg'
                      ? 'bg-rose-100 text-rose-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {activeDishModal.type}
                </span>
              </div>

              <p className="text-sm text-[#17231D]/80 leading-relaxed mb-6">
                {activeDishModal.description}
              </p>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E8D8B8]">
                <button
                  onClick={() => setActiveDishModal(null)}
                  className="px-5 py-2.5 text-sm font-medium text-[#17231D]/70 hover:text-[#17231D] cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setActiveDishModal(null);
                    onOpenReservation();
                  }}
                  className="px-6 py-2.5 bg-[#D6A84F] hover:bg-[#E5BC68] text-[#17231D] font-bold text-sm rounded-full shadow cursor-pointer"
                >
                  Reserve Table to Taste
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Menu View Modal */}
      {showFullMenuModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowFullMenuModal(false)}
        >
          <div
            className="bg-[#F7F1E3] rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border border-[#D6A84F]/40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 bg-[#123B2A] text-[#F7F1E3] flex items-center justify-between border-b border-[#D6A84F]/20">
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#F7F1E3]">
                  Mayukha Complete Menu Catalog
                </h3>
                <p className="text-xs text-[#E8D8B8]/80 mt-1">
                  KPHB Main Road, Hyderabad • Dine-in & Takeaway Menu
                </p>
              </div>
              <button
                onClick={() => setShowFullMenuModal(false)}
                className="p-2 text-[#E8D8B8] hover:text-[#D6A84F] rounded-full cursor-pointer"
                aria-label="Close menu modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu List Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="p-3 bg-[#E8D8B8]/40 rounded-xl border border-[#E8D8B8] text-xs text-[#17231D]/80">
                Note: Prices and exact availability may vary. Confirm your preferences with your server upon seating.
              </div>

              {/* Grouped by categories */}
              {['biryani', 'starters', 'soups', 'main-course', 'vegetarian', 'beverages'].map((catKey) => {
                const itemsInCat = ALL_MENU_ITEMS.filter((i) => i.category === catKey || (catKey === 'vegetarian' && i.type === 'veg'));
                if (itemsInCat.length === 0) return null;

                const categoryTitles: Record<string, string> = {
                  biryani: 'Signature Biryanis',
                  starters: 'Appetizers & Starters',
                  soups: 'Soups & Broths',
                  'main-course': 'Main Course Curries',
                  vegetarian: 'Vegetarian Specialties',
                  beverages: 'Mocktails & Beverages',
                };

                return (
                  <div key={catKey} className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-[#123B2A] border-b border-[#E8D8B8] pb-1.5 flex items-center justify-between">
                      <span>{categoryTitles[catKey] || catKey}</span>
                      <span className="text-xs font-sans text-[#1F6045] font-normal">
                        {itemsInCat.length} items
                      </span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {itemsInCat.map((item) => (
                        <div
                          key={item.id}
                          className="p-3 rounded-xl bg-white border border-[#E8D8B8] flex items-center justify-between gap-3 shadow-xs"
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                                item.type === 'veg'
                                  ? 'bg-emerald-500'
                                  : item.type === 'non-veg'
                                  ? 'bg-rose-500'
                                  : 'bg-amber-500'
                              }`}
                            />
                            <div>
                              <p className="text-sm font-semibold text-[#17231D]">{item.name}</p>
                              <p className="text-[11px] text-[#17231D]/60 line-clamp-1">{item.description}</p>
                            </div>
                          </div>
                          <span className="text-xs font-serif font-bold text-[#1F6045] shrink-0">
                            {item.pricePlaceholder}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#123B2A] text-[#F7F1E3] flex items-center justify-between">
              <span className="text-xs text-[#E8D8B8]/80">
                Contact our captain for chef recommendations
              </span>
              <button
                onClick={() => {
                  setShowFullMenuModal(false);
                  onOpenReservation();
                }}
                className="px-5 py-2 bg-[#D6A84F] hover:bg-[#E5BC68] text-[#17231D] font-bold text-xs rounded-full cursor-pointer"
              >
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
