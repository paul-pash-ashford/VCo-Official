import React, { useState } from 'react';
import AnimatedImage from './AnimatedImage';
import SlideshowViewer from './SlideshowViewer';

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

const DonegalGallery: React.FC = () => {
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const allImages = [
    { src: livingroom1, alt: "Donegal living room view 1" },
    { src: livingroom2, alt: "Donegal living room view 2" },
    { src: livingroom3, alt: "Donegal living room view 3" },
    { src: livingroom4, alt: "Donegal living room view 4" },
    { src: livingroom5, alt: "Donegal living room view 5" },
    { src: livingroom6, alt: "Donegal living room view 6" },
    { src: livingroom7, alt: "Donegal living room view 7" },
    { src: livingroom8, alt: "Donegal living room view 8" },
    { src: livingroom9, alt: "Donegal living room view 9" },
    { src: livingroom10, alt: "Donegal living room view 10" },
    { src: livingroom11, alt: "Donegal living room view 11" },
    { src: livingroom12, alt: "Donegal living room view 12" },
    { src: livingroom14, alt: "Donegal living room view 14" },
    { src: sunroom1, alt: "Donegal sunroom view 1" },
    { src: sunroom2, alt: "Donegal sunroom view 2" },
    { src: sunroom3, alt: "Donegal sunroom view 3" },
    { src: sunroom4, alt: "Donegal sunroom view 4" },
    { src: upstairs1, alt: "Donegal upstairs view 1" },
    { src: upstairs2, alt: "Donegal upstairs view 2" },
    { src: upstairs3, alt: "Donegal upstairs view 3" },
    { src: upstairs4, alt: "Donegal upstairs view 4" },
    { src: upstairs5, alt: "Donegal upstairs view 5" },
    { src: upstairs6, alt: "Donegal upstairs view 6" },
    { src: upstairs7, alt: "Donegal upstairs view 7" },
    { src: upstairs8, alt: "Donegal upstairs view 8" },
    { src: upstairs9, alt: "Donegal upstairs view 9" },
  ];

  const column1Images = [
    { src: livingroom1, aspect: "aspect-[0.75]" },
    { src: livingroom3, aspect: "aspect-[1.5]" },
    { src: livingroom5, aspect: "aspect-[1.92]" },
    { src: livingroom7, aspect: "aspect-[0.67]" },
    { src: livingroom9, aspect: "aspect-[1.73]" },
    { src: livingroom11, aspect: "aspect-[1.5]" },
    { src: livingroom12, aspect: "aspect-[1.5]" },
    { src: sunroom1, aspect: "aspect-[1.74]" },
    { src: sunroom3, aspect: "aspect-[1.5]" },
    { src: upstairs1, aspect: "aspect-[0.67]" },
    { src: upstairs5, aspect: "aspect-[0.75]" },
    { src: upstairs7, aspect: "aspect-[1.5]" },
    { src: upstairs9, aspect: "aspect-[0.85]" },
  ];

  const column2Images = [
    { src: livingroom2, aspect: "aspect-[1.5]" },
    { src: livingroom4, aspect: "aspect-[0.9]" },
    { src: livingroom6, aspect: "aspect-[0.85]" },
    { src: livingroom8, aspect: "aspect-[0.75]" },
    { src: livingroom10, aspect: "aspect-[1.6]" },
    { src: livingroom14, aspect: "aspect-[0.65]" },
    { src: sunroom2, aspect: "aspect-[1.5]" },
    { src: sunroom4, aspect: "aspect-[0.75]" },
    { src: upstairs2, aspect: "aspect-[1.5]" },
    { src: upstairs4, aspect: "aspect-[0.9]" },
    { src: upstairs6, aspect: "aspect-[0.85]" },
    { src: upstairs8, aspect: "aspect-[1.5]" },
  ];

  const openSlideshow = (imageSrc: string) => {
    const index = allImages.findIndex(img => img.src === imageSrc);
    if (index !== -1) {
      setStartIndex(index);
      setIsSlideshowOpen(true);
    }
  };

  return (
    <section className="w-full overflow-hidden">
      <SlideshowViewer
        images={allImages}
        isOpen={isSlideshowOpen}
        startIndex={startIndex}
        onClose={() => setIsSlideshowOpen(false)}
      />

      <div className="flex flex-col md:flex-row w-full gap-0.5">
        <div className="w-full md:min-w-60 md:flex-1 md:shrink md:basis-0 flex flex-col gap-0.5">
          {column1Images.map((image, index) => (
            <img
              key={`col1-${index}`}
              src={image.src}
              alt={`Donegal interior view ${index + 1}`}
              className={`${image.aspect} object-cover w-full rounded-sm cursor-pointer hover:opacity-90 transition-opacity`}
              loading="lazy"
              onClick={() => openSlideshow(image.src)}
            />
          ))}
        </div>
        
        <div className="w-full md:min-w-60 md:flex-1 md:shrink md:basis-0 flex flex-col gap-0.5">
          {column2Images.map((image, index) => (
            <img
              key={`col2-${index}`}
              src={image.src}
              alt={`Donegal interior view ${index + 1}`}
              className={`${image.aspect} object-cover w-full rounded-sm cursor-pointer hover:opacity-90 transition-opacity`}
              loading="lazy"
              onClick={() => openSlideshow(image.src)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonegalGallery;
