import React from 'react';
import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen animate-fade-in" style={{ backgroundColor: 'transparent' }}>
      <Navigation activeProject="Dublin" />
      
      <main className="ml-[285px] max-md:ml-0">
        <Header />
        <Gallery />
      </main>
    </div>
  );
};

export default Index;
