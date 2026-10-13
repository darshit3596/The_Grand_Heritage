import React from 'react';
import { Phone, Clock, MessageSquare } from 'lucide-react';
import { hotelConfig } from '../data/hotelConfig';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#173C32] text-[#F8F5EF] text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-[#B89A62]/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 tracking-wide font-medium truncate min-w-0">
          <span className="text-[#B89A62] text-[10px] shrink-0">✦</span>
          <span className="truncate">Hotel The Grand Heritage, Junagadh · AC Luxurious Rooms</span>
        </div>

        <div className="flex items-center gap-3 text-stone-200 shrink-0">
          <div className="hidden md:flex items-center gap-1.5 text-stone-300">
            <Clock className="w-3.5 h-3.5 text-[#B89A62]" />
            <span>Check-in: {hotelConfig.checkIn} · Check-out: {hotelConfig.checkOut}</span>
          </div>
          
          <a
            href={`tel:+${hotelConfig.phone}`}
            className="flex items-center gap-1 hover:text-[#B89A62] transition-colors font-semibold text-[11px] sm:text-xs"
            title="Call hotel reception"
          >
            <Phone className="w-3 h-3 text-[#B89A62]" />
            <span>{hotelConfig.formattedPhone}</span>
          </a>

          <a
            href={`https://wa.me/${hotelConfig.phone}?text=${encodeURIComponent("Hello Hotel The Grand Heritage Team, I would like to inquire about room availability.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1 hover:text-[#B89A62] transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#B89A62]" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>
      </div>
    </div>
  );
};
