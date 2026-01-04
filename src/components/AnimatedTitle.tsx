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
  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const previousPathRef = useRef<string>('');
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated && previousPathRef.current === location.pathname) {
            setIsVisible(true);
            setIsAnimating(true);
            startTimeRef.current = performance.now();

            const animateIn = (currentTime: number) => {
              const elapsed = currentTime - startTimeRef.current;
              const rawProgress = Math.min(elapsed / 1200, 1);
              const progress = easeInOutCubic(rawProgress);

              setOpacity(progress);

              if (wrapperRef.current && titleRef.current) {
                const translateY = (1 - progress) * 20;
                const clipProgress = progress;
                const clipTop = (1 - clipProgress) * 100;
                
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
                setHasAnimated(true);
                animationFrameRef.current = null;
              }
            };

            animationFrameRef.current = requestAnimationFrame(animateIn);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current);
      }
    };
  }, [hasAnimated, location.pathname]);

  // Reset on route change
  useEffect(() => {
    if (previousPathRef.current !== location.pathname) {
      if (previousPathRef.current) {
        // Route changed - reset for new page
        setIsVisible(false);
        setOpacity(0);
        setHasAnimated(false);
        if (wrapperRef.current && titleRef.current) {
          titleRef.current.style.transform = '';
          wrapperRef.current.style.clipPath = '';
          wrapperRef.current.style.webkitClipPath = '';
        }
      }
      previousPathRef.current = location.pathname;
    }
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
          opacity: isVisible ? opacity : 0,
          transition: isAnimating ? 'none' : 'opacity 0.3s ease',
          willChange: isAnimating ? 'opacity, transform' : 'auto',
        }}
      >
        {children}
      </h1>
    </div>
  );
};

export default AnimatedTitle;

