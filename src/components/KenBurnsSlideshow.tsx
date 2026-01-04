import React, { useState, useEffect, useRef } from 'react';

// Import all images from all galleries
import armagh1 from '@/assets/armagh/armagh1.jpeg';
import armagh2 from '@/assets/armagh/armagh2.jpeg';
import armagh3 from '@/assets/armagh/armagh3.jpeg';
import armagh4 from '@/assets/armagh/armagh4.jpeg';
import armagh5 from '@/assets/armagh/armagh5.jpeg';
import armagh6 from '@/assets/armagh/armagh6.jpeg';
import armagh7 from '@/assets/armagh/armagh7.jpeg';
import armagh8 from '@/assets/armagh/armagh8.jpeg';
import armagh9 from '@/assets/armagh/armagh9.jpeg';
import armagh10 from '@/assets/armagh/armagh10.jpeg';
import armagh11 from '@/assets/armagh/armagh11.jpeg';
import armagh12 from '@/assets/armagh/armagh12.jpeg';
import armagh13 from '@/assets/armagh/armagh13.jpeg';
import armagh14 from '@/assets/armagh/armagh14.jpeg';
import armagh15 from '@/assets/armagh/armagh15.jpeg';
import armagh17 from '@/assets/armagh/armagh17.jpeg';
import armagh18 from '@/assets/armagh/armagh18.jpeg';
import armagh19 from '@/assets/armagh/armagh19.jpeg';
import armagh20 from '@/assets/armagh/armagh20.jpeg';
import armagh21 from '@/assets/armagh/armagh21.jpeg';
import armagh22 from '@/assets/armagh/armagh22.jpeg';
import armagh23 from '@/assets/armagh/armagh23.jpeg';
import armagh24 from '@/assets/armagh/armagh24.jpeg';
import armagh25 from '@/assets/armagh/armagh25.jpeg';
import armagh26 from '@/assets/armagh/armagh26.jpeg';
import armagh27 from '@/assets/armagh/armagh27.jpeg';
import armagh28 from '@/assets/armagh/armagh28.jpeg';
import armagh29 from '@/assets/armagh/armagh29.jpeg';
import armagh30 from '@/assets/armagh/armagh30.jpeg';
import armagh31 from '@/assets/armagh/armagh31.jpeg';
import armagh32 from '@/assets/armagh/armagh32.jpeg';
import armagh33 from '@/assets/armagh/armagh33.jpeg';
import armagh34 from '@/assets/armagh/armagh34.jpeg';
import armagh35 from '@/assets/armagh/armagh35.jpeg';
import armagh36 from '@/assets/armagh/armagh36.jpeg';
import armagh37 from '@/assets/armagh/armagh37.jpeg';
import armagh38 from '@/assets/armagh/armagh38.jpeg';
import armagh39 from '@/assets/armagh/armagh39.jpeg';
import armagh40 from '@/assets/armagh/armagh40.jpeg';
import armagh41 from '@/assets/armagh/armagh41.jpeg';
import armagh42 from '@/assets/armagh/armagh42.jpeg';
import armagh43 from '@/assets/armagh/armagh43.jpeg';
import armagh44 from '@/assets/armagh/armagh44.jpeg';
import armagh45 from '@/assets/armagh/armagh45.jpeg';
import armagh46 from '@/assets/armagh/armagh46.jpeg';

import bangor1 from '@/assets/bangor/bangor1.jpeg';
import bangor2 from '@/assets/bangor/bangor2.jpg';
import bangor3 from '@/assets/bangor/bangor3.jpg';
import bangor4 from '@/assets/bangor/bangor4.jpg';
import bangor5 from '@/assets/bangor/bangor5.jpg';
import bangor6 from '@/assets/bangor/bangor6.jpg';
import bangor7 from '@/assets/bangor/bangor7.jpg';
import bangor8 from '@/assets/bangor/bangor8.jpg';
import bangor9 from '@/assets/bangor/bangor9.jpg';
import bangor10 from '@/assets/bangor/bangor10.jpg';
import bangor11 from '@/assets/bangor/bangor11.jpg';
import bangor12 from '@/assets/bangor/bangor12.jpg';
import bangor13 from '@/assets/bangor/bangor13.jpg';
import bangor14 from '@/assets/bangor/bangor14.jpg';
import bangor15 from '@/assets/bangor/bangor15.jpg';
import bangor16 from '@/assets/bangor/bangor16.jpg';

import dublin1 from '@/assets/dublin/dublin1.jpg';
import dublin2 from '@/assets/dublin/dublin2.jpg';
import dublin3 from '@/assets/dublin/dublin3.jpg';
import dublin4 from '@/assets/dublin/dublin4.jpg';
import dublin5 from '@/assets/dublin/dublin5.jpg';
import dublin6 from '@/assets/dublin/dublin6.jpg';
import dublin7 from '@/assets/dublin/dublin7.jpg';
import dublin8 from '@/assets/dublin/dublin8.jpg';
import dublin9 from '@/assets/dublin/dublin9.jpg';
import dublin10 from '@/assets/dublin/dublin10.jpg';
import dublin11 from '@/assets/dublin/dublin11.jpg';
import dublin12 from '@/assets/dublin/dublin12.jpg';
import dublin13 from '@/assets/dublin/dublin13.jpg';
import dublin14 from '@/assets/dublin/dublin14.jpg';
import dublin15 from '@/assets/dublin/dublin15.jpg';
import dublin16 from '@/assets/dublin/dublin16.jpg';
import dublin17 from '@/assets/dublin/dublin17.jpg';
import dublin18 from '@/assets/dublin/dublin18.jpg';
import dublin19 from '@/assets/dublin/dublin19.jpg';
import dublin20 from '@/assets/dublin/dublin20.jpg';
import dublin21 from '@/assets/dublin/dublin21.jpg';

import livingroom1 from '@/assets/donegal/livingroom1 Large.jpeg';
import livingroom2 from '@/assets/donegal/livingroom2 Large.jpeg';
import livingroom3 from '@/assets/donegal/livingroom3 Large.jpeg';
import livingroom4 from '@/assets/donegal/livingroom4 Large.jpeg';
import livingroom5 from '@/assets/donegal/livingroom5 Large.jpeg';
import livingroom6 from '@/assets/donegal/livingroom6 Large.jpeg';
import livingroom7 from '@/assets/donegal/livingroom7 Large.jpeg';
import livingroom8 from '@/assets/donegal/livingroom8 Large.jpeg';
import livingroom9 from '@/assets/donegal/livingroom9 Large.jpeg';
import livingroom10 from '@/assets/donegal/livingroom10 Large.jpeg';
import livingroom11 from '@/assets/donegal/livingroom11 Large.jpeg';
import livingroom12 from '@/assets/donegal/livingroom12 Large.jpeg';
import livingroom14 from '@/assets/donegal/livingroom14 Large.jpeg';
import sunroom1 from '@/assets/donegal/sunroom1 Large.jpeg';
import sunroom2 from '@/assets/donegal/sunroom2 Large.jpeg';
import sunroom3 from '@/assets/donegal/sunroom3 Large.jpeg';
import sunroom4 from '@/assets/donegal/sunroom4 Large.jpeg';
import upstairs1 from '@/assets/donegal/upstairs1 Large.jpeg';
import upstairs2 from '@/assets/donegal/upstairs2 Large.jpeg';
import upstairs3 from '@/assets/donegal/upstairs3 Large.jpeg';
import upstairs4 from '@/assets/donegal/upstairs4 Large.jpeg';
import upstairs5 from '@/assets/donegal/upstairs5 Large.jpeg';
import upstairs6 from '@/assets/donegal/upstairs6 Large.jpeg';
import upstairs7 from '@/assets/donegal/upstairs7 Large.jpeg';
import upstairs8 from '@/assets/donegal/upstairs8 Large.jpeg';
import upstairs9 from '@/assets/donegal/upstairs9 Large.jpeg';

import wardave1 from '@/assets/wardave/wardave1.jpg';
import wardave2 from '@/assets/wardave/wardave2.jpg';
import wardave3 from '@/assets/wardave/wardave3.jpg';
import wardave4 from '@/assets/wardave/wardave4.jpg';
import wardave5 from '@/assets/wardave/wardave5.jpg';
import wardave6 from '@/assets/wardave/wardave6.jpg';
import wardave7 from '@/assets/wardave/wardave7.jpg';
import wardave8 from '@/assets/wardave/wardave8.jpg';
import wardave9 from '@/assets/wardave/wardave9.jpg';
import wardave10 from '@/assets/wardave/wardave10.jpg';
import wardave12 from '@/assets/wardave/wardave12.jpg';
import wardave13 from '@/assets/wardave/wardave13.jpg';

import zen1 from '@/assets/zen/zen1.JPG';
import zen2 from '@/assets/zen/zen2.jpg';
import zen3 from '@/assets/zen/zen3.JPG';
import zen4 from '@/assets/zen/zen4.JPG';
import zen5 from '@/assets/zen/zen5.JPG';
import zen6 from '@/assets/zen/zen6.JPG';
import zen7 from '@/assets/zen/zen7.JPG';
import zen8 from '@/assets/zen/zen8.JPG';
import zen9 from '@/assets/zen/zen9.JPG';
import zen10 from '@/assets/zen/zen10.JPG';
import zen11 from '@/assets/zen/zen11.JPG';
import zen12 from '@/assets/zen/zen12.JPG';
import zen13 from '@/assets/zen/zen13.JPG';
import zen14 from '@/assets/zen/zen14.JPG';
import zen15 from '@/assets/zen/zen15.JPG';

// Combine all images into one array
const allGalleryImages = [
  armagh1, armagh2, armagh3, armagh4, armagh5, armagh6, armagh7, armagh8, armagh9, armagh10,
  armagh11, armagh12, armagh13, armagh14, armagh15, armagh17, armagh18, armagh19, armagh20, armagh21,
  armagh22, armagh23, armagh24, armagh25, armagh26, armagh27, armagh28, armagh29, armagh30, armagh31,
  armagh32, armagh33, armagh34, armagh35, armagh36, armagh37, armagh38, armagh39, armagh40, armagh41,
  armagh42, armagh43, armagh44, armagh45, armagh46,
  bangor1, bangor2, bangor3, bangor4, bangor5, bangor6, bangor7, bangor8, bangor9, bangor10,
  bangor11, bangor12, bangor13, bangor14, bangor15, bangor16,
  dublin1, dublin2, dublin3, dublin4, dublin5, dublin6, dublin7, dublin8, dublin9, dublin10,
  dublin11, dublin12, dublin13, dublin14, dublin15, dublin16, dublin17, dublin18, dublin19, dublin20, dublin21,
  livingroom1, livingroom2, livingroom3, livingroom4, livingroom5, livingroom6, livingroom7, livingroom8, livingroom9, livingroom10,
  livingroom11, livingroom12, livingroom14, sunroom1, sunroom2, sunroom3, sunroom4,
  upstairs1, upstairs2, upstairs3, upstairs4, upstairs5, upstairs6, upstairs7, upstairs8, upstairs9,
  wardave1, wardave2, wardave3, wardave4, wardave5, wardave6, wardave7, wardave8, wardave9, wardave10,
  wardave12, wardave13,
  zen1, zen2, zen3, zen4, zen5, zen6, zen7, zen8, zen9, zen10, zen11, zen12, zen13, zen14, zen15,
];

interface KenBurnsSlideshowProps {
  className?: string;
}

const KenBurnsSlideshow: React.FC<KenBurnsSlideshowProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextImageSrc, setNextImageSrc] = useState<string | null>(null);
  const currentImageRef = useRef<HTMLImageElement>(null);
  const nextImageRef = useRef<HTMLImageElement>(null);

  // Shuffle array function
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Initialize with shuffled images and random start
  const [shuffledImages] = useState(() => {
    const shuffled = shuffleArray(allGalleryImages);
    // Start at random position
    const randomStart = Math.floor(Math.random() * shuffled.length);
    return shuffled.slice(randomStart).concat(shuffled.slice(0, randomStart));
  });

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % shuffledImages.length;
    const img = new Image();
    img.src = shuffledImages[nextIndex];
    setNextImageSrc(shuffledImages[nextIndex]);
  }, [currentIndex, shuffledImages]);

  // Cycle through images every 5 seconds with crossfade
  useEffect(() => {
    const interval = setInterval(() => {
      if (isTransitioning) return;

      setIsTransitioning(true);
      const nextIndex = (currentIndex + 1) % shuffledImages.length;

      // Crossfade transition (1200ms)
      if (currentImageRef.current && nextImageRef.current && nextImageSrc) {
        nextImageRef.current.src = nextImageSrc;
        nextImageRef.current.style.opacity = '0';

        const fadeStartTime = performance.now();
        const fadeDuration = 1200;

        const fadeAnimate = (currentTime: number) => {
          const elapsed = currentTime - fadeStartTime;
          const fadeProgress = Math.min(elapsed / fadeDuration, 1);
          
          // Smooth ease-in-out
          const eased = fadeProgress < 0.5
            ? 2 * fadeProgress * fadeProgress
            : 1 - Math.pow(-2 * fadeProgress + 2, 2) / 2;

          // Crossfade: fade out current, fade in next
          if (currentImageRef.current) {
            currentImageRef.current.style.opacity = String(1 - eased);
          }
          if (nextImageRef.current) {
            nextImageRef.current.style.opacity = String(eased);
          }

          if (fadeProgress < 1) {
            requestAnimationFrame(fadeAnimate);
          } else {
            // Swap images
            setCurrentIndex(nextIndex);
            setIsTransitioning(false);
          }
        };

        requestAnimationFrame(fadeAnimate);
      }
    }, 5000); // Image persists for 5 seconds before transition

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning, nextImageSrc, shuffledImages]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Current image */}
      <img
        ref={currentImageRef}
        src={shuffledImages[currentIndex]}
        alt="Interior design showcase"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: 1,
          transition: 'opacity 1200ms ease-in-out',
        }}
      />
      
      {/* Next image (for crossfade transition) */}
      {nextImageSrc && (
        <img
          ref={nextImageRef}
          src={nextImageSrc}
          alt="Interior design showcase"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: 0,
            transition: 'opacity 1200ms ease-in-out',
          }}
        />
      )}
    </div>
  );
};

export default KenBurnsSlideshow;
