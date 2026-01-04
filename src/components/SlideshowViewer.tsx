import React, { useState, useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface SlideshowViewerProps {
  images: Array<{ src: string; alt: string }>;
  isOpen: boolean;
  startIndex: number;
  onClose: () => void;
}

const SlideshowViewer: React.FC<SlideshowViewerProps> = ({
  images,
  isOpen,
  startIndex,
  onClose,
}) => {
  const [currentSlide, setCurrentSlide] = useState(startIndex);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    startIndex: startIndex,
    align: 'center',
  });

  const nextSlide = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const prevSlide = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  // Scroll to correct slide when opening slideshow
  useEffect(() => {
    if (isOpen && emblaApi) {
      emblaApi.scrollTo(startIndex, true);
      setCurrentSlide(startIndex);
    }
  }, [isOpen, emblaApi, startIndex]);

  // Track current slide
  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
      else if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, nextSlide, prevSlide, onClose]);

  if (!isOpen || images.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-neutral-200/95 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-2 text-neutral-600 opacity-60 hover:opacity-100 transition-opacity"
        aria-label="Close slideshow"
      >
        <X size={28} strokeWidth={1.5} />
      </button>
      
      {/* Embla Carousel */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex items-center">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="flex-[0_0_80%] min-w-0 px-1 md:px-2 flex items-center justify-center h-[70vh]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-neutral-400 bg-white/80 flex items-center justify-center text-neutral-600 hover:bg-white transition-all z-20"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-neutral-400 bg-white/80 flex items-center justify-center text-neutral-600 hover:bg-white transition-all z-20"
          aria-label="Next image"
        >
          <ChevronRight size={24} strokeWidth={1.5} />
        </button>
        
        {/* Slide Counter */}
        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center">
          <span className="text-neutral-600 text-sm bg-white/80 px-4 py-2 rounded-full">
            {currentSlide + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SlideshowViewer;

