import React, { useState } from 'react';
import AnimatedImage from './AnimatedImage';
import SlideshowViewer from './SlideshowViewer';

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
import wardave11 from '@/assets/wardave/wardave11.jpg';
import wardave12 from '@/assets/wardave/wardave12.jpg';
import wardave13 from '@/assets/wardave/wardave13.jpg';

const WardAveGallery: React.FC = () => {
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const allImages = [
    { src: wardave1, alt: "Ward Avenue kitchen interior view 1" },
    { src: wardave2, alt: "Ward Avenue kitchen interior view 2" },
    { src: wardave3, alt: "Ward Avenue kitchen interior view 3" },
    { src: wardave4, alt: "Ward Avenue kitchen interior view 4" },
    { src: wardave5, alt: "Ward Avenue kitchen interior view 5" },
    { src: wardave6, alt: "Ward Avenue kitchen interior view 6" },
    { src: wardave7, alt: "Ward Avenue kitchen interior view 7" },
    { src: wardave8, alt: "Ward Avenue kitchen interior view 8" },
    { src: wardave9, alt: "Ward Avenue kitchen interior view 9" },
    { src: wardave10, alt: "Ward Avenue kitchen interior view 10" },
    { src: wardave12, alt: "Ward Avenue kitchen interior view 12" },
    { src: wardave13, alt: "Ward Avenue kitchen interior view 13" },
  ];

  const column1Images = [
    { src: wardave1, aspect: "aspect-[0.75]" },
    { src: wardave2, aspect: "aspect-[0.75]" },
    { src: wardave4, aspect: "aspect-[1.5]" },
    { src: wardave6, aspect: "aspect-[1.92]" },
    { src: wardave8, aspect: "aspect-[0.67]" },
    { src: wardave10, aspect: "aspect-[1.73]" },
    { src: wardave12, aspect: "aspect-[1.5]" },
  ];

  const column2Images = [
    { src: wardave5, aspect: "aspect-[0.9]" },
    { src: wardave7, aspect: "aspect-[0.85]" },
    { src: wardave9, aspect: "aspect-[0.75]" },
    { src: wardave13, aspect: "aspect-[0.65]" },
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
              alt={`Ward Ave interior view ${index + 1}`}
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
              alt={`Ward Ave interior view ${index + 1}`}
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

export default WardAveGallery;

