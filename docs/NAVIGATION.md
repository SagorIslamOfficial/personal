# Navigation System Documentation

## Overview

The navigation system has been enhanced with advanced functionality including smooth scrolling, active section tracking, mobile menu management, and keyboard navigation.

## Components

### Header Component (`src/components/layout/Header.tsx`)

**Features:**

- ✅ Responsive navigation with Bootstrap structure
- ✅ Smooth scrolling to sections with proper navbar offset
- ✅ Active section highlighting
- ✅ Mobile menu with backdrop and animations
- ✅ Body scroll lock when mobile menu is open
- ✅ Keyboard navigation (ESC to close menu)
- ✅ Click outside to close mobile menu
- ✅ Configurable navigation items

**Props:**

- `isScrolled: boolean` - Whether page is scrolled (for styling)
- `isMobileMenuOpen: boolean` - Mobile menu state
- `activeSection: string` - Currently active section ID
- `onToggleMobileMenu: () => void` - Toggle mobile menu
- `onSetActiveSection: (section: string) => void` - Set active section

### Navigation Hook (`src/hooks/useNavigation.ts`)

**Features:**

- ✅ Smooth scrolling with navbar offset calculation
- ✅ Section visibility detection
- ✅ Reusable navigation utilities

**Methods:**

- `scrollToSection(sectionId: string)` - Smooth scroll to section
- `isSectionInView(sectionId: string, threshold?: number)` - Check if section is visible
- `getNavbarHeight()` - Calculate current navbar height

### Navigation Configuration (`src/config/navigation.ts`)

**Features:**

- ✅ Centralized navigation items configuration
- ✅ TypeScript interfaces for type safety
- ✅ External links configuration
- ✅ Section IDs constants

## App Component Integration

The main App component (`src/App.tsx`) has been enhanced with:

- ✅ Throttled scroll event handling for performance
- ✅ Active section detection based on scroll position
- ✅ Mobile menu state management
- ✅ Responsive behavior handling

## Styling

### CSS Module (`src/components/layout/Header.module.css`)

**Features:**

- ✅ Smooth transitions for all interactive elements
- ✅ Backdrop blur effect when scrolled
- ✅ Active link indicators
- ✅ Mobile menu animations
- ✅ Hover effects and focus states

## Usage Example

```tsx
import Header from './components/layout/Header';

function App() {
    const [appState, setAppState] = useState({
        activeSection: 'hero',
        isMobileMenuOpen: false,
        isScrolled: false,
    });

    return (
        <Header
            isScrolled={appState.isScrolled}
            isMobileMenuOpen={appState.isMobileMenuOpen}
            activeSection={appState.activeSection}
            onToggleMobileMenu={() =>
                setAppState((prev) => ({
                    ...prev,
                    isMobileMenuOpen: !prev.isMobileMenuOpen,
                }))
            }
            onSetActiveSection={(section) =>
                setAppState((prev) => ({
                    ...prev,
                    activeSection: section,
                }))
            }
        />
    );
}
```

## Configuration

To add or modify navigation items, update `src/config/navigation.ts`:

```typescript
export const navigationItems: NavigationItem[] = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    // Add more items...
];
```

## Performance Optimizations

- ✅ Throttled scroll events using `requestAnimationFrame`
- ✅ Passive event listeners for better scroll performance
- ✅ Memoized callbacks to prevent unnecessary re-renders
- ✅ CSS transitions instead of JavaScript animations

## Accessibility Features

- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ Screen reader friendly markup
- ✅ Proper semantic HTML structure

## Browser Support

- ✅ Modern browsers with CSS Grid and Flexbox support
- ✅ Smooth scrolling with fallback
- ✅ CSS custom properties support
- ✅ ES6+ JavaScript features
