import React from 'react';
import { MessageSquare, Users, BedDouble, Check, AlertCircle } from 'lucide-react';
import { hotelConfig, RoomCategory } from '../data/hotelConfig';

interface RoomsProps {
  onSelectRoomForInquiry: (roomName: string) => void;
}

export const Rooms: React.FC<RoomsProps> = ({ onSelectRoomForInquiry }) => {
  const handleRoomWhatsAppEnquiry = (room: RoomCategory) => {
    const text = encodeURIComponent(
      `Hello Hotel The Grand Heritage Team,\n\nI would like to enquire about room availability for:\nRoom Type: ${room.name}\n\nPlease let me know the current tariff, amenities, and availability for my stay.\n\nThank you!`
    );
    window.open(`https://wa.me/${hotelConfig.phone}?text=${text}`, '_blank');
  };

  return (
    <section id="rooms" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B89A62]">
            Accommodations & Suites
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#173C32] font-normal mt-2">
            Rooms & Stay Options
          </h2>
          <div className="w-16 h-0.5 bg-[#B89A62] mx-auto mt-4" />
          <p className="mt-4 text-stone-600 text-sm sm:text-base">
            Air-conditioned, comfortable rooms designed for your relaxing journey in Junagadh.
          </p>
        </div>

        {/* Demo Content Disclosure Note (Clear, professional presentation requirement) */}
        <div className="mb-10 max-w-3xl mx-auto bg-stone-50 border border-stone-200 rounded p-4 flex items-start gap-3 text-stone-600 text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 text-[#B89A62] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-stone-800">Presentation Demo Notice:</span> The room categories and configurations shown below are sample demo layouts. Exact category names, tariffs, and bed configurations can be customized to the hotel's operational inventory. Please contact management directly on WhatsApp for real-time rates.
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotelConfig.rooms.map((room) => (
            <div
              key={room.id}
              className="bg-[#F8F5EF] rounded border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group"
            >
              {/* Room Image Container */}
              <div className="relative h-64 overflow-hidden bg-stone-200">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#173C32]/90 backdrop-blur-sm text-[#F8F5EF] text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded border border-[#B89A62]/30">
                  {room.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl text-[#173C32] font-medium">
                      {room.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      {room.indicativePriceNote}
                    </p>
                  </div>

                  <p className="text-stone-600 text-sm leading-relaxed line-clamp-3">
                    {room.description}
                  </p>

                  {/* Room Specs */}
                  <div className="pt-2 border-t border-stone-200/80 grid grid-cols-2 gap-3 text-xs text-stone-700">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#B89A62]" />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BedDouble className="w-4 h-4 text-[#B89A62]" />
                      <span>{room.bedConfiguration}</span>
                    </div>
                  </div>

                  {/* Facilities list */}
                  <div className="pt-2 border-t border-stone-200/80">
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-stone-500 mb-2">
                      Key Highlights:
                    </div>
                    <ul className="grid grid-cols-2 gap-1.5 text-xs text-stone-600">
                      {room.facilities.map((facility, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#173C32]" />
                          <span>{facility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-2 border-t border-stone-200/80">
                  <button
                    onClick={() => handleRoomWhatsAppEnquiry(room)}
                    className="w-full py-2.5 px-4 text-xs uppercase tracking-wider font-semibold text-[#173C32] bg-[#B89A62] hover:bg-[#c9aa70] active:bg-[#a38753] rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enquire on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => onSelectRoomForInquiry(room.name)}
                    className="w-full py-2 text-xs font-medium text-stone-600 hover:text-[#173C32] transition-colors underline-offset-4 hover:underline text-center"
                  >
                    Fill Booking Form with this Room
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
