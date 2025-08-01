# TailwindSpark ✨

**Part of the [WebSpark](https://webspark.markhazleton.com) Portfolio by [Mark Hazleton](https://markhazleton.com)**

> *A comprehensive demonstration monorepo showcasing modern web development with React, TypeScript, and Tailwind CSS, designed as an interactive showcase of utility-first CSS framework capabilities with advanced SEO, performance optimizations, and user experience enhancements.*

TailwindSpark is a cutting-edge React TypeScript monorepo that demonstrates the full power of Tailwind CSS through interactive components, animations, and a complete SaaS dashboard implementation. Built with modern development practices, it serves as both a learning resource and a template for production-ready applications with enterprise-grade features.

## 🎯 About TailwindSpark

TailwindSpark represents the intersection of design and development, showcasing how utility-first CSS can create beautiful, responsive, and accessible user interfaces. As part of the WebSpark suite of applications, it demonstrates practical implementations of modern web technologies while maintaining focus on real-world usability and performance.

**Created by Mark Hazleton** - Solutions Architect passionate about making technology work for business. This project embodies a lifelong learning approach, focusing on substance over style.

### 🌟 Why TailwindSpark?

- **Educational Resource**: Learn Tailwind CSS through interactive examples
- **Production Template**: Use as a starting point for your own projects
- **Design System Reference**: Comprehensive component library with TypeScript
- **Modern Architecture**: Monorepo structure with build optimization
- **Accessibility First**: WCAG compliant components throughout
- **SEO Optimized**: Comprehensive meta tags, structured data, and social media optimization
- **Performance Focused**: Service worker caching and optimized loading
- **User Experience**: Advanced search, keyboard shortcuts, and error handling

## 🚀 Features

### **Core Features**

- **Monorepo Architecture**: Organized with Turborepo for optimal build caching and task orchestration
- **TypeScript First**: Full type safety across all packages with comprehensive interfaces
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Component Library**: Reusable UI components (Button, Card, Modal, Forms) with multiple variants
- **Design System Showcase**: Comprehensive demonstration of all components with interactive examples
- **Animation Showcase**: Complete demonstration of Tailwind's transition and animation utilities
- **SaaS Dashboard**: Full-featured business dashboard for "PromptSpark" with unified navigation
- **Dashboard Pages**: Analytics, User Management, Settings, and Overview pages with shared layout
- **Routing**: React Router integration with dedicated pages for different features
- **Dark Mode**: System preference detection with manual toggle and persistent storage
- **Form Components**: Complete form library with validation, icons, and accessibility
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Accessibility**: WCAG compliant components with proper ARIA attributes
- **Modern Tooling**: Vite, ESLint, Prettier, and VS Code integration

### **Advanced Features (v1.1.0+)**

- **SEO Optimization**: Comprehensive meta tags, structured data, and social media optimization
- **Global Search**: Intelligent search with keyboard shortcuts (Ctrl/Cmd + K)
- **Error Boundaries**: Graceful error handling with user-friendly fallbacks
- **Service Worker**: Offline caching and performance optimization
- **Keyboard Shortcuts**: Enhanced navigation with power user features
- **Loading Components**: Reusable loading spinners and states
- **Analytics Integration**: Google Analytics tracking for user behavior insights
- **Sitemap Generation**: XML sitemap for better search engine indexing
- **Robots.txt**: Search engine crawling instructions
- **Social Media Images**: Open Graph and Twitter Card optimization
- **Performance Monitoring**: Real-time performance metrics and error tracking

## 🌐 Live Demo & Portfolio Integration

### 🔥 TailwindSpark Live Demo

**[https://markhazleton.github.io/tailwind-demo/](https://markhazleton.github.io/tailwind-demo/)**

### 🌐 WebSpark Portfolio

This project is part of the comprehensive WebSpark suite:

- **[WebSpark Main Site](https://webspark.markhazleton.com)** - Complete portfolio overview
- **[Mark Hazleton](https://markhazleton.com)** - Professional profile and articles
- **[WebSpark Evolution Article](https://markhazleton.com/articles/webspark-the-next-evolution-of-web-project-mechanics.html)** - The story behind WebSpark

### 🚀 Other WebSpark Applications

- **PromptSpark** - AI prompt management for Large Language Models
- **RecipeSpark** - Recipe organization and sharing platform  
- **TriviaSpark** - Interactive quizzes and trivia games
- **TailwindSpark** - This comprehensive Tailwind CSS showcase

**Local Development**: Visit <http://localhost:5173> when running locally

### Available Routes

- **Home** (`/`): Welcome page with feature overview and navigation
- **Design System** (`/design-system`): Comprehensive showcase of all Tailwind components including:
  - Button variations (6 variants, 4 sizes, with icons and states)
  - Form components (inputs, textareas, selects, checkboxes, radio buttons)
  - Card layouts (3 variants with headers, content, and footers)
  - Modal dialogs (5 sizes with accessibility features)
  - Interactive examples with live code demonstration
- **Animation Showcase** (`/animations`): Complete demonstration of Tailwind's animation utilities including:
  - Transition effects (scale, color, opacity, rotate, translate, shadow)
  - Keyframe animations (spin, ping, pulse, bounce)
  - Interactive animations (loading states, modal transitions)
  - Complex animations (floating effects, morphing buttons)
  - User-triggered animations and state-based transitions
- **SaaS Dashboard** (`/dashboard`): Full-featured business dashboard inspired by "PromptSpark" design patterns with:
  - **Dashboard Overview**: Revenue metrics, charts, transaction history, and activity feed
  - **Analytics** (`/dashboard/analytics`): Detailed metrics, traffic sources, top pages, and data visualization
  - **User Management** (`/dashboard/users`): User filtering, search, role management, and bulk actions
  - **Settings** (`/dashboard/settings`): General, Security, Notifications, API, and Billing configuration
  - **Unified Navigation**: Consistent sidebar navigation with responsive design and dark mode support

## 📁 Project Structure

```text
tailwind-demo/
├── apps/
│   └── demo-app/                 # Vite React demo application
│       ├── src/
│       │   ├── components/       # Shared components (Layout, ThemeToggle, DashboardLayout, SearchComponent, ErrorBoundary, LoadingSpinner)
│       │   ├── hooks/            # Custom hooks (useKeyboardShortcuts, useAnalytics)
│       │   ├── pages/            # Route pages (HomePage, DesignSystemPage, AnimationPage, DashboardPage, AnalyticsPage, UsersPage, SettingsPage)
│       │   ├── sections/         # Component showcases (ButtonShowcase, FormShowcase, AnimationShowcase, etc.)
│       │   └── App.tsx           # Main application with routing and error boundaries
│       ├── public/               # Static assets (sitemap.xml, robots.txt, sw.js, og-image.svg)
│       ├── tailwind.config.js    # Tailwind configuration
│       └── package.json
├── packages/
│   ├── design-tokens/            # Shared design system
│   │   ├── tailwind.config.js    # Base Tailwind config
│   │   ├── tokens/               # Design tokens
│   │   └── package.json
│   └── ui-components/            # Reusable UI components
│       ├── src/
│       │   ├── components/       # Button, Card, Modal, Form components
│       │   └── index.ts          # Component exports
│       ├── tailwind.config.js    # Component-specific config
│       └── package.json
├── .vscode/                      # VS Code settings
│   ├── settings.json             # Editor configuration
│   └── extensions.json           # Recommended extensions
├── turbo.json                    # Turborepo configuration
└── package.json                  # Root dependencies
```

## 🔍 SEO & Metadata

**Keywords**: Tailwind CSS, React, TypeScript, Component Library, Design System, SaaS Dashboard, Web Development, UI Components, WebSpark, Mark Hazleton, CSS Framework, Frontend Development

**Description**: TailwindSpark - A comprehensive React TypeScript monorepo showcasing Tailwind CSS capabilities through interactive components, animations, and SaaS dashboard implementations. Features advanced SEO optimization, performance enhancements, and user experience improvements. Part of the WebSpark portfolio by Mark Hazleton.

**Technologies**: React 19, TypeScript 5.3, Tailwind CSS 3.4, Vite 7, Turborepo 1.12, GitHub Pages

**Author**: Mark Hazleton - Solutions Architect | [markhazleton.com](https://markhazleton.com) | [LinkedIn](https://www.linkedin.com/in/markhazleton/) | [GitHub](https://github.com/markhazleton/)

**Portfolio Integration**: This project demonstrates practical application of modern web technologies as part of the WebSpark suite, showcasing real-world implementations rather than theoretical concepts.

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm 10+

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/MarkHazleton/tailwind-demo.git
   cd tailwind-demo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build all packages**

   ```bash
   npm run build
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

The demo app will be available at `http://localhost:5173`

## 📦 Packages

### `@tailwindspark/design-tokens`

Centralized design system containing:

- **Color Palette**: Primary, secondary, success, warning, error colors with 50-950 shades
- **Typography**: Font families, sizes, and weights
- **Spacing**: Consistent spacing scale
- **Border Radius**: Standardized border radius values
- **Shadows**: Elevation system with multiple shadow levels
- **Animations**: Custom keyframes and transitions

### `@tailwindspark/ui-components`

Reusable React components with TypeScript interfaces:

#### Button Component

- **Variants**: primary, secondary, success, warning, error, ghost
- **Sizes**: sm, md, lg, xl
- **States**: loading, disabled
- **Features**: icons, full width, custom styling

#### Form Components

Complete form library with accessibility and validation:

- **Input**: Text inputs with icons, validation states, helper text
- **Textarea**: Multi-line text input with auto-resize
- **Select**: Dropdown with customizable options
- **Checkbox**: Checkboxes with labels and helper text
- **Radio**: Radio button groups for single selection
- **Features**: TypeScript interfaces, validation states, accessibility

#### Card Component

- **Variants**: default, bordered, elevated
- **Subcomponents**: CardHeader, CardContent, CardFooter
- **Flexible**: customizable padding and layout

#### Modal Component

- **Sizes**: sm, md, lg, xl, full
- **Features**: keyboard navigation, click outside to close, focus management
- **Subcomponents**: ModalHeader, ModalContent, ModalFooter
- **Accessible**: ARIA attributes and screen reader support

### Demo Application

Comprehensive showcase featuring:

- **Design System Page**: Interactive examples of all components with live demonstrations
- **Animation Showcase Page**: Complete demonstration of Tailwind's animation utilities
- **SaaS Dashboard**: Full-featured business dashboard with modern UI/UX patterns
- **Component Gallery**: Button, form, card, and modal variations
- **Animation Gallery**: Transition effects, keyframe animations, and interactive examples
- **Dashboard Features**: Analytics charts, user management, settings configuration, and real-time data
- **Routing**: React Router with navigation between Home, Design System, Animation, and Dashboard pages
- **Responsive Layouts**: Grid systems and flexible designs that work across all devices
- **Dark Mode Toggle**: System preference detection with manual override across all pages
- **Form Validation**: Live examples with error states and validation in settings and forms
- **Animation Interactions**: User-triggered animations and state-based transitions
- **Accessibility Demos**: Keyboard navigation and screen reader support throughout

## 🎨 Design System

### Animation Showcase

The Animation Showcase demonstrates Tailwind CSS's powerful animation and transition utilities:

#### Transition Effects

- **Scale Transforms**: Hover effects with smooth scaling animations
- **Color Transitions**: Smooth color changes between states
- **Opacity Fades**: Elegant fade in/out effects
- **Rotate Transforms**: Spinning and rotation animations
- **Translate Animations**: Slide and movement effects
- **Shadow Growth**: Dynamic shadow changes for depth

#### Keyframe Animations

- **Spin**: Loading spinners and rotating elements
- **Ping**: Notification dots with expanding ripple effects
- **Pulse**: Breathing animations for emphasis
- **Bounce**: Playful bouncing effects for interactive elements

#### Interactive Animations

- **Loading States**: Button animations with loading indicators
- **Modal Transitions**: Smooth modal entrance and exit animations
- **User-Triggered**: Click and hover-activated animations
- **State-Based**: Animations that respond to component state changes

#### Complex Animations

- **Floating Cards**: Multi-property animations with scale, rotate, and shadow
- **Morphing Buttons**: Gradient transitions with transform effects
- **Backdrop Effects**: Animated overlays and background transitions

### SaaS Dashboard Demo

The SaaS Dashboard demonstrates a complete business application interface for "PromptSpark":

#### Dashboard Overview Page

- **Revenue Metrics**: Total revenue, monthly recurring revenue, and growth statistics
- **Interactive Charts**: Revenue trends with data visualization and tooltips
- **Recent Transactions**: Transaction history with status indicators and amounts
- **Activity Feed**: Real-time updates of user actions and system events
- **Quick Stats**: User count, conversion rates, and performance metrics

#### Analytics Page

- **Traffic Analytics**: Page views, unique visitors, and bounce rate metrics
- **Traffic Sources**: Breakdown of organic, direct, social, and referral traffic
- **Top Pages**: Most visited pages with performance indicators
- **Time Range Selector**: Filter data by different time periods
- **Data Visualization**: Charts and graphs for trend analysis

#### User Management Page

- **User Directory**: Complete user list with search and filtering capabilities
- **Role Management**: User roles (Admin, Editor, Viewer) with permission controls
- **Status Tracking**: Active, pending, and suspended user states
- **Bulk Actions**: Select multiple users for batch operations
- **User Invitation**: Invite new users with role assignment

#### Settings Page

- **General Settings**: Company information, contact details, and timezone configuration
- **Security Settings**: Two-factor authentication, password policies, and session management
- **Notification Preferences**: Email, push notifications, reports, and security alerts
- **API Configuration**: API key management, webhook URLs, and rate limiting
- **Billing & Subscription**: Plan details, usage metrics, and payment information

#### Dashboard Features

- **Unified Navigation**: Consistent left sidebar with active state highlighting
- **Responsive Header**: Search functionality, notifications, and user profile menu
- **Page-Specific Actions**: Custom header buttons for each dashboard section
- **Mobile Responsive**: Collapsible sidebar and adaptive layouts for all screen sizes
- **Dark Mode Support**: Complete theming across all dashboard components
- **Auto-Save Detection**: Visual indicators and save prompts for unsaved changes

### Color Palette

The design system uses a comprehensive color palette with semantic naming:

```css
/* Primary Colors */
primary-50   #f0f9ff
primary-500  #0ea5e9  /* Main brand color */
primary-950  #082f49

/* Semantic Colors */
success-500  #22c55e   /* Success states */
warning-500  #f59e0b   /* Warning states */
error-500    #ef4444   /* Error states */
```

### Component Variants

Each component supports multiple variants for different use cases:

```tsx
// Button variants
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="ghost">Subtle Action</Button>

// Card variants
<Card variant="default">Basic card</Card>
<Card variant="bordered">Card with border</Card>
<Card variant="elevated">Card with shadow</Card>

// Form components
<Input label="Email" type="email" leftIcon={<Mail />} />
<Select label="Country" options={countryOptions} />
<Checkbox label="Subscribe to newsletter" />
<Radio name="plan" value="pro" label="Pro Plan" />

// Animation examples
<div className="transition-transform duration-300 hover:scale-110">
  Scale on hover
</div>
<div className="animate-pulse">Pulsing element</div>
<div className="animate-bounce">Bouncing element</div>
<div className="transition-colors duration-500 hover:bg-blue-500">
  Color transition
</div>
```

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start all development servers
npm run build        # Build all packages
npm run lint         # Lint all packages
npm run type-check   # TypeScript type checking
npm run clean        # Clean all build artifacts

# Formatting
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

### VS Code Integration

The project includes VS Code configuration for optimal development experience:

- **Tailwind CSS IntelliSense**: Autocomplete and syntax highlighting
- **Auto-formatting**: Prettier integration with Tailwind class sorting
- **ESLint Integration**: Real-time linting and error detection
- **TypeScript Support**: Full IntelliSense and type checking

### Recommended Extensions

- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint
- TypeScript and JavaScript Language Features

## 🌙 Dark Mode Implementation

The application supports dark mode through:

1. **System Preference Detection**: Automatically detects user's system theme
2. **Manual Toggle**: Theme switcher component with persistent storage
3. **CSS Classes**: Tailwind's `dark:` prefix for dark mode styling
4. **Local Storage**: Remembers user preference across sessions

```tsx
// Dark mode usage example
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  Content that adapts to theme
</div>
```

## 🧭 Routing & Navigation

The application uses React Router for client-side routing:

### Route Structure

- **Home** (`/`): Landing page with feature overview and quick navigation
- **Design System** (`/design-system`): Complete component showcase with live examples
- **Animation Showcase** (`/animations`): Comprehensive demonstration of Tailwind's animation utilities
- **SaaS Dashboard** (`/dashboard`): Business dashboard with unified navigation including:
  - **Dashboard Overview** (`/dashboard`): Main dashboard with metrics and activity
  - **Analytics** (`/dashboard/analytics`): Detailed analytics and data visualization
  - **User Management** (`/dashboard/users`): User directory and management tools
  - **Settings** (`/dashboard/settings`): Application configuration and preferences

### Navigation Features

- **Sticky Header**: Persistent navigation with active route highlighting
- **Dashboard Sidebar**: Collapsible navigation sidebar for dashboard pages
- **Responsive Menu**: Adapts to different screen sizes with mobile-friendly overlays
- **Theme Toggle**: Available on all pages with state preservation
- **Smooth Transitions**: CSS transitions between route changes
- **Active State Management**: Visual indicators for current page and section

```tsx
// Routing implementation
<Router>
  <Layout isDark={isDark} toggleTheme={toggleTheme}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/design-system" element={<DesignSystemShowcase />} />
      <Route path="/animations" element={<AnimationPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/dashboard/analytics" element={<AnalyticsPage />} />
      <Route path="/dashboard/users" element={<UsersPage />} />
      <Route path="/dashboard/settings" element={<SettingsPage />} />
    </Routes>
  </Layout>
</Router>
```

## 📱 Responsive Design

Mobile-first responsive design using Tailwind's breakpoint system:

```css
/* Tailwind Breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
```

Components automatically adapt to different screen sizes with responsive variants:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  Responsive grid layout
</div>

// Dashboard Layout with responsive sidebar
<DashboardLayout 
  pageTitle="Analytics"
  pageDescription="View detailed analytics and insights"
  headerActions={<TimeRangeSelector />}
>
  <div className="space-y-6">
    {/* Dashboard content */}
  </div>
</DashboardLayout>
```

## ♿ Accessibility

All components are built with accessibility in mind:

- **Semantic HTML**: Proper use of semantic elements
- **ARIA Attributes**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant color combinations
- **Focus Management**: Visible focus indicators and logical tab order

## 🚀 Deployment

### GitHub Pages Deployment (Live Demo)

This project is automatically deployed to GitHub Pages at: **<https://markhazleton.github.io/tailwind-demo/>**

#### Automated Deployment Process

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

1. **Triggers**: Automatically deploys on every push to the `main` branch
2. **Environment**: Runs on Ubuntu with Node.js 18
3. **Build Process**: Builds packages in dependency order
4. **Deployment**: Uses GitHub's built-in Pages deployment action

#### GitHub Pages Configuration Requirements

For successful deployment, the following configurations were essential:

**1. Vite Configuration (`apps/demo-app/vite.config.ts`)**

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/tailwind-demo/', // GitHub Pages subdirectory
  build: {
    outDir: '../../dist',  // Build to root for GitHub Actions
  },
})
```

**2. React Router Configuration (SPA Support)**

```typescript
// Using HashRouter for GitHub Pages compatibility
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Your routes */}
    </Router>
  );
}
```

**3. 404.html for Single Page Application**

```html
<!-- public/404.html - Redirects to index.html for SPA routing -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Tailwind Demo</title>
    <script type="text/javascript">
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + 
        '/?/' + l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body></body>
</html>
```

#### Common Issues and Solutions

**Issue 1: Module Resolution Errors**

```
Error: Could not resolve "@tailwindspark/ui-components"
```

*Solution*: Ensure all packages in the monorepo are tracked in git. Check `.gitignore` doesn't exclude the `packages/` directory.

**Issue 2: ESM/CommonJS Compatibility**

```
Error [ERR_REQUIRE_ESM]: require() of ES Module not supported
```

*Solution*: Add `"type": "module"` to package.json and ensure compatible versions:

```json
{
  "type": "module",
  "devDependencies": {
    "vite": "^7.0.4",
    "@vitejs/plugin-react": "^4.6.0"
  }
}
```

**Issue 3: Build Dependencies**

```
Error: Package not found in workspace
```

*Solution*: Build packages in correct dependency order:

```yaml
# GitHub Actions workflow
- name: Build design tokens
  run: npm run build
  working-directory: packages/design-tokens

- name: Build UI components  
  run: npm run build
  working-directory: packages/ui-components

- name: Build demo app
  run: npm run build
  working-directory: apps/demo-app
```

**Issue 4: .gitignore Conflicts**

```
# Problem: .NET ignore patterns excluded Node.js packages
**/[Pp]ackages/*

# Solution: Add exceptions for monorepo packages
**/[Pp]ackages/*
!packages/
!packages/*/
!packages/**/*.ts
!packages/**/*.tsx
!packages/**/*.js
!packages/**/*.json
!packages/**/*.config.*
```

#### Manual Deployment Steps

If you need to deploy manually:

```bash
# 1. Build all packages
npm run build

# 2. The dist folder contains the built application
# 3. Deploy the contents of ./dist to your hosting provider
```

### Alternative Deployment Options

#### Vercel (Recommended for Production)

1. **Connect Repository**: Link your GitHub repo to Vercel
2. **Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
3. **Environment Variables**: None required for this demo

#### Netlify

1. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
2. **Redirects**: Add `_redirects` file for SPA routing:

   ```
   /*    /index.html   200
   ```

#### Static Hosting

For any static hosting provider:

```bash
npm run build
# Upload the contents of ./dist folder
```

### Deployment Verification

After deployment, verify these features work correctly:

- ✅ **Routing**: All routes (`/`, `/design-system`, `/animations`, `/dashboard/*`) load correctly
- ✅ **Assets**: CSS, JS, and image assets load properly
- ✅ **SPA Navigation**: Browser back/forward buttons work
- ✅ **Direct URL Access**: Typing URLs directly in browser works
- ✅ **Mobile Responsive**: Layout adapts to different screen sizes
- ✅ **Dark Mode**: Theme toggle persists across page refreshes

### Development vs Production

| Feature | Development | Production (GitHub Pages) |
|---------|-------------|---------------------------|
| Base URL | `/` | `/tailwind-demo/` |
| Router | BrowserRouter | HashRouter |
| Build Output | `apps/demo-app/dist` | `./dist` |
| Hot Reload | ✅ Enabled | ❌ Static files |
| Source Maps | ✅ Enabled | ❌ Disabled |

### Troubleshooting GitHub Pages Deployment

If you encounter deployment issues, follow this systematic troubleshooting approach:

#### Step 1: Check GitHub Actions Logs

1. Go to your repository's **Actions** tab
2. Click on the failed deployment run
3. Expand the build steps to see detailed error messages

#### Step 2: Common Error Patterns

**"No such file or directory: packages/[package-name]"**

- **Cause**: Package directories not tracked in git
- **Fix**: Check `.gitignore` and ensure packages are committed:

  ```bash
  git add packages/
  git commit -m "Add packages to git tracking"
  ```

**"Module not found: @tailwindspark/[package-name]"**

- **Cause**: Monorepo dependencies not built in correct order
- **Fix**: Update GitHub Actions to build packages individually:

  ```yaml
  - run: npm run build
    working-directory: packages/design-tokens
  - run: npm run build  
    working-directory: packages/ui-components
  - run: npm run build
    working-directory: apps/demo-app
  ```

**"ERR_REQUIRE_ESM" or module system errors**

- **Cause**: Incompatible Vite/plugin versions or missing module type
- **Fix**: Update package.json in affected packages:

  ```json
  {
    "type": "module",
    "devDependencies": {
      "vite": "^7.0.4",
      "@vitejs/plugin-react": "^4.6.0"
    }
  }
  ```

#### Step 3: Local Testing

Before pushing changes, always test locally:

```bash
# Test individual package builds
cd packages/design-tokens && npm run build
cd ../ui-components && npm run build  
cd ../../apps/demo-app && npm run build

# Test the built application
npm run preview
```

#### Step 4: Validate Git Tracking

Ensure all necessary files are tracked:

```bash
# Check what packages files are in git
git ls-files packages/

# Should include:
# packages/design-tokens/package.json
# packages/design-tokens/tailwind.config.js
# packages/ui-components/src/
# packages/ui-components/package.json
# etc.
```

#### Step 5: Deployment Checklist

Before each deployment, verify:

- [ ] All packages build successfully locally
- [ ] `dist` folder is excluded from git (build artifact)
- [ ] `packages/` source files are tracked in git
- [ ] Vite config has correct `base` path
- [ ] HashRouter is used instead of BrowserRouter
- [ ] 404.html exists in public folder
- [ ] GitHub Pages is enabled in repository settings

### CI/CD Pipeline

The deployment pipeline includes:

1. **Dependency Installation**: `npm install` with workspace support
2. **Package Builds**: Individual package builds in dependency order
3. **Type Checking**: TypeScript compilation across all packages  
4. **Asset Optimization**: Vite production build with minification
5. **Deployment**: GitHub Pages deployment with artifact upload
6. **Cache Management**: Turborepo caching for faster subsequent builds

## 📖 GitHub Pages Deployment Saga: The Complete Journey

This section documents the complete journey of getting TailwindSpark to work perfectly on GitHub Pages, including all the challenges encountered, solutions attempted, and what ultimately worked. This serves as both a learning resource and troubleshooting guide for similar projects.

### 🎯 The Goal

**Objective**: Make the GitHub Pages deployment (`https://markhazleton.github.io/tailwind-demo/`) function identically to the local development version, with all assets loading correctly and routing working properly.

### 🚧 The Challenges Encountered

#### **Phase 1: Initial Asset Loading Issues**

**Problem**: TailwindSpark.png logo showing 404 errors on GitHub Pages

- **Symptoms**: Logo displayed locally but failed to load on deployment
- **Error**: `Failed to load resource: the server responded with a status of 404 ()`
- **URL Pattern**: `https://markhazleton.github.io/tailwind-demo/TailwindSpark.png`

#### **Phase 2: Routing System Complications**  

**Problem**: URLs contained unwanted `#` hash symbols

- **Symptoms**: GitHub Pages URLs looked like `https://markhazleton.github.io/tailwind-demo/#/`
- **Issue**: HashRouter was causing client-side routing conflicts with asset resolution
- **Impact**: Navigation worked but assets loaded from incorrect base paths

#### **Phase 3: CI/CD Build Failures**

**Problem**: GitHub Actions build pipeline failing

- **Error**: `Rollup failed to resolve import '/TailwindSpark.png'`
- **Cause**: Absolute import paths failing in CI environment
- **Impact**: Prevented deployment entirely

#### **Phase 4: Asset Path Resolution**

**Problem**: Multiple assets returning 404 errors after routing fixes

- **Affected Assets**: `TailwindSpark.png`, `site.webmanifest`, `sw.js`, favicon files
- **Root Cause**: Hardcoded absolute paths not accounting for `/tailwind-demo/` base path
- **Scope**: Service worker registration, PWA manifest, all static assets

### 🔧 Solutions Attempted

#### **Attempt 1: Vite Asset Import System**

```tsx
// TRIED: Using Vite's import system
import logoImage from '/TailwindSpark.png';
```

- **Result**: ❌ Failed - Caused CI build failures
- **Lesson**: Absolute imports can fail in different environments

#### **Attempt 2: BASE_URL Dynamic Resolution**

```tsx
// TRIED: Environment-aware path resolution
const logoSrc = `${import.meta.env.BASE_URL}TailwindSpark.png`;
```

- **Result**: ✅ Partially Successful - Fixed logo loading but routing issues remained
- **Lesson**: Environment variables work across dev/prod but don't solve routing conflicts

#### **Attempt 3: HashRouter Approach**

```tsx
// TRIED: Client-side routing with hash
import { HashRouter as Router } from 'react-router-dom';
```

- **Result**: ❌ Failed - Created URL fragments that confused asset loading
- **Issue**: Assets loaded from hash route context instead of base path

### ✅ The Complete Solution

#### **Step 1: BrowserRouter with Basename**

```tsx
// SOLUTION: Proper base path configuration
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router basename="/tailwind-demo">
      {/* Routes work correctly within base path */}
    </Router>
  );
}
```

#### **Step 2: Service Worker Path Fix**

```javascript
// BEFORE: Absolute path (failed)
navigator.serviceWorker.register('/sw.js')

// AFTER: Base path aware (works)
navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`)
```

#### **Step 3: HTML Asset Path Updates**

```html
<!-- BEFORE: Root-relative paths (failed) -->
<link rel="icon" href="/favicon.ico" />
<link rel="manifest" href="/site.webmanifest" />

<!-- AFTER: Base path includes (works) -->
<link rel="icon" href="/tailwind-demo/favicon.ico" />
<link rel="manifest" href="/tailwind-demo/site.webmanifest" />
```

#### **Step 4: Web Manifest Configuration**

```json
{
  "name": "TailwindSpark",
  "start_url": "/tailwind-demo/",
  "scope": "/tailwind-demo/",
  "icons": [
    {
      "src": "/tailwind-demo/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

#### **Step 5: Service Worker Cache URLs**

```javascript
const urlsToCache = [
  '/tailwind-demo/',
  '/tailwind-demo/index.html',
  '/tailwind-demo/TailwindSpark.png',
  '/tailwind-demo/TailwindSpark.svg',
];
```

### 🎯 What Worked vs. What Didn't

| Approach | Status | Result | Lesson Learned |
|----------|--------|--------|----------------|
| Vite Asset Imports | ❌ Failed | CI build errors | Absolute imports unreliable in CI |
| HashRouter | ❌ Failed | URL fragments, asset conflicts | Client-side routing complicates asset loading |
| BASE_URL for Assets | ✅ Works | Cross-environment compatibility | Environment variables are reliable |
| BrowserRouter + basename | ✅ Works | Clean URLs, proper routing | Requires SPA configuration for GitHub Pages |
| Hardcoded Base Paths | ✅ Works | All assets load correctly | Static paths work when properly configured |

### 📋 The Final Checklist

For successful GitHub Pages deployment with subdirectory paths:

#### **React Router Configuration**

- [ ] Use `BrowserRouter` instead of `HashRouter`
- [ ] Set `basename="/your-repo-name"` prop
- [ ] Configure 404.html for SPA routing

#### **Asset Path Management**

- [ ] All HTML assets use `/repo-name/` prefix
- [ ] Service worker registration uses `BASE_URL`
- [ ] Web manifest paths include base directory
- [ ] Service worker cache URLs include base path

#### **Build Configuration**

- [ ] Vite config has correct `base: '/repo-name/'`
- [ ] Logo component uses `BASE_URL` for dynamic paths
- [ ] Build output goes to correct directory structure

#### **Static Files Update**

- [ ] Update `site.webmanifest` icon paths and start URL
- [ ] Update `sw.js` cache URL array
- [ ] Verify all `index.html` asset references

### 🚀 Results Achieved

**Before vs. After Comparison:**

| Aspect | Before (Broken) | After (Working) |
|--------|----------------|-----------------|
| **URL Structure** | `site.com/#/page` | `site.com/page` |
| **Logo Loading** | ❌ 404 errors | ✅ Loads perfectly |
| **Service Worker** | ❌ Registration failed | ✅ Caches correctly |
| **Web Manifest** | ❌ 404 errors | ✅ PWA ready |
| **Navigation** | ❌ Broken links | ✅ All routes work |
| **CI/CD Pipeline** | ❌ Build failures | ✅ Automatic deployment |

### 🎓 Key Learnings

1. **Environment Parity**: Development and production environments can behave differently with asset loading
2. **Router Impact**: Router choice significantly affects how assets are resolved
3. **Base Path Consistency**: All static files must be updated when using subdirectory deployment
4. **CI/CD Considerations**: Build systems may handle imports differently than dev servers
5. **Static File Management**: PWA files (manifest, service worker) need manual path updates

### 💡 Best Practices Derived

1. **Always use basename** with BrowserRouter for subdirectory deployments
2. **Audit all static files** when changing base paths - HTML, manifest, service worker
3. **Test asset loading** in production-like environments before deployment
4. **Use environment variables** for dynamic path resolution where possible
5. **Document the deployment path** for future maintenance and troubleshooting

This journey demonstrates the complexity of modern web deployment and the importance of understanding how different systems interact. The final solution is robust, maintainable, and provides a template for similar projects.

### Deployment History

This project overcame several technical challenges during GitHub Pages setup:

1. **Initial Setup**: Configured Vite base path and HashRouter for SPA compatibility
2. **Module Resolution**: Fixed monorepo package discovery in CI environment  
3. **Build Dependencies**: Resolved Turborepo workspace detection issues
4. **Git Tracking**: Corrected .gitignore patterns that excluded packages directory
5. **Version Compatibility**: Updated Vite and React plugin versions for ESM support
6. **Asset Path Resolution**: Complete overhaul of routing system and static file paths
7. **PWA Configuration**: Updated manifest and service worker for subdirectory deployment

The current deployment process is stable and automatically deploys on every push to main.

## 🤝 Contributing to TailwindSpark

TailwindSpark is part of the open-source WebSpark portfolio. Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contributing Guidelines

- Follow the existing code style and conventions
- Add TypeScript types for new components
- Include accessibility features (ARIA labels, keyboard navigation)
- Test responsive design across different screen sizes
- Update documentation for new features

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments & Credits

### Technology Stack

- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [React](https://reactjs.org) - JavaScript library for building user interfaces
- [React Router](https://reactrouter.com) - Declarative routing for React applications
- [TypeScript](https://typescriptlang.org) - Typed superset of JavaScript
- [Vite](https://vitejs.dev) - Next generation frontend tooling
- [Turborepo](https://turbo.build) - High-performance build system
- [Lucide React](https://lucide.dev) - Beautiful & consistent icon toolkit

### WebSpark Portfolio

Created by **Mark Hazleton** as part of the WebSpark suite of applications:

- **Portfolio**: [markhazleton.com](https://markhazleton.com)
- **WebSpark Main**: [webspark.markhazleton.com](https://webspark.markhazleton.com)
- **Professional**: [LinkedIn](https://www.linkedin.com/in/markhazleton/) | [GitHub](https://github.com/markhazleton/)

## 📞 Support & Community

### Getting Help

1. **Documentation**: Check this comprehensive README first
2. **Issues**: [GitHub Issues](https://github.com/MarkHazleton/tailwind-demo/issues) for bug reports and feature requests
3. **Portfolio**: Visit [WebSpark](https://webspark.markhazleton.com) for related projects
4. **Articles**: Read about the [WebSpark Evolution](https://markhazleton.com/articles/webspark-the-next-evolution-of-web-project-mechanics.html)

### Connect with the Creator

- **Professional Profile**: [Mark Hazleton](https://markhazleton.com)
- **LinkedIn**: [Connect on LinkedIn](https://www.linkedin.com/in/markhazleton/)
- **GitHub**: [Follow on GitHub](https://github.com/markhazleton/)
- **Articles**: [Read Web Development Articles](https://markhazleton.com/articles.html)

---

## 🌟 About the Creator

**Mark Hazleton** is a Solutions Architect passionate about making technology work for business. With over two decades of web development experience, Mark focuses on practical solutions that deliver real value without unnecessary complexity.

### Philosophy

>
> "Lifelong learner, not sidetracked by sizzle" - Mark Hazleton

This project embodies that philosophy by focusing on:

- **Practical Implementation** over theoretical concepts
- **Real-world Usability** over flashy features  
- **Educational Value** over marketing hype
- **Accessible Design** over exclusive aesthetics

---

**TailwindSpark** ✨ | Part of [WebSpark Portfolio](https://webspark.markhazleton.com) | Built with ❤️ by [Mark Hazleton](https://markhazleton.com)

*Showcasing the power of Tailwind CSS through practical, accessible, and beautiful user interfaces with enterprise-grade features and optimizations*
