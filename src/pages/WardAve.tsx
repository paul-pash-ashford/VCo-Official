import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import AnimatedTitle from '../components/AnimatedTitle';
import AnimatedSubtitle from '../components/AnimatedSubtitle';
import AnimatedIntro from '../components/AnimatedIntro';
import AnimatedImage from '../components/AnimatedImage';
import SlideshowViewer from '../components/SlideshowViewer';
import WardAveGallery from '../components/WardAveGallery';
import wardave9 from '@/assets/wardave/wardave9.jpg';

const WardAve: React.FC = () => {
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const allImages = [{ src: wardave9, alt: "Main hero image of Ward Avenue kitchen" }];

  const openSlideshow = () => {
    setStartIndex(0);
    setIsSlideshowOpen(true);
  };

  return (
    <div className="min-h-screen animate-fade-in" style={{ backgroundColor: 'transparent' }}>
      <Navigation activeProject="WARD AVE" variant="light" />
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
              src={wardave9}
              alt="Main hero image of Ward Avenue kitchen"
              className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={openSlideshow}
            />
          </AnimatedImage>
        </div>
        
        <header className="flex w-full flex-col overflow-hidden items-center text-white font-medium justify-center py-32 px-[120px] max-md:px-5 max-md:py-20">
          <div className="w-full max-w-[876px]">
            <AnimatedTitle className="text-6xl tracking-[0.3em] font-medium max-md:text-4xl max-md:tracking-[0.2em]">
              WARD AVENUE
            </AnimatedTitle>
            <AnimatedSubtitle className="text-sm tracking-[0.3em] mt-6 uppercase">
              Bangor
            </AnimatedSubtitle>
            <AnimatedIntro className="text-base leading-[3] mt-16 max-md:mt-10 text-left">
              A bespoke Schüller Nextline handleless kitchen, with Truffle Grey satin lacquered door. This contemporary kitchen was designed with careful consideration for the family's daily life and the client's overall taste, balancing both style and function.
            </AnimatedIntro>
          </div>
        </header>
        <WardAveGallery />
      </main>
    </div>
  );
};

export default WardAve;
