import React from 'react';
import Navigation from '@/components/Navigation';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';

const Dublin: React.FC = () => {
  return (
    <div className="min-h-screen animate-fade-in" style={{ backgroundColor: 'transparent' }}>
      <Navigation activeProject="DUBLIN" variant="dark" />
      
      <main className="ml-[285px] max-md:ml-0">
        <Header />
        <Gallery />
      </main>
    </div>
  );
};

export default Dublin;

