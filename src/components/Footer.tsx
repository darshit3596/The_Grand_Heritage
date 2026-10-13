import React from 'react';
import { Phone, MapPin, Instagram, ExternalLink } from 'lucide-react';
import { hotelConfig } from '../data/hotelConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f2720] text-stone-300 text-xs border-t border-[#B89A62]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#173C32] text-[#F8F5EF] flex items-center justify-center font-serif text-base font-bold border border-[#B89A62]/50">
                GH
              </div>
              <span className="font-serif text-lg font-bold tracking-wider text-[#F8F5EF] uppercase">
                The Grand Heritage
              </span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed font-light">
              AC luxurious rooms and warm hospitality located in Zanzarda, Junagadh, Gujarat. Your comfortable gateway to Mount Girnar and Saurashtra.
            </p>
            <div className="pt-2 text-[11px] text-stone-400">
              GST No: <span className="font-mono text-stone-300">{hotelConfig.gstNumber}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#B89A62]">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About the Hotel</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">Accommodations</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">Facilities</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Map & Location</a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-white transition-colors">Reserve / Enquire</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#B89A62]">
              Front Desk Contact
            </h4>
            <ul className="space-y-3 text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B89A62] shrink-0 mt-0.5" />
                <span>Second Floor, Axar Plaza-2, Zanzarda, Junagadh, Gujarat 362015</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B89A62] shrink-0" />
                <a href={`tel:+${hotelConfig.phone}`} className="hover:text-white transition-colors font-medium text-stone-200">
                  {hotelConfig.formattedPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#B89A62] shrink-0" />
                <a
                  href={hotelConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>@hotel_the_grand_heritage</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Policies */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#B89A62]">
              Hotel Stay Timing
            </h4>
            <div className="bg-black/30 p-4 rounded border border-white/5 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-stone-400">Standard Check-in:</span>
                <span className="text-white font-medium">{hotelConfig.checkIn}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Standard Check-out:</span>
                <span className="text-white font-medium">{hotelConfig.checkOut}</span>
              </div>
              <p className="text-[11px] text-stone-400 pt-2 border-t border-white/5">
                For early check-in or late departure requests, contact reception in advance via WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {currentYear} {hotelConfig.name}. All rights reserved.
          </div>

          {hotelConfig.agency.showAttribution && (
            <div className="flex items-center gap-1.5 text-stone-400">
              <span>Website concept & design by</span>
              <a
                href={hotelConfig.agency.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B89A62] hover:text-[#d3b479] font-medium transition-colors underline-offset-2 hover:underline inline-flex items-center gap-1"
              >
                <span>{hotelConfig.agency.name}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
