// Projects data and configuration

export interface ProjectImage {
    src: string;
    alt: string;
    caption?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    shortDescription?: string;
    images: ProjectImage[];
    technologies: string[];
    category: string;
    status: 'completed' | 'in-progress' | 'planned';
    featured: boolean;
    links: {
        demo?: string;
        code?: string;
        details?: string;
    };
    date: string;
    client?: string;
    duration?: string;
}

export const projects: Project[] = [
    {
        id: 'car-rental-system',
        title: 'Car Rental System',
        description:
            'A comprehensive car rental management system built with Laravel and Vue.js. Features include vehicle management, booking system, payment integration, and admin dashboard.',
        shortDescription: 'Full-stack car rental management system',
        images: [
            { src: '/src/assets/images/1.jpg', alt: 'Car Rental Dashboard' },
            { src: '/src/assets/images/2.jpg', alt: 'Vehicle Listing' },
            { src: '/src/assets/images/3.jpg', alt: 'Booking Interface' },
            { src: '/src/assets/images/4.jpg', alt: 'Payment System' },
        ],
        technologies: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap', 'PHP'],
        category: 'Web Application',
        status: 'completed',
        featured: true,
        links: {
            demo: 'https://demo.example.com',
            code: 'https://github.com/example/car-rental',
            details: '#',
        },
        date: '2023-12',
        client: 'Investment Company',
        duration: '3 months',
    },
    {
        id: 'ecommerce-platform',
        title: 'E-commerce Platform',
        description:
            'Modern e-commerce platform with advanced features including product catalog, shopping cart, payment gateway integration, order management, and customer dashboard.',
        shortDescription: 'Full-featured e-commerce solution',
        images: [
            { src: '/src/assets/images/2.jpg', alt: 'E-commerce Homepage' },
            { src: '/src/assets/images/3.jpg', alt: 'Product Catalog' },
            { src: '/src/assets/images/4.jpg', alt: 'Shopping Cart' },
            { src: '/src/assets/images/1.jpg', alt: 'Admin Panel' },
        ],
        technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
        category: 'E-commerce',
        status: 'completed',
        featured: true,
        links: {
            demo: 'https://demo.example.com',
            code: 'https://github.com/example/ecommerce',
            details: '#',
        },
        date: '2023-10',
        duration: '4 months',
    },
    {
        id: 'portfolio-website',
        title: 'Portfolio Website',
        description:
            'Responsive portfolio website built with modern web technologies. Features include project showcase, skills display, contact form, and blog integration.',
        shortDescription: 'Personal portfolio with modern design',
        images: [
            { src: '/src/assets/images/3.jpg', alt: 'Portfolio Homepage' },
            { src: '/src/assets/images/4.jpg', alt: 'Projects Section' },
            { src: '/src/assets/images/1.jpg', alt: 'About Section' },
            { src: '/src/assets/images/2.jpg', alt: 'Contact Form' },
        ],
        technologies: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
        category: 'Portfolio',
        status: 'in-progress',
        featured: true,
        links: {
            demo: 'https://sagorislam.dev',
            code: 'https://github.com/example/portfolio',
            details: '#',
        },
        date: '2024-01',
        duration: '2 months',
    },
    {
        id: 'blog-cms',
        title: 'Blog CMS',
        description:
            'Content Management System for blogging with features like post creation, category management, user roles, and SEO optimization.',
        shortDescription: 'Custom blog content management system',
        images: [
            { src: '/src/assets/images/4.jpg', alt: 'Blog Dashboard' },
            { src: '/src/assets/images/1.jpg', alt: 'Post Editor' },
            { src: '/src/assets/images/2.jpg', alt: 'Category Management' },
            { src: '/src/assets/images/3.jpg', alt: 'User Management' },
        ],
        technologies: ['Laravel', 'PHP', 'MySQL', 'TinyMCE', 'Bootstrap'],
        category: 'CMS',
        status: 'completed',
        featured: false,
        links: {
            demo: 'https://demo.example.com',
            code: 'https://github.com/example/blog-cms',
            details: '#',
        },
        date: '2023-08',
        duration: '2 months',
    },
    {
        id: 'task-management',
        title: 'Task Management App',
        description:
            'Collaborative task management application with team features, project organization, deadline tracking, and progress monitoring.',
        shortDescription: 'Team collaboration and task tracking',
        images: [
            { src: '/src/assets/images/1.jpg', alt: 'Task Dashboard' },
            { src: '/src/assets/images/2.jpg', alt: 'Project Board' },
            { src: '/src/assets/images/3.jpg', alt: 'Team Management' },
            { src: '/src/assets/images/4.jpg', alt: 'Reports' },
        ],
        technologies: [
            'Vue.js',
            'Laravel',
            'MySQL',
            'WebSocket',
            'Tailwind CSS',
        ],
        category: 'Productivity',
        status: 'planned',
        featured: false,
        links: {
            code: 'https://github.com/example/task-management',
            details: '#',
        },
        date: '2024-03',
        duration: '3 months',
    },
    {
        id: 'social-network',
        title: 'Social Networking Site',
        description:
            'Full-featured social networking platform with user profiles, posts, comments, likes, and real-time notifications.',
        shortDescription: 'Social media platform with real-time features',
        images: [
            { src: '/src/assets/images/2.jpg', alt: 'Social Network Feed' },
            { src: '/src/assets/images/3.jpg', alt: 'User Profiles' },
            { src: '/src/assets/images/4.jpg', alt: 'Notifications' },
            { src: '/src/assets/images/1.jpg', alt: 'Messaging' },
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        category: 'Web Application',
        status: 'in-progress',
        featured: false,
        links: {
            demo: 'https://demo.example.com',
            code: 'https://github.com/example/social-network',
        },
        date: '2024-02',
        duration: '4 months',
    },
    {
        id: 'fitness-tracker',
        title: 'Fitness Tracker App',
        description:
            'Mobile application for tracking fitness activities, nutrition, and health metrics. Includes workout logging, meal planning, and progress tracking.',
        shortDescription: 'Mobile app for fitness tracking',
        images: [
            { src: '/src/assets/images/3.jpg', alt: 'Fitness Dashboard' },
            { src: '/src/assets/images/4.jpg', alt: 'Workout Logging' },
            { src: '/src/assets/images/1.jpg', alt: 'Meal Planning' },
            { src: '/src/assets/images/2.jpg', alt: 'Progress Charts' },
        ],
        technologies: ['React Native', 'Expo', 'Firebase'],
        category: 'Mobile Application',
        status: 'planned',
        featured: false,
        links: {
            code: 'https://github.com/example/fitness-tracker',
        },
        date: '2024-01',
        duration: '3 months',
    },
    {
        id: 'real-estate-portal',
        title: 'Real Estate Portal',
        description:
            'Web portal for real estate listings with features like property search, user registration, agent profiles, and property management.',
        shortDescription: 'Real estate listing and management platform',
        images: [
            { src: '/src/assets/images/4.jpg', alt: 'Property Listings' },
            { src: '/src/assets/images/1.jpg', alt: 'Search Filters' },
            { src: '/src/assets/images/2.jpg', alt: 'Agent Profiles' },
            { src: '/src/assets/images/3.jpg', alt: 'Property Details' },
        ],
        technologies: ['Laravel', 'Vue.js', 'MySQL'],
        category: 'Web Application',
        status: 'completed',
        featured: false,
        links: {
            demo: 'https://demo.example.com',
            code: 'https://github.com/example/real-estate-portal',
        },
        date: '2024-04',
        duration: '5 months',
    },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectCategories = [
    'All',
    'Web Application',
    'E-commerce',
    'Portfolio',
    'CMS',
    'Productivity',
];

export default projects;
