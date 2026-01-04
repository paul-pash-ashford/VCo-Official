import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import DublinGallery from '@/components/DublinGallery';
import Header from '@/components/Header';
import AnimatedImage from '@/components/AnimatedImage';
import SlideshowViewer from '@/components/SlideshowViewer';
import dublin1 from '@/assets/dublin/dublin1.jpg';

const Dublin: React.FC = () => {
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const allImages = [{ src: dublin1, alt: "Main hero image of the Dublin residential home project" }];

  const openSlideshow = () => {
    setStartIndex(0);
    setIsSlideshowOpen(true);
  };

  return (
    <div className="min-h-screen animate-fade-in" style={{ backgroundColor: 'transparent' }}>
      <Navigation activeProject="DUBLIN" variant="dark" />
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
              src={dublin1}
              alt="Main hero image of the Dublin residential home project"
              className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={openSlideshow}
            />
          </AnimatedImage>
        </div>
        <Header />
        <DublinGallery />
      </main>
    </div>
  );
};

export default Dublin;

