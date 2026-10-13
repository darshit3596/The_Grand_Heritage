import React, { useState } from 'react';
import { Expand, Camera } from 'lucide-react';
import { hotelConfig, GalleryItem } from '../data/hotelConfig';
import { Lightbox } from './Lightbox';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const categories = ['All', 'Reception', 'Entrance', 'Rooms', 'Bathrooms', 'Lobby'];

  const filteredItems = selectedCategory === 'All'
    ? hotelConfig.gallery
    : hotelConfig.gallery.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F8F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B89A62]">
            Visual Tour
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#173C32] font-normal mt-2">
            Hotel Photo Gallery
          </h2>
          <div className="w-16 h-0.5 bg-[#B89A62] mx-auto mt-4" />
          <p className="mt-4 text-stone-600 text-sm sm:text-base">
            Explore our welcoming reception, comfortable rooms, and tranquil hospitality spaces.
          </p>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded transition-all ${
                selectedCategory === cat
                  ? 'bg-[#173C32] text-white shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-200/70 border border-stone-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Large Photograph (Marquee piece) */}
        {filteredItems.length > 0 && (
          <div className="mb-8">
            <div
              onClick={() => handleOpenLightbox(0)}
              className="relative h-[340px] sm:h-[480px] rounded overflow-hidden shadow-md cursor-pointer group bg-stone-900 border border-stone-200"
            >
              <img
                src={filteredItems[0].imageUrl}
                alt={filteredItems[0].title}
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Expand className="w-5 h-5" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#B89A62] font-semibold">
                    Featured · {filteredItems[0].category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#F8F5EF] mt-1">
                    {filteredItems[0].title}
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-xl font-light">
                    {filteredItems[0].description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-stone-300 bg-white/10 px-3 py-1 rounded backdrop-blur-sm self-start sm:self-auto">
                  <Camera className="w-3.5 h-3.5 text-[#B89A62]" />
                  <span>Click to expand</span>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Grid (remaining items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.slice(1).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx + 1)}
              className="relative h-60 rounded overflow-hidden shadow-sm cursor-pointer group bg-stone-200 border border-stone-200"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Expand className="w-4 h-4" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#B89A62] font-semibold block">
                  {item.category}
                </span>
                <h4 className="font-serif text-base font-medium text-stone-100 truncate">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Note on photo configuration */}
        <div className="mt-8 text-center text-xs text-stone-500">
          Centralized gallery configuration enabled · All photographs can be easily replaced via <code className="bg-stone-200/80 px-1.5 py-0.5 rounded text-stone-700">hotelConfig.ts</code>.
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
