import { useState, useEffect } from 'react';
import './App.css';
import { SectionsProvider } from './contexts/SectionsContext';
import { useSections } from './hooks/useSections';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Section Components
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import BlogSection from './components/sections/BlogSection';
import HistorySection from './components/sections/HistorySection';
import ContactSection from './components/sections/ContactSection';

// Global state interface
interface AppState {
    activeSection: string;
    isMobileMenuOpen: boolean;
    isScrolled: boolean;
}

// Main App Content Component
const AppContent = () => {
    const { isSectionVisible, getVisibleSectionIds } = useSections();
    const [appState, setAppState] = useState<AppState>({
        activeSection: 'hero',
        isMobileMenuOpen: false,
        isScrolled: false,
    });

    // Enhanced scroll handler with section detection
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50;
            setAppState((prev) => ({ ...prev, isScrolled: scrolled }));

            // Simple section detection based on scroll position - only for visible sections
            const visibleSections = getVisibleSectionIds();
            const navbarHeight = 80;
            const scrollPosition = window.scrollY + navbarHeight + 100;

            for (const sectionId of visibleSections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setAppState((prev) => ({
                            ...prev,
                            activeSection: sectionId,
                        }));
                        break;
                    }
                }
            }
        };

        const handleResize = () => {
            // Close mobile menu on resize to desktop
            if (window.innerWidth >= 992) {
                setAppState((prev) => ({ ...prev, isMobileMenuOpen: false }));
            }
        };

        // Throttle scroll events for better performance
        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledScroll, { passive: true });
        window.addEventListener('resize', handleResize);

        // Initial call to set correct active section
        handleScroll();

        return () => {
            window.removeEventListener('scroll', throttledScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [getVisibleSectionIds]);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setAppState((prev) => ({
            ...prev,
            isMobileMenuOpen: !prev.isMobileMenuOpen,
        }));
    };

    // Set active section
    const setActiveSection = (section: string) => {
        setAppState((prev) => ({ ...prev, activeSection: section }));
    };

    return (
        <main id="code2">
            {/* Header/Navigation */}
            <Header
                isMobileMenuOpen={appState.isMobileMenuOpen}
                onToggleMobileMenu={toggleMobileMenu}
                onSetActiveSection={setActiveSection}
                isScrolled={appState.isScrolled}
                activeSection={appState.activeSection}
            />

            {/* Main Content Sections - Conditionally Rendered */}
            {isSectionVisible('heroSection') && <HeroSection />}
            {isSectionVisible('about') && <AboutSection />}
            {isSectionVisible('projects') && <ProjectsSection />}
            {isSectionVisible('articles') && <BlogSection />}
            {isSectionVisible('education&Experience') && <HistorySection />}
            {isSectionVisible('getInTouch') && <ContactSection />}

            {/* Footer */}
            <Footer />
        </main>
    );
};

function App() {
    return (
        <SectionsProvider>
            <AppContent />
        </SectionsProvider>
    );
}

export default App;
