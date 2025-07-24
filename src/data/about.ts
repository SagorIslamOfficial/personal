// About section data and configuration

export interface AboutStats {
  number: string;
  label: string;
  icon?: string;
}

export interface AboutContent {
  sectionLabel: string;
  title: string;
  designation: {
    icon: string;
    text: string;
  };
  description: string;
  stats: AboutStats[];
  ctaButtons: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
}

export const aboutStats: AboutStats[] = [
  {
    number: '10+',
    label: 'Months Experience',
    icon: 'fa-solid fa-briefcase'
  },
  {
    number: '15+',
    label: 'Projects Completed',
    icon: 'fa-solid fa-project-diagram'
  },
  {
    number: '5+',
    label: 'Technologies',
    icon: 'fa-solid fa-code'
  },
  {
    number: '100%',
    label: 'Client Satisfaction',
    icon: 'fa-solid fa-heart'
  }
];

export const aboutContent: AboutContent = {
  sectionLabel: 'About Me',
  title: 'Passionate Full Stack Developer',
  designation: {
    icon: 'fa-solid fa-code',
    text: 'Full Stack Developer'
  },
  description: `I'm a full-stack web developer and business student, having earned a BBA in Accounting from Stamford University Bangladesh. As a non-CSE student and self-learner, developing development skills was challenging, but I succeeded. With positive reviews, I worked for 10 months as a full-stack developer for an investment company. Currently learning VueJs and other essentials, I'm confident that I am one of the candidates who can be hired for your company.`,
  stats: aboutStats,
  ctaButtons: {
    primary: {
      text: 'Download CV',
      href: '#'
    },
    secondary: {
      text: 'Contact Me',
      href: '#getInTouch'
    }
  }
};

export default aboutContent;