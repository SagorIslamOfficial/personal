# Project Structure

## Root Level

- `index.html` - Main landing page and entry point
- `README.md` - Project documentation and overview

## Asset Organization

### `/css/` - Stylesheets

- `bootstrap.min.css` - Bootstrap framework styles (minified)
- `style.css` - Custom CSS styles and theme
- `responsive.css` - Additional responsive design rules

### `/js/` - JavaScript Files

- `bootstrap.bundle.min.js` - Bootstrap JavaScript components
- `main.js` - Custom JavaScript functionality and animations
- `particles.min.js` - Particle animation library
- `typeitjs.umd.js` - Text typing animation library

### `/img/` - Images and Media

- `favicon.ico` - Website favicon
- `logo.png` - Site logo
- `hero-image.png` - Main hero section image
- `image-of-md-alamin-islam.png` - Profile/about image
- `about_me.svg` - About section graphic
- `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg` - Portfolio/gallery images

## Configuration Folders

- `.git/` - Git version control
- `.kiro/` - Kiro AI assistant configuration and steering rules

## File Naming Conventions

- **HTML**: Single `index.html` file (SPA approach)
- **CSS**: Descriptive names (`style.css`, `responsive.css`)
- **JavaScript**: Functional names (`main.js` for custom code)
- **Images**: Descriptive names with proper extensions
- **Libraries**: Keep original minified names for clarity

## Code Organization

- **Inline styles**: Avoided in favor of external CSS files
- **Script placement**: JavaScript files loaded at end of body
- **Asset loading**: External libraries loaded via CDN when possible
- **Image optimization**: Use appropriate formats (PNG for graphics, JPG for photos)

## Development Guidelines

- Keep all custom code in designated files (`style.css`, `main.js`)
- Maintain separation between framework and custom code
- Use semantic HTML structure
- Follow Bootstrap's grid system and component patterns
- Optimize images for web delivery
