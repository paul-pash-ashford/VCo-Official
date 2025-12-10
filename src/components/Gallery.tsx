import React from 'react';
import Testimonial from './Testimonial';

const Gallery: React.FC = () => {
  const column1Images = [
    { src: "https://api.builder.io/api/v1/image/assets/dfa0ab7a55a34550a4a3de1deb33b8e5/c596f977131e13966fe3b7f46289097f7f66d578", aspect: "aspect-[0.75]" },
    { src: "https://api.builder.io/api/v1/image/assets/dfa0ab7a55a34550a4a3de1deb33b8e5/805e242eccc4b302b6383a6df27b792e7d787689", aspect: "aspect-[1.5]" },
    { src: "https://api.builder.io/api/v1/image/assets/dfa0ab7a55a34550a4a3de1deb33b8e5/9123c573084d6a6fea41aaf4fe5ae45736206c7e", aspect: "aspect-[1.92]" },
    { src: "https://api.builder.io/api/v1/image/assets/dfa0ab7a55a34550a4a3de1deb33b8e5/ddef465746565b4dabf4af5cb71a6b522b365be3", aspect: "aspect-[0.67]" },
    { src: "https://api.builder.io/api/v1/image/assets/dfa0ab7a55a34550a4a3de1deb33b8e5/56d32f3c72e072c131beb7137fad08353e23c471", aspect: "aspect-[1.73]" },
    { src: "https://api.builder.io/api/v1/image/assets/dfa0ab7a55a34550a4a3de1deb33b8e5/59b59b4af46886e3d87a4e051a2461a96c8ea4ee", aspect: "aspect-[1.5]" },
    { src: "https://api.builder.io/api/v1/image/assets/dfa0ab7a55a34550a4a3de1deb33b8e5/390c153ff256944b4f62d29b803253d0cf84f754", aspect: "aspect-[1.74]" },
    { src: "https://api.builder.io/api/v1/image/assets/dfa0ab7a55a34550a4a3de1deb33b8e5/e4d25084a7a8c9566d733270dc586da8f460ddba", aspect: "aspect-[1.5]" },
    { src: "https://api.builder.io/api/v1/image/assets/dfa0ab7a55a34550a4a3de1deb33b8e5/9b266ea6334f298e900d1d0b5f6e8aa1e8fc6498", aspect: "aspect-[0.67]" }
  ];

  const column2Images = [
    { src: "https://api.builder.io/api/v1/image/assets/dfa0ab7a55a34550a4a3de1deb33b8e5/688572a8186f856605e73e6e2b59be483fe31c45", aspect: "aspect-[1.47]" },
    { src: "https://api.builder.io/api/v1/image/assets/dfa0ab7a55a34550a4a3de1deb33b8e5/1a901d7710beca127675042809d0b637d1d0eed5", aspect: "aspect-[1.44]" }
  ];

  const column2ImagesAfterTestimonial = [
    { src: "https://api.builder.io/api/v1/image/assets/dfa0ab7a55a34550a4a3de1deb33b8e5/153b0c668a1e0292ef3659dd630086f4192e02f3", aspect: "aspect-[2.04]" },
    { src: "https://api.builder.io/api/v1/image/assets/dfa0ab7a55a34550a4a3de1deb33b8e5/650b2a1a09cec365d1b01f689f74b423bb2e875f", aspect: "aspect-[1.49]" },
    { src: "https://api.builder.io/api/v1/image/assets/dfa0ab7a55a34550a4a3de1deb33b8e5/002d9aed503908cd34e3b5d3cd45a8e3a3bf8290", aspect: "aspect-[1.5]" },
    { src: "https://api.builder.io/api/v1/image/assets/dfa0ab7a55a34550a4a3de1deb33b8e5/796590df8231b23523454058dbcfbe2cea161288", aspect: "aspect-[1.49]" },
    { src: "https://api.builder.io/api/v1/image/assets/dfa0ab7a55a34550a4a3de1deb33b8e5/c03b6f5b8ead3159bf5e621049cfecc7d08ae50e", aspect: "aspect-[0.67]" },
    { src: "https://api.builder.io/api/v1/image/assets/dfa0ab7a55a34550a4a3de1deb33b8e5/f0ac80ec322365fc9cfb103f4f39744a97269069", aspect: "aspect-[0.67]" }
  ];

  return (
    <section className="w-full overflow-hidden">
      <img
        src="https://api.builder.io/api/v1/image/assets/dfa0ab7a55a34550a4a3de1deb33b8e5/a9494d6641553156331c08aad95d4fd01834e7b4"
        alt="Main hero image of the Dublin residential home project"
        className="aspect-[1.78] object-cover w-full rounded-sm"
      />
      
      <div className="flex w-full flex-wrap">
        <div className="min-w-60 flex-1 shrink basis-0">
          {column1Images.map((image, index) => (
            <img
              key={`col1-${index}`}
              src={image.src}
              alt={`Interior view ${index + 1}`}
              className={`${image.aspect} object-cover w-full rounded-sm`}
              loading="lazy"
            />
          ))}
        </div>
        
        <div className="min-w-60 flex-1 shrink basis-0">
          {column2Images.map((image, index) => (
            <img
              key={`col2-${index}`}
              src={image.src}
              alt={`Interior view ${index + 1}`}
              className={`${image.aspect} object-cover w-full rounded-sm`}
              loading="lazy"
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
              alt={`Interior view ${index + 1}`}
              className={`${image.aspect} object-cover w-full rounded-sm`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
