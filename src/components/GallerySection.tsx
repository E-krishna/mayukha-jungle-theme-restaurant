import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryCategory, GalleryItem } from '../types';
import { MonsteraLeaf, PalmBranch } from './BotanicalElements';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: 'all', label: 'All Views' },
    { id: 'interior', label: 'Interiors' },
    { id: 'decor', label: 'Jungle Decor' },
    { id: 'food', label: 'Dishes & Drinks' },
    { id: 'gatherings', label: 'Dining Moments' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (id: string) => {
    const idx = GALLERY_ITEMS.findIndex((item) => item.id === id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="gallery" className="relative bg-[#17231D] text-[#F7F1E3] py-20 lg:py-28 overflow-hidden">
      {/* Decorative leaf silhouettes along the section edges */}
      <div className="absolute top-10 left-0 text-[#1F6045]/20 pointer-events-none -translate-x-1/2">
        <MonsteraLeaf className="w-64 h-64" />
      </div>
      <div className="absolute bottom-10 right-0 text-[#D6A84F]/15 pointer-events-none translate-x-1/3">
        <PalmBranch className="w-80 h-80 transform rotate-180" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D6A84F] uppercase tracking-[0.25em] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>ATMOSPHERE & MOMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#F7F1E3] tracking-tight mb-4">
            Enter the Jungle
          </h2>
          <p className="text-base sm:text-lg text-[#E8D8B8]/80 font-light">
            Take a glimpse into the atmosphere, the details, and the moments.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#D6A84F] text-[#17231D] font-bold shadow-md'
                  : 'bg-[#123B2A] text-[#E8D8B8]/80 hover:text-[#F7F1E3] hover:bg-[#1F6045]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Modern Asymmetrical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            // Give subtle asymmetrical heights for visual rhythm
            const isTall = idx % 3 === 0;
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(item.id)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg border border-[#1F6045]/60 bg-[#123B2A] ${
                  isTall ? 'h-80 sm:h-96' : 'h-80'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Jungle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B2A] via-[#123B2A]/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-semibold text-[#D6A84F] bg-[#123B2A]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#D6A84F]/30 uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#123B2A]/80 backdrop-blur-md text-[#F7F1E3] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <Maximize2 className="w-4 h-4 text-[#D6A84F]" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F7F1E3] transform translate-y-1 group-hover:translate-y-0 transition-transform">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#E8D8B8]/80 line-clamp-1 mt-1 font-light">
                      {item.alt}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-12 right-0 p-2 text-[#E8D8B8] hover:text-[#D6A84F] cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Main Lightbox Image */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#D6A84F]/30 shadow-2xl">
              <img
                src={GALLERY_ITEMS[lightboxIndex].image}
                alt={GALLERY_ITEMS[lightboxIndex].alt}
                className="w-full max-h-[75vh] object-contain bg-black/50"
              />

              {/* Prev / Next Nav Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#123B2A]/80 text-[#F7F1E3] hover:text-[#D6A84F] hover:bg-[#123B2A] transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#123B2A]/80 text-[#F7F1E3] hover:text-[#D6A84F] hover:bg-[#123B2A] transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Caption */}
            <div className="w-full mt-4 flex items-center justify-between text-[#F7F1E3] px-2">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#F7F1E3]">
                  {GALLERY_ITEMS[lightboxIndex].title}
                </h4>
                <p className="text-xs text-[#E8D8B8]/80">{GALLERY_ITEMS[lightboxIndex].alt}</p>
              </div>
              <span className="text-xs text-[#D6A84F] font-medium">
                {lightboxIndex + 1} / {GALLERY_ITEMS.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
