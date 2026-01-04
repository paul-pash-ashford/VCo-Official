import React, { useState } from 'react';
import AnimatedImage from './AnimatedImage';
import Testimonial from './Testimonial';
import SlideshowViewer from './SlideshowViewer';

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

const DublinGallery: React.FC = () => {
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const allImages = [
    { src: dublin1, alt: "Dublin residential home interior view 1" },
    { src: dublin2, alt: "Dublin residential home interior view 2" },
    { src: dublin3, alt: "Dublin residential home interior view 3" },
    { src: dublin4, alt: "Dublin residential home interior view 4" },
    { src: dublin5, alt: "Dublin residential home interior view 5" },
    { src: dublin6, alt: "Dublin residential home interior view 6" },
    { src: dublin7, alt: "Dublin residential home interior view 7" },
    { src: dublin8, alt: "Dublin residential home interior view 8" },
    { src: dublin9, alt: "Dublin residential home interior view 9" },
    { src: dublin10, alt: "Dublin residential home interior view 10" },
    { src: dublin11, alt: "Dublin residential home interior view 11" },
    { src: dublin12, alt: "Dublin residential home interior view 12" },
    { src: dublin13, alt: "Dublin residential home interior view 13" },
    { src: dublin14, alt: "Dublin residential home interior view 14" },
    { src: dublin15, alt: "Dublin residential home interior view 15" },
    { src: dublin16, alt: "Dublin residential home interior view 16" },
    { src: dublin17, alt: "Dublin residential home interior view 17" },
    { src: dublin18, alt: "Dublin residential home interior view 18" },
    { src: dublin19, alt: "Dublin residential home interior view 19" },
    { src: dublin20, alt: "Dublin residential home interior view 20" },
    { src: dublin21, alt: "Dublin residential home interior view 21" },
  ];

  const column1Images = [
    { src: dublin2, aspect: "aspect-[0.75]" },
    { src: dublin3, aspect: "aspect-[1.5]" },
    { src: dublin4, aspect: "aspect-[1.92]" },
    { src: dublin5, aspect: "aspect-[0.67]" },
    { src: dublin6, aspect: "aspect-[1.73]" },
    { src: dublin7, aspect: "aspect-[1.5]" },
    { src: dublin8, aspect: "aspect-[1.74]" },
    { src: dublin9, aspect: "aspect-[1.5]" },
    { src: dublin10, aspect: "aspect-[0.67]" },
    { src: dublin11, aspect: "aspect-[1.5]" },
  ];

  const column2Images = [
    { src: dublin12, aspect: "aspect-[1.47]" },
    { src: dublin13, aspect: "aspect-[1.44]" },
  ];

  const column2ImagesAfterTestimonial = [
    { src: dublin14, aspect: "aspect-[2.04]" },
    { src: dublin15, aspect: "aspect-[1.49]" },
    { src: dublin16, aspect: "aspect-[1.5]" },
    { src: dublin17, aspect: "aspect-[1.49]" },
    { src: dublin18, aspect: "aspect-[0.67]" },
    { src: dublin19, aspect: "aspect-[0.67]" },
    { src: dublin20, aspect: "aspect-[1.5]" },
    { src: dublin21, aspect: "aspect-[1.5]" },
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
              alt={`Dublin interior view ${index + 1}`}
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
              alt={`Dublin interior view ${index + 1}`}
              className={`${image.aspect} object-cover w-full rounded-sm cursor-pointer hover:opacity-90 transition-opacity`}
              loading="lazy"
              onClick={() => openSlideshow(image.src)}
            />
          ))}
          
          <Testimonial
            quote="It was a pleasure to help refurbish this original 19th-century mews-type building with a contemporary extension bringing this home into a new era, blending restored heritage elements with clean modern lines, refined finishes, and a calm, contemporary palette."
            author="Veronica Clarke"
            title="Designer"
          />
          
          {column2ImagesAfterTestimonial.map((image, index) => (
            <img
              key={`col2-after-${index}`}
              src={image.src}
              alt={`Dublin interior view ${index + 1}`}
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

export default DublinGallery;

