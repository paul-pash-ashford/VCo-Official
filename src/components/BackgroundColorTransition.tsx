import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { colorToHex, hexToOklch, interpolateOklch, oklchToCss } from '@/lib/oklch-utils';

// Map routes to their background colors
// For CSS variables, we'll resolve them at runtime
const routeColors: Record<string, string> = {
  '/': 'hsl(var(--secondary))', // Index page - will resolve to actual color
  '/about': 'hsl(var(--secondary))', // About page - will resolve to actual color
  '/dublin': 'hsl(var(--secondary))', // Dublin page - will resolve to actual color
  '/armagh': '#173C2C',
  '/bangor': '#E8E8E8',
  '/donegal': '#1C4950',
  '/ward-ave': '#1E1A17',
  '/zen': '#A80A17',
  // NotFound uses muted
  '*': 'hsl(var(--muted))',
};

const BackgroundColorTransition: React.FC = () => {
  const location = useLocation();
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const previousPathRef = useRef<string>('');
  const previousColorRef = useRef<string>('');

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
      document.documentElement.style.backgroundColor = targetColorHex;
      document.body.style.backgroundColor = targetColorHex;
      previousPathRef.current = location.pathname;
      previousColorRef.current = targetColorHex;
      return;
    }

    // If route hasn't changed, don't animate
    if (previousPathRef.current === location.pathname) {
      return;
    }

    // Convert current and target colors to OKLCH
    const startColorHex = previousColorRef.current || targetColorHex;
    const startOklch = hexToOklch(startColorHex);
    const targetOklch = hexToOklch(targetColorHex);

    // Start animation
    startTimeRef.current = performance.now();
    previousPathRef.current = location.pathname;

    const duration = 800; // Animation duration in milliseconds

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-in-out)
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      // Interpolate between start and target colors in OKLCH space
      const [l, c, h] = interpolateOklch(startOklch, targetOklch, eased);
      const interpolatedColor = oklchToCss(l, c, h);

      // Apply interpolated color directly to background
      document.documentElement.style.backgroundColor = interpolatedColor;
      document.body.style.backgroundColor = interpolatedColor;

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Animation complete - set final color
        previousColorRef.current = targetColorHex;
        document.documentElement.style.backgroundColor = targetColorHex;
        document.body.style.backgroundColor = targetColorHex;
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

  return null;
};

export default BackgroundColorTransition;

