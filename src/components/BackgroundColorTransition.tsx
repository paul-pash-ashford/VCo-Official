import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { colorToHex } from '@/lib/oklch-utils';

// Map routes to their background colors
// For CSS variables, we'll resolve them at runtime
const routeColors: Record<string, string> = {
  '/': 'hsl(var(--secondary))', // Will resolve to actual color
  '/armagh': '#1E371C',
  '/bangor': '#E8E8E8',
  '/donegal': '#2D3D42',
  '/ward-ave': '#707B85',
  '/zen': '#7A2B32',
  // NotFound uses muted
  '*': 'hsl(var(--muted))',
};

// Random directions for the swipe effect
type SwipeDirection = 'left' | 'right' | 'top' | 'bottom' | 'diagonal-tl' | 'diagonal-tr' | 'diagonal-bl' | 'diagonal-br';

const getRandomDirection = (): SwipeDirection => {
  const directions: SwipeDirection[] = ['left', 'right', 'top', 'bottom', 'diagonal-tl', 'diagonal-tr', 'diagonal-bl', 'diagonal-br'];
  return directions[Math.floor(Math.random() * directions.length)];
};

const BackgroundColorTransition: React.FC = () => {
  const location = useLocation();
  const [currentColor, setCurrentColor] = useState<string>('');
  const [overlayProgress, setOverlayProgress] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [direction, setDirection] = useState<SwipeDirection>('right');
  const [targetColor, setTargetColor] = useState<string>('');
  const overlayRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const previousPathRef = useRef<string>('');

  useEffect(() => {
    // Get the target color for the current route
    const getRouteColor = (pathname: string): string => {
      // Check exact match first
      if (routeColors[pathname]) {
        return routeColors[pathname];
      }
      // Fallback to default
      return routeColors['/'] || 'hsl(var(--secondary))';
    };

    const targetColorValue = getRouteColor(location.pathname);
    const targetColorHex = colorToHex(targetColorValue);

    // If this is the first render, set immediately
    if (!previousPathRef.current) {
      setCurrentColor(targetColorHex);
      document.documentElement.style.backgroundColor = targetColorHex;
      document.body.style.backgroundColor = targetColorHex;
      previousPathRef.current = location.pathname;
      return;
    }

    // If route hasn't changed, don't animate
    if (previousPathRef.current === location.pathname) {
      return;
    }

    // Start swipe animation
    const newDirection = getRandomDirection();
    setDirection(newDirection);
    setTargetColor(targetColorHex);
    setIsAnimating(true);
    setOverlayProgress(0);
    startTimeRef.current = performance.now();
    previousPathRef.current = location.pathname;

    const duration = 1500; // Animation duration in milliseconds

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-in-out)
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      setOverlayProgress(eased);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Animation complete - set final color and hide overlay
        setCurrentColor(targetColorHex);
        document.documentElement.style.backgroundColor = targetColorHex;
        document.body.style.backgroundColor = targetColorHex;
        setIsAnimating(false);
        setOverlayProgress(0);
        animationFrameRef.current = null;
      }
    };

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [location.pathname]);

  // Get mask gradient based on direction for the swipe effect
  const getMaskGradient = (progress: number): string => {
    const blurSize = 15; // Blur amount for the swipe edge (percentage)
    const gradientStop = progress * 100;
    
    switch (direction) {
      case 'left':
        return `linear-gradient(to right, black ${gradientStop - blurSize}%, rgba(0,0,0,0.3) ${gradientStop}%, transparent ${gradientStop + blurSize}%)`;
      case 'right':
        return `linear-gradient(to left, black ${gradientStop - blurSize}%, rgba(0,0,0,0.3) ${gradientStop}%, transparent ${gradientStop + blurSize}%)`;
      case 'top':
        return `linear-gradient(to bottom, black ${gradientStop - blurSize}%, rgba(0,0,0,0.3) ${gradientStop}%, transparent ${gradientStop + blurSize}%)`;
      case 'bottom':
        return `linear-gradient(to top, black ${gradientStop - blurSize}%, rgba(0,0,0,0.3) ${gradientStop}%, transparent ${gradientStop + blurSize}%)`;
      case 'diagonal-tl':
        return `linear-gradient(135deg, black ${gradientStop - blurSize}%, rgba(0,0,0,0.3) ${gradientStop}%, transparent ${gradientStop + blurSize}%)`;
      case 'diagonal-tr':
        return `linear-gradient(225deg, black ${gradientStop - blurSize}%, rgba(0,0,0,0.3) ${gradientStop}%, transparent ${gradientStop + blurSize}%)`;
      case 'diagonal-bl':
        return `linear-gradient(45deg, black ${gradientStop - blurSize}%, rgba(0,0,0,0.3) ${gradientStop}%, transparent ${gradientStop + blurSize}%)`;
      case 'diagonal-br':
        return `linear-gradient(315deg, black ${gradientStop - blurSize}%, rgba(0,0,0,0.3) ${gradientStop}%, transparent ${gradientStop + blurSize}%)`;
      default:
        return `linear-gradient(to right, black ${gradientStop - blurSize}%, rgba(0,0,0,0.3) ${gradientStop}%, transparent ${gradientStop + blurSize}%)`;
    }
  };

  // Apply the base color to html/body
  useEffect(() => {
    if (currentColor) {
      document.documentElement.style.backgroundColor = currentColor;
      document.body.style.backgroundColor = currentColor;
    }
  }, [currentColor]);

  return (
    <>
      {isAnimating && targetColor && (
        <div
          ref={overlayRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: targetColor,
            maskImage: getMaskGradient(overlayProgress),
            WebkitMaskImage: getMaskGradient(overlayProgress),
            maskSize: '100% 100%',
            WebkitMaskSize: '100% 100%',
            pointerEvents: 'none',
            zIndex: 9999,
            filter: 'blur(12px)',
          }}
        />
      )}
    </>
  );
};

export default BackgroundColorTransition;

