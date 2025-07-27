// Experience/Work data

export interface ExperienceItem {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate?: string;
    description: string;
    certificate?: {
        image: string;
        alt: string;
    };
    skills?: string[];
    achievements?: string[];
    current?: boolean;
}

export const experienceData: ExperienceItem[] = [
    {
        id: 'fullstack-developer',
        title: 'Full Stack Developer',
        company: 'Investment Company',
        location: 'Dhaka, Bangladesh',
        startDate: 'Jan 2023',
        endDate: 'Oct 2023',
        description:
            'Worked as a full-stack developer for 10 months with positive reviews. Developed and maintained web applications using Laravel, Vue.js, and modern web technologies.',
        certificate: {
            image: '/assets/images/1.jpg',
            alt: 'Work Experience Certificate',
        },
        skills: [
            'Laravel',
            'Vue.js',
            'PHP',
            'MySQL',
            'JavaScript',
            'RESTful APIs',
        ],
        achievements: [
            'Delivered 5+ major projects on time',
            'Improved application performance by 40%',
            'Mentored junior developers',
            'Received positive client feedback',
        ],
    },
    {
        id: 'freelance-developer',
        title: 'Freelance Web Developer',
        company: 'Self-Employed',
        location: 'Remote',
        startDate: 'Mar 2022',
        endDate: 'Dec 2022',
        description:
            'Worked on various freelance projects, building custom websites and web applications for small to medium businesses.',
        skills: [
            'WordPress',
            'PHP',
            'JavaScript',
            'HTML/CSS',
            'Client Communication',
        ],
        achievements: [
            'Completed 15+ freelance projects',
            'Maintained 5-star rating on platforms',
            'Built long-term client relationships',
        ],
    },
    {
        id: 'web-development-intern',
        title: 'Web Development Intern',
        company: 'Local Tech Company',
        location: 'Dhaka, Bangladesh',
        startDate: 'Jun 2021',
        endDate: 'Feb 2022',
        description:
            'Started my professional journey as a web development intern, learning industry best practices and working on real projects.',
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Team Collaboration'],
        achievements: [
            'Successfully completed internship program',
            'Contributed to 3 major projects',
            'Learned agile development practices',
        ],
    },
];

export default experienceData;
