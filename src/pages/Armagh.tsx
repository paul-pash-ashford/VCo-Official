import React from 'react';
import Navigation from '@/components/Navigation';

const Armagh: React.FC = () => {
  return (
    <div className="bg-[#8B9B7A] min-h-screen">
      <Navigation activeProject="ARMAGH" variant="light" />
      
      <main className="ml-[285px] max-md:ml-0">
        <header className="flex w-full flex-col overflow-hidden items-stretch text-white font-medium justify-center py-32 px-24 max-md:px-5 max-md:py-20">
          <h1>
            <span className="text-5xl tracking-[9.6px] uppercase max-md:text-3xl">
              RESIDENTIAL HOME
            </span>
            <br />
            <span className="text-lg tracking-[3.6px] mt-4 block">
              ARMAGH
            </span>
          </h1>
          
          <p className="text-base leading-10 mt-12 max-w-4xl max-md:mt-10">
            This 1890's Victorian home exudes a vintage character with a new, modern personality. A dramatic open plan kitchen and living quarter is the core experience in this home, designed for a client who loves to cook, host and entertain. The traditional aesthetics are respected throughout, especially in the guest and master bedrooms, hallway and dining room.
          </p>
        </header>
      </main>
    </div>
  );
};

export default Armagh;
