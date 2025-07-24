export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export const navigationItems: NavigationItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'articles', label: 'Blog', href: '#articles' },
  { id: 'education&Experience', label: 'History', href: '#education&Experience' },
  { id: 'getInTouch', label: "Let's Talk", href: '#getInTouch' },
];

export const externalLinks = {
  resume: '#', // Will be updated with actual resume link
  logo: '#heroSection'
};

export const sectionIds = [
  'heroSection',
  'about', 
  'projects', 
  'articles', 
  'education&Experience', 
  'getInTouch'
] as const;

export type SectionId = typeof sectionIds[number];