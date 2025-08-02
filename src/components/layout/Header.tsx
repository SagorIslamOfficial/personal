import { useEffect, useCallback } from 'react';
import { useNavigation } from '../../hooks/useNavigation';
import { navigationItems, externalLinks } from '../../config/navigation';
import type { SectionId } from '../../config/navigation';
import { useSections } from '../../hooks/useSections';

interface HeaderProps {
    isMobileMenuOpen: boolean;
    onToggleMobileMenu: () => void;
    onSetActiveSection: (section: string) => void;
}

const Header = ({
    isMobileMenuOpen,
    onToggleMobileMenu,
    onSetActiveSection,
}: HeaderProps) => {
    const { scrollToSection } = useNavigation();
    const { isSectionVisible } = useSections();

    // Filter navigation items to only show visible sections
    const visibleNavigationItems = navigationItems.filter((item) =>
        isSectionVisible(item.id as SectionId)
    );

    // Enhanced navigation click handler
    const handleNavClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
            e.preventDefault();

            scrollToSection(sectionId);
            onSetActiveSection(sectionId);

            // Close mobile menu after navigation
            if (isMobileMenuOpen) {
                onToggleMobileMenu();
            }
        },
        [
            isMobileMenuOpen,
            onToggleMobileMenu,
            onSetActiveSection,
            scrollToSection,
        ]
    );

    // Handle body scroll lock when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isMobileMenuOpen) {
                onToggleMobileMenu();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isMobileMenuOpen, onToggleMobileMenu]);

    return (
        <>
            {/* Mobile Menu Backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                    onClick={onToggleMobileMenu}
                />
            )}

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#20212A] h-18 flex items-center w-full shadow-md">
                <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#"
                        onClick={(e) => handleNavClick(e, 'heroSection')}
                        className="flex items-center gap-2 select-none"
                    >
                        <img
                            src="/logo.png"
                            alt="AIS Logo"
                            className="h-10 w-10 object-contain"
                        />
                    </a>

                    {/* Centered Navigation */}
                    <nav className="flex-1 flex justify-end">
                        <ul className="flex gap-10">
                            {visibleNavigationItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={item.href}
                                        onClick={(e) =>
                                            handleNavClick(e, item.id)
                                        }
                                        className="text-white font-semibold text-lg hover:text-yellow-500 transition-colors duration-200 px-1"
                                        style={{ letterSpacing: '0.02em' }}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}

                            {/* Resume Button */}
                            <li className="pl-10">
                                <a
                                    href={externalLinks.resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 border border-yellow-400 text-white font-semibold rounded transition-all duration-200 hover:border-white hover:text-yellow-400 focus:outline-none"
                                    style={{ letterSpacing: '0.05em' }}
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
