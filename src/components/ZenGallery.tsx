import React, { useState } from 'react';
import AnimatedImage from './AnimatedImage';
import SlideshowViewer from './SlideshowViewer';

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

const ZenGallery: React.FC = () => {
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const allImages = [
    { src: zen1, alt: "House of Zen interior view 1" },
    { src: zen2, alt: "House of Zen interior view 2" },
    { src: zen3, alt: "House of Zen interior view 3" },
    { src: zen4, alt: "House of Zen interior view 4" },
    { src: zen5, alt: "House of Zen interior view 5" },
    { src: zen6, alt: "House of Zen interior view 6" },
    { src: zen7, alt: "House of Zen interior view 7" },
    { src: zen8, alt: "House of Zen interior view 8" },
    { src: zen9, alt: "House of Zen interior view 9" },
    { src: zen10, alt: "House of Zen interior view 10" },
    { src: zen11, alt: "House of Zen interior view 11" },
    { src: zen12, alt: "House of Zen interior view 12" },
    { src: zen13, alt: "House of Zen interior view 13" },
    { src: zen14, alt: "House of Zen interior view 14" },
    { src: zen15, alt: "House of Zen interior view 15" },
  ];

  const column1Images = [
    { src: zen1, aspect: "aspect-[0.75]" },
    { src: zen3, aspect: "aspect-[1.5]" },
    { src: zen5, aspect: "aspect-[1.92]" },
    { src: zen7, aspect: "aspect-[0.67]" },
    { src: zen9, aspect: "aspect-[1.73]" },
    { src: zen11, aspect: "aspect-[1.5]" },
    { src: zen13, aspect: "aspect-[1.74]" },
    { src: zen15, aspect: "aspect-[0.75]" },
  ];

  const column2Images = [
    { src: zen2, aspect: "aspect-[1.5]" },
    { src: zen4, aspect: "aspect-[0.9]" },
    { src: zen6, aspect: "aspect-[0.85]" },
    { src: zen8, aspect: "aspect-[0.75]" },
    { src: zen10, aspect: "aspect-[1.6]" },
    { src: zen12, aspect: "aspect-[0.65]" },
    { src: zen14, aspect: "aspect-[1.5]" },
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
              alt={`House of Zen interior view ${index + 1}`}
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
              alt={`House of Zen interior view ${index + 1}`}
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

export default ZenGallery;
