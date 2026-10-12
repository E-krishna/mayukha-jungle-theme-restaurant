import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, CalendarCheck, UtensilsCrossed } from 'lucide-react';
import { MayukhaLogoMark } from './BotanicalElements';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#123B2A]/95 backdrop-blur-md shadow-lg border-b border-[#D6A84F]/20 py-3'
            : 'bg-gradient-to-b from-[#123B2A]/80 via-[#123B2A]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            id="nav-logo"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A84F] rounded-lg p-1"
          >
            <MayukhaLogoMark className="w-10 h-10 transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.2em] text-xl sm:text-2xl font-bold text-[#F7F1E3] group-hover:text-[#D6A84F] transition-colors leading-none">
                MAYUKHA
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#E8D8B8]/80 uppercase mt-1 font-medium">
                Jungle Theme Restaurant
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#F7F1E3]/90 hover:text-[#D6A84F] tracking-wide transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D6A84F] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#menu"
              id="nav-view-menu-btn"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#F7F1E3] bg-[#1F6045]/60 hover:bg-[#1F6045] border border-[#7D9B78]/40 rounded-full transition-all duration-300 hover:border-[#D6A84F]/60"
            >
              <UtensilsCrossed className="w-4 h-4 text-[#D6A84F]" />
              <span>View Menu</span>
            </a>

            <button
              onClick={onOpenReservation}
              id="nav-reserve-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#17231D] bg-[#D6A84F] hover:bg-[#E5BC68] active:scale-[0.98] rounded-full shadow-md shadow-[#D6A84F]/20 hover:shadow-lg hover:shadow-[#D6A84F]/30 transition-all duration-300 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Reserve a Table</span>
            </button>
          </div>

          {/* Mobile Actions: Phone Quick Link & Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
              aria-label="Call Restaurant"
              className="p-2 text-[#D6A84F] bg-[#1F6045]/60 border border-[#7D9B78]/40 rounded-full hover:bg-[#1F6045] transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2.5 text-[#F7F1E3] bg-[#123B2A] border border-[#D6A84F]/30 rounded-xl hover:bg-[#1F6045] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#D6A84F]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-50 lg:hidden bg-[#17231D]/80 backdrop-blur-md transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-menu-drawer"
            className="fixed top-0 right-0 w-[85%] max-w-sm h-full bg-[#123B2A] border-l border-[#D6A84F]/20 p-6 flex flex-col justify-between shadow-2xl z-50 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top header in drawer */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#1F6045]">
                <div className="flex items-center gap-3">
                  <MayukhaLogoMark className="w-8 h-8" />
                  <div>
                    <span className="font-serif tracking-widest text-lg font-bold text-[#F7F1E3]">
                      MAYUKHA
                    </span>
                    <p className="text-[8px] tracking-[0.2em] text-[#E8D8B8]/70 uppercase">
                      Jungle Theme Restaurant
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#E8D8B8] hover:text-[#D6A84F] rounded-lg transition-colors cursor-pointer"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-3 mt-6" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg text-[#F7F1E3] hover:text-[#D6A84F] hover:bg-[#1F6045]/40 text-base font-medium transition-all"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-[#D6A84F]/60">→</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#1F6045] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 px-4 flex items-center justify-center gap-2 text-[#17231D] bg-[#D6A84F] hover:bg-[#E5BC68] font-semibold text-sm rounded-xl shadow-lg transition-colors cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full py-3 px-4 flex items-center justify-center gap-2 text-[#F7F1E3] bg-[#1F6045] hover:bg-[#1F6045]/80 font-medium text-sm rounded-xl border border-[#7D9B78]/40 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D6A84F]" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>

              <p className="text-center text-[11px] text-[#E8D8B8]/60 pt-1">
                KPHB Main Road, 1st Floor, PNR Empire, Hyderabad
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
