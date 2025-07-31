# Shared Components Documentation

## Overview

This document outlines the reusable shared components created for the React portfolio application. These components provide consistent styling, behavior, and functionality across the application.

## Components

### 1. SectionHeading

A reusable component for consistent section titles throughout the application.

**Props:**

- `title: string` - Main heading text
- `subtitle?: string` - Optional subtitle text
- `showViewAll?: boolean` - Show "View All" link
- `viewAllLink?: string` - URL for "View All" link
- `className?: string` - Additional CSS classes

**Usage:**

```tsx
<SectionHeading
    title="About Me"
    subtitle="Full Stack Developer"
    showViewAll={true}
    viewAllLink="/portfolio"
/>
```

### 2. ImagePopup

A modal component for displaying images (primarily used for certificates).

**Props:**

- `isOpen: boolean` - Modal visibility state
- `imageUrl: string` - Image source URL
- `imageAlt?: string` - Alt text for image
- `onClose: () => void` - Close handler function
- `children?: ReactNode` - Additional content

**Features:**

- ✅ Keyboard navigation (ESC to close)
- ✅ Click outside to close
- ✅ Body scroll lock when open
- ✅ Smooth animations
- ✅ Responsive design

**Usage:**

```tsx
<ImagePopup
    isOpen={isModalOpen}
    imageUrl="/path/to/certificate.jpg"
    imageAlt="Certificate"
    onClose={() => setIsModalOpen(false)}
/>
```

### 3. SkillTabs

A tabbed interface component for displaying categorized skills.

**Props:**

- `categories: SkillCategory[]` - Array of skill categories
- `className?: string` - Additional CSS classes

**SkillCategory Interface:**

```typescript
interface SkillCategory {
    id: string;
    label: string;
    skills: string[];
}
```

**Features:**

- ✅ Accessible tab navigation
- ✅ Active state management
- ✅ Keyboard navigation
- ✅ Responsive design

**Usage:**

```tsx
const skillCategories = [
    {
        id: 'frontend',
        label: 'Frontend',
        skills: ['React', 'Vue.js', 'JavaScript'],
    },
];

<SkillTabs categories={skillCategories} />;
```

### 4. Button

A versatile button component with multiple variants and sizes.

**Props:**

- `variant?: 'primary' | 'secondary' | 'outline' | 'contact' | 'about'`
- `size?: 'sm' | 'md' | 'lg'`
- `children: ReactNode` - Button content
- `href?: string` - If provided, renders as link
- `external?: boolean` - Opens link in new tab
- `icon?: ReactNode` - Icon element
- `iconPosition?: 'left' | 'right'`
- `className?: string` - Additional CSS classes

**Features:**

- ✅ Multiple visual variants
- ✅ Icon support with positioning
- ✅ Link and button modes
- ✅ Hover animations
- ✅ Accessible focus states

**Usage:**

```tsx
<Button
    variant="primary"
    size="lg"
    icon={<i className="fa-solid fa-arrow-right" />}
    iconPosition="right"
>
    Get Started
</Button>
```

### 5. CertificateButton

A specialized button that opens an image modal when clicked.

**Props:**

- `certificateImage: string` - Certificate image URL
- `certificateAlt?: string` - Alt text for certificate
- `buttonText?: string` - Button label text
- `className?: string` - Additional CSS classes

**Usage:**

```tsx
<CertificateButton
    certificateImage="/certificates/diploma.jpg"
    certificateAlt="University Diploma"
    buttonText="View Certificate"
/>
```

### 6. SkillTag

A component for displaying individual skills as styled tags.

**Props:**

- `skill: string` - Skill name
- `variant?: 'default' | 'primary' | 'secondary'`
- `size?: 'sm' | 'md' | 'lg'`
- `className?: string` - Additional CSS classes
- `onClick?: () => void` - Click handler (makes tag interactive)

**Features:**

- ✅ Multiple visual variants
- ✅ Optional click interaction
- ✅ Keyboard accessibility
- ✅ Hover effects

**Usage:**

```tsx
<SkillTag
    skill="React.js"
    variant="primary"
    onClick={() => console.log('Skill clicked')}
/>
```

### 7. LoadingSpinner

A loading indicator component with customizable appearance.

**Props:**

- `size?: 'sm' | 'md' | 'lg'`
- `color?: 'primary' | 'secondary' | 'white'`
- `className?: string` - Additional CSS classes
- `text?: string` - Optional loading text

**Usage:**

```tsx
<LoadingSpinner size="lg" color="primary" text="Loading..." />
```

### 8. Card

A flexible card container component for consistent layouts.

**Props:**

- `children: ReactNode` - Card content
- `variant?: 'default' | 'elevated' | 'outlined'`
- `padding?: 'none' | 'sm' | 'md' | 'lg'`
- `className?: string` - Additional CSS classes
- `onClick?: () => void` - Click handler (makes card interactive)
- `hover?: boolean` - Enable hover animations

**Features:**

- ✅ Multiple visual variants
- ✅ Configurable padding
- ✅ Optional click interaction
- ✅ Hover animations
- ✅ Keyboard accessibility

**Usage:**

```tsx
<Card
    variant="elevated"
    padding="lg"
    hover={true}
    onClick={() => navigate('/details')}
>
    <h3>Card Title</h3>
    <p>Card content...</p>
</Card>
```

## Styling

### CSS Module

All shared components use the `SharedComponents.module.css` file for styling, which includes:

- ✅ Consistent color scheme using CSS custom properties
- ✅ Smooth transitions and animations
- ✅ Responsive design patterns
- ✅ Accessibility-focused styles
- ✅ Hover and focus states

### Design System

**Colors:**

- Primary: `#ffc107` (Yellow/Gold)
- Background: `#1e1e28` (Dark)
- Text: `#ffffff` (White)
- Accent: Various opacity levels of primary color

**Typography:**

- Font Family: Nunito (from Google Fonts)
- Consistent font weights and sizes
- Proper line heights for readability

**Spacing:**

- Consistent padding and margin scales
- Responsive spacing adjustments
- Grid-based layout system

## Data Integration

### Skills Data

The `src/data/skills.ts` file contains the skill categories used by the SkillTabs component:

```typescript
export const skillCategories: SkillCategory[] = [
  {
    id: 'skills',
    label: 'My Skills',
    skills: ['Laravel', 'PHP', 'HTML/CSS', ...]
  },
  // ... more categories
];
```

## Usage Examples

### Complete About Section Integration

```tsx
import { SkillTabs, SectionHeading } from '../shared';
import { skillCategories } from '../../data/skills';

const AboutSection = () => (
    <section>
        <SectionHeading title="About Me" />
        <SkillTabs categories={skillCategories} />
    </section>
);
```

### Certificate Display

```tsx
import { CertificateButton } from '../shared';

const EducationItem = () => (
    <div className="education-item">
        <h4>Bachelor's Degree</h4>
        <CertificateButton
            certificateImage="/certificates/bachelor.jpg"
            buttonText="View Diploma"
        />
    </div>
);
```

## Accessibility Features

All shared components include:

- ✅ Proper ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ Screen reader compatibility
- ✅ Semantic HTML structure
- ✅ Color contrast compliance

## Performance Optimizations

- ✅ Memoized callbacks where appropriate
- ✅ CSS transitions instead of JavaScript animations
- ✅ Lazy loading for modal content
- ✅ Efficient re-rendering patterns
- ✅ Minimal bundle impact

## Browser Support

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ CSS Grid and Flexbox support required
- ✅ ES6+ JavaScript features
- ✅ CSS custom properties support
