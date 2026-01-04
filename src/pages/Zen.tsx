import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import AnimatedTitle from '../components/AnimatedTitle';
import AnimatedSubtitle from '../components/AnimatedSubtitle';
import AnimatedIntro from '../components/AnimatedIntro';
import AnimatedImage from '../components/AnimatedImage';
import SlideshowViewer from '../components/SlideshowViewer';
import ZenGallery from '../components/ZenGallery';
import zen15 from '@/assets/zen/zen15.JPG';

const Zen: React.FC = () => {
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const allImages = [{ src: zen15, alt: "Main hero image of House of Zen restaurant" }];

  const openSlideshow = () => {
    setStartIndex(0);
    setIsSlideshowOpen(true);
  };

  return (
    <div className="min-h-screen animate-fade-in" style={{ backgroundColor: 'transparent' }}>
      <Navigation activeProject="ZEN" variant="zen" />
      <SlideshowViewer
        images={allImages}
        isOpen={isSlideshowOpen}
        startIndex={startIndex}
        onClose={() => setIsSlideshowOpen(false)}
      />
      
      <main className="ml-[285px] max-md:ml-0">
        <div className="h-screen w-full overflow-hidden">
          <AnimatedImage className="w-full h-full">
            <img
              src={zen15}
              alt="Main hero image of House of Zen restaurant"
              className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={openSlideshow}
            />
          </AnimatedImage>
        </div>
        
        <header className="flex w-full flex-col overflow-hidden items-center text-[#F2B8BC] font-medium justify-center py-32 px-[120px] max-md:px-5 max-md:py-20">
          <div className="w-full max-w-[876px]">
            <AnimatedTitle className="text-6xl tracking-[0.3em] font-medium max-md:text-4xl max-md:tracking-[0.2em]">
              HOUSE OF ZEN
            </AnimatedTitle>
            <AnimatedSubtitle className="text-sm tracking-[0.3em] mt-6 uppercase">
              Belfast
            </AnimatedSubtitle>
            <AnimatedIntro className="text-base leading-[3] mt-16 max-md:mt-10 text-left">
              House of Zen situated in St. Anne's Square, Belfast.
            </AnimatedIntro>
            <AnimatedIntro className="text-base leading-[3] mt-6 text-left">
              In traditional Chinese fashion the colour red symbolises fortune, luck, happiness and energy. Natural cork with reflective metallic details create interesting depths and textures throughout, adding a touch of drama alongside the red Mise En Scene silk range, chosen to complement and enhance of the dark interior design of the restaurant.
            </AnimatedIntro>
          </div>
        </header>
        <ZenGallery />
      </main>
    </div>
  );
};

export default Zen;