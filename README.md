# Tailwind CSS Demo Monorepo

A comprehensive demonstration monorepo showcasing modern web development with React, TypeScript, and Tailwind CSS, organized using Turborepo for efficient workspace management.

## 🚀 Features

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
- **Animation Showcase** (`/animations`): Complete demonstration of Tailwind's animation utilities including:
  - Transition effects (scale, color, opacity, rotate, translate, shadow)
  - Keyframe animations (spin, ping, pulse, bounce)
  - Interactive animations (loading states, modal transitions)
  - Complex animations (floating effects, morphing buttons)
  - User-triggered animations and state-based transitions
- **SaaS Dashboard** (`/dashboard`): Full-featured business dashboard for "PromptSpark" with:
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
│       │   ├── components/       # Shared components (Layout, ThemeToggle, DashboardLayout)
│       │   ├── pages/            # Route pages (HomePage, DesignSystemPage, AnimationPage, DashboardPage, AnalyticsPage, UsersPage, SettingsPage)
│       │   ├── sections/         # Component showcases (ButtonShowcase, FormShowcase, AnimationShowcase, etc.)
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
- **Animation Showcase Page**: Complete demonstration of Tailwind's animation and transition utilities
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
