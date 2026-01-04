import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import AnimatedTitle from '../components/AnimatedTitle';
import AnimatedSubtitle from '../components/AnimatedSubtitle';
import AnimatedIntro from '../components/AnimatedIntro';
import AnimatedImage from '../components/AnimatedImage';
import SlideshowViewer from '../components/SlideshowViewer';
import DonegalGallery from '../components/DonegalGallery';
import upstairs3 from '@/assets/donegal/upstairs3 Large.jpeg';

const Donegal: React.FC = () => {
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const allImages = [{ src: upstairs3, alt: "Main hero image of Donegal residential home" }];

  const openSlideshow = () => {
    setStartIndex(0);
    setIsSlideshowOpen(true);
  };

  return (
    <div className="min-h-screen animate-fade-in" style={{ backgroundColor: 'transparent' }}>
      <Navigation activeProject="DONEGAL" variant="light" />
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
              src={upstairs3}
              alt="Main hero image of Donegal residential home"
              className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={openSlideshow}
            />
          </AnimatedImage>
        </div>
        
        <header className="flex w-full flex-col overflow-hidden items-center text-white font-medium justify-center py-32 px-[120px] max-md:px-5 max-md:py-20">
          <div className="w-full max-w-[876px]">
            <AnimatedTitle className="text-6xl tracking-[0.3em] font-medium max-md:text-4xl max-md:tracking-[0.2em]">
              COASTAL HOLIDAY HOME
            </AnimatedTitle>
            <AnimatedSubtitle className="text-sm tracking-[0.3em] mt-6 uppercase">
              Downings, Donegal
            </AnimatedSubtitle>
            <AnimatedIntro className="text-base leading-[3] mt-16 max-md:mt-10 text-left">
              A holiday home, nestled in the rugged hillscape of Downings in Donegal with views of the Atlantic ocean. A tranquil setting with stunning views, and unpredictable weather, this home was designed to be bright and fresh during summer periods, but warm and embracing during the colder months. Built to last, with hardwearing finishes that suit an active lifestyle, with living spaces designed for comfort and moments of quiet reflection.
            </AnimatedIntro>
          </div>
        </header>
        <DonegalGallery />
      </main>
    </div>
  );
};

export default Donegal;
