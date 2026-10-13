import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { hotelConfig } from '../data/hotelConfig';

export const MobileStickyBar: React.FC = () => {
  const whatsappUrl = `https://wa.me/${hotelConfig.phone}?text=${encodeURIComponent(
    "Hello Hotel The Grand Heritage Team,\n\nI would like to inquire about room availability and tariffs.\n\nThank you!"
  )}`;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 py-2 shadow-lg">
      <div className="flex items-center gap-2">
        <a
          href={`tel:+${hotelConfig.phone}`}
          className="flex-1 min-h-[44px] px-3 py-2 bg-stone-100 hover:bg-stone-200 text-[#173C32] rounded flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider transition-colors active:scale-98"
        >
          <Phone className="w-4 h-4 text-[#B89A62]" />
          <span>Call Hotel</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[44px] px-3 py-2 bg-[#173C32] hover:bg-[#1f4e42] text-white rounded flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm active:scale-98 border border-[#B89A62]/30"
        >
          <MessageSquare className="w-4 h-4 text-[#B89A62]" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
