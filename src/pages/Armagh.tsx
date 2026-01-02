import React from 'react';
import Navigation from '@/components/Navigation';
import ArmaghGallery from '@/components/ArmaghGallery';
import AnimatedTitle from '@/components/AnimatedTitle';
import AnimatedSubtitle from '@/components/AnimatedSubtitle';
import AnimatedIntro from '@/components/AnimatedIntro';

const Armagh: React.FC = () => {
  return (
    <div className="min-h-screen animate-fade-in" style={{ backgroundColor: 'transparent' }}>
      <Navigation activeProject="ARMAGH" variant="light" />
      
      <main className="ml-[285px] max-md:ml-0">
        <header className="flex w-full flex-col overflow-hidden items-stretch text-white font-medium justify-center py-32 px-24 max-md:px-5 max-md:py-20">
          <AnimatedTitle className="text-5xl tracking-[9.6px] uppercase max-md:text-3xl">
            RESIDENTIAL HOME
          </AnimatedTitle>
          <AnimatedSubtitle className="text-sm tracking-[0.3em] mt-6 uppercase">
            ARMAGH
          </AnimatedSubtitle>
          
          <AnimatedIntro className="text-base leading-[3] mt-12 max-w-4xl max-md:mt-10">
            This 1890's Victorian home exudes a vintage character with a new, modern personality. A dramatic open plan kitchen and living quarter is the core experience in this home, designed for a client who loves to cook, host and entertain. The traditional aesthetics are respected throughout, especially in the guest and master bedrooms, hallway and dining room.
          </AnimatedIntro>
        </header>
        <ArmaghGallery />
      </main>
    </div>
  );
};

export default Armagh;
