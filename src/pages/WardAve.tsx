import React from 'react';
import Navigation from '../components/Navigation';
import AnimatedTitle from '../components/AnimatedTitle';
import AnimatedSubtitle from '../components/AnimatedSubtitle';
import AnimatedIntro from '../components/AnimatedIntro';

const WardAve: React.FC = () => {
  return (
    <div className="min-h-screen animate-fade-in" style={{ backgroundColor: 'transparent' }}>
      <Navigation activeProject="WARD AVE" variant="light" />
      
      <main className="ml-[285px] max-md:ml-0">
        <header className="flex w-full flex-col overflow-hidden items-stretch text-white font-medium justify-center py-32 px-24 max-md:px-5 max-md:py-20">
          <AnimatedTitle className="text-6xl tracking-[0.3em] font-medium max-md:text-4xl max-md:tracking-[0.2em]">
            WARD AVENUE
          </AnimatedTitle>
          <AnimatedSubtitle className="text-sm tracking-[0.3em] mt-6 uppercase">
            Bangor
          </AnimatedSubtitle>
          <AnimatedIntro className="text-base leading-[3] mt-16 max-w-3xl max-md:mt-10">
            A bespoke Schüller Nextline handleless kitchen, with Truffle Grey satin lacquered door. This contemporary kitchen was designed with careful consideration for the family's daily life and the client's overall taste, balancing both style and function.
          </AnimatedIntro>
        </header>
      </main>
    </div>
  );
};

export default WardAve;
