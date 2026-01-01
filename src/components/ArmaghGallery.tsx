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
