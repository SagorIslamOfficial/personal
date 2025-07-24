// Type declarations for particles.js
declare module 'particles.js' {
  const particlesJS: any;
  export default particlesJS;
}

// Type declarations for typeit
declare module 'typeit' {
  interface TypeItOptions {
    strings?: string | string[];
    speed?: number;
    deleteSpeed?: number;
    lifeLike?: boolean;
    cursor?: boolean;
    cursorChar?: string;
    cursorSpeed?: number;
    breakLines?: boolean;
    startDelay?: number;
    startDelete?: boolean;
    nextStringDelay?: number;
    loop?: boolean;
    loopDelay?: number;
    html?: boolean;
    waitUntilVisible?: boolean;
    beforeString?: (step: any, queue: any) => void;
    afterString?: (step: any, queue: any) => void;
    beforeStep?: (step: any, queue: any) => void;
    afterStep?: (step: any, queue: any) => void;
    afterComplete?: (instance: any) => void;
  }

  class TypeIt {
    constructor(element: string | Element, options?: TypeItOptions);
    type(string: string): TypeIt;
    delete(count?: number): TypeIt;
    pause(delay: number): TypeIt;
    break(): TypeIt;
    go(): TypeIt;
    destroy(): void;
    reset(): TypeIt;
    is(status: string): boolean;
    speed(speed: number): TypeIt;
    options(options: Partial<TypeItOptions>): TypeIt;
  }

  export default TypeIt;
}

declare global {
  interface Window {
    particlesJS: (tagId: string, config: any) => void;
    pJSDom: any[];
  }
}

export {};