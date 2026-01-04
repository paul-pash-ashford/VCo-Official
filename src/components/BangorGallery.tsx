import React, { useState } from 'react';
import AnimatedImage from './AnimatedImage';
import SlideshowViewer from './SlideshowViewer';
import Testimonial from './Testimonial';

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

const BangorGallery: React.FC = () => {
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const allImages = [
    { src: bangor1, alt: "Bangor residential home interior view 1" },
    { src: bangor2, alt: "Bangor residential home interior view 2" },
    { src: bangor3, alt: "Bangor residential home interior view 3" },
    { src: bangor4, alt: "Bangor residential home interior view 4" },
    { src: bangor5, alt: "Bangor residential home interior view 5" },
    { src: bangor6, alt: "Bangor residential home interior view 6" },
    { src: bangor7, alt: "Bangor residential home interior view 7" },
    { src: bangor8, alt: "Bangor residential home interior view 8" },
    { src: bangor9, alt: "Bangor residential home interior view 9" },
    { src: bangor10, alt: "Bangor residential home interior view 10" },
    { src: bangor11, alt: "Bangor residential home interior view 11" },
    { src: bangor12, alt: "Bangor residential home interior view 12" },
    { src: bangor13, alt: "Bangor residential home interior view 13" },
    { src: bangor14, alt: "Bangor residential home interior view 14" },
    { src: bangor15, alt: "Bangor residential home interior view 15" },
    { src: bangor16, alt: "Bangor residential home interior view 16" },
  ];

  const column1Images = [
    { src: bangor1, aspect: "aspect-[0.75]" },
    { src: bangor3, aspect: "aspect-[1.5]" },
    { src: bangor5, aspect: "aspect-[1.92]" },
  ];

  const column1ImagesAfterTestimonial = [
    { src: bangor7, aspect: "aspect-[0.67]" },
    { src: bangor9, aspect: "aspect-[1.73]" },
    { src: bangor11, aspect: "aspect-[1.5]" },
    { src: bangor13, aspect: "aspect-[1.74]" },
    { src: bangor8, aspect: "aspect-[1.5]" },
  ];

  const column2Images = [
    { src: bangor2, aspect: "aspect-[1.5]" },
    { src: bangor4, aspect: "aspect-[0.9]" },
    { src: bangor6, aspect: "aspect-[0.85]" },
    { src: bangor10, aspect: "aspect-[1.6]" },
    { src: bangor12, aspect: "aspect-[0.65]" },
    { src: bangor14, aspect: "aspect-[1.5]" },
    { src: bangor16, aspect: "aspect-[0.75]" },
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
              alt={`Bangor interior view ${index + 1}`}
              className={`${image.aspect} object-cover w-full rounded-sm cursor-pointer hover:opacity-90 transition-opacity`}
              loading="lazy"
              onClick={() => openSlideshow(image.src)}
            />
          ))}
          
          <Testimonial
            quote="Veronicas talent is her ability to work with you in such a way that you feel the finished product has been created by you.  She took my very abstract vision of how I wanted my house to look and feel and worked with me to turn it into reality."
            author="Janette"
            title="Client"
          />
          
          {column1ImagesAfterTestimonial.map((image, index) => (
            <img
              key={`col1-after-${index}`}
              src={image.src}
              alt={`Bangor interior view ${index + 1}`}
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
              alt={`Bangor interior view ${index + 1}`}
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

export default BangorGallery;
