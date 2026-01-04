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
  const checkImageTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const retryCountRef = useRef<number>(0);
  const animationTimeoutsRef = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());
  const isImageLoadedRef = useRef<boolean>(false);

  useEffect(() => {
    // Reset retry count and image loaded state on route change
    retryCountRef.current = 0;
    isImageLoadedRef.current = false;
    
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
              isImageLoadedRef.current = false;
              // Check if already loaded
              if (img.complete && img.naturalHeight !== 0) {
                setIsImageLoaded(true);
                isImageLoadedRef.current = true;
              } else {
                // Preload or wait for natural load
                preloadImage(src)
                  .then(() => {
                    setIsImageLoaded(true);
                    isImageLoadedRef.current = true;
                  })
                  .catch(() => {
                    // If preload fails, wait for image to load naturally
                    img.onload = () => {
                      setIsImageLoaded(true);
                      isImageLoadedRef.current = true;
                    };
                    img.onerror = () => {
                      setIsImageLoaded(true);
                      isImageLoadedRef.current = true;
                    }; // Allow animation even if load fails
                    // If image hasn't started loading, trigger it
                    if (!img.src) {
                      img.src = src;
                    }
                  });
              }
            } else {
              setIsImageLoaded(true);
              isImageLoadedRef.current = true;
            }
          } else {
            setIsImageLoaded(true);
            isImageLoadedRef.current = true;
          }
          // Clear timeout ref since we found the image or gave up
          checkImageTimeoutRef.current = null;
        } else {
          // Safety check: prevent infinite loops (max 100 retries = 1 second)
          if (retryCountRef.current < 100) {
            retryCountRef.current++;
            // Retry if ref not available yet
            checkImageTimeoutRef.current = setTimeout(checkForImage, 10);
          } else {
            // Max retries reached, assume no image will be found
            setIsImageLoaded(true);
            isImageLoadedRef.current = true;
            checkImageTimeoutRef.current = null;
          }
        }
      };
      
      checkForImage();
    };

    findAndPreloadImage();
    
    // Cleanup function to cancel any pending timeouts
    return () => {
      if (checkImageTimeoutRef.current !== null) {
        clearTimeout(checkImageTimeoutRef.current);
        checkImageTimeoutRef.current = null;
      }
    };
  }, [location.pathname]);

  useEffect(() => {
    // Clear all previous timeouts
    animationTimeoutsRef.current.forEach(timeoutId => clearTimeout(timeoutId));
    animationTimeoutsRef.current.clear();
    
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
              // Wait for image to be loaded before animating in, timing to match text completion
              const checkAndAnimate = () => {
                if (isImageLoadedRef.current) {
                  // Time to start just as text finishes: subtitle (150ms delay + 900ms animation) = 1050ms
                  const timeoutId = setTimeout(() => {
                    animationTimeoutsRef.current.delete(timeoutId);
                    startTimeRef.current = performance.now();

                    const animateIn = (currentTime: number) => {
                      const elapsed = currentTime - startTimeRef.current;
                      const rawProgressOpacity = Math.min(elapsed / 300, 1); // 600ms fade in (quicker)
                      const rawProgressTranslate = Math.min(elapsed / 600, 1); // 900ms slide (unchanged)
                      const progressOpacity = easeInOutCubic(rawProgressOpacity);
                      const progressTranslate = easeInOutCubic(rawProgressTranslate);

                      setOpacity(progressOpacity);
                      setTranslateY(30 - progressTranslate * 30); // Start 30px below, slide up to 0

                      if (rawProgressTranslate < 1) {
                        animationFrameRef.current = requestAnimationFrame(animateIn);
                      } else {
                        animationFrameRef.current = null;
                      }
                    };

                    animationFrameRef.current = requestAnimationFrame(animateIn);
                  }, 1050);
                  animationTimeoutsRef.current.add(timeoutId);
                } else {
                  // Check again in a short while
                  const timeoutId = setTimeout(() => {
                    animationTimeoutsRef.current.delete(timeoutId);
                    checkAndAnimate();
                  }, 50);
                  animationTimeoutsRef.current.add(timeoutId);
                }
              };
              checkAndAnimate();
            };
            
            startIntro();
          }
        };

        animationFrameRef.current = requestAnimationFrame(animateOut);
      } else {
        // First render - wait for image to load, then animate in just as text finishes
        // Text timing: subtitle finishes at 500ms delay + 900ms animation = 1400ms
        previousPathRef.current = location.pathname;
        hasStartedRef.current = false;
        
        const startIntro = () => {
          // Wait for image to be loaded before animating in
          const checkAndAnimate = () => {
            if (isImageLoadedRef.current && !hasStartedRef.current) {
              hasStartedRef.current = true;

              const animateIn = (currentTime: number) => {
                const elapsed = currentTime - startTimeRef.current;
                const rawProgressOpacity = Math.min(elapsed / 300, 1); // 600ms fade in (quicker)
                const rawProgressTranslate = Math.min(elapsed / 600, 1); // 900ms slide (unchanged)
                const progressOpacity = easeInOutCubic(rawProgressOpacity);
                const progressTranslate = easeInOutCubic(rawProgressTranslate);

                setOpacity(progressOpacity);
                setTranslateY(30 - progressTranslate * 30); // Start 30px below, slide up to 0

                if (rawProgressTranslate < 1) {
                  animationFrameRef.current = requestAnimationFrame(animateIn);
                } else {
                  animationFrameRef.current = null;
                }
              };

              // Start just as text finishes: subtitle (500ms delay + 900ms) = 1400ms
              const timeoutId = setTimeout(() => {
                animationTimeoutsRef.current.delete(timeoutId);
                startTimeRef.current = performance.now();
                animationFrameRef.current = requestAnimationFrame(animateIn);
              }, 1400);
              animationTimeoutsRef.current.add(timeoutId);
            } else if (!hasStartedRef.current) {
              // Check again in a short while
              const timeoutId = setTimeout(() => {
                animationTimeoutsRef.current.delete(timeoutId);
                checkAndAnimate();
              }, 50);
              animationTimeoutsRef.current.add(timeoutId);
            }
          };
          
          // Start checking
          checkAndAnimate();
          
          // Fallback: start animation after max wait time even if image not loaded
          const fallbackTimeoutId = setTimeout(() => {
            animationTimeoutsRef.current.delete(fallbackTimeoutId);
              if (!hasStartedRef.current) {
              hasStartedRef.current = true;
              setIsImageLoaded(true); // Force it to be considered loaded
              isImageLoadedRef.current = true;

              const animateIn = (currentTime: number) => {
                const elapsed = currentTime - startTimeRef.current;
                const rawProgressOpacity = Math.min(elapsed / 600, 1); // 600ms fade in (quicker)
                const rawProgressTranslate = Math.min(elapsed / 900, 1); // 900ms slide (unchanged)
                const progressOpacity = easeInOutCubic(rawProgressOpacity);
                const progressTranslate = easeInOutCubic(rawProgressTranslate);

                setOpacity(progressOpacity);
                setTranslateY(30 - progressTranslate * 30);

                if (rawProgressTranslate < 1) {
                  animationFrameRef.current = requestAnimationFrame(animateIn);
                } else {
                  animationFrameRef.current = null;
                }
              };

              const innerTimeoutId = setTimeout(() => {
                animationTimeoutsRef.current.delete(innerTimeoutId);
                startTimeRef.current = performance.now();
                animationFrameRef.current = requestAnimationFrame(animateIn);
              }, 1400);
              animationTimeoutsRef.current.add(innerTimeoutId);
            }
          }, 2000); // Max 2 second wait
          animationTimeoutsRef.current.add(fallbackTimeoutId);
        };
        
        startIntro();
      }
    }

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      // Clear all pending timeouts
      animationTimeoutsRef.current.forEach(timeoutId => clearTimeout(timeoutId));
      animationTimeoutsRef.current.clear();
    };
  }, [location.pathname]);

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

