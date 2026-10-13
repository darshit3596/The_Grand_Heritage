import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../data/hotelConfig';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Hotel Photo Lightbox"
    >
      {/* Header bar */}
      <div className="w-full max-w-6xl flex items-center justify-between text-white py-2 z-10">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-[#B89A62] font-semibold">
            {currentItem.category}
          </span>
          <span className="text-stone-400 text-xs">·</span>
          <span className="text-stone-300 text-xs font-mono">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-stone-300 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main image viewer */}
      <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center min-h-0 my-2">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all border border-white/20 focus:outline-none"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Image */}
        <div className="max-h-full max-w-full flex items-center justify-center overflow-hidden">
          <img
            key={currentItem.id}
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded shadow-2xl animate-in zoom-in-95 duration-200"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all border border-white/20 focus:outline-none"
          aria-label="Next Image"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Caption footer */}
      <div className="w-full max-w-3xl text-center text-white pb-2 z-10">
        <h3 className="font-serif text-lg sm:text-xl font-normal text-[#F8F5EF]">
          {currentItem.title}
        </h3>
        <p className="text-stone-400 text-xs sm:text-sm mt-1 font-light">
          {currentItem.description}
        </p>
      </div>
    </div>
  );
};
