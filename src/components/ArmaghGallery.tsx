import React, { useState, useEffect, useCallback } from 'react';
import { LayoutGrid, Square, ChevronLeft, ChevronRight, X } from 'lucide-react';

import armaghKitchen1 from '@/assets/armagh/armagh-kitchen-1.png';
import armaghBedroom1 from '@/assets/armagh/armagh-bedroom-1.png';
import armaghExterior from '@/assets/armagh/armagh-exterior.png';
import armaghBedroom2 from '@/assets/armagh/armagh-bedroom-2.png';
import armaghKitchen2 from '@/assets/armagh/armagh-kitchen-2.png';
import armaghChandelier from '@/assets/armagh/armagh-chandelier.png';
import armaghBathroom from '@/assets/armagh/armagh-bathroom.png';
import armaghKitchenDetail from '@/assets/armagh/armagh-kitchen-detail.png';
import armaghKitchen3 from '@/assets/armagh/armagh-kitchen-3.png';
import armaghDining from '@/assets/armagh/armagh-dining.png';

const ArmaghGallery: React.FC = () => {
  const [viewMode, setViewMode] = useState<'masonry' | 'slideshow'>('masonry');
  const [currentSlide, setCurrentSlide] = useState(0);

  const allImages = [
    { src: armaghKitchen1, alt: "Victorian home kitchen with green cabinets" },
    { src: armaghBedroom1, alt: "Master bedroom with teal walls" },
    { src: armaghExterior, alt: "Exterior view with ivy" },
    { src: armaghBedroom2, alt: "Guest bedroom" },
    { src: armaghKitchen2, alt: "Kitchen from above with skylight" },
    { src: armaghChandelier, alt: "Statement chandelier" },
    { src: armaghBathroom, alt: "Elegant bathroom" },
    { src: armaghKitchenDetail, alt: "Kitchen sink detail" },
    { src: armaghKitchen3, alt: "Kitchen with skylight view" },
    { src: armaghDining, alt: "Dining room with green wallpaper" }
  ];

  const column1Images = [
    { src: armaghBedroom1, aspect: "aspect-[0.85]" },
    { src: armaghExterior, aspect: "aspect-[1.5]" },
    { src: armaghKitchen2, aspect: "aspect-[0.75]" },
    { src: armaghBathroom, aspect: "aspect-[1.8]" },
    { src: armaghDining, aspect: "aspect-[0.75]" }
  ];

  const column2Images = [
    { src: armaghBedroom2, aspect: "aspect-[1.5]" },
    { src: armaghChandelier, aspect: "aspect-[0.9]" },
    { src: armaghKitchenDetail, aspect: "aspect-[0.85]" },
    { src: armaghKitchen3, aspect: "aspect-[0.75]" }
  ];

  const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev + 1) % allImages.length), [allImages.length]);
  const prevSlide = useCallback(() => setCurrentSlide((prev) => (prev - 1 + allImages.length) % allImages.length), [allImages.length]);

  const openSlideshow = (imageSrc: string) => {
    const index = allImages.findIndex(img => img.src === imageSrc);
    if (index !== -1) {
      setCurrentSlide(index);
      setViewMode('slideshow');
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'slideshow') return;
      
      if (e.key === 'ArrowRight') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
      else if (e.key === 'Escape') setViewMode('masonry');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, nextSlide, prevSlide]);

  return (
    <section className="w-full overflow-hidden">
      {/* View Toggle Buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setViewMode('masonry')}
          className={`p-2 rounded transition-opacity ${viewMode === 'masonry' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
          aria-label="Masonry view"
        >
          <LayoutGrid size={18} strokeWidth={1.5} />
        </button>
        <button
          onClick={() => setViewMode('slideshow')}
          className={`p-2 rounded transition-opacity ${viewMode === 'slideshow' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
          aria-label="Slideshow view"
        >
          <Square size={18} strokeWidth={1.5} />
        </button>
      </div>

      {viewMode === 'slideshow' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-background/60 backdrop-blur-2xl backdrop-saturate-150 transition-opacity duration-300"
            onClick={() => setViewMode('masonry')}
          />
          
          {/* Close Button */}
          <button
            onClick={() => setViewMode('masonry')}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-2 opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Close slideshow"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
          
          {/* Slideshow Container */}
          <div className="relative z-10 w-full h-full md:w-[90vw] md:max-w-5xl md:h-[80vh] bg-[#8B9B7A] md:rounded-lg md:shadow-2xl flex flex-col items-center justify-center animate-scale-in">
            <img
              src={allImages[currentSlide].src}
              alt={allImages[currentSlide].alt}
              className="max-h-[calc(100%-80px)] max-w-full object-contain p-4 transition-opacity duration-200"
            />
            
            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 py-6 flex items-center justify-center gap-6 text-white">
              <button
                onClick={prevSlide}
                className="p-2 opacity-60 hover:opacity-100 transition-opacity"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} strokeWidth={1} />
              </button>
              
              <span className="text-sm opacity-80 min-w-[60px] text-center">
                {currentSlide + 1} / {allImages.length}
              </span>
              
              <button
                onClick={nextSlide}
                className="p-2 opacity-60 hover:opacity-100 transition-opacity"
                aria-label="Next image"
              >
                <ChevronRight size={24} strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      )}

      <img
        src={armaghKitchen1}
        alt="Victorian home kitchen with green cabinets and marble countertops"
        className="aspect-[0.75] object-cover w-full rounded-sm cursor-pointer hover:opacity-90 transition-opacity"
        onClick={() => openSlideshow(armaghKitchen1)}
      />
      
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:min-w-60 md:flex-1 md:shrink md:basis-0">
          {column1Images.map((image, index) => (
            <img
              key={`col1-${index}`}
              src={image.src}
              alt={`Armagh interior view ${index + 1}`}
              className={`${image.aspect} object-cover w-full rounded-sm cursor-pointer hover:opacity-90 transition-opacity`}
              loading="lazy"
              onClick={() => openSlideshow(image.src)}
            />
          ))}
        </div>
        
        <div className="w-full md:min-w-60 md:flex-1 md:shrink md:basis-0">
          {column2Images.map((image, index) => (
            <img
              key={`col2-${index}`}
              src={image.src}
              alt={`Armagh interior view ${index + 1}`}
              className={`${image.aspect} object-cover w-full rounded-sm cursor-pointer hover:opacity-90 transition-opacity`}
              loading="lazy"
              onClick={() => openSlideshow(image.src)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArmaghGallery;
