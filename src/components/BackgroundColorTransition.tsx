import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { hexToOklch, oklchToCss, interpolateOklch, colorToHex } from '@/lib/oklch-utils';

// Map routes to their background colors
// For CSS variables, we'll resolve them at runtime
const routeColors: Record<string, string> = {
  '/': 'hsl(var(--secondary))', // Will resolve to actual color
  '/armagh': '#0B1F0A',
  '/bangor': '#E8E8E8',
  '/donegal': '#2D3D42',
  '/ward-ave': '#707B85',
  '/zen': '#7A2B32',
  // NotFound uses muted
  '*': 'hsl(var(--muted))',
};

const BackgroundColorTransition: React.FC = () => {
  const location = useLocation();
  const [currentColor, setCurrentColor] = useState<string>('');
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const startColorRef = useRef<[number, number, number] | null>(null);
  const targetColorRef = useRef<[number, number, number] | null>(null);
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
    // Convert to hex first, then to OKLCH
    const targetColorHex = colorToHex(targetColorValue);
    const targetColorOklch = hexToOklch(targetColorHex);

    // If this is the first render, set immediately
    if (!startColorRef.current) {
      startColorRef.current = targetColorOklch;
      targetColorRef.current = targetColorOklch;
      const cssColor = oklchToCss(targetColorOklch[0], targetColorOklch[1], targetColorOklch[2]);
      setCurrentColor(cssColor);
      document.documentElement.style.setProperty('--page-background', cssColor);
      previousPathRef.current = location.pathname;
      return;
    }

    // If route hasn't changed, don't animate
    if (previousPathRef.current === location.pathname) {
      return;
    }

    // Start animation
    startColorRef.current = targetColorRef.current || targetColorOklch;
    targetColorRef.current = targetColorOklch;
    startTimeRef.current = performance.now();
    previousPathRef.current = location.pathname;

    const duration = 400; // Animation duration in milliseconds

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-in-out)
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      if (startColorRef.current && targetColorRef.current) {
        const [l, c, h] = interpolateOklch(
          startColorRef.current,
          targetColorRef.current,
          eased
        );
        const cssColor = oklchToCss(l, c, h);
        setCurrentColor(cssColor);
        document.documentElement.style.setProperty('--page-background', cssColor);
      }

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Animation complete
        if (targetColorRef.current) {
          const finalColor = oklchToCss(
            targetColorRef.current[0],
            targetColorRef.current[1],
            targetColorRef.current[2]
          );
          setCurrentColor(finalColor);
          document.documentElement.style.setProperty('--page-background', finalColor);
        }
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

  // Apply the color to html element (so it shows through page divs)
  useEffect(() => {
    if (currentColor) {
      document.documentElement.style.backgroundColor = currentColor;
      // Also set on body as fallback
      document.body.style.backgroundColor = currentColor;
    }
  }, [currentColor]);

  return null;
};

export default BackgroundColorTransition;

