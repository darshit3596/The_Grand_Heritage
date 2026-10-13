import React from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink } from 'lucide-react';
import { hotelConfig } from '../data/hotelConfig';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B89A62]">
            Finding Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#173C32] font-normal mt-2">
            Location & Getting Here
          </h2>
          <div className="w-16 h-0.5 bg-[#B89A62] mx-auto mt-4" />
          <p className="mt-4 text-stone-600 text-sm sm:text-base">
            Conveniently positioned in Zanzarda, Junagadh, offering convenient transit connections across Gujarat.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address Details & Transit Info (Left) */}
          <div className="lg:col-span-5 bg-[#F8F5EF] p-6 sm:p-8 rounded border border-stone-200/90 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#B89A62] font-semibold block">
                  Hotel Address
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#173C32] mt-1">
                  Hotel The Grand Heritage
                </h3>
                <p className="text-stone-700 text-sm sm:text-base mt-2 leading-relaxed">
                  Second Floor, Axar Plaza-2, Zanzarda,<br />
                  Junagadh, Gujarat 362015, India
                </p>
              </div>

              {/* Timing Cards */}
              <div className="bg-white p-4 rounded border border-stone-200/80 space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                  <span className="text-stone-500 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#B89A62]" />
                    <span>Check-in Time</span>
                  </span>
                  <span className="font-semibold text-stone-800">{hotelConfig.checkIn}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-stone-500 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#B89A62]" />
                    <span>Check-out Time</span>
                  </span>
                  <span className="font-semibold text-stone-800">{hotelConfig.checkOut}</span>
                </div>
              </div>

              {/* Transit & Landmarks note */}
              <div className="space-y-2 text-xs text-stone-600">
                <span className="font-semibold text-stone-800 uppercase tracking-wider block">
                  Nearby Junagadh Highlights:
                </span>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2">
                    <span className="text-[#B89A62]">·</span>
                    <span>Girnar Ropeway & Pilgrimage Temple Base (~7 km)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#B89A62]">·</span>
                    <span>Uparkot Fort & Ancient Buddhist Caves (~4.5 km)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#B89A62]">·</span>
                    <span>Mahabat Maqbara Palace Architecture (~4 km)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#B89A62]">·</span>
                    <span>Junagadh Junction Railway Station (~3.8 km)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
              <a
                href={hotelConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 text-xs uppercase tracking-wider font-semibold text-[#173C32] bg-[#B89A62] hover:bg-[#c9aa70] rounded transition-colors flex items-center justify-center gap-2 shadow-xs text-center"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={`tel:+${hotelConfig.phone}`}
                className="py-3 px-4 text-xs uppercase tracking-wider font-semibold text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-4 h-4 text-[#173C32]" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual & Direction Card (Right) */}
          <div className="lg:col-span-7 bg-stone-100 rounded border border-stone-200 overflow-hidden relative flex flex-col min-h-[380px] shadow-sm">
            {/* Map Preview Banner */}
            <div className="relative flex-1 bg-stone-200 flex items-center justify-center p-6 text-center overflow-hidden">
              <div className="absolute inset-0 opacity-25">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#173C32" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              <div className="relative z-10 max-w-md bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded shadow-lg border border-stone-200 space-y-4">
                <div className="w-12 h-12 bg-[#173C32] text-[#F8F5EF] rounded-full mx-auto flex items-center justify-center shadow-md">
                  <MapPin className="w-6 h-6 text-[#B89A62]" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-semibold text-[#173C32]">
                    Axar Plaza-2, Zanzarda
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Second Floor · Junagadh, Gujarat 362015
                  </p>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Located in the vibrant Zanzarda commercial zone, easily accessible by road, auto-rickshaw, or taxi from all parts of Junagadh city.
                </p>
                <a
                  href={hotelConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#173C32] hover:bg-[#1f4e42] rounded transition-all shadow-sm"
                >
                  <span>Get Live Route in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Bottom info strip */}
            <div className="bg-[#173C32] text-[#F8F5EF] p-4 text-xs flex flex-wrap items-center justify-between gap-2">
              <span className="text-stone-300">
                Official Google Maps Rating: <strong className="text-amber-300 font-medium">★ 4.9 / 5</strong>
              </span>
              <span className="text-[11px] text-stone-400">
                GST: {hotelConfig.gstNumber}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
