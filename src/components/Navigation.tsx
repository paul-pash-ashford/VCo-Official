import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  activeProject?: string;
  variant?: 'dark' | 'light' | 'zen';
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

  const getStyles = () => {
    switch (variant) {
      case 'light':
        return {
          textColor: 'text-white',
          activeStyles: 'bg-white text-[#8B9B7A]',
          hoverStyles: 'bg-white/20'
        };
      case 'zen':
        return {
          textColor: 'text-[#E8A5A5]',
          activeStyles: 'bg-[#E8A5A5] text-[#7A2B32]',
          hoverStyles: 'bg-[#E8A5A5]/20'
        };
      default:
        return {
          textColor: 'text-foreground',
          activeStyles: 'bg-foreground text-white',
          hoverStyles: 'bg-muted'
        };
    }
  };

  const { textColor, activeStyles, hoverStyles } = getStyles();

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
                case 'DONEGAL': return '/donegal';
                case 'BANGOR': return '/bangor';
                case 'ZEN': return '/zen';
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
