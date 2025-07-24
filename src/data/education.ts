// Education and Experience data

export interface TimelineItem {
    id: string;
    title: string;
    institution: string;
    location: string;
    startDate: string;
    endDate?: string;
    description: string;
    type: 'education' | 'experience';
    certificate?: {
        image: string;
        alt: string;
    };
    skills?: string[];
    achievements?: string[];
    current?: boolean;
}

export const educationData: TimelineItem[] = [
    {
        id: 'programming-learning',
        title: 'How I Learned/Learning Programming',
        institution: 'Nano IT World & Self-taught',
        location: 'Panthapath, Dhaka-1205',
        startDate: '2015',
        description:
            "It's a long story, which I'll describe here briefly soon. Started my programming journey through self-learning and professional training.",
        type: 'education',
        certificate: {
            image: '/assets/images/1.jpg',
            alt: 'Programming Certificate',
        },
        skills: ['Self-learning', 'Problem Solving', 'Web Development'],
        current: true,
    },
    {
        id: 'bba-accounting',
        title: 'BBA in Accounting',
        institution: 'Stamford University Bangladesh',
        location: 'Dhaka, Bangladesh',
        startDate: 'April 2015',
        endDate: 'Dec 2021',
        description:
            "I've completed my BBA in Accounting at Stamford University Bangladesh. This business background helps me understand client needs and project management.",
        type: 'education',
        certificate: {
            image: '/assets/images/2.jpg',
            alt: 'BBA Degree Certificate',
        },
        skills: [
            'Business Analysis',
            'Financial Management',
            'Project Management',
        ],
        achievements: [
            'Graduated with distinction',
            'Business case study winner',
        ],
    },
    {
        id: 'hsc',
        title: 'Higher Secondary School (HSC)',
        institution: 'Rajbari Govt. College',
        location: 'Rajbari',
        startDate: 'April 2012',
        endDate: 'April 2014',
        description:
            'Completed Higher Secondary education with focus on business studies, laying the foundation for my business understanding.',
        type: 'education',
        certificate: {
            image: '/assets/images/3.jpg',
            alt: 'HSC Certificate',
        },
        skills: ['Business Studies', 'Mathematics', 'Economics'],
    },
    {
        id: 'ssc',
        title: 'Secondary School Certificate (SSC)',
        institution: 'Baharpur High School',
        location: 'Baharpur, Baliakandi, Rajbari',
        startDate: 'Batch of 2011',
        description:
            'Every first journey is hard to get success, and I\'ve completed my secondary education at "Baharpur High School" in Rajbari district with business studies. Now, I\'m using my business-related knowledge to generate new concepts to build new features for applications.',
        type: 'education',
        certificate: {
            image: '/assets/images/4.jpg',
            alt: 'SSC Certificate',
        },
        skills: ['Business Studies', 'Foundation Learning'],
    },
];

export const experienceData: TimelineItem[] = [
    {
        id: 'fullstack-developer',
        title: 'Full Stack Developer',
        institution: 'Investment Company',
        location: 'Dhaka, Bangladesh',
        startDate: 'Jan 2023',
        endDate: 'Oct 2023',
        description:
            'Worked as a full-stack developer for 10 months with positive reviews. Developed and maintained web applications using Laravel, Vue.js, and modern web technologies.',
        type: 'experience',
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
        institution: 'Self-Employed',
        location: 'Remote',
        startDate: 'Mar 2022',
        endDate: 'Dec 2022',
        description:
            'Worked on various freelance projects, building custom websites and web applications for small to medium businesses.',
        type: 'experience',
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
        institution: 'Local Tech Company',
        location: 'Dhaka, Bangladesh',
        startDate: 'Jun 2021',
        endDate: 'Feb 2022',
        description:
            'Started my professional journey as a web development intern, learning industry best practices and working on real projects.',
        type: 'experience',
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Team Collaboration'],
        achievements: [
            'Successfully completed internship program',
            'Contributed to 3 major projects',
            'Learned agile development practices',
        ],
    },
];

export const allTimelineData = [...experienceData, ...educationData].sort(
    (a, b) => {
        // Sort by start date, most recent first
        const dateA = new Date(a.startDate).getTime();
        const dateB = new Date(b.startDate).getTime();
        return dateB - dateA;
    }
);

export default { educationData, experienceData, allTimelineData };
