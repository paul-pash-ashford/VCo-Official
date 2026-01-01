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
import armaghSinkDetail from '@/assets/armagh/armagh-sink-detail.png';
import armaghHallwayDecor from '@/assets/armagh/armagh-hallway-decor.png';
import armaghKitchenWide from '@/assets/armagh/armagh-kitchen-wide.png';
import armaghBedroomEnsuite from '@/assets/armagh/armagh-bedroom-ensuite.png';
import armaghLivingSofa from '@/assets/armagh/armagh-living-sofa.png';
import armaghStaircase from '@/assets/armagh/armagh-staircase.png';
import armaghFloorTiles from '@/assets/armagh/armagh-floor-tiles.png';
import armaghCabinet from '@/assets/armagh/armagh-cabinet.png';
import armaghMarbleCounter from '@/assets/armagh/armagh-marble-counter.png';
import armaghSittingArea from '@/assets/armagh/armagh-sitting-area.png';
import armaghPendantLight from '@/assets/armagh/armagh-pendant-light.png';
import armaghBlueSofa from '@/assets/armagh/armagh-blue-sofa.png';
import armaghFireplace from '@/assets/armagh/armagh-fireplace.png';
import armaghScallopShower from '@/assets/armagh/armagh-scallop-shower.png';
import armaghBirdArt from '@/assets/armagh/armagh-bird-art.png';
import armaghColorfulBedroom from '@/assets/armagh/armagh-colorful-bedroom.png';
import armaghMarbleBathroom from '@/assets/armagh/armagh-marble-bathroom.png';
import armaghMasterBedroom from '@/assets/armagh/armagh-master-bedroom.png';
import armaghLuxuryBathroom from '@/assets/armagh/armagh-luxury-bathroom.png';

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
    { src: armaghDining, alt: "Dining room with green wallpaper" },
    { src: armaghSinkDetail, alt: "Bathroom sink with patterned tiles" },
    { src: armaghHallwayDecor, alt: "Hallway with console table decor" },
    { src: armaghKitchenWide, alt: "Open plan kitchen with marble counters" },
    { src: armaghBedroomEnsuite, alt: "Master bedroom with ensuite bathroom" },
    { src: armaghLivingSofa, alt: "Living room with tufted sofa" },
    { src: armaghStaircase, alt: "Victorian staircase hallway" },
    { src: armaghFloorTiles, alt: "Decorative floor tiles" },
    { src: armaghCabinet, alt: "Kitchen display cabinet" },
    { src: armaghMarbleCounter, alt: "Marble kitchen countertop" },
    { src: armaghSittingArea, alt: "Sitting area with patterned chairs" },
    { src: armaghPendantLight, alt: "Modern geometric pendant light" },
    { src: armaghBlueSofa, alt: "Blue sofa living room" },
    { src: armaghFireplace, alt: "Victorian fireplace with green wallpaper" },
    { src: armaghScallopShower, alt: "Scallop tile shower bathroom" },
    { src: armaghBirdArt, alt: "Bedroom with bird artwork" },
    { src: armaghColorfulBedroom, alt: "Colorful guest bedroom" },
    { src: armaghMarbleBathroom, alt: "Marble herringbone bathroom" },
    { src: armaghMasterBedroom, alt: "Master bedroom with pendant light" },
    { src: armaghLuxuryBathroom, alt: "Luxury bathroom with artwork" }
  ];

  const column1Images = [
    { src: armaghBedroom1, aspect: "aspect-[0.85]" },
    { src: armaghExterior, aspect: "aspect-[1.5]" },
    { src: armaghKitchen2, aspect: "aspect-[0.75]" },
    { src: armaghBathroom, aspect: "aspect-[1.8]" },
    { src: armaghDining, aspect: "aspect-[0.75]" },
    { src: armaghSinkDetail, aspect: "aspect-[0.75]" },
    { src: armaghKitchenWide, aspect: "aspect-[1.5]" },
    { src: armaghStaircase, aspect: "aspect-[0.75]" },
    { src: armaghCabinet, aspect: "aspect-[0.75]" },
    { src: armaghSittingArea, aspect: "aspect-[0.85]" },
    { src: armaghPendantLight, aspect: "aspect-[1.5]" },
    { src: armaghFireplace, aspect: "aspect-[1.5]" },
    { src: armaghBirdArt, aspect: "aspect-[0.65]" },
    { src: armaghMarbleBathroom, aspect: "aspect-[1.5]" },
    { src: armaghLuxuryBathroom, aspect: "aspect-[1.5]" }
  ];

  const column2Images = [
    { src: armaghBedroom2, aspect: "aspect-[1.5]" },
    { src: armaghChandelier, aspect: "aspect-[0.9]" },
    { src: armaghKitchenDetail, aspect: "aspect-[0.85]" },
    { src: armaghKitchen3, aspect: "aspect-[0.75]" },
    { src: armaghHallwayDecor, aspect: "aspect-[1.6]" },
    { src: armaghBedroomEnsuite, aspect: "aspect-[0.65]" },
    { src: armaghLivingSofa, aspect: "aspect-[1.5]" },
    { src: armaghFloorTiles, aspect: "aspect-[0.85]" },
    { src: armaghMarbleCounter, aspect: "aspect-[0.75]" },
    { src: armaghBlueSofa, aspect: "aspect-[1.5]" },
    { src: armaghScallopShower, aspect: "aspect-[0.65]" },
    { src: armaghColorfulBedroom, aspect: "aspect-[1.6]" },
    { src: armaghMasterBedroom, aspect: "aspect-[0.7]" }
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
            className="absolute inset-0 bg-neutral-200/95 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setViewMode('masonry')}
          />
          
          {/* Close Button */}
          <button
            onClick={() => setViewMode('masonry')}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-2 text-neutral-600 opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Close slideshow"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
          
          {/* Carousel Container */}
          <div className="relative z-10 w-full h-full flex items-center justify-center px-4 md:px-16">
            {/* Previous Image (Left) */}
            <div 
              className="hidden md:block absolute left-0 w-[25%] h-[60vh] cursor-pointer transition-all duration-300 hover:opacity-80"
              onClick={prevSlide}
            >
              <img
                src={allImages[(currentSlide - 1 + allImages.length) % allImages.length].src}
                alt={allImages[(currentSlide - 1 + allImages.length) % allImages.length].alt}
                className="w-full h-full object-cover rounded-lg shadow-lg opacity-70"
              />
              {/* Left Arrow */}
              <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/60 bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} strokeWidth={1.5} />
              </button>
            </div>
            
            {/* Current Image (Center) */}
            <div className="relative w-full md:w-[50%] h-[70vh] md:h-[70vh] flex items-center justify-center animate-scale-in">
              <img
                src={allImages[currentSlide].src}
                alt={allImages[currentSlide].alt}
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Next Image (Right) */}
            <div 
              className="hidden md:block absolute right-0 w-[25%] h-[60vh] cursor-pointer transition-all duration-300 hover:opacity-80"
              onClick={nextSlide}
            >
              <img
                src={allImages[(currentSlide + 1) % allImages.length].src}
                alt={allImages[(currentSlide + 1) % allImages.length].alt}
                className="w-full h-full object-cover rounded-lg shadow-lg opacity-70"
              />
              {/* Right Arrow */}
              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/60 bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all"
                aria-label="Next image"
              >
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>
            </div>
            
            {/* Mobile Navigation */}
            <div className="md:hidden absolute bottom-8 left-0 right-0 flex items-center justify-center gap-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-neutral-400 bg-white/80 flex items-center justify-center text-neutral-600 hover:bg-white transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} strokeWidth={1.5} />
              </button>
              <span className="text-neutral-600 text-sm">
                {currentSlide + 1} / {allImages.length}
              </span>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-neutral-400 bg-white/80 flex items-center justify-center text-neutral-600 hover:bg-white transition-all"
                aria-label="Next image"
              >
                <ChevronRight size={24} strokeWidth={1.5} />
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
