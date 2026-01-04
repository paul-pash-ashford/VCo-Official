import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import ArmaghGallery from '@/components/ArmaghGallery';
import AnimatedTitle from '@/components/AnimatedTitle';
import AnimatedSubtitle from '@/components/AnimatedSubtitle';
import AnimatedIntro from '@/components/AnimatedIntro';
import AnimatedImage from '@/components/AnimatedImage';
import SlideshowViewer from '@/components/SlideshowViewer';
import armagh19 from '@/assets/armagh/armagh19.jpeg';

const Armagh: React.FC = () => {
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const allImages = [{ src: armagh19, alt: "Main hero image of Armagh residential home" }];

  const openSlideshow = () => {
    setStartIndex(0);
    setIsSlideshowOpen(true);
  };

  return (
    <div className="min-h-screen animate-fade-in" style={{ backgroundColor: 'transparent' }}>
      <Navigation activeProject="ARMAGH" variant="light" />
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
              src={armagh19}
              alt="Main hero image of Armagh residential home"
              className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={openSlideshow}
            />
          </AnimatedImage>
        </div>
        
        <header className="flex w-full flex-col overflow-hidden items-center text-white font-medium justify-center py-32 px-[120px] max-md:px-5 max-md:py-20">
          <div className="w-full max-w-[876px]">
            <AnimatedTitle className="text-5xl tracking-[9.6px] uppercase max-md:text-3xl">
              RESIDENTIAL HOME
            </AnimatedTitle>
            <AnimatedSubtitle className="text-sm tracking-[0.3em] mt-6 uppercase">
              ARMAGH
            </AnimatedSubtitle>
            
            <AnimatedIntro className="text-base leading-[3] mt-12 max-md:mt-10 text-left">
              This 1890's Victorian home exudes a vintage character with a new, modern personality. A dramatic open plan kitchen and living quarter is the core experience in this home, designed for a client who loves to cook, host and entertain. The traditional aesthetics are respected throughout, especially in the guest and master bedrooms, hallway and dining room.
            </AnimatedIntro>
          </div>
        </header>
        <ArmaghGallery />
      </main>
    </div>
  );
};

export default Armagh;
