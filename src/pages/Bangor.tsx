import React from 'react';
import Navigation from '../components/Navigation';

const Bangor: React.FC = () => {
  return (
    <div className="bg-[#E8E8E8] min-h-screen">
      <Navigation activeProject="BANGOR" variant="dark" />
      
      <main className="ml-[285px] max-md:ml-0">
        <header className="flex w-full flex-col overflow-hidden items-stretch text-foreground font-medium justify-center py-32 px-24 max-md:px-5 max-md:py-20">
          <h1 className="text-6xl tracking-[0.3em] font-medium max-md:text-4xl max-md:tracking-[0.2em]">
            RESIDENTIAL HOME
          </h1>
          <p className="text-sm tracking-[0.3em] mt-6 uppercase">
            Bangor
          </p>
          <p className="text-base leading-relaxed mt-16 max-w-3xl max-md:mt-10">
            A contemporary approach to a new extension, while remaining sympathetic to the original Victorian style towards the front of the home. The approach was to honour the original features while successfully uniting the contemporary extension. Along with the client's love for colour and timeless style meant, this meant creating a warm, family feel to unite the old and the new, bringing in layers of colours, textures, and lighting, that also provided a backdrop for the client to put their own stamp on it using their collection of artworks and antiques.
          </p>
        </header>
      </main>
    </div>
  );
};

export default Bangor;
