import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import AnimatedBackgroundImage from '@/components/AnimatedBackgroundImage';

const mainDublinImage = "https://api.builder.io/api/v1/image/assets/dfa0ab7a55a34550a4a3de1deb33b8e5/a9494d6641553156331c08aad95d4fd01834e7b4";

const Index: React.FC = () => {
  const [textOpacity, setTextOpacity] = useState(0);

  useEffect(() => {
    // Fade in text after background starts animating (with delay to match background fade)
    const timer = setTimeout(() => {
      setTextOpacity(1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'transparent' }}>
      <AnimatedBackgroundImage src={mainDublinImage}>
        <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navigation activeProject="Dublin" />
          
          <main className="flex items-center justify-center flex-1">
            <h1
              className="font-brockmann text-8xl md:text-9xl text-white"
              style={{
                opacity: textOpacity,
                transition: 'opacity 1.5s ease-in-out',
                textAlign: 'center',
                letterSpacing: '0.05em',
              }}
            >
              Veronica & Co
            </h1>
          </main>
        </div>
      </AnimatedBackgroundImage>
    </div>
  );
};

export default Index;
