import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { Gallery } from './components/Gallery';
import { Amenities } from './components/Amenities';
import { BookingInquiry } from './components/BookingInquiry';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { PresentationDemoBanner } from './components/PresentationDemoBanner';
import { hotelConfig } from './data/hotelConfig';

export default function App() {
  const [selectedRoomForInquiry, setSelectedRoomForInquiry] = useState<string>('');
  const [showAttribution, setShowAttribution] = useState<boolean>(hotelConfig.agency.showAttribution);

  const scrollToInquiry = () => {
    const el = document.getElementById('inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRooms = () => {
    const el = document.getElementById('rooms');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectRoomForInquiry = (roomName: string) => {
    setSelectedRoomForInquiry(roomName);
    scrollToInquiry();
  };

  // Sync agency attribution state with config
  hotelConfig.agency.showAttribution = showAttribution;

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#242424] flex flex-col overflow-x-hidden pb-14 md:pb-0 font-sans antialiased">
      {/* Demo Review Bar */}
      <PresentationDemoBanner
        showAttribution={showAttribution}
        onToggleAttribution={setShowAttribution}
      />

      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Navigation Bar */}
      <Navbar onCheckAvailabilityClick={scrollToInquiry} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreClick={scrollToAbout}
          onEnquireClick={scrollToInquiry}
        />

        {/* About Section */}
        <About onViewRoomsClick={scrollToRooms} />

        {/* Rooms & Accommodations Section */}
        <Rooms onSelectRoomForInquiry={handleSelectRoomForInquiry} />

        {/* Hotel Photo Gallery Section */}
        <Gallery />

        {/* Facilities & Comfort Section */}
        <Amenities />

        {/* Interactive Booking Inquiry Section */}
        <BookingInquiry selectedRoomPreference={selectedRoomForInquiry} />

        {/* Location & Map Section */}
        <Location />

        {/* Contact Information & Channels */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar />
    </div>
  );
}
