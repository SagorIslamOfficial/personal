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
            <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-[#262629] h-16 flex items-center w-full max-w-7xl rounded-[15px] shadow-md">
                <div className="w-full mx-auto flex items-center justify-between px-5">
                    {/* Logo */}
                        <a
                            href="/"
                            onClick={(e) => handleNavClick(e, 'heroSection')}
                            className="flex items-center gap-3 select-none text-white font-bold text-xl"
                        >
                            <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
                        </a>

                    {/* Centered Navigation */}
                    <nav className="flex-1">
                        <ul className="flex justify-center items-center gap-8">
                            {visibleNavigationItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={item.href}
                                        onClick={(e) =>
                                            handleNavClick(e, item.id)
                                        }
                                        className="text-gray-200 font-medium hover:text-white transition-colors duration-150 px-2"
                                        style={{ letterSpacing: '0.05em' }}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Call to Action - Resume Button */}
                    <div>
                        <a
                            href={externalLinks.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-[7px] border border-yellow-400 text-white font-semibold rounded transition-all duration-200 hover:border-white hover:text-yellow-400 focus:outline-none"
                            style={{ letterSpacing: '0.05em' }}
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
