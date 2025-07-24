import { useEffect, useRef } from 'react';
import TypeIt from 'typeit';

interface UseTypeItOptions {
  strings: string[];
  speed?: number;
  deleteSpeed?: number;
  lifeLike?: boolean;
  cursor?: boolean;
  cursorChar?: string;
  cursorSpeed?: number;
  startDelay?: number;
  nextStringDelay?: number;
  loop?: boolean;
  loopDelay?: number;
  waitUntilVisible?: boolean;
  onComplete?: () => void;
  onError?: (error: Error) => void;
}

export const useTypeIt = (options: UseTypeItOptions) => {
  const elementRef = useRef<HTMLElement>(null);
  const instanceRef = useRef<TypeIt | null>(null);

  useEffect(() => {
    const initTypeIt = () => {
      if (elementRef.current && !instanceRef.current) {
        try {
          instanceRef.current = new TypeIt(elementRef.current, {
            strings: options.strings,
            speed: options.speed ?? 75,
            deleteSpeed: options.deleteSpeed ?? 50,
            lifeLike: options.lifeLike ?? true,
            cursor: options.cursor ?? true,
            cursorChar: options.cursorChar ?? '|',
            cursorSpeed: options.cursorSpeed ?? 1000,
            breakLines: false,
            startDelay: options.startDelay ?? 1500,
            nextStringDelay: options.nextStringDelay ?? 2000,
            loop: options.loop ?? true,
            loopDelay: options.loopDelay ?? 3000,
            html: false,
            waitUntilVisible: options.waitUntilVisible ?? true,
            afterComplete: () => {
              options.onComplete?.();
            }
          }).go();
        } catch (error) {
          console.error('Failed to initialize TypeIt:', error);
          options.onError?.(error as Error);
          
          // Fallback: show first string as static text
          if (elementRef.current && options.strings.length > 0) {
            elementRef.current.textContent = options.strings[0];
          }
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initTypeIt, 100);

    return () => {
      clearTimeout(timer);
      if (instanceRef.current) {
        try {
          instanceRef.current.destroy();
        } catch (error) {
          console.warn('Error destroying TypeIt instance:', error);
        }
        instanceRef.current = null;
      }
    };
  }, [options]);

  // Return methods to control the animation
  const controls = {
    pause: () => instanceRef.current?.pause(1000),
    start: () => instanceRef.current?.go(),
    destroy: () => {
      if (instanceRef.current) {
        instanceRef.current.destroy();
        instanceRef.current = null;
      }
    }
  };

  return { elementRef, controls };
};

export default useTypeIt;