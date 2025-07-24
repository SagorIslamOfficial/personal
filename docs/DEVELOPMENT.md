# Development Environment Setup

This document outlines the development environment configuration for the React portfolio project.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development Server Configuration

- **Port**: 3000 (configurable in `vite.config.ts`)
- **Host**: Accessible from network (0.0.0.0)
- **HMR**: Hot Module Replacement enabled with error overlay
- **Auto-open**: Browser opens automatically on server start

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on localhost |
| `npm run dev:host` | Start development server accessible from network |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run type-check` | Run TypeScript type checking |
| `npm run verify` | Run all checks (type, lint, format) |

## Environment Variables

### Development (`.env.development`)
- `VITE_APP_TITLE`: Application title
- `VITE_APP_DESCRIPTION`: Application description
- `VITE_DEV_MODE`: Development mode flag
- `VITE_HMR_ENABLED`: HMR enabled flag

### Production (`.env.production`)
- Same variables with production values

## Development Tools

### Hot Module Replacement (HMR)
- Instant updates without page refresh
- State preservation during updates
- Error overlay for development issues

### React DevTools
- Automatically enabled in development
- Component inspection and debugging
- Performance profiling

### TypeScript
- Strict type checking enabled
- Path aliases configured (`@`, `@assets`, `@styles`)
- Source maps enabled for debugging

### Code Quality
- ESLint with React-specific rules
- Prettier for consistent formatting
- Pre-configured with sensible defaults

## Build Optimization

### Development Build
- Fast compilation with esbuild
- Source maps for debugging
- Unminified for readability

### Production Build
- Minified and optimized
- Code splitting (vendor, bootstrap chunks)
- Asset optimization and hashing
- Tree shaking for smaller bundles

## Troubleshooting

### Common Issues

1. **Port already in use**: Change port in `vite.config.ts` or kill existing process
2. **HMR not working**: Check if files are being watched correctly
3. **TypeScript errors**: Run `npm run type-check` to see detailed errors
4. **Build failures**: Ensure all dependencies are installed with `npm install`

### Performance Tips

- Use React DevTools Profiler for performance analysis
- Monitor bundle size with build analyzer
- Optimize images and assets before importing
- Use lazy loading for large components

## File Structure

```
src/
├── assets/          # Static assets (images, fonts)
├── components/      # React components
├── styles/          # CSS and styling files
├── App.tsx          # Main application component
└── main.tsx         # Application entry point

public/
├── index.html       # HTML template
└── favicon.ico      # Site favicon

config files:
├── vite.config.ts   # Vite configuration
├── tsconfig.json    # TypeScript configuration
├── eslint.config.js # ESLint configuration
└── .prettierrc      # Prettier configuration
```