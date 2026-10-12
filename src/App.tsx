/**
 * Mayukha Jungle Theme Restaurant
 * KPHB Main Road, Hyderabad
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { ExperienceCards } from './components/ExperienceCards';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { OccasionsSection } from './components/OccasionsSection';
import { ReservationSection, ReservationModal } from './components/ReservationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CalendarCheck, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from './data/restaurantData';

export default function App() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState<string>('Casual Dining');

  const handleOpenReservation = (occasion?: string) => {
    if (occasion) {
      setSelectedOccasion(occasion);
    }
    setReservationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F1E3] text-[#17231D] flex flex-col selection:bg-[#D6A84F]/30 selection:text-[#123B2A] relative">
      {/* Top Navbar */}
      <Navbar onOpenReservation={() => handleOpenReservation()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <HeroSection onOpenReservation={() => handleOpenReservation()} />
        <StorySection />
        <ExperienceCards />
        <MenuSection onOpenReservation={() => handleOpenReservation()} />
        <GallerySection />
        <OccasionsSection onSelectOccasion={(occ) => handleOpenReservation(occ)} />
        <ReservationSection onOpenReservation={() => handleOpenReservation()} />
        <ReviewsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Reservation / Enquiry Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
        preselectedOccasion={selectedOccasion}
      />

      {/* Mobile Bottom Floating Sticky Action Bar */}
      <div className="fixed bottom-3 left-3 right-3 z-40 lg:hidden flex items-center gap-2 p-2 bg-[#123B2A]/90 backdrop-blur-md rounded-2xl border border-[#D6A84F]/30 shadow-2xl">
        <a
          href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
          className="flex-1 py-3 px-3 bg-[#1F6045] hover:bg-[#1F6045]/80 text-[#F7F1E3] text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-[#7D9B78]/30"
        >
          <Phone className="w-3.5 h-3.5 text-[#D6A84F]" />
          <span>Call: {RESTAURANT_INFO.phone}</span>
        </a>

        <button
          onClick={() => handleOpenReservation()}
          className="flex-1 py-3 px-3 bg-[#D6A84F] hover:bg-[#E5BC68] text-[#17231D] text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-colors cursor-pointer"
        >
          <CalendarCheck className="w-3.5 h-3.5 text-[#17231D]" />
          <span>Book Table</span>
        </button>
      </div>
    </div>
  );
}
