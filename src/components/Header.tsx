import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex w-full flex-col overflow-hidden items-stretch text-foreground font-medium justify-center py-32 px-24 max-md:px-5 max-md:py-20">
      <h1>
        <span className="text-5xl tracking-[9.6px] uppercase max-md:text-3xl">
          RESIDENTIAL HOME
        </span>
        <br />
        <span className="text-lg tracking-[3.6px] mt-4 block">
          BALLSBRIDGE, DUBLIN
        </span>
      </h1>
      
      <p className="text-base leading-normal mt-12 max-w-4xl max-md:mt-10">
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
      </p>
    </header>
  );
};

export default Header;
