# Tailwind CSS Demo Monorepo

A comprehensive demonstration monorepo showcasing modern web development with React, TypeScript, and Tailwind CSS, organized using Turborepo for efficient workspace management.

## 🚀 Features

- **Monorepo Architecture**: Organized with Turborepo for optimal build caching and task orchestration
- **TypeScript First**: Full type safety across all packages with comprehensive interfaces
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Component Library**: Reusable UI components (Button, Card, Modal, Forms) with multiple variants
- **Design System Showcase**: Comprehensive demonstration of all components with interactive examples
- **Routing**: React Router integration with dedicated pages for different features
- **Dark Mode**: System preference detection with manual toggle and persistent storage
- **Form Components**: Complete form library with validation, icons, and accessibility
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Accessibility**: WCAG compliant components with proper ARIA attributes
- **Modern Tooling**: Vite, ESLint, Prettier, and VS Code integration

## 🌐 Live Demo

Visit the live demo at: <http://localhost:5173> (when running locally)

### Available Routes

- **Home** (`/`): Welcome page with feature overview and navigation
- **Design System** (`/design-system`): Comprehensive showcase of all Tailwind components including:
  - Button variations (6 variants, 4 sizes, with icons and states)
  - Form components (inputs, textareas, selects, checkboxes, radio buttons)
  - Card layouts (3 variants with headers, content, and footers)
  - Modal dialogs (5 sizes with accessibility features)
  - Interactive examples with live code demonstration

## 📁 Project Structure

```
tailwind-demo/
├── apps/
│   └── demo-app/                 # Vite React demo application
│       ├── src/
│       │   ├── components/       # Shared components (Layout, ThemeToggle)
│       │   ├── pages/            # Route pages (HomePage, DesignSystemPage)
│       │   ├── sections/         # Component showcases (ButtonShowcase, FormShowcase, etc.)
│       │   └── App.tsx           # Main application with routing
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

### `@tailwind-demo/design-tokens`

Centralized design system containing:

- **Color Palette**: Primary, secondary, success, warning, error colors with 50-950 shades
- **Typography**: Font families, sizes, and weights
- **Spacing**: Consistent spacing scale
- **Border Radius**: Standardized border radius values
- **Shadows**: Elevation system with multiple shadow levels
- **Animations**: Custom keyframes and transitions

### `@tailwind-demo/ui-components`

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
- **Component Gallery**: Button, form, card, and modal variations
- **Routing**: React Router with navigation between Home and Design System pages
- **Responsive Layouts**: Grid systems and flexible designs
- **Dark Mode Toggle**: System preference detection with manual override
- **Form Validation**: Live examples with error states and validation
- **Accessibility Demos**: Keyboard navigation and screen reader support

## 🎨 Design System

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

### Navigation Features

- **Sticky Header**: Persistent navigation with active route highlighting
- **Responsive Menu**: Adapts to different screen sizes
- **Theme Toggle**: Available on all pages with state preservation
- **Smooth Transitions**: CSS transitions between route changes

```tsx
// Routing implementation
<Router>
  <Layout isDark={isDark} toggleTheme={toggleTheme}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/design-system" element={<DesignSystemShowcase />} />
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
```

## ♿ Accessibility

All components are built with accessibility in mind:

- **Semantic HTML**: Proper use of semantic elements
- **ARIA Attributes**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant color combinations
- **Focus Management**: Visible focus indicators and logical tab order

## 🚀 Deployment

The demo application can be deployed to various platforms:

### Vercel (Recommended)

```bash
npm run build
# Deploy the apps/demo-app/dist folder
```

### Netlify

```bash
npm run build
# Deploy the apps/demo-app/dist folder
```

### GitHub Pages

```bash
npm run build
# Deploy the apps/demo-app/dist folder to gh-pages branch
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [React](https://reactjs.org) - JavaScript library for building user interfaces
- [React Router](https://reactrouter.com) - Declarative routing for React applications
- [TypeScript](https://typescriptlang.org) - Typed superset of JavaScript
- [Vite](https://vitejs.dev) - Next generation frontend tooling
- [Turborepo](https://turbo.build) - High-performance build system
- [Lucide React](https://lucide.dev) - Beautiful & consistent icon toolkit

## 📞 Support

If you have any questions or need help getting started, please:

1. Check the [Issues](https://github.com/MarkHazleton/tailwind-demo/issues) page
2. Create a new issue if your question isn't already addressed
3. Provide detailed information about your setup and the problem you're experiencing

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
A Demo of the Tailwind CSS Library
