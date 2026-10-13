import React from 'react';
import { hotelConfig } from '../data/hotelConfig';

interface HotelLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const HotelLogo: React.FC<HotelLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const imageSrc = hotelConfig.logoUrl || '/src/assets/images/hotel_official_logo_1791888583654.jpg';

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div
        className={`${sizeMap[size]} shrink-0 rounded-sm overflow-hidden bg-black border border-[#B89A62]/40 shadow-sm flex items-center justify-center p-0.5`}
      >
        <img
          src={imageSrc}
          alt="Hotel The Grand Heritage Junagadh Official Crest Logo"
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#173C32] uppercase leading-tight">
            The Grand Heritage
          </span>
          <span className="text-[10px] tracking-widest text-[#B89A62] uppercase font-semibold">
            A Legacy of Hospitality · Junagadh
          </span>
        </div>
      )}
    </div>
  );
};
