// Education data

export interface EducationItem {
    id: string;
    title: string;
    institution: string;
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

export const educationData: EducationItem[] = [
    {
        id: 'programming-learning',
        title: 'How I Learned/Learning Programming',
        institution: 'Nano IT World & Self-taught',
        location: 'Panthapath, Dhaka-1205',
        startDate: '2015',
        description:
            "It's a long story, which I'll describe here briefly soon. Started my programming journey through self-learning and professional training.",
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
        certificate: {
            image: '/assets/images/4.jpg',
            alt: 'SSC Certificate',
        },
        skills: ['Business Studies', 'Foundation Learning'],
    },
    {
        id: 'primary-education',
        title: 'Primary Education',
        institution: 'Baharpur High School',
        location: 'Baharpur, Baliakandi, Rajbari',
        startDate: 'Batch of 2006',
        description:
            'Completed my primary education at Baharpur High School, which laid the foundation for my future studies and career.',
        certificate: {
            image: '/assets/images/5.jpg',
            alt: 'Primary Education Certificate',
        },
        skills: ['Basic Education', 'Foundational Skills'],
    },
];

export default educationData;
