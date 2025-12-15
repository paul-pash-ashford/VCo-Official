import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  activeProject?: string;
  variant?: 'dark' | 'light';
}

const Navigation: React.FC<NavigationProps> = ({ activeProject = 'Dublin', variant = 'dark' }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const projects = [
    'ABOUT',
    'ARMAGH', 
    'BANGOR',
    'DONEGAL',
    'DUBLIN',
    'WARD AVE',
    'ZEN'
  ];

  const isLight = variant === 'light';
  const textColor = isLight ? 'text-white' : 'text-foreground';
  const activeStyles = isLight 
    ? 'bg-white text-[#8B9B7A]' 
    : 'bg-foreground text-white';
  const hoverStyles = isLight ? 'bg-white/20' : 'bg-muted';

  return (
    <nav className={`min-w-60 min-h-screen ${textColor} font-medium w-[285px] pt-16 px-16 max-md:px-5 fixed left-0 top-0 h-full`}>
      <header className="text-4xl leading-none tracking-[-1.07px] font-bold">
        V&Co
      </header>
      
      <div className="flex flex-col items-start text-[13px] uppercase mt-20 max-md:mt-10">
        <section className="w-full">
          {projects.map((project) => {
            const getRoute = (proj: string) => {
              switch (proj) {
                case 'ARMAGH': return '/armagh';
                case 'DUBLIN': return '/';
                case 'WARD AVE': return '/ward-ave';
                default: return null;
              }
            };
            
            const route = getRoute(project);
            
            if (route) {
              return (
                <Link
                  key={project}
                  to={route}
                  onMouseEnter={() => setHoveredItem(project)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`w-auto text-left transition-colors duration-200 ${
                    activeProject === project
                      ? activeStyles
                      : hoveredItem === project
                      ? hoverStyles
                      : 'bg-transparent'
                  } block mt-2 px-1 py-0.5 first:mt-0`}
                >
                  {project}
                </Link>
              );
            }
            
            return (
              <button
                key={project}
                onMouseEnter={() => setHoveredItem(project)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`w-auto text-left transition-colors duration-200 ${
                  activeProject === project
                    ? activeStyles
                    : hoveredItem === project
                    ? hoverStyles
                    : 'bg-transparent'
                } block mt-2 px-1 py-0.5 first:mt-0`}
              >
                {project}
              </button>
            );
          })}
        </section>
        
        <button
          onMouseEnter={() => setHoveredItem('CONTACT')}
          onMouseLeave={() => setHoveredItem(null)}
          className={`mt-12 px-1 py-0.5 max-md:mt-10 transition-colors duration-200 ${
            hoveredItem === 'CONTACT' ? hoverStyles : 'bg-transparent'
          }`}
        >
          CONTACT
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
