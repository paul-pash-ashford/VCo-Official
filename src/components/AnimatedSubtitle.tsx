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
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const previousPathRef = useRef<string>('');
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    // Check if route changed
    if (previousPathRef.current !== location.pathname) {
      // If we had a previous path, animate out first
      if (previousPathRef.current) {
        startTimeRef.current = performance.now();

        const animateOut = (currentTime: number) => {
          const elapsed = currentTime - startTimeRef.current;
          const rawProgress = Math.min(elapsed / 600, 1); // 600ms fade out (1.5x longer)
          const progress = easeOutCubic(rawProgress);

          setOpacity(1 - progress);
          setTranslateY(-15 + progress * 5); // Slide up slightly as it fades out

          if (rawProgress < 1) {
            animationFrameRef.current = requestAnimationFrame(animateOut);
          } else {
            // Outro complete, wait a moment then start intro
            previousPathRef.current = location.pathname;
            // Small delay to ensure old content is fully gone
            setTimeout(() => {
              startTimeRef.current = performance.now();

              const animateIn = (currentTime: number) => {
                const elapsed = currentTime - startTimeRef.current;
                const rawProgress = Math.min(elapsed / 900, 1); // 900ms fade in (1.5x longer)
                const progress = easeInOutCubic(rawProgress);

                setOpacity(progress);
                setTranslateY((1 - progress) * -15); // Start 15px above, slide down to 0

                if (rawProgress < 1) {
                  animationFrameRef.current = requestAnimationFrame(animateIn);
                } else {
                  animationFrameRef.current = null;
                }
              };

              animationFrameRef.current = requestAnimationFrame(animateIn);
            }, 150); // Delay to ensure clean transition
          }
        };

        animationFrameRef.current = requestAnimationFrame(animateOut);
      } else {
        // First render - fade in and slide up
        previousPathRef.current = location.pathname;
        startTimeRef.current = performance.now();

        const animateIn = (currentTime: number) => {
          const elapsed = currentTime - startTimeRef.current;
          const rawProgress = Math.min(elapsed / 900, 1); // 900ms fade in (1.5x longer)
          const progress = easeInOutCubic(rawProgress);

          setOpacity(progress);
          setTranslateY((1 - progress) * -15); // Start 15px above, slide down to 0

          if (rawProgress < 1) {
            animationFrameRef.current = requestAnimationFrame(animateIn);
          } else {
            animationFrameRef.current = null;
          }
        };

        // Delay before fade in to match title animation timing
        setTimeout(() => {
          animationFrameRef.current = requestAnimationFrame(animateIn);
        }, 500);
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

