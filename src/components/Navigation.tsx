import React, { useState } from 'react';

interface NavigationProps {
  activeProject?: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeProject = 'Dublin' }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const projects = [
    'ABOUT',
    'ARMAGH', 
    'Bangor',
    'DONEGAL',
    'Dublin',
    'Ward Ave',
    'Zen'
  ];

  return (
    <nav className="bg-white min-w-60 min-h-screen text-foreground font-medium w-[285px] pt-16 px-16 max-md:px-5 fixed left-0 top-0 h-full">
      <header className="text-4xl leading-none tracking-[-1.07px] font-bold">
        V&Co
      </header>
      
      <div className="flex flex-col items-start text-[13px] uppercase mt-20 max-md:mt-10">
        <section className="w-full">
          {projects.map((project) => (
            <button
              key={project}
              onMouseEnter={() => setHoveredItem(project)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`w-auto text-left transition-colors duration-200 ${
                activeProject === project
                  ? 'bg-foreground text-white'
                  : hoveredItem === project
                  ? 'bg-muted'
                  : 'bg-transparent'
              } block mt-2 px-1 py-0.5 first:mt-0`}
            >
              {project}
            </button>
          ))}
        </section>
        
        <button
          onMouseEnter={() => setHoveredItem('CONTACT')}
          onMouseLeave={() => setHoveredItem(null)}
          className={`mt-12 px-1 py-0.5 max-md:mt-10 transition-colors duration-200 ${
            hoveredItem === 'CONTACT' ? 'bg-muted' : 'bg-transparent'
          }`}
        >
          CONTACT
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
