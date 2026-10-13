import React from 'react';
import { MapPin, Clock, CheckCircle2, Phone, Compass } from 'lucide-react';
import { hotelConfig } from '../data/hotelConfig';

interface AboutProps {
  onViewRoomsClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onViewRoomsClick }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header kicker */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B89A62]">
            Hospitality in Saurashtra
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#173C32] font-normal mt-2">
            Welcome to Hotel The Grand Heritage
          </h2>
          <div className="w-16 h-0.5 bg-[#B89A62] mx-auto mt-4" />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Hospitality Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden shadow-xl border-4 border-white bg-stone-100 group">
              <img
                src="/src/assets/images/hotel_reception_hall_1791886020058.jpg"
                alt="Reception & Front Desk at Hotel The Grand Heritage Junagadh"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded text-white text-xs border border-white/10">
                <p className="font-serif text-sm font-medium text-[#F8F5EF]">Warm Front Desk Welcome</p>
                <p className="text-stone-300 font-light mt-0.5">Axar Plaza-2, Zanzarda, Junagadh</p>
              </div>
            </div>

            {/* Decorative subtle border frame */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-[#B89A62]/40 -z-10" />
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-[#B89A62]/40 -z-10" />
          </div>

          {/* Right Column: Factual & Concise Overview */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-stone-700 leading-relaxed text-base">
              <p>
                <strong>Hotel The Grand Heritage</strong> is an established hotel property located on the Second Floor of Axar Plaza-2 in Zanzarda, Junagadh, Gujarat.
              </p>
              <p>
                Whether you are traveling for business, embarking on a pilgrimage to sacred Mount Girnar, or touring the historic forts and wildlife sanctuaries of Junagadh, our hotel offers a welcoming haven featuring air-conditioned rooms and warm guest support.
              </p>
              <p className="text-sm text-stone-600 italic border-l-2 border-[#B89A62] pl-4 py-1">
                "Our aim is to provide every visitor with a tranquil, clean, and restful stay right in the heart of Junagadh's accessible transit hub."
              </p>
            </div>

            {/* Factual Information Panel */}
            <div className="bg-white rounded p-6 shadow-sm border border-stone-200/80 space-y-4">
              <h3 className="font-serif text-lg font-semibold text-[#173C32] border-b border-stone-100 pb-2">
                Property Stay Details
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B89A62] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase text-stone-500 font-medium block">Location</span>
                    <span className="font-medium text-stone-800">Zanzarda, Junagadh, Gujarat</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B89A62] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase text-stone-500 font-medium block">Check-in / Check-out</span>
                    <span className="font-medium text-stone-800">{hotelConfig.checkIn} / {hotelConfig.checkOut}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B89A62] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase text-stone-500 font-medium block">Room Type</span>
                    <span className="font-medium text-stone-800">AC Luxurious Rooms</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Compass className="w-4 h-4 text-[#B89A62] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase text-stone-500 font-medium block">Guest Rating</span>
                    <span className="font-medium text-stone-800">4.9 / 5 (144 Google Reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onViewRoomsClick}
                className="px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#173C32] hover:bg-[#1f4e42] rounded transition-colors shadow-sm"
              >
                View Room Gallery
              </button>

              <a
                href={`tel:+${hotelConfig.phone}`}
                className="px-6 py-3 text-xs uppercase tracking-wider font-semibold text-[#173C32] bg-stone-200/70 hover:bg-stone-200 rounded transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#B89A62]" />
                <span>Call {hotelConfig.formattedPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
