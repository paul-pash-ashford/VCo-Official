import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface AnimatedBackgroundImageProps {
  src: string;
  children: React.ReactNode;
}

// Gentle easing function (ease-in-out-cubic)
const easeInOutCubic = (t: number): number => {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

// Preload image
const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

const AnimatedBackgroundImage: React.FC<AnimatedBackgroundImageProps> = ({ src, children }) => {
  const location = useLocation();
  const [opacity, setOpacity] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const previousPathRef = useRef<string>('');

  useEffect(() => {
    // Only animate on the home page
    if (location.pathname !== '/') {
      if (previousPathRef.current === '/') {
        // Fade out when leaving home page
        const fadeOut = () => {
          setOpacity(0);
        };
        fadeOut();
      }
      previousPathRef.current = location.pathname;
      return;
    }

    // Preload and animate image
    const loadAndAnimate = async () => {
      try {
        await preloadImage(src);
        setIsImageLoaded(true);
      } catch {
        setIsImageLoaded(true); // Allow animation even if preload fails
      }
    };

    if (previousPathRef.current !== '/') {
      loadAndAnimate();
    }
    previousPathRef.current = location.pathname;
  }, [src, location.pathname]);

  useEffect(() => {
    // Only animate on the home page
    if (location.pathname !== '/' || !isImageLoaded) {
      return;
    }

    startTimeRef.current = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTimeRef.current;
      const rawProgress = Math.min(elapsed / 1500, 1); // 1500ms to match color transition
      const progress = easeInOutCubic(rawProgress);

      setOpacity(progress);

      if (rawProgress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        animationFrameRef.current = null;
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isImageLoaded, location.pathname]);

  if (location.pathname !== '/') {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity,
        transition: 'opacity 0.3s ease',
        zIndex: 0,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedBackgroundImage;

