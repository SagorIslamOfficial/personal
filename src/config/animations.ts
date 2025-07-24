// TypeIt Animation Configurations

export interface TypeItConfig {
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
}

// Hero section typing animation
export const heroTypeItConfig: TypeItConfig = {
  strings: [
    'A Full Stack Developer',
    'A Laravel Expert', 
    'A Vue.js Enthusiast',
    'A Problem Solver',
    'A Creative Thinker'
  ],
  speed: 75,
  deleteSpeed: 50,
  lifeLike: true,
  cursor: true,
  cursorChar: '|',
  cursorSpeed: 1000,
  startDelay: 1500,
  nextStringDelay: 2000,
  loop: true,
  loopDelay: 3000,
  waitUntilVisible: true
};

// Alternative configurations for different sections
export const aboutTypeItConfig: TypeItConfig = {
  strings: [
    'Passionate Developer',
    'Problem Solver',
    'Team Player'
  ],
  speed: 100,
  deleteSpeed: 75,
  lifeLike: true,
  cursor: false,
  startDelay: 1000,
  nextStringDelay: 1500,
  loop: false,
  waitUntilVisible: true
};

// Fast typing for smaller elements
export const quickTypeItConfig: TypeItConfig = {
  strings: ['Welcome!'],
  speed: 50,
  lifeLike: false,
  cursor: true,
  cursorChar: '_',
  startDelay: 500,
  loop: false,
  waitUntilVisible: true
};

export default {
  hero: heroTypeItConfig,
  about: aboutTypeItConfig,
  quick: quickTypeItConfig
};