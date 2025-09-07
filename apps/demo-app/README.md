# TailwindSpark Demo App

The main React application showcasing Tailwind CSS v4 components and design patterns.

## Features

- **🎨 Interactive Components** - Live demonstrations of all UI components
- **🌙 Dark Mode** - System preference detection with manual toggle
- **📱 Responsive Design** - Mobile-first approach with adaptive layouts
- **⚡ Modern Stack** - React 19, TypeScript, Vite, Tailwind CSS v4
- **🚀 Performance** - Optimized builds and efficient rendering

## Technology Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Full type safety
- **Tailwind CSS 4.1** - Utility-first CSS with @theme directive
- **Vite 7** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Vitest** - Testing framework

## Development

### Prerequisites

- Node.js 18 or later
- npm 9 or later

### Setup

```bash
# From the monorepo root
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run tests
npm run test:ui      # Run tests with UI
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## Project Structure

```text
apps/demo-app/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Route-specific pages
│   ├── sections/      # Feature sections
│   ├── hooks/         # Custom React hooks
│   ├── types/         # TypeScript definitions
│   └── assets/        # Static assets
├── public/           # Static files
└── dist/            # Build output
```

## Routing

The app uses React Router with the following routes:

- `/` - Home page with component showcase
- `/design-system` - Design system documentation
- `/animations` - Animation demonstrations
- `/demos` - All demo overview
- `/dashboard` - SaaS dashboard demo
- `/ecommerce` - E-commerce store demo
- `/marketing` - Marketing landing demo

## Theme System

### Tailwind CSS v4 Integration

The app uses Tailwind CSS v4 with centralized design tokens:

```css
/* Design tokens defined in packages/design-tokens/theme.css */
@theme {
  --color-primary-500: #0ea5e9;
  --color-secondary-900: #1c1917;
  /* ... more tokens */
}

/* Semantic color system */
:root {
  --color-brand: var(--color-primary-600);
  --color-surface: #ffffff;
  --color-text: var(--color-secondary-900);
}

.dark {
  --color-surface: var(--color-secondary-900);
  --color-text: var(--color-secondary-100);
}
```

### Dark Mode

Dark mode is implemented using:

- CSS custom properties for theme colors
- `.dark` class toggle on the `<html>` element
- localStorage persistence for user preference
- System preference detection as fallback

### Component Styling

Components use a semantic color system:

```tsx
// Instead of hard-coded colors
className="text-gray-900 dark:text-gray-100"

// Use semantic classes
className="text-text"
```

## Testing

The app includes comprehensive testing:

```bash
# Run unit tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui
```

## Build and Deployment

### Development Build

```bash
npm run dev
# Serves at http://localhost:5173
```

### Production Build

```bash
npm run build
# Output in ../../dist/ for GitHub Pages deployment
```

### Preview Build

```bash
npm run preview
# Preview production build locally
```

## Configuration

### Vite Configuration

The app uses Vite with the following key configurations:

- **Base URL**: Set to `/tailwind-demo/` for GitHub Pages
- **Build Output**: `../../dist/` for monorepo deployment
- **Plugins**: React, TypeScript support

### PostCSS Configuration

Tailwind CSS v4 PostCSS setup:

```js
export default {
  plugins: [
    ['@tailwindcss/postcss']
  ]
}
```

### ESLint Configuration

Strict ESLint rules for code quality:

- TypeScript strict mode
- React hooks rules
- Accessibility rules
- Import sorting

## Contributing

See the main [Contributing Guide](../../CONTRIBUTING.md) for development guidelines.

## License

This project is part of TailwindSpark and is licensed under the MIT License.
