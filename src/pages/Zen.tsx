import React from 'react';
import Navigation from '../components/Navigation';
import AnimatedTitle from '../components/AnimatedTitle';
import AnimatedSubtitle from '../components/AnimatedSubtitle';
import AnimatedIntro from '../components/AnimatedIntro';
const Zen: React.FC = () => {
  return <div className="min-h-screen animate-fade-in" style={{ backgroundColor: 'transparent' }}>
      <Navigation activeProject="ZEN" variant="zen" />
      
      <main className="ml-[285px] max-md:ml-0">
        <header className="flex w-full flex-col overflow-hidden items-stretch text-[#E8A5A5] font-medium justify-center py-32 px-24 max-md:px-5 max-md:py-20">
          <AnimatedTitle className="text-6xl tracking-[0.3em] font-medium max-md:text-4xl max-md:tracking-[0.2em]">
            HOUSE OF ZEN
          </AnimatedTitle>
          <AnimatedSubtitle className="text-sm tracking-[0.3em] mt-6 uppercase">
            Belfast
          </AnimatedSubtitle>
          <AnimatedIntro className="text-base leading-[3] mt-16 max-w-3xl max-md:mt-10">
            House of Zen situated in St. Anne's Square, Belfast.
          </AnimatedIntro>
          <AnimatedIntro className="text-base leading-[3] mt-6 max-w-3xl">
            In traditional Chinese fashion the colour red symbolises fortune, luck, happiness and energy. Natural cork with reflective metallic details create interesting depths and textures throughout, adding a touch of drama alongside the red Mise En Scene silk range, chosen to complement and enhance of the dark interior design of the restaurant.
          </AnimatedIntro>
        </header>
      </main>
    </div>;
};
export default Zen;