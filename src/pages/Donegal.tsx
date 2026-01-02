import React from 'react';
import Navigation from '../components/Navigation';
import AnimatedTitle from '../components/AnimatedTitle';
import AnimatedSubtitle from '../components/AnimatedSubtitle';
import AnimatedIntro from '../components/AnimatedIntro';

const Donegal: React.FC = () => {
  return (
    <div className="min-h-screen animate-fade-in" style={{ backgroundColor: 'transparent' }}>
      <Navigation activeProject="DONEGAL" variant="light" />
      
      <main className="ml-[285px] max-md:ml-0">
        <header className="flex w-full flex-col overflow-hidden items-stretch text-white font-medium justify-center py-32 px-24 max-md:px-5 max-md:py-20">
          <AnimatedTitle className="text-6xl tracking-[0.3em] font-medium max-md:text-4xl max-md:tracking-[0.2em]">
            COASTAL HOLIDAY HOME
          </AnimatedTitle>
          <AnimatedSubtitle className="text-sm tracking-[0.3em] mt-6 uppercase">
            Downings, Donegal
          </AnimatedSubtitle>
          <AnimatedIntro className="text-base leading-[3] mt-16 max-w-3xl max-md:mt-10">
            A holiday home, nestled in the rugged hillscape of Downings in Donegal with views of the Atlantic ocean. A tranquil setting with stunning views, and unpredictable weather, this home was designed to be bright and fresh during summer periods, but warm and embracing during the colder months. Built to last, with hardwearing finishes that suit an active lifestyle, with living spaces designed for comfort and moments of quiet reflection.
          </AnimatedIntro>
        </header>
      </main>
    </div>
  );
};

export default Donegal;
