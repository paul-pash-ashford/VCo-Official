import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface AnimatedImageProps {
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

// Preload image
const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

const AnimatedImage: React.FC<AnimatedImageProps> = ({ children, className = '' }) => {
  const location = useLocation();
  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState(30);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const imgElementRef = useRef<HTMLImageElement | null>(null);
  const previousPathRef = useRef<string>('');
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const hasStartedRef = useRef<boolean>(false);

  useEffect(() => {
    // Find and preload the image when route changes
    const findAndPreloadImage = async () => {
      // Wait a bit for the ref to be available
      const checkForImage = () => {
        if (imageRef.current) {
          const img = imageRef.current.querySelector('img') as HTMLImageElement;
          if (img) {
            imgElementRef.current = img;
            const src = img.src || img.getAttribute('src') || '';
            if (src) {
              setIsImageLoaded(false);
              // Check if already loaded
              if (img.complete && img.naturalHeight !== 0) {
                setIsImageLoaded(true);
              } else {
                // Preload or wait for natural load
                preloadImage(src)
                  .then(() => {
                setIsImageLoaded(true);
                  })
                  .catch(() => {
                    // If preload fails, wait for image to load naturally
                    img.onload = () => setIsImageLoaded(true);
                    img.onerror = () => setIsImageLoaded(true); // Allow animation even if load fails
                    // If image hasn't started loading, trigger it
                    if (!img.src) {
                      img.src = src;
                    }
                  });
              }
            } else {
              setIsImageLoaded(true);
            }
          } else {
            setIsImageLoaded(true);
          }
        } else {
          // Retry if ref not available yet
          setTimeout(checkForImage, 10);
        }
      };
      
      checkForImage();
    };

    findAndPreloadImage();
  }, [location.pathname, children]);

  useEffect(() => {
    // Check if route changed
    if (previousPathRef.current !== location.pathname) {
      // If we had a previous path, animate out first
      if (previousPathRef.current) {
        startTimeRef.current = performance.now();

        const animateOut = (currentTime: number) => {
          const elapsed = currentTime - startTimeRef.current;
          const rawProgress = Math.min(elapsed / 600, 1); // 600ms fade out
          const progress = easeOutCubic(rawProgress);

          setOpacity(1 - progress);
          setTranslateY(30 - progress * 10); // Slide down slightly

          if (rawProgress < 1) {
            animationFrameRef.current = requestAnimationFrame(animateOut);
          } else {
            // Outro complete, wait for image to load then start intro
            previousPathRef.current = location.pathname;
            
            const startIntro = () => {
              // Wait for image to be loaded before animating in
              const checkAndAnimate = () => {
                if (isImageLoaded) {
                  // Delay to start after intro text finishes animating
                  // Intro text: 150ms delay + 900ms animation = 1050ms total
                  setTimeout(() => {
                    startTimeRef.current = performance.now();

                    const animateIn = (currentTime: number) => {
                      const elapsed = currentTime - startTimeRef.current;
                      const rawProgress = Math.min(elapsed / 900, 1); // 900ms fade in
                      const progress = easeInOutCubic(rawProgress);

                      setOpacity(progress);
                      setTranslateY(30 - progress * 30); // Start 30px below, slide up to 0

                      if (rawProgress < 1) {
                        animationFrameRef.current = requestAnimationFrame(animateIn);
                      } else {
                        animationFrameRef.current = null;
                      }
                    };

                    animationFrameRef.current = requestAnimationFrame(animateIn);
                  }, 1050);
                } else {
                  // Check again in a short while
                  setTimeout(checkAndAnimate, 50);
                }
              };
              checkAndAnimate();
            };
            
            startIntro();
          }
        };

        animationFrameRef.current = requestAnimationFrame(animateOut);
      } else {
        // First render - wait for image to load AND intro text to finish, then fade in and slide up
        previousPathRef.current = location.pathname;
        hasStartedRef.current = false;
        
        const startIntro = () => {
          // Wait for image to be loaded before animating in
          const checkAndAnimate = () => {
            if (isImageLoaded && !hasStartedRef.current) {
              hasStartedRef.current = true;
              startTimeRef.current = performance.now();

              const animateIn = (currentTime: number) => {
                const elapsed = currentTime - startTimeRef.current;
                const rawProgress = Math.min(elapsed / 900, 1); // 900ms fade in
                const progress = easeInOutCubic(rawProgress);

                setOpacity(progress);
                setTranslateY(30 - progress * 30); // Start 30px below, slide up to 0

                if (rawProgress < 1) {
                  animationFrameRef.current = requestAnimationFrame(animateIn);
                } else {
                  animationFrameRef.current = null;
                }
              };

              // Delay to start after intro text finishes animating
              // Intro text: 400ms delay + 900ms animation = 1300ms total
              setTimeout(() => {
                animationFrameRef.current = requestAnimationFrame(animateIn);
              }, 1300);
            } else if (!hasStartedRef.current) {
              // Check again in a short while
              setTimeout(checkAndAnimate, 50);
            }
          };
          
          // Start checking
          checkAndAnimate();
          
          // Fallback: start animation after max wait time even if image not loaded
          setTimeout(() => {
            if (!hasStartedRef.current) {
              hasStartedRef.current = true;
              setIsImageLoaded(true); // Force it to be considered loaded
              startTimeRef.current = performance.now();

              const animateIn = (currentTime: number) => {
                const elapsed = currentTime - startTimeRef.current;
                const rawProgress = Math.min(elapsed / 900, 1);
                const progress = easeInOutCubic(rawProgress);

                setOpacity(progress);
                setTranslateY(30 - progress * 30);

                if (rawProgress < 1) {
                  animationFrameRef.current = requestAnimationFrame(animateIn);
                } else {
                  animationFrameRef.current = null;
                }
              };

              setTimeout(() => {
                animationFrameRef.current = requestAnimationFrame(animateIn);
              }, 1300);
            }
          }, 2000); // Max 2 second wait
        };
        
        startIntro();
      }
    }

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [location.pathname, isImageLoaded]);

  return (
    <div
      ref={imageRef}
      className={className}
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedImage;

