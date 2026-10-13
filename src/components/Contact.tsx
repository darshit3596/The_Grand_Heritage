import React from 'react';
import { Phone, MessageSquare, MapPin, Instagram, Clock, ExternalLink } from 'lucide-react';
import { hotelConfig } from '../data/hotelConfig';

export const Contact: React.FC = () => {
  const whatsappUrl = `https://wa.me/${hotelConfig.phone}?text=${encodeURIComponent(
    "Hello Hotel The Grand Heritage Team,\n\nI would like to contact you regarding a room reservation / inquiry.\n\nThank you!"
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#173C32] text-[#F8F5EF] relative overflow-hidden">
      {/* Subtle background ornamentation */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B89A62]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B89A62]">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F8F5EF] font-normal mt-2">
            Contact Hotel The Grand Heritage
          </h2>
          <div className="w-16 h-0.5 bg-[#B89A62] mx-auto mt-4" />
          <p className="mt-4 text-stone-300 text-sm sm:text-base font-light">
            We are here to assist with room reservations, rates, and any queries for your visit to Junagadh.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Phone Card */}
          <div className="bg-white/5 border border-white/10 rounded p-6 backdrop-blur-xs flex flex-col justify-between hover:border-[#B89A62]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded bg-[#B89A62]/20 flex items-center justify-center mb-4 text-[#B89A62]">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
                Direct Call
              </span>
              <p className="font-serif text-lg font-medium text-[#F8F5EF] mt-1">
                {hotelConfig.formattedPhone}
              </p>
              <p className="text-stone-300 text-xs mt-2 font-light">
                Available for phone enquiries and guest assistance.
              </p>
            </div>
            <a
              href={`tel:+${hotelConfig.phone}`}
              className="mt-6 py-2 px-3 text-xs uppercase tracking-wider font-semibold text-[#173C32] bg-[#B89A62] hover:bg-[#c9aa70] rounded transition-colors text-center inline-block"
            >
              Call Hotel Now
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white/5 border border-white/10 rounded p-6 backdrop-blur-xs flex flex-col justify-between hover:border-[#B89A62]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
                Instant Messaging
              </span>
              <p className="font-serif text-lg font-medium text-[#F8F5EF] mt-1">
                WhatsApp Desk
              </p>
              <p className="text-stone-300 text-xs mt-2 font-light">
                Quick response for room photos, tariffs, and availability.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 py-2 px-3 text-xs uppercase tracking-wider font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded transition-colors text-center inline-block"
            >
              WhatsApp Inquiry
            </a>
          </div>

          {/* Location / Directions Card */}
          <div className="bg-white/5 border border-white/10 rounded p-6 backdrop-blur-xs flex flex-col justify-between hover:border-[#B89A62]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded bg-[#B89A62]/20 flex items-center justify-center mb-4 text-[#B89A62]">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
                Hotel Location
              </span>
              <p className="font-serif text-lg font-medium text-[#F8F5EF] mt-1">
                Axar Plaza-2, Zanzarda
              </p>
              <p className="text-stone-300 text-xs mt-2 font-light">
                Second Floor, Junagadh, Gujarat 362015
              </p>
            </div>
            <a
              href={hotelConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 py-2 px-3 text-xs uppercase tracking-wider font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded transition-colors text-center inline-flex items-center justify-center gap-1.5"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Instagram Card */}
          <div className="bg-white/5 border border-white/10 rounded p-6 backdrop-blur-xs flex flex-col justify-between hover:border-[#B89A62]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded bg-pink-500/20 flex items-center justify-center mb-4 text-pink-400">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
                Social Media
              </span>
              <p className="font-serif text-lg font-medium text-[#F8F5EF] mt-1">
                Instagram Profile
              </p>
              <p className="text-stone-300 text-xs mt-2 font-light">
                @hotel_the_grand_heritage
              </p>
            </div>
            <a
              href={hotelConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 py-2 px-3 text-xs uppercase tracking-wider font-semibold text-white bg-pink-800/80 hover:bg-pink-700 rounded transition-colors text-center inline-flex items-center justify-center gap-1.5"
            >
              <span>Visit Instagram</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Check-in info card */}
        <div className="max-w-2xl mx-auto bg-black/30 border border-white/10 rounded p-4 sm:p-6 text-center text-xs sm:text-sm text-stone-300 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#B89A62]" />
            <span>Standard Check-in: <strong className="text-white">{hotelConfig.checkIn}</strong></span>
          </div>
          <div className="hidden sm:block text-stone-600">|</div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#B89A62]" />
            <span>Standard Check-out: <strong className="text-white">{hotelConfig.checkOut}</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
