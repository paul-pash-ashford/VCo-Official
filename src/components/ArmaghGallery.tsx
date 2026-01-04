import React, { useState } from 'react';
import AnimatedImage from './AnimatedImage';
import SlideshowViewer from './SlideshowViewer';

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

const ArmaghGallery: React.FC = () => {
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const allImages = [
    { src: armagh1, alt: "Armagh residential home interior view 1" },
    { src: armagh2, alt: "Armagh residential home interior view 2" },
    { src: armagh3, alt: "Armagh residential home interior view 3" },
    { src: armagh4, alt: "Armagh residential home interior view 4" },
    { src: armagh5, alt: "Armagh residential home interior view 5" },
    { src: armagh6, alt: "Armagh residential home interior view 6" },
    { src: armagh7, alt: "Armagh residential home interior view 7" },
    { src: armagh8, alt: "Armagh residential home interior view 8" },
    { src: armagh9, alt: "Armagh residential home interior view 9" },
    { src: armagh10, alt: "Armagh residential home interior view 10" },
    { src: armagh11, alt: "Armagh residential home interior view 11" },
    { src: armagh12, alt: "Armagh residential home interior view 12" },
    { src: armagh13, alt: "Armagh residential home interior view 13" },
    { src: armagh14, alt: "Armagh residential home interior view 14" },
    { src: armagh15, alt: "Armagh residential home interior view 15" },
    { src: armagh17, alt: "Armagh residential home interior view 17" },
    { src: armagh18, alt: "Armagh residential home interior view 18" },
    { src: armagh19, alt: "Armagh residential home interior view 19" },
    { src: armagh20, alt: "Armagh residential home interior view 20" },
    { src: armagh21, alt: "Armagh residential home interior view 21" },
    { src: armagh22, alt: "Armagh residential home interior view 22" },
    { src: armagh23, alt: "Armagh residential home interior view 23" },
    { src: armagh24, alt: "Armagh residential home interior view 24" },
    { src: armagh25, alt: "Armagh residential home interior view 25" },
    { src: armagh26, alt: "Armagh residential home interior view 26" },
    { src: armagh27, alt: "Armagh residential home interior view 27" },
    { src: armagh28, alt: "Armagh residential home interior view 28" },
    { src: armagh29, alt: "Armagh residential home interior view 29" },
    { src: armagh30, alt: "Armagh residential home interior view 30" },
    { src: armagh31, alt: "Armagh residential home interior view 31" },
    { src: armagh32, alt: "Armagh residential home interior view 32" },
    { src: armagh33, alt: "Armagh residential home interior view 33" },
    { src: armagh34, alt: "Armagh residential home interior view 34" },
    { src: armagh35, alt: "Armagh residential home interior view 35" },
    { src: armagh36, alt: "Armagh residential home interior view 36" },
    { src: armagh37, alt: "Armagh residential home interior view 37" },
    { src: armagh38, alt: "Armagh residential home interior view 38" },
    { src: armagh39, alt: "Armagh residential home interior view 39" },
    { src: armagh40, alt: "Armagh residential home interior view 40" },
    { src: armagh41, alt: "Armagh residential home interior view 41" },
    { src: armagh42, alt: "Armagh residential home interior view 42" },
    { src: armagh43, alt: "Armagh residential home interior view 43" },
    { src: armagh44, alt: "Armagh residential home interior view 44" },
    { src: armagh45, alt: "Armagh residential home interior view 45" },
    { src: armagh46, alt: "Armagh residential home interior view 46" },
  ];

  const column1Images = [
    { src: armagh2, aspect: "aspect-[0.75]" },
    { src: armagh4, aspect: "aspect-[1.5]" },
    { src: armagh6, aspect: "aspect-[1.92]" },
    { src: armagh8, aspect: "aspect-[0.67]" },
    { src: armagh10, aspect: "aspect-[1.73]" },
    { src: armagh12, aspect: "aspect-[1.5]" },
    { src: armagh14, aspect: "aspect-[1.74]" },
    { src: armagh17, aspect: "aspect-[1.5]" },
    { src: armagh19, aspect: "aspect-[0.67]" },
    { src: armagh21, aspect: "aspect-[1.5]" },
    { src: armagh23, aspect: "aspect-[0.75]" },
    { src: armagh25, aspect: "aspect-[1.5]" },
    { src: armagh27, aspect: "aspect-[0.85]" },
    { src: armagh29, aspect: "aspect-[1.5]" },
    { src: armagh31, aspect: "aspect-[0.75]" },
    { src: armagh33, aspect: "aspect-[1.5]" },
    { src: armagh35, aspect: "aspect-[0.65]" },
    { src: armagh37, aspect: "aspect-[1.5]" },
    { src: armagh39, aspect: "aspect-[0.75]" },
    { src: armagh41, aspect: "aspect-[1.5]" },
    { src: armagh43, aspect: "aspect-[0.85]" },
    { src: armagh45, aspect: "aspect-[1.5]" },
  ];

  const column2Images = [
    { src: armagh3, aspect: "aspect-[1.5]" },
    { src: armagh5, aspect: "aspect-[0.9]" },
    { src: armagh7, aspect: "aspect-[0.85]" },
    { src: armagh9, aspect: "aspect-[0.75]" },
    { src: armagh11, aspect: "aspect-[1.6]" },
    { src: armagh13, aspect: "aspect-[0.65]" },
    { src: armagh15, aspect: "aspect-[1.5]" },
    { src: armagh18, aspect: "aspect-[0.85]" },
    { src: armagh20, aspect: "aspect-[1.5]" },
    { src: armagh22, aspect: "aspect-[0.75]" },
    { src: armagh24, aspect: "aspect-[1.5]" },
    { src: armagh26, aspect: "aspect-[0.9]" },
    { src: armagh28, aspect: "aspect-[1.5]" },
    { src: armagh30, aspect: "aspect-[0.65]" },
    { src: armagh32, aspect: "aspect-[1.5]" },
    { src: armagh34, aspect: "aspect-[0.75]" },
    { src: armagh36, aspect: "aspect-[1.5]" },
    { src: armagh38, aspect: "aspect-[0.85]" },
    { src: armagh40, aspect: "aspect-[1.5]" },
    { src: armagh42, aspect: "aspect-[0.9]" },
    { src: armagh44, aspect: "aspect-[1.5]" },
    { src: armagh46, aspect: "aspect-[0.65]" },
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
              alt={`Armagh interior view ${index + 1}`}
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
              alt={`Armagh interior view ${index + 1}`}
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

export default ArmaghGallery;
