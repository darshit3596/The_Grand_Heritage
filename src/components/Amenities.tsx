import React from 'react';
import { Snowflake, Clock, MapPin, Bath, MessageSquare, Phone } from 'lucide-react';
import { hotelConfig } from '../data/hotelConfig';

export const Amenities: React.FC = () => {
  // Map icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'snowflake':
        return <Snowflake className="w-6 h-6 text-[#173C32]" />;
      case 'clock':
        return <Clock className="w-6 h-6 text-[#173C32]" />;
      case 'map-pin':
        return <MapPin className="w-6 h-6 text-[#173C32]" />;
      case 'bath':
        return <Bath className="w-6 h-6 text-[#173C32]" />;
      default:
        return <Clock className="w-6 h-6 text-[#173C32]" />;
    }
  };

  const verifiedList = hotelConfig.verifiedAmenities.filter((a) => a.verified);

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B89A62]">
            Comfort & Essentials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#173C32] font-normal mt-2">
            Hotel Facilities & Comfort
          </h2>
          <div className="w-16 h-0.5 bg-[#B89A62] mx-auto mt-4" />
          <p className="mt-4 text-stone-600 text-sm sm:text-base">
            Essential comforts provided for your visit to Junagadh.
          </p>
        </div>

        {/* Verified Amenities Grid */}
        {verifiedList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {verifiedList.map((amenity, idx) => (
              <div
                key={idx}
                className="bg-[#F8F5EF] p-6 rounded border border-stone-200/90 shadow-sm flex flex-col justify-between hover:border-[#B89A62]/60 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded bg-white border border-[#B89A62]/30 flex items-center justify-center mb-4 shadow-xs">
                    {getIcon(amenity.icon)}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#173C32] mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center gap-1.5 text-[11px] font-medium text-[#173C32]">
                  <span className="text-[#B89A62]">✓</span>
                  <span>Verified Property Feature</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-[#F8F5EF] rounded border border-stone-200 max-w-xl mx-auto p-8">
            <p className="text-stone-700 text-base font-serif">
              Contact our team to learn about available facilities.
            </p>
          </div>
        )}

        {/* Informational Callout Box */}
        <div className="mt-12 bg-[#173C32] text-[#F8F5EF] rounded p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-xl font-medium text-[#F8F5EF]">
              Have a specific requirement or travel query?
            </h4>
            <p className="text-stone-300 text-xs sm:text-sm font-light">
              Contact our front desk team directly for customized check-in times, group bookings, or assistance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${hotelConfig.phone}?text=${encodeURIComponent("Hello Hotel The Grand Heritage Team, I have an enquiry regarding available facilities and services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#173C32] bg-[#B89A62] hover:bg-[#c9aa70] rounded transition-colors inline-flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={`tel:+${hotelConfig.phone}`}
              className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#B89A62]" />
              <span>{hotelConfig.formattedPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
