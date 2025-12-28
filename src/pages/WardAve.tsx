import React from 'react';
import Navigation from '../components/Navigation';

const WardAve: React.FC = () => {
  return (
    <div className="bg-[#707B85] min-h-screen animate-fade-in">
      <Navigation activeProject="WARD AVE" variant="light" />
      
      <main className="ml-[285px] max-md:ml-0">
        <header className="flex w-full flex-col overflow-hidden items-stretch text-white font-medium justify-center py-32 px-24 max-md:px-5 max-md:py-20">
          <h1 className="text-6xl tracking-[0.3em] font-medium max-md:text-4xl max-md:tracking-[0.2em]">
            WARD AVENUE
          </h1>
          <p className="text-sm tracking-[0.3em] mt-6 uppercase">
            Bangor
          </p>
          <p className="text-base leading-[3] mt-16 max-w-3xl max-md:mt-10">
            A bespoke Schüller Nextline handleless kitchen, with Truffle Grey satin lacquered door. This contemporary kitchen was designed with careful consideration for the family's daily life and the client's overall taste, balancing both style and function.
          </p>
        </header>
      </main>
    </div>
  );
};

export default WardAve;
