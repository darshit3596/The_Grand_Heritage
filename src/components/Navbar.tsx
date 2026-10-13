import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { hotelConfig } from '../data/hotelConfig';

interface NavbarProps {
  onCheckAvailabilityClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCheckAvailabilityClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-stone-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-8">
          {/* Zone 1: Brand Wordmark with Official Crest Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 sm:gap-3 min-w-0 group focus:outline-none"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-sm bg-black border border-[#B89A62]/40 shadow-sm overflow-hidden flex items-center justify-center p-0.5 shrink-0 transition-transform group-hover:scale-105">
              <img
                src={hotelConfig.logoUrl}
                alt="Hotel The Grand Heritage Junagadh Official Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif text-sm sm:text-base md:text-xl font-bold tracking-wider text-[#173C32] uppercase leading-tight truncate">
                The Grand Heritage
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest text-[#B89A62] uppercase font-semibold truncate">
                A Legacy of Hospitality · Junagadh
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#173C32] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#B89A62] after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action (Desktop) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href={`tel:+${hotelConfig.phone}`}
              className="p-2 text-[#173C32] hover:text-[#B89A62] rounded-full hover:bg-stone-100 transition-colors"
              title="Call Reception"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={onCheckAvailabilityClick}
              className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-white bg-[#173C32] hover:bg-[#1f4e42] active:bg-[#123129] rounded transition-colors shadow-sm whitespace-nowrap shrink-0 border border-[#B89A62]/30"
            >
              Check Availability
            </button>
          </div>

          {/* Mobile Menu Toggle Button (Clean, no cut-off) */}
          <div className="flex md:hidden items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-[#173C32] rounded hover:bg-stone-100 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-stone-800 font-medium hover:text-[#173C32] hover:bg-stone-50 rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onCheckAvailabilityClick();
                }}
                className="w-full text-center py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#173C32] rounded shadow-sm"
              >
                Check Availability & Book
              </button>
              <a
                href={`tel:+${hotelConfig.phone}`}
                className="w-full text-center py-2 text-xs font-semibold text-[#173C32] bg-stone-100 rounded flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {hotelConfig.formattedPhone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
