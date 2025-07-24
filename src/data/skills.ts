export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
  icon?: string;
  description?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'skills',
    label: 'My Skills',
    icon: 'fa-solid fa-code',
    description: 'Core technical skills and expertise',
    skills: [
      'Laravel',
      'PHP', 
      'HTML/CSS',
      'JavaScript',
      'Bootstrap',
      'VueJs',
      'RESTful API(laravel)',
      'MySql',
      'Database Design',
      'Responsive Design'
    ]
  },
  {
    id: 'want-to-work',
    label: 'I Want To Work With',
    icon: 'fa-solid fa-rocket',
    description: 'Technologies I am eager to learn and work with',
    skills: [
      'ReactJs',
      'JavaScript',
      'VueJs',
      'Python',
      'Tailwind CSS',
      'Others database system'
    ]
  },
  {
    id: 'familiars',
    label: 'Familiars',
    icon: 'fa-solid fa-lightbulb',
    description: 'Technologies and tools I am familiar with',
    skills: [
      'Website Design(figma)',
      'UI/UX',
      'Cpanel',
      'SSH',
      'VPS'
    ]
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: 'fa-solid fa-tools',
    description: 'Development tools and software I use regularly',
    skills: [
      'VS Code',
      'Git',
      'GitHub',
      'Postman',
      'Figma',
      'Adobe XD',
      'PhpStorm',
      'MySQL Workbench'
    ]
  }
];

export default skillCategories;