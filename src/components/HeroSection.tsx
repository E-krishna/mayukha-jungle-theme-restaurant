import React from 'react';
import { CalendarCheck, UtensilsCrossed, ChevronDown, Sparkles, MapPin } from 'lucide-react';
import { MonsteraLeaf, PalmBranch, FloatingLeavesBackground } from './BotanicalElements';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroSectionProps {
  onOpenReservation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenReservation }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen bg-[#123B2A] text-[#F7F1E3] flex items-center pt-24 pb-16 lg:py-0 overflow-hidden"
    >
      {/* Dynamic atmospheric background & subtle floating leaves */}
      <FloatingLeavesBackground />

      {/* Decorative botanical borders in corners */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-20 text-[#7D9B78] hidden sm:block animate-sway-slow">
        <PalmBranch className="w-48 h-48 lg:w-72 lg:h-72 transform -rotate-12 translate-x-8 -translate-y-8" />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-20 text-[#D6A84F] hidden sm:block animate-sway-reverse">
        <MonsteraLeaf className="w-40 h-40 lg:w-64 lg:h-64 transform rotate-45 -translate-x-12 translate-y-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#1F6045]/70 border border-[#D6A84F]/40 backdrop-blur-sm mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D6A84F]" />
              <span className="text-xs font-semibold tracking-wider text-[#F7F1E3] uppercase">
                Jungle-inspired dining in KPHB
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif tracking-tight text-[#F7F1E3] leading-[1.1] mb-4">
              Step Into a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7F1E3] via-[#E8D8B8] to-[#D6A84F]">
                World of Flavor
              </span>
            </h1>

            {/* Supporting Headline */}
            <p className="font-display italic text-2xl sm:text-3xl text-[#D6A84F] font-normal mb-5 tracking-wide">
              &ldquo;{RESTAURANT_INFO.heroSubheadline}&rdquo;
            </p>

            {/* Body Copy */}
            <p className="text-base sm:text-lg text-[#E8D8B8]/90 font-light leading-relaxed max-w-xl mb-8">
              {RESTAURANT_INFO.heroBody}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={onOpenReservation}
                id="hero-reserve-btn"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D6A84F] hover:bg-[#E5BC68] text-[#17231D] font-semibold text-base rounded-full shadow-lg shadow-[#D6A84F]/25 hover:shadow-xl hover:shadow-[#D6A84F]/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <CalendarCheck className="w-5 h-5 text-[#17231D] transition-transform duration-300 group-hover:scale-110" />
                <span>Reserve a Table</span>
              </button>

              <a
                href="#menu"
                id="hero-explore-menu-btn"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#1F6045]/60 hover:bg-[#1F6045] text-[#F7F1E3] border border-[#7D9B78]/50 hover:border-[#D6A84F]/60 font-medium text-base rounded-full backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#D6A84F]" />
                <span>Explore the Menu</span>
              </a>
            </div>

            {/* Key Micro-info */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#1F6045]/80 text-xs sm:text-sm text-[#E8D8B8]/75">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D6A84F] shrink-0" />
                <span>PNR Empire, Above Lalitha Jewellery, KPHB</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Fine-Dining Jungle Experience</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Composition & Artistic Jungle Illustration Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Golden Glow Aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D6A84F]/20 via-[#1F6045]/40 to-transparent rounded-3xl blur-2xl opacity-70" />

              {/* Composition Container */}
              <div className="relative rounded-3xl overflow-hidden border border-[#D6A84F]/30 bg-[#17231D]/80 shadow-2xl">
                {/* Main Atmospheric Visual: Jungle Canopy & Interior Ambiance */}
                <div className="relative h-[360px] sm:h-[420px] lg:h-[480px] w-full overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                    alt="Mayukha Jungle Theme Restaurant lush interior ambiance with ambient lighting"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-90 contrast-105"
                  />
                  {/* Subtle jungle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123B2A] via-[#123B2A]/30 to-transparent" />

                  {/* Botanical foliage framing graphic */}
                  <div className="absolute -bottom-6 -right-6 text-[#1F6045]/70 pointer-events-none">
                    <MonsteraLeaf className="w-36 h-36" />
                  </div>
                </div>

                {/* Overlaid Plated Dish Foreground Badge Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-[#123B2A]/90 backdrop-blur-md p-4 rounded-2xl border border-[#D6A84F]/30 shadow-xl flex items-center gap-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-[#D6A84F]/40 shadow-inner">
                    <img
                      src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=300&q=80"
                      alt="Signature Boneless Chicken Biryani"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#D6A84F] uppercase tracking-wider mb-0.5">
                      <Sparkles className="w-3 h-3" />
                      <span>Signature Dum Selection</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-serif font-bold text-[#F7F1E3] truncate">
                      Boneless Chicken Biryani
                    </h3>
                    <p className="text-xs text-[#E8D8B8]/80 line-clamp-1">
                      Aromatic slow-cooked basmati layered with tender chicken morsels
                    </p>
                  </div>
                </div>

                {/* Top Corner Floating Rating Accent */}
                <div className="absolute top-4 right-4 bg-[#123B2A]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D6A84F]/40 flex items-center gap-1.5 shadow-md">
                  <span className="text-amber-400 font-bold text-xs">★ 3.9</span>
                  <span className="text-[11px] text-[#E8D8B8]/90 font-medium">3,450+ Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Scroll Down Indicator */}
        <div className="hidden lg:flex justify-center mt-12">
          <a
            href="#story"
            aria-label="Scroll to Our Story"
            className="flex flex-col items-center gap-2 text-[#E8D8B8]/60 hover:text-[#D6A84F] transition-colors group"
          >
            <span className="text-xs tracking-widest uppercase font-medium">Explore</span>
            <div className="w-6 h-10 rounded-full border border-[#D6A84F]/40 flex items-start justify-center p-1.5">
              <div className="w-1.5 h-2 bg-[#D6A84F] rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
