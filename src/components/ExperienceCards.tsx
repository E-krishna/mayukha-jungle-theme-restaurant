import React from 'react';
import { Palmtree, Utensils, Users, Sparkles } from 'lucide-react';
import { MonsteraLeaf } from './BotanicalElements';

export const ExperienceCards: React.FC = () => {
  const experiences = [
    {
      id: 'jungle-ambience',
      icon: Palmtree,
      title: 'Jungle Ambience',
      description: 'Immerse yourself in a distinctive jungle-inspired dining atmosphere.',
      accent: 'text-[#1F6045] bg-[#1F6045]/10',
      badge: 'Atmosphere'
    },
    {
      id: 'table-flavor',
      icon: Utensils,
      title: 'A Table Full of Flavor',
      description: 'Explore a menu designed for satisfying meals and shared experiences.',
      accent: 'text-[#D6A84F] bg-[#D6A84F]/15',
      badge: 'Cuisine'
    },
    {
      id: 'made-gatherings',
      icon: Users,
      title: 'Made for Gatherings',
      description: 'A welcoming setting for friends, families, and special occasions.',
      accent: 'text-[#1F6045] bg-[#1F6045]/10',
      badge: 'Community'
    },
    {
      id: 'memorable-moments',
      icon: Sparkles,
      title: 'Memorable Moments',
      description: 'Enjoy a dining experience that gives every visit its own story.',
      accent: 'text-[#D6A84F] bg-[#D6A84F]/15',
      badge: 'Memories'
    },
  ];

  return (
    <section id="experience" className="relative bg-[#17231D] text-[#F7F1E3] py-20 lg:py-28 overflow-hidden">
      {/* Background ambient lighting and subtle foliage */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1F6045]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#D6A84F]/10 rounded-full blur-3xl" />
        <div className="absolute top-12 left-4 text-[#7D9B78]/10 hidden sm:block">
          <MonsteraLeaf className="w-40 h-40" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#123B2A] border border-[#D6A84F]/30 text-xs font-semibold uppercase tracking-widest text-[#D6A84F] mb-4">
            <span>Distinctive Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#F7F1E3] tracking-tight mb-4">
            More Than a Meal
          </h2>
          <p className="text-base sm:text-lg text-[#E8D8B8]/85 font-light">
            An atmosphere made for moments worth remembering.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {experiences.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                id={`exp-card-${item.id}`}
                className="group relative bg-[#F7F1E3] text-[#17231D] rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-xl hover:shadow-[#D6A84F]/10 border border-[#E8D8B8] flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-13 h-13 rounded-2xl flex items-center justify-center ${item.accent} transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider text-[#1F6045]/70 uppercase">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-[#123B2A] mb-3 group-hover:text-[#1F6045] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#17231D]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom decorative leaf accent */}
                <div className="pt-6 mt-6 border-t border-[#E8D8B8]/70 flex items-center justify-between text-xs text-[#1F6045]/60 font-medium">
                  <span>0{idx + 1}</span>
                  <span className="w-8 h-[1px] bg-[#1F6045]/30 group-hover:w-14 group-hover:bg-[#D6A84F] transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
