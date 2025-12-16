import React from 'react';
import Navigation from '../components/Navigation';
const Zen: React.FC = () => {
  return <div className="bg-[#7A2B32] min-h-screen animate-fade-in">
      <Navigation activeProject="ZEN" variant="zen" />
      
      <main className="ml-[285px] max-md:ml-0">
        <header className="flex w-full flex-col overflow-hidden items-stretch text-[#E8A5A5] font-medium justify-center py-32 px-24 max-md:px-5 max-md:py-20">
          <h1 className="text-6xl tracking-[0.3em] font-medium max-md:text-4xl max-md:tracking-[0.2em]">
            HOUSE OF ZEN
          </h1>
          <p className="text-sm tracking-[0.3em] mt-6 uppercase">
            Belfast
          </p>
          <p className="text-base leading-relaxed mt-16 max-w-3xl max-md:mt-10">
            House of Zen situated in St. Anne's Square, Belfast.
          </p>
          <p className="text-base leading-relaxed mt-6 max-w-3xl">In traditional Chinese fashion the colour red symbolises fortune, luck, happiness and energy. Natural cork with reflective metallic details create interesting depths and textures throughout, adding a touch of drama alongside the red Mise En Scene silk range, chosen to complement and enhance of the dark interior design of the restaurant.</p>
        </header>
      </main>
    </div>;
};
export default Zen;