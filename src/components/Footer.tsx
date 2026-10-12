import React from 'react';
import { Phone, MapPin, ArrowUp, Instagram, Facebook, Compass } from 'lucide-react';
import { MayukhaLogoMark } from './BotanicalElements';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#123B2A] text-[#F7F1E3] border-t border-[#1F6045] pt-16 pb-12 overflow-hidden relative">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#1F6045]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#1F6045]/80">
          {/* Brand & Tagline */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <MayukhaLogoMark className="w-9 h-9" />
              <div>
                <span className="font-serif tracking-widest text-2xl font-bold text-[#F7F1E3]">
                  MAYUKHA
                </span>
                <p className="text-[9px] tracking-[0.25em] text-[#E8D8B8]/80 uppercase">
                  Jungle Theme Restaurant
                </p>
              </div>
            </div>

            <p className="font-display italic text-lg text-[#D6A84F] mb-4">
              &ldquo;{RESTAURANT_INFO.tagline}&rdquo;
            </p>

            <p className="text-sm text-[#E8D8B8]/80 leading-relaxed font-light max-w-sm mb-6">
              A distinctive jungle dining sanctuary in KPHB, Hyderabad. Experience exceptional Hyderabadi culinary recipes, surrounded by natural botanical ambiance.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mayukha on Instagram"
                className="w-10 h-10 rounded-full bg-[#1F6045]/60 hover:bg-[#D6A84F] text-[#F7F1E3] hover:text-[#17231D] flex items-center justify-center transition-colors border border-[#7D9B78]/40"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mayukha on Facebook"
                className="w-10 h-10 rounded-full bg-[#1F6045]/60 hover:bg-[#D6A84F] text-[#F7F1E3] hover:text-[#17231D] flex items-center justify-center transition-colors border border-[#7D9B78]/40"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mayukha on Google Business Profile"
                className="w-10 h-10 rounded-full bg-[#1F6045]/60 hover:bg-[#D6A84F] text-[#F7F1E3] hover:text-[#17231D] flex items-center justify-center transition-colors border border-[#7D9B78]/40"
              >
                <Compass className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#D6A84F] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="text-[#E8D8B8]/80 hover:text-[#D6A84F] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="text-[#E8D8B8]/80 hover:text-[#D6A84F] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#menu" className="text-[#E8D8B8]/80 hover:text-[#D6A84F] transition-colors">
                  Menu & Specialties
                </a>
              </li>
              <li>
                <a href="#experience" className="text-[#E8D8B8]/80 hover:text-[#D6A84F] transition-colors">
                  Atmosphere & Experience
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-[#E8D8B8]/80 hover:text-[#D6A84F] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-[#E8D8B8]/80 hover:text-[#D6A84F] transition-colors">
                  Guest Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#E8D8B8]/80 hover:text-[#D6A84F] transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Services */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#D6A84F] mb-4">
              Visit & Inquiries
            </h4>

            <div className="flex items-start gap-3 text-sm text-[#E8D8B8]/90">
              <MapPin className="w-4 h-4 text-[#D6A84F] shrink-0 mt-1" />
              <span>
                1st Floor, PNR Empire, KPHB Main Road, Above Lalitha Jewellery, Hyderabad, Telangana 500072
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm text-[#E8D8B8]/90">
              <Phone className="w-4 h-4 text-[#D6A84F] shrink-0" />
              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                className="hover:text-[#D6A84F] transition-colors font-semibold"
              >
                {RESTAURANT_INFO.phone}
              </a>
            </div>

            <div className="pt-3 border-t border-[#1F6045] text-xs text-[#E8D8B8]/70">
              <span className="font-semibold text-[#F7F1E3]">Services:</span> Dine-in • Kerbside pickup • No-contact delivery
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8D8B8]/60 gap-4">
          <p>© 2026 Mayukha Jungle Theme Restaurant. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-[#D6A84F] transition-colors">
              Privacy Policy
            </a>
            <a href="#home" className="hover:text-[#D6A84F] transition-colors">
              Terms & Conditions
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#1F6045] hover:bg-[#D6A84F] text-[#F7F1E3] hover:text-[#17231D] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
