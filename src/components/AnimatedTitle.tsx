import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface AnimatedTitleProps {
  children: React.ReactNode;
  className?: string;
}

// Gentle easing function (ease-out-cubic)
const easeOutCubic = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

// Ease-in-out-cubic for smoother transitions
const easeInOutCubic = (t: number): number => {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ children, className = '' }) => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const previousPathRef = useRef<string>('');
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    // Check if route changed
    if (previousPathRef.current !== location.pathname) {
      // If we had a previous path, animate out first
      if (previousPathRef.current) {
        setIsAnimating(true);
        setIsVisible(false); // Hide immediately to ensure clean transition
        startTimeRef.current = performance.now();

        const animateOut = (currentTime: number) => {
          const elapsed = currentTime - startTimeRef.current;
          const rawProgress = Math.min(elapsed / 750, 1); // 750ms outro (1.5x longer)
          const progress = easeOutCubic(rawProgress); // Apply gentle easing

          if (wrapperRef.current && titleRef.current) {
            // Slide down and mask out (clip from top)
            const translateY = progress * 30; // Slide down 30px
            const clipProgress = progress;
            const clipTop = clipProgress * 100; // Clip from top as it exits
            
            titleRef.current.style.transform = `translateY(${translateY}px)`;
            wrapperRef.current.style.clipPath = `inset(${clipTop}% 0 0 0)`;
            wrapperRef.current.style.webkitClipPath = `inset(${clipTop}% 0 0 0)`;
          }

          if (rawProgress < 1) {
            animationFrameRef.current = requestAnimationFrame(animateOut);
          } else {
            // Outro complete, wait a moment then start intro
            previousPathRef.current = location.pathname;
            // Small delay to ensure old content is fully gone
            setTimeout(() => {
              setIsVisible(true);
              startTimeRef.current = performance.now();

              const animateIn = (currentTime: number) => {
                const elapsed = currentTime - startTimeRef.current;
                const rawProgress = Math.min(elapsed / 1050, 1); // 1050ms intro (1.5x longer)
                const progress = easeInOutCubic(rawProgress); // Apply gentle easing

                if (wrapperRef.current && titleRef.current) {
                  // Slide in from above and mask reveal upwards (clip from top, reveal from bottom)
                  const translateY = (1 - progress) * 20; // Start 20px above, slide to 0
                  const clipProgress = progress;
                  const clipTop = (1 - clipProgress) * 100; // Start with top clipped, reveal upwards
                  
                  titleRef.current.style.transform = `translateY(${translateY}px)`;
                  wrapperRef.current.style.clipPath = `inset(${clipTop}% 0 0 0)`;
                  wrapperRef.current.style.webkitClipPath = `inset(${clipTop}% 0 0 0)`;
                }

                if (rawProgress < 1) {
                  animationFrameRef.current = requestAnimationFrame(animateIn);
                } else {
                  // Animation complete
                  if (wrapperRef.current && titleRef.current) {
                    titleRef.current.style.transform = '';
                    wrapperRef.current.style.clipPath = '';
                    wrapperRef.current.style.webkitClipPath = '';
                  }
                  setIsAnimating(false);
                  animationFrameRef.current = null;
                }
              };

              animationFrameRef.current = requestAnimationFrame(animateIn);
            }, 100); // Small delay to ensure clean transition
          }
        };

        animationFrameRef.current = requestAnimationFrame(animateOut);
      } else {
        // First render - just set up for intro
        previousPathRef.current = location.pathname;
        setIsVisible(true);
        startTimeRef.current = performance.now();
        setIsAnimating(true);

        const animateIn = (currentTime: number) => {
          const elapsed = currentTime - startTimeRef.current;
          const rawProgress = Math.min(elapsed / 1050, 1); // 1050ms intro (1.5x longer)
          const progress = easeInOutCubic(rawProgress);

          if (wrapperRef.current && titleRef.current) {
            const translateY = (1 - progress) * 20;
            const clipProgress = progress;
            const clipTop = (1 - clipProgress) * 100; // Start with top clipped, reveal upwards
            
            titleRef.current.style.transform = `translateY(${translateY}px)`;
            wrapperRef.current.style.clipPath = `inset(${clipTop}% 0 0 0)`;
            wrapperRef.current.style.webkitClipPath = `inset(${clipTop}% 0 0 0)`;
          }

          if (rawProgress < 1) {
            animationFrameRef.current = requestAnimationFrame(animateIn);
          } else {
            if (wrapperRef.current && titleRef.current) {
              titleRef.current.style.transform = '';
              wrapperRef.current.style.clipPath = '';
              wrapperRef.current.style.webkitClipPath = '';
            }
            setIsAnimating(false);
            animationFrameRef.current = null;
          }
        };

        animationFrameRef.current = requestAnimationFrame(animateIn);
      }
    }

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [location.pathname]);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'relative',
        display: 'inline-block',
        overflow: 'hidden',
      }}
    >
      <h1
        ref={titleRef}
        className={className}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: isAnimating ? 'none' : 'opacity 0.3s ease',
          willChange: isAnimating ? 'transform' : 'auto',
        }}
      >
        {children}
      </h1>
    </div>
  );
};

export default AnimatedTitle;

