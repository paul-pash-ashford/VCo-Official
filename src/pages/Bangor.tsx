import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import AnimatedTitle from '../components/AnimatedTitle';
import AnimatedSubtitle from '../components/AnimatedSubtitle';
import AnimatedIntro from '../components/AnimatedIntro';
import AnimatedImage from '../components/AnimatedImage';
import SlideshowViewer from '../components/SlideshowViewer';
import BangorGallery from '../components/BangorGallery';
import bangor15 from '@/assets/bangor/bangor15.jpg';

const Bangor: React.FC = () => {
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const allImages = [{ src: bangor15, alt: "Main hero image of Bangor residential home" }];

  const openSlideshow = () => {
    setStartIndex(0);
    setIsSlideshowOpen(true);
  };

  return (
    <div className="min-h-screen animate-fade-in" style={{ backgroundColor: 'transparent' }}>
      <Navigation activeProject="BANGOR" variant="dark" />
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
              src={bangor15}
              alt="Main hero image of Bangor residential home"
              className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={openSlideshow}
            />
          </AnimatedImage>
        </div>
        
        <header className="flex w-full flex-col overflow-hidden items-center text-foreground font-medium justify-center py-32 px-[120px] max-md:px-5 max-md:py-20">
          <div className="w-full max-w-[876px]">
            <AnimatedTitle className="text-6xl tracking-[0.3em] font-medium max-md:text-4xl max-md:tracking-[0.2em]">
              RESIDENTIAL HOME
            </AnimatedTitle>
            <AnimatedSubtitle className="text-sm tracking-[0.3em] mt-6 uppercase">
              Bangor
            </AnimatedSubtitle>
            <AnimatedIntro className="text-base leading-[3] mt-16 max-md:mt-10 text-left">
              A contemporary approach to a new extension, while remaining sympathetic to the original Victorian style towards the front of the house. The approach was to honour the original features while uniting the contemporary extension.
              <br /><br />
              Along with the client's love for colour and timeless style meant, this meant creating a warm, family feel to unite the old and the new, bringing in layers of colours, textures, and lighting. This also provided a backdrop for the client to put their own stamp on it using their collection of artworks and antiques.
            </AnimatedIntro>
          </div>
        </header>
        <BangorGallery />
      </main>
    </div>
  );
};

export default Bangor;
