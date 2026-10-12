import React from 'react';
import { ArrowRight, Users, Heart, GlassWater } from 'lucide-react';
import { OCCASION_CARDS } from '../data/restaurantData';

interface OccasionsSectionProps {
  onSelectOccasion: (occasionName: string) => void;
}

export const OccasionsSection: React.FC<OccasionsSectionProps> = ({ onSelectOccasion }) => {
  return (
    <section id="occasions" className="relative bg-[#F7F1E3] py-20 lg:py-28 text-[#17231D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F6045] uppercase tracking-[0.25em] mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>GROUP DINING & GATHERINGS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#123B2A] tracking-tight mb-4">
            Bring Your People. Make a Memory.
          </h2>
          <p className="text-base sm:text-lg text-[#17231D]/80 font-light max-w-2xl mx-auto">
            From casual catch-ups to family celebrations, discover a setting designed to make shared moments feel special.
          </p>
        </div>

        {/* 3 Occasion Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {OCCASION_CARDS.map((occasion) => (
            <div
              key={occasion.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E8D8B8] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden bg-[#17231D]">
                  <img
                    src={occasion.image}
                    alt={occasion.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <span className="absolute top-4 left-4 bg-[#123B2A]/90 backdrop-blur-md text-[#D6A84F] text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-[#D6A84F]/30">
                    {occasion.badge}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-7">
                  <span className="text-xs font-semibold text-[#1F6045] uppercase tracking-wider block mb-1">
                    {occasion.subtitle}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#123B2A] mb-3 group-hover:text-[#1F6045] transition-colors">
                    {occasion.title}
                  </h3>
                  <p className="text-sm text-[#17231D]/75 leading-relaxed font-light">
                    {occasion.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card CTA */}
              <div className="p-7 pt-0">
                <button
                  onClick={() => onSelectOccasion(occasion.title)}
                  className="w-full py-3 px-4 rounded-xl bg-[#F7F1E3] hover:bg-[#123B2A] text-[#123B2A] hover:text-[#F7F1E3] font-semibold text-xs uppercase tracking-wider border border-[#E8D8B8] transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>Enquire for {occasion.title}</span>
                  <ArrowRight className="w-4 h-4 text-[#D6A84F] transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
