import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface AnimatedSubtitleProps {
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

const AnimatedSubtitle: React.FC<AnimatedSubtitleProps> = ({ children, className = '' }) => {
  const location = useLocation();
  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState(-15);
  const [hasAnimated, setHasAnimated] = useState(false);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const previousPathRef = useRef<string>('');
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated && previousPathRef.current === location.pathname) {
            startTimeRef.current = performance.now();

            const animateIn = (currentTime: number) => {
              const elapsed = currentTime - startTimeRef.current;
              const rawProgress = Math.min(elapsed / 900, 1);
              const progress = easeInOutCubic(rawProgress);

              setOpacity(progress);
              setTranslateY((1 - progress) * -15);

              if (rawProgress < 1) {
                animationFrameRef.current = requestAnimationFrame(animateIn);
              } else {
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

    if (subtitleRef.current) {
      observer.observe(subtitleRef.current);
    }

    return () => {
      if (subtitleRef.current) {
        observer.unobserve(subtitleRef.current);
      }
    };
  }, [hasAnimated, location.pathname]);

  // Reset on route change
  useEffect(() => {
    if (previousPathRef.current !== location.pathname) {
      if (previousPathRef.current) {
        setOpacity(0);
        setTranslateY(-15);
        setHasAnimated(false);
      }
      previousPathRef.current = location.pathname;
    }
  }, [location.pathname]);

  return (
    <p
      ref={subtitleRef}
      className={className}
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </p>
  );
};

export default AnimatedSubtitle;

