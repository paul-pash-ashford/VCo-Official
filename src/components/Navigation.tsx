import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeProject?: string;
  variant?: 'dark' | 'light' | 'zen';
}

const Navigation: React.FC<NavigationProps> = ({ activeProject = 'Dublin', variant = 'dark' }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const getRoute = (proj: string) => {
    switch (proj) {
      case 'ABOUT': return '/';
      case 'ARMAGH': return '/armagh';
      case 'DUBLIN': return '/dublin';
      case 'WARD AVE': return '/ward-ave';
      case 'DONEGAL': return '/donegal';
      case 'BANGOR': return '/bangor';
      case 'ZEN': return '/zen';
      default: return null;
    }
  };

  const NavItems = () => (
    <>
      <section className="w-full">
        {projects.map((project) => {
          const route = getRoute(project);
          
          if (route) {
            return (
              <Link
                key={project}
                to={route}
                onClick={() => setMobileMenuOpen(false)}
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
    </>
  );

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className={`md:hidden fixed top-6 right-6 z-50 ${textColor}`}
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>

      {/* Mobile overlay menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <nav className={`absolute inset-0 ${textColor} font-medium pt-16 px-8 animate-slide-in-right`}
            style={{ 
              backgroundColor: variant === 'light' ? 'rgba(0,0,0,0.9)' : 
                             variant === 'zen' ? '#7A2B32' : 
                             'rgba(255,255,255,0.95)'
            }}
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className={`absolute top-6 right-6 ${textColor}`}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            
            <header className="text-4xl leading-none tracking-[-1.07px] font-bold">
              V&Co
            </header>
            
            <div className="flex flex-col items-start text-[13px] uppercase mt-20">
              <NavItems />
            </div>
          </nav>
        </div>
      )}

      {/* Desktop navigation */}
      <nav className={`hidden md:block min-w-60 min-h-screen ${textColor} font-medium w-[285px] pt-16 px-16 fixed left-0 top-0 h-full z-10`}>
        <header className="text-4xl leading-none tracking-[-1.07px] font-bold">
          V&Co
        </header>
        
        <div className="flex flex-col items-start text-[13px] uppercase mt-20">
          <NavItems />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
