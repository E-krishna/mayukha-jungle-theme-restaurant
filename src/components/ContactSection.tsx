import React from 'react';
import { MapPin, Phone, Compass, Navigation, Utensils, Clock, CheckCircle2, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative bg-[#F7F1E3] py-20 lg:py-28 text-[#17231D] border-t border-[#E8D8B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Details & Directions */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F6045] uppercase tracking-[0.25em] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>LOCATION & ACCESS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#123B2A] tracking-tight mb-6">
              Find Your Way to Mayukha
            </h2>

            <p className="text-sm sm:text-base text-[#17231D]/80 mb-8 font-light leading-relaxed">
              Conveniently situated right on KPHB Main Road on the 1st Floor of PNR Empire, prominently located directly above Lalitha Jewellery.
            </p>

            {/* Address Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8D8B8] shadow-sm mb-6">
              <div className="flex items-start gap-4 mb-5">
                <div className="p-3 bg-[#123B2A] text-[#D6A84F] rounded-2xl shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-bold text-[#1F6045] mb-1">
                    Restaurant Address
                  </h3>
                  <p className="text-base font-serif font-bold text-[#123B2A]">
                    {RESTAURANT_INFO.address.line1}
                  </p>
                  <p className="text-sm text-[#17231D]/85 font-medium">
                    {RESTAURANT_INFO.address.line2}
                  </p>
                  <p className="text-sm text-[#17231D]/70 mt-1">
                    {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.state} {RESTAURANT_INFO.address.pincode}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 pt-5 border-t border-[#E8D8B8]">
                <div className="p-3 bg-[#1F6045]/15 text-[#1F6045] rounded-2xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-bold text-[#1F6045] mb-0.5">
                    Direct Phone Line
                  </h3>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-lg font-bold font-serif text-[#123B2A] hover:text-[#D6A84F] transition-colors"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <p className="text-[11px] text-[#17231D]/60">Call for table bookings & takeaway orders</p>
                </div>
              </div>
            </div>

            {/* Services Available */}
            <div className="bg-white rounded-2xl p-5 border border-[#E8D8B8] mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F6045] mb-3 flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5" />
                <span>Available Services</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {RESTAURANT_INFO.services.map((svc) => (
                  <div key={svc.name} className="flex items-center gap-2 text-xs font-semibold text-[#123B2A]">
                    <CheckCircle2 className="w-4 h-4 text-[#1F6045] shrink-0" />
                    <span>{svc.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="get-directions-btn"
                className="w-full sm:w-auto px-7 py-3.5 bg-[#123B2A] hover:bg-[#1F6045] text-[#F7F1E3] font-bold text-sm rounded-full shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#D6A84F] group-hover:translate-x-0.5 transition-transform" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                id="call-now-contact-btn"
                className="w-full sm:w-auto px-7 py-3.5 bg-[#D6A84F] hover:bg-[#E5BC68] text-[#17231D] font-bold text-sm rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Styled Map Embed / Interactive Map Container */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#E8D8B8] shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between px-2 pb-3 mb-2 border-b border-[#E8D8B8]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold text-[#123B2A]">
                    Mayukha Jungle Theme Restaurant • KPHB
                  </span>
                </div>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#1F6045] hover:text-[#123B2A] font-semibold flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Responsive Google Maps Iframe */}
              <div className="relative w-full h-[400px] sm:h-[460px] rounded-2xl overflow-hidden border border-[#E8D8B8] bg-[#17231D]/10">
                <iframe
                  title="Mayukha Jungle Theme Restaurant Location Map"
                  src="https://maps.google.com/maps?q=Mayukha+Jungle+Theme+Restaurant+PNR+Empire+KPHB+Hyderabad&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-[0.95]"
                />
              </div>

              <div className="mt-4 px-2 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#17231D]/70 gap-2">
                <p>Landmark: Above Lalitha Jewellery showroom on KPHB Main Road</p>
                <p className="font-semibold text-[#1F6045]">Ample parking available at PNR Empire</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
