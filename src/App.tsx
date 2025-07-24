import { useState, useEffect } from 'react';
import './App.css';
import { sectionIds } from './config/navigation';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ParticleBackground from './components/ui/ParticleBackground';

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

function App() {
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

            // Simple section detection based on scroll position
            const sections = sectionIds;
            const navbarHeight = 80;
            const scrollPosition = window.scrollY + navbarHeight + 100;

            for (const sectionId of sections) {
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
    }, []);

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
            {/* Particle Background */}
            <ParticleBackground />

            {/* Header/Navigation */}
            <Header
                isMobileMenuOpen={appState.isMobileMenuOpen}
                onToggleMobileMenu={toggleMobileMenu}
                onSetActiveSection={setActiveSection}
            />

            {/* Main Content Sections */}
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <BlogSection />
            <HistorySection />
            <ContactSection />

            {/* Footer */}
            <Footer />
        </main>
    );
}

export default App;
