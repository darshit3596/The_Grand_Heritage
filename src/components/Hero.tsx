import React from 'react';
import { MessageSquare, ArrowDown, MapPin, Star, ShieldCheck } from 'lucide-react';
import { hotelConfig } from '../data/hotelConfig';

interface HeroProps {
  onExploreClick: () => void;
  onEnquireClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onEnquireClick }) => {
  const whatsappUrl = `https://wa.me/${hotelConfig.phone}?text=${encodeURIComponent(
    "Hello Hotel The Grand Heritage Team,\n\nI would like to enquire about room availability for my upcoming stay in Junagadh.\n\nPlease share room options and rates.\n\nThank you!"
  )}`;

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_hotel_junagadh_1791886018636.jpg"
          alt="Hotel The Grand Heritage Junagadh Grand Interior"
          className="w-full h-full object-cover object-center scale-105 motion-safe:animate-in motion-safe:fade-in duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered subtle scrim for perfect text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-white">
        <div className="max-w-3xl space-y-6">
          {/* Trust Marker & Location */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm tracking-widest uppercase font-semibold text-[#B89A62]">
            <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded border border-[#B89A62]/30 text-[#F8F5EF]">
              <MapPin className="w-3.5 h-3.5 text-[#B89A62]" />
              Junagadh, Gujarat, India
            </span>
            <span className="hidden sm:inline text-white/40">·</span>
            <span className="flex items-center gap-1 text-amber-300 bg-black/40 backdrop-blur-md px-3 py-1 rounded border border-white/10">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{hotelConfig.rating} / 5</span>
              <span className="text-white/70">({hotelConfig.reviewCount} Reviews)</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.15] text-[#F8F5EF] text-balance">
            Your Comfortable Stay in Junagadh
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-stone-200/90 leading-relaxed max-w-2xl font-light">
            Discover a welcoming stay in Junagadh, Gujarat. Located conveniently in Zanzarda, our hotel provides air-conditioned comfort, thoughtful amenities, and authentic hospitality for your visit to Saurashtra.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm uppercase tracking-wider font-semibold text-[#173C32] bg-[#B89A62] hover:bg-[#c9aa70] active:bg-[#a38753] rounded transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Enquire on WhatsApp</span>
            </a>

            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm uppercase tracking-wider font-semibold text-white bg-white/10 hover:bg-white/20 active:bg-white/5 border border-white/30 backdrop-blur-sm rounded transition-all"
            >
              <span>Explore the Hotel</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>

          {/* Clean metadata bar */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone-300 font-light">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#B89A62]" />
              <span>Verified Business Info</span>
            </div>
            <span>·</span>
            <div>Check-in: <strong className="text-white font-medium">{hotelConfig.checkIn}</strong></div>
            <span>·</span>
            <div>Check-out: <strong className="text-white font-medium">{hotelConfig.checkOut}</strong></div>
            <span>·</span>
            <div>Air-Conditioned Rooms</div>
          </div>
        </div>
      </div>

      {/* Decorative bottom hairline indicator */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#B89A62]/40 to-transparent" />
    </section>
  );
};
