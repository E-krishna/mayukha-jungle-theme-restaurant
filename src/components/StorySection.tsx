import React from 'react';
import { ArrowRight, Compass, Sparkles, ShieldCheck } from 'lucide-react';
import { MonsteraLeaf, PalmBranch, OrganicCurvedDivider } from './BotanicalElements';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="relative bg-[#F7F1E3] text-[#17231D] py-20 lg:py-28 overflow-hidden">
      {/* Subtle organic curved transition at top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Editorial Image with Botanical Embellishments */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative background framed leaf silhouette */}
              <div className="absolute -top-10 -left-10 text-[#7D9B78]/25 pointer-events-none">
                <PalmBranch className="w-44 h-44 transform -rotate-45" />
              </div>
              <div className="absolute -bottom-8 -right-8 text-[#D6A84F]/30 pointer-events-none">
                <MonsteraLeaf className="w-36 h-36 transform rotate-12" />
              </div>

              {/* Main Image Container with rounded organic border */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl border-4 border-[#E8D8B8]/60 group">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Atmospheric warm lighting and natural botanical decor inside Mayukha Jungle Theme Restaurant"
                  className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B2A]/70 via-transparent to-transparent opacity-60" />

                {/* Subtitle tag overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#F7F1E3]/95 backdrop-blur-md p-4 rounded-2xl border border-[#E8D8B8] shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#123B2A] text-[#D6A84F]">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#1F6045] uppercase tracking-wider">
                        Located at KPHB Main Road
                      </p>
                      <p className="text-sm font-serif font-bold text-[#17231D]">
                        1st Floor, PNR Empire, Hyderabad
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Values */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Label */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#1F6045] uppercase tracking-[0.25em] mb-4">
              <span className="w-6 h-[2px] bg-[#D6A84F]" />
              <span>THE MAYUKHA EXPERIENCE</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#123B2A] leading-tight mb-6">
              Dining, Reimagined <br />
              <span className="italic text-[#1F6045] font-display">in the Wild</span>
            </h2>

            {/* Body Copy (Verbatim from prompt) */}
            <p className="text-base sm:text-lg text-[#17231D]/85 leading-relaxed mb-6 font-normal">
              At Mayukha Jungle Theme Restaurant, every visit is designed to be more than a meal. Step into a distinctive jungle-inspired setting where vibrant surroundings, delicious food, and time with the people you love come together.
            </p>

            <p className="text-sm sm:text-base text-[#17231D]/75 leading-relaxed mb-8">
              Whether you are sharing our signature Boneless Chicken Biryani with family, unwinding over freshly prepared starters with friends, or celebrating a memorable evening, the ambient foliage and warm woodland glow offer an unforgettable sanctuary in the vibrant heart of Kukatpally.
            </p>

            {/* Small decorative leaf illustration & Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-4 border-t border-[#E8D8B8]">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#1F6045]/10 text-[#1F6045] mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#123B2A]">Immersive Woodland Decor</h4>
                  <p className="text-xs text-[#17231D]/70">Lush leaves, ambient lighting & soothing sounds</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#1F6045]/10 text-[#1F6045] mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#123B2A]">Freshly Prepared Recipes</h4>
                  <p className="text-xs text-[#17231D]/70">Authentic Hyderabadi biryanis, seafood & starters</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <a
                href="#experience"
                id="story-discover-cta"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#123B2A] hover:bg-[#1F6045] text-[#F7F1E3] font-medium text-sm rounded-full transition-all duration-300 shadow-md group hover:shadow-lg"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 text-[#D6A84F] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
