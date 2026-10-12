import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Phone, User, MessageSquare, CheckCircle, Sparkles, Send } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationFormData } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedOccasion?: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  preselectedOccasion = 'Casual Dining',
}) => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    phone: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '19:30',
    guests: 4,
    occasion: preselectedOccasion,
    specialRequests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `MYK-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(generatedRef);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#123B2A] text-[#F7F1E3] rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-[#D6A84F]/40 shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#E8D8B8]/70 hover:text-[#D6A84F] rounded-full cursor-pointer"
          aria-label="Close Reservation Form"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D6A84F] tracking-widest uppercase mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Table Reservation Request</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F7F1E3]">
                Your Table in the Wild Awaits
              </h3>
              <p className="text-xs sm:text-sm text-[#E8D8B8]/80 mt-1">
                Fill in your details below. Our team at KPHB will call or message to confirm your table.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium text-[#E8D8B8] mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#D6A84F]" />
                    <span>Your Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#17231D] border border-[#1F6045] focus:border-[#D6A84F] rounded-xl px-3.5 py-2.5 text-sm text-[#F7F1E3] placeholder-[#E8D8B8]/40 focus:outline-none focus:ring-1 focus:ring-[#D6A84F]"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-medium text-[#E8D8B8] mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#D6A84F]" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#17231D] border border-[#1F6045] focus:border-[#D6A84F] rounded-xl px-3.5 py-2.5 text-sm text-[#F7F1E3] placeholder-[#E8D8B8]/40 focus:outline-none focus:ring-1 focus:ring-[#D6A84F]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Date */}
                <div>
                  <label className="block text-xs font-medium text-[#E8D8B8] mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D6A84F]" />
                    <span>Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#17231D] border border-[#1F6045] focus:border-[#D6A84F] rounded-xl px-3 py-2 text-sm text-[#F7F1E3] focus:outline-none focus:ring-1 focus:ring-[#D6A84F]"
                  />
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="block text-xs font-medium text-[#E8D8B8] mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D6A84F]" />
                    <span>Preferred Time *</span>
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#17231D] border border-[#1F6045] focus:border-[#D6A84F] rounded-xl px-3 py-2 text-sm text-[#F7F1E3] focus:outline-none focus:ring-1 focus:ring-[#D6A84F]"
                  >
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:00">01:00 PM (Lunch)</option>
                    <option value="13:30">01:30 PM (Lunch)</option>
                    <option value="14:00">02:00 PM (Lunch)</option>
                    <option value="19:00">07:00 PM (Dinner)</option>
                    <option value="19:30">07:30 PM (Dinner)</option>
                    <option value="20:00">08:00 PM (Dinner)</option>
                    <option value="20:30">08:30 PM (Dinner)</option>
                    <option value="21:00">09:00 PM (Dinner)</option>
                    <option value="21:30">09:30 PM (Dinner)</option>
                  </select>
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-xs font-medium text-[#E8D8B8] mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#D6A84F]" />
                    <span>Guests *</span>
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full bg-[#17231D] border border-[#1F6045] focus:border-[#D6A84F] rounded-xl px-3 py-2 text-sm text-[#F7F1E3] focus:outline-none focus:ring-1 focus:ring-[#D6A84F]"
                  >
                    <option value={2}>2 Guests (Cozy)</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={6}>6 Guests (Family)</option>
                    <option value={8}>8 Guests</option>
                    <option value={10}>10+ Guests (Group)</option>
                  </select>
                </div>
              </div>

              {/* Occasion (Optional) */}
              <div>
                <label className="block text-xs font-medium text-[#E8D8B8] mb-1.5">
                  Occasion (Optional)
                </label>
                <select
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  className="w-full bg-[#17231D] border border-[#1F6045] focus:border-[#D6A84F] rounded-xl px-3.5 py-2.5 text-sm text-[#F7F1E3] focus:outline-none focus:ring-1 focus:ring-[#D6A84F]"
                >
                  <option value="Family Dining">Family Dining</option>
                  <option value="Friends & Gatherings">Friends & Gatherings</option>
                  <option value="Birthday Celebration">Birthday Celebration</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Casual Dinner">Casual Dinner</option>
                  <option value="Corporate / Team Lunch">Corporate / Team Lunch</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Special Requests Message */}
              <div>
                <label className="block text-xs font-medium text-[#E8D8B8] mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#D6A84F]" />
                  <span>Special Requests / Notes (Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Seating preference, dietary notes, or celebration requests..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full bg-[#17231D] border border-[#1F6045] focus:border-[#D6A84F] rounded-xl px-3.5 py-2 text-sm text-[#F7F1E3] placeholder-[#E8D8B8]/40 focus:outline-none focus:ring-1 focus:ring-[#D6A84F]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#D6A84F] hover:bg-[#E5BC68] text-[#17231D] font-bold text-sm rounded-xl shadow-lg shadow-[#D6A84F]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Reservation Request</span>
                </button>
                <p className="text-[11px] text-center text-[#E8D8B8]/60 mt-2">
                  Demo request submission. The restaurant team will contact you to confirm seat availability.
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-[#1F6045] text-[#D6A84F] rounded-full flex items-center justify-center mx-auto mb-5 border border-[#D6A84F]/40 shadow-inner">
              <CheckCircle className="w-9 h-9" />
            </div>

            <span className="text-xs font-semibold text-[#D6A84F] uppercase tracking-widest">
              Request Received
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#F7F1E3] mt-1 mb-3">
              Thank you, {formData.name}!
            </h3>

            <div className="bg-[#17231D] p-4 rounded-2xl border border-[#1F6045] text-left max-w-md mx-auto mb-6 text-xs space-y-1.5 text-[#E8D8B8]">
              <div className="flex justify-between border-b border-[#1F6045] pb-2 mb-2">
                <span className="text-[#D6A84F] font-bold">Booking Request Ref:</span>
                <span className="font-mono text-[#F7F1E3] font-bold">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span>Date & Time:</span>
                <span className="text-[#F7F1E3] font-medium">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span>Guests:</span>
                <span className="text-[#F7F1E3] font-medium">{formData.guests} people</span>
              </div>
              <div className="flex justify-between">
                <span>Occasion:</span>
                <span className="text-[#F7F1E3] font-medium">{formData.occasion}</span>
              </div>
              <div className="flex justify-between">
                <span>Phone:</span>
                <span className="text-[#F7F1E3] font-medium">{formData.phone}</span>
              </div>
            </div>

            <p className="text-sm text-[#E8D8B8]/90 max-w-md mx-auto mb-6 font-light">
              Thank you! Your request has been received. The restaurant team will contact you to confirm availability.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#1F6045] hover:bg-[#1F6045]/80 text-[#F7F1E3] text-xs font-semibold rounded-full border border-[#7D9B78]/40 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#D6A84F]" />
                <span>Call Directly: {RESTAURANT_INFO.phone}</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#D6A84F] hover:bg-[#E5BC68] text-[#17231D] text-xs font-bold rounded-full transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const ReservationSection: React.FC<{ onOpenReservation: () => void }> = ({
  onOpenReservation,
}) => {
  return (
    <section id="reservation" className="relative bg-[#123B2A] text-[#F7F1E3] py-20 lg:py-28 overflow-hidden">
      {/* Background glow and subtle botanicals */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#1F6045]/30 rounded-full blur-3xl" />
        <div className="absolute -top-10 -right-10 text-[#7D9B78]/15">
          <svg className="w-80 h-80" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0C60 30 90 40 100 50C90 60 60 70 50 100C40 70 10 60 0 50C10 40 40 30 50 0Z" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1F6045]/70 border border-[#D6A84F]/40 text-xs font-semibold text-[#D6A84F] uppercase tracking-widest mb-6">
          BOOK YOUR EXPERIENCE
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#F7F1E3] tracking-tight mb-6">
          Your Table in the Wild Awaits
        </h2>

        <p className="text-base sm:text-lg text-[#E8D8B8]/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Planning a meal, a gathering, or simply a memorable evening? Get in touch with Mayukha Jungle Theme Restaurant.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          <button
            onClick={onOpenReservation}
            id="cta-reserve-btn"
            className="w-full sm:w-auto px-8 py-4 bg-[#D6A84F] hover:bg-[#E5BC68] text-[#17231D] font-bold text-base rounded-full shadow-xl shadow-[#D6A84F]/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2.5"
          >
            <Calendar className="w-5 h-5" />
            <span>Reserve a Table</span>
          </button>

          <a
            href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
            id="cta-call-btn"
            className="w-full sm:w-auto px-8 py-4 bg-[#1F6045]/80 hover:bg-[#1F6045] text-[#F7F1E3] border border-[#7D9B78]/50 hover:border-[#D6A84F] font-semibold text-base rounded-full transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <Phone className="w-5 h-5 text-[#D6A84F]" />
            <span>Call the Restaurant: {RESTAURANT_INFO.phone}</span>
          </a>
        </div>

        {/* Highlighted service perks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-[#1F6045]">
          <div className="p-4 rounded-2xl bg-[#17231D]/40 border border-[#1F6045]/60">
            <p className="text-xs uppercase tracking-wider text-[#D6A84F] font-semibold mb-1">Cuisine</p>
            <p className="text-sm text-[#F7F1E3]">Hyderabadi Biryani & Regional Starters</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#17231D]/40 border border-[#1F6045]/60">
            <p className="text-xs uppercase tracking-wider text-[#D6A84F] font-semibold mb-1">Seating</p>
            <p className="text-sm text-[#F7F1E3]">Comfortable Family & Group Tables</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#17231D]/40 border border-[#1F6045]/60">
            <p className="text-xs uppercase tracking-wider text-[#D6A84F] font-semibold mb-1">Location</p>
            <p className="text-sm text-[#F7F1E3]">1st Floor, PNR Empire, KPHB Main Rd</p>
          </div>
        </div>
      </div>
    </section>
  );
};
