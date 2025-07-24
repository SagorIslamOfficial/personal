// Hero section data and configuration

export interface HeroSkill {
  name: string;
  tooltip?: string;
  category?: 'frontend' | 'backend' | 'database' | 'framework' | 'cms';
}

export const heroSkills: HeroSkill[] = [
  { 
    name: 'Full Stack Developer', 
    tooltip: 'Full Stack Web Development',
    category: 'frontend'
  },
  { 
    name: 'Laravel', 
    tooltip: 'Laravel PHP Framework',
    category: 'framework'
  },
  { 
    name: 'WordPress', 
    tooltip: 'WordPress CMS Development',
    category: 'cms'
  },
  { 
    name: 'PHP', 
    tooltip: 'PHP Programming Language',
    category: 'backend'
  },
  { 
    name: 'VueJs', 
    tooltip: 'Vue.js Frontend Framework',
    category: 'frontend'
  },
  { 
    name: 'MySql', 
    tooltip: 'MySQL Database Management',
    category: 'database'
  }
];

export interface HeroContent {
  greeting: string;
  name: string;
  typingStrings: string[];
  skills: HeroSkill[];
  buttons: {
    contact: {
      text: string;
      href: string;
    };
    about: {
      text: string;
      href: string;
    };
  };
}

export const heroContent: HeroContent = {
  greeting: "Hello, I'm",
  name: "Muhammad Alamin Islam",
  typingStrings: [
    'A Full Stack Developer',
    'A Laravel Expert', 
    'A Vue.js Enthusiast',
    'A Problem Solver',
    'A Creative Thinker'
  ],
  skills: heroSkills,
  buttons: {
    contact: {
      text: 'CONTACT',
      href: '#getInTouch'
    },
    about: {
      text: 'ABOUT US',
      href: '#about'
    }
  }
};

export default heroContent;