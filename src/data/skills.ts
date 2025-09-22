export interface SkillCategory {
    id: string;
    label: string;
    skills: string[];
    description?: string;
}

export const skillCategories: SkillCategory[] = [
    {
        id: "skills",
        label: "My Skills",
        description: "Core technical skills and expertise",
        skills: [
            "Laravel",
            "PHP",
            "WordPress Plugin Development",
            "Joomla CMS",
            "AI (Artificial Intelligence)",
            "HTML/CSS/JS",
            "Tailwind/Bootstrap",
            "ReactJs",
            "RESTful API (laravel)",
            "MySql/SQLite",
            "Database Design",
            "Responsive Design",
            "Cpanel",
            "VPS Server",
        ],
    },
    {
        id: "want-to-work",
        label: "I Want To Work With",
        description: "Technologies I am eager to learn and work with",
        skills: ["C/C++", "NextJs", "System Design", "Microservices", "Docker"],
    },
    {
        id: "familiars",
        label: "Familiars",
        description: "Technologies and tools I am familiar with",
        skills: [
            "Problem Solving",
            "macOS/iOS app development",
            "Website Design(figma)",
            "UI/UX",
            "SEO",
        ],
    },
    {
        id: "tools",
        label: "Tools",
        description: "Development tools and software I use regularly",
        skills: [
            "VS Code",
            "AI Editors",
            "PhpStorm",
            "Git",
            "GitHub",
            "Postman",
            "Figma",
            "OS: macOS, Windows, Linux(Ubuntu)",
        ],
    },
];

export default skillCategories;
