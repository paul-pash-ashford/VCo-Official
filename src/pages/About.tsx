import React from 'react';
import Navigation from '@/components/Navigation';
import AnimatedTitle from '@/components/AnimatedTitle';
import AnimatedSubtitle from '@/components/AnimatedSubtitle';
import AnimatedIntro from '@/components/AnimatedIntro';

const mainDublinImage = "https://api.builder.io/api/v1/image/assets/dfa0ab7a55a34550a4a3de1deb33b8e5/a9494d6641553156331c08aad95d4fd01834e7b4";

const About: React.FC = () => {
  return (
    <div className="min-h-screen animate-fade-in" style={{ backgroundColor: 'transparent' }}>
      <Navigation activeProject="ABOUT" variant="dark" />
      
      <main className="ml-[285px] max-md:ml-0 flex">
        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-center py-32 px-24 max-md:px-5 max-md:py-20">
          <AnimatedTitle className="text-6xl tracking-[0.3em] font-medium max-md:text-4xl max-md:tracking-[0.2em] text-foreground">
            Veronica & Co
          </AnimatedTitle>
          <AnimatedSubtitle className="text-sm tracking-[0.3em] mt-6 uppercase text-foreground">
            DESIGN AGENCY, BELFAST
          </AnimatedSubtitle>
          
          <AnimatedIntro className="text-base leading-[3] mt-12 max-w-3xl max-md:mt-10 text-foreground">
            Sophisticated, elegant living environments that reflect each client's lifestyle and personality. Veronica & Co is an interior design consultancy based in Belfast, Northern Ireland, covering both residential and commercial builds.
          </AnimatedIntro>
          
          <div className="mt-8 max-md:mt-6">
            <a 
              href="mailto:info@veronicaandco.com" 
              className="text-foreground underline hover:opacity-80 transition-opacity"
            >
              info@veronicaandco.com
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/3 max-md:hidden">
          <img
            src={mainDublinImage}
            alt="Interior design"
            className="w-full h-full object-cover"
            style={{ height: '100vh' }}
          />
        </div>
      </main>
    </div>
  );
};

export default About;

