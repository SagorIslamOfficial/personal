import { useCallback } from 'react';

export const useNavigation = () => {
    // Calculate navbar height for scroll offset
    const getNavbarHeight = useCallback(() => {
        const navbar = document.querySelector('.navbar');
        return navbar ? navbar.getBoundingClientRect().height : 80;
    }, []);

    // Enhanced smooth scrolling with proper offset
    const scrollToSection = useCallback(
        (sectionId: string) => {
            const element = document.getElementById(sectionId);
            if (element) {
                const navbarHeight = getNavbarHeight();
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                    elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        },
        [getNavbarHeight]
    );

    // Check if section is in viewport
    const isSectionInView = useCallback(
        (sectionId: string, threshold = 0.3) => {
            const element = document.getElementById(sectionId);
            if (!element) return false;

            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const navbarHeight = getNavbarHeight();

            // Check if section is visible considering navbar height
            const visibleTop = Math.max(0, rect.top - navbarHeight);
            const visibleBottom = Math.min(windowHeight, rect.bottom);
            const visibleHeight = visibleBottom - visibleTop;
            const sectionHeight = rect.height;

            return visibleHeight >= sectionHeight * threshold;
        },
        [getNavbarHeight]
    );

    return {
        scrollToSection,
        isSectionInView,
        getNavbarHeight,
    };
};

export default useNavigation;
