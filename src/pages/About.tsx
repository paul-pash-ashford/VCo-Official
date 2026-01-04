import React from 'react';
import Navigation from '@/components/Navigation';
import AnimatedTitle from '@/components/AnimatedTitle';
import AnimatedSubtitle from '@/components/AnimatedSubtitle';
import AnimatedIntro from '@/components/AnimatedIntro';
import KenBurnsSlideshow from '@/components/KenBurnsSlideshow';

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
          
          <AnimatedIntro className="text-base leading-[3] mt-12 max-w-4xl max-md:mt-10 text-foreground">
            Sophisticated, elegant living environments that reflect each client's lifestyle and personality. Veronica & Co is an interior design consultancy based in Belfast, Northern Ireland, covering both residential and commercial builds.
          </AnimatedIntro>
          
          <AnimatedSubtitle className="text-sm tracking-[0.3em] mt-20 max-md:mt-16 uppercase text-foreground">
            Contact
          </AnimatedSubtitle>
          
          <div className="mt-6 max-md:mt-5 flex flex-col gap-4">
            <a 
              href="mailto:info@veronicaandco.com" 
              className="text-foreground underline hover:opacity-80 transition-opacity"
            >
              info@veronicaandco.com
            </a>
            <a 
              href="https://www.linkedin.com/in/veronica-clarke-6112a121"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:opacity-80 transition-opacity flex items-center gap-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="inline-block"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>Follow me on LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/3 max-md:hidden h-screen">
          <KenBurnsSlideshow className="h-full" />
        </div>
      </main>
    </div>
  );
};

export default About;

