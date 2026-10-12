import React from 'react';
import { Star, MessageSquare, ExternalLink, ShieldCheck, ThumbsUp } from 'lucide-react';
import { RESTAURANT_INFO, VERIFIED_REVIEWS } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  const { ratings } = RESTAURANT_INFO;

  return (
    <section id="reviews" className="relative bg-[#F7F1E3] py-20 lg:py-28 text-[#17231D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F6045] uppercase tracking-[0.25em] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GUEST EXPERIENCES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#123B2A] tracking-tight mb-4">
            Moments Shared, Memories Made
          </h2>
          <p className="text-base sm:text-lg text-[#17231D]/80 font-light">
            Read verified impressions from local food lovers, families, and celebrations in Kukatpally.
          </p>
        </div>

        {/* Rating Summary Display */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8D8B8] shadow-sm max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Big Score */}
            <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-[#E8D8B8] pb-6 md:pb-0 md:pr-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-serif font-bold text-[#123B2A]">
                  {ratings.score}
                </span>
                <span className="text-xl text-[#17231D]/50 font-medium">/ 5.0</span>
              </div>

              {/* Star icons */}
              <div className="flex items-center gap-1 my-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= 4
                        ? 'text-[#D6A84F] fill-[#D6A84F]'
                        : 'text-[#D6A84F] fill-[#D6A84F]/30'
                    }`}
                  />
                ))}
              </div>

              <p className="text-sm font-semibold text-[#1F6045] mt-1">
                Based on {ratings.reviewCount.toLocaleString()} Verified Google Reviews
              </p>
              <p className="text-xs text-[#17231D]/60 mt-0.5">
                Authentic public ratings for Mayukha Jungle Theme Restaurant, KPHB
              </p>
            </div>

            {/* Right Breakdown Bars */}
            <div className="md:col-span-7 space-y-2.5">
              {ratings.distribution.map((d) => (
                <div key={d.stars} className="flex items-center gap-3 text-xs">
                  <span className="w-12 text-[#17231D]/70 font-medium flex items-center gap-1">
                    <span>{d.stars}</span>
                    <Star className="w-3 h-3 text-[#D6A84F] fill-[#D6A84F]" />
                  </span>
                  <div className="flex-1 h-2.5 bg-[#E8D8B8]/40 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#1F6045] rounded-full transition-all duration-500"
                      style={{ width: `${d.percentage}%` }}
                    />
                  </div>
                  <span className="w-10 text-right text-[#17231D]/60 font-mono">
                    {d.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Verified Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {VERIFIED_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-7 border border-[#E8D8B8] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#D6A84F]">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified Guest</span>
                  </div>
                </div>

                <p className="text-sm text-[#17231D]/80 leading-relaxed italic mb-4 font-light">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8D8B8]/60 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-[#123B2A]">{rev.author}</p>
                  <p className="text-[#17231D]/50 text-[11px]">{rev.date}</p>
                </div>
                {rev.highlightDish && (
                  <span className="text-[10px] bg-[#F7F1E3] text-[#1F6045] font-semibold px-2 py-0.5 rounded-md border border-[#E8D8B8]">
                    {rev.highlightDish}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Link to Google Business */}
        <div className="text-center">
          <a
            href={RESTAURANT_INFO.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="read-more-reviews-btn"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#123B2A] hover:bg-[#1F6045] text-[#F7F1E3] font-semibold text-sm rounded-full transition-all duration-300 shadow-md group"
          >
            <span>Read More Reviews on Google (3,458 Total)</span>
            <ExternalLink className="w-4 h-4 text-[#D6A84F] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
