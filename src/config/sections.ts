// Sections visibility configuration
import type { SectionId } from "./navigation";

export interface SectionConfig {
    id: SectionId;
    name: string;
    visible: boolean;
    required?: boolean;
    description?: string;
}

export interface SectionsConfiguration {
    sections: Record<SectionId, SectionConfig>;
}

// Default sections configuration
export const defaultSectionsConfig: SectionsConfiguration = {
    sections: {
        heroSection: {
            id: "heroSection",
            name: "Hero Section",
            visible: true,
            required: true,
            description: "Landing page with introduction",
        },
        about: {
            id: "about",
            name: "About Me",
            visible: true,
            description: "Personal information and skills overview",
        },
        projects: {
            id: "projects",
            name: "Projects",
            visible: true,
            description: "Portfolio projects showcase",
        },
        articles: {
            id: "articles",
            name: "Blog Articles",
            visible: true,
            description: "Blog posts and articles",
        },
        "education&Experience": {
            id: "education&Experience",
            name: "Education & Experience",
            visible: true,
            description: "Educational background and work history",
        },
        getInTouch: {
            id: "getInTouch",
            name: "Contact",
            visible: true,
            description: "Contact information and form",
        },
    },
};

// Helper functions
export const getSectionConfig = (
    sectionId: SectionId,
    config: SectionsConfiguration = defaultSectionsConfig,
): SectionConfig => {
    return config.sections[sectionId];
};

export const isSectionVisible = (
    sectionId: SectionId,
    config: SectionsConfiguration = defaultSectionsConfig,
): boolean => {
    return config.sections[sectionId]?.visible ?? false;
};

export const getVisibleSections = (
    config: SectionsConfiguration = defaultSectionsConfig,
): SectionConfig[] => {
    return Object.values(config.sections).filter((section) => section.visible);
};

export const getVisibleSectionIds = (
    config: SectionsConfiguration = defaultSectionsConfig,
): SectionId[] => {
    return Object.values(config.sections)
        .filter((section) => section.visible)
        .map((section) => section.id);
};

export const toggleSectionVisibility = (
    sectionId: SectionId,
    config: SectionsConfiguration,
): SectionsConfiguration => {
    const section = config.sections[sectionId];
    if (!section || section.required) {
        return config;
    }

    return {
        ...config,
        sections: {
            ...config.sections,
            [sectionId]: {
                ...section,
                visible: !section.visible,
            },
        },
    };
};

export const setSectionVisibility = (
    sectionId: SectionId,
    visible: boolean,
    config: SectionsConfiguration,
): SectionsConfiguration => {
    const section = config.sections[sectionId];
    if (!section || (section.required && !visible)) {
        return config;
    }

    return {
        ...config,
        sections: {
            ...config.sections,
            [sectionId]: {
                ...section,
                visible,
            },
        },
    };
};

export default defaultSectionsConfig;
