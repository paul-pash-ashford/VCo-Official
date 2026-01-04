import React from 'react';
import AnimatedTitle from './AnimatedTitle';
import AnimatedSubtitle from './AnimatedSubtitle';
import AnimatedIntro from './AnimatedIntro';

const Header: React.FC = () => {
  return (
    <header className="flex w-full flex-col overflow-hidden items-center text-foreground font-medium justify-center py-32 px-[120px] max-md:px-5 max-md:py-20">
      <div className="w-full max-w-[876px]">
        <AnimatedTitle className="text-5xl tracking-[9.6px] uppercase max-md:text-3xl">
          RESIDENTIAL HOME
        </AnimatedTitle>
        <AnimatedSubtitle className="text-sm tracking-[0.3em] mt-6 uppercase">
          BALLSBRIDGE, DUBLIN
        </AnimatedSubtitle>
        
        <AnimatedIntro className="text-base leading-[3] mt-12 max-md:mt-10 text-left">
          A contemporary design for a young couple, based in Dublin, whose
          vision for their home was to create a dramatic but also calm
          environment. A balance between the new contemporary extension and
          the 19th century mews character of the original building. Working
          with the double height living space and the abundance of natural
          lighting, we designed a gallery-like atmosphere to display the
          client's growing art collection. Finished with subtle textural
          furnishings, sleek porcelain flooring, and an evocative colour
          scheme, the space had a sense of calm balanced with brave artwork
          and accent colours.
        </AnimatedIntro>
      </div>
    </header>
  );
};

export default Header;
