// Hero section data and configuration

export interface HeroSkill {
    name: string;
    tooltip?: string;
    category?: "frontend" | "backend" | "database" | "framework" | "plugin";
}

export const heroSkills: HeroSkill[] = [
    {
        name: "Full-Stack",
        tooltip: "Full Stack Web Development",
        category: "frontend",
    },
    {
        name: "Laravel",
        tooltip: "Laravel PHP Framework",
        category: "framework",
    },
    {
        name: "WordPress Plugin",
        tooltip: "WordPress Plugin Development",
        category: "plugin",
    },
    {
        name: "PHP",
        tooltip: "PHP Programming Language",
        category: "backend",
    },
    {
        name: "React JS",
        tooltip: "React JS Frontend Framework",
        category: "frontend",
    },
    {
        name: "MySql",
        tooltip: "MySQL Database Management",
        category: "database",
    },
];

export interface HeroContent {
    greeting: string;
    name: string;
    headline: string[];
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
    headline: ["A Full-Stack Laravel & WordPress Plugin Developer"],
    skills: heroSkills,
    buttons: {
        contact: {
            text: "CONTACT",
            href: "#getInTouch",
        },
        about: {
            text: "ABOUT ME",
            href: "#about",
        },
    },
};

export default heroContent;
