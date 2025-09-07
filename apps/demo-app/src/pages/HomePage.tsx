import { Button } from '@tailwindspark/ui-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { TailwindSparkBrand } from '../components/TailwindSparkBrand';

export const HomePage: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-12">
          <TailwindSparkBrand variant="hero" logoTitleTogether={true} />
          <div className="mt-8 text-center">
            <p className="text-lg italic text-gray-500 dark:text-gray-500">
              "Making technology work for business - lifelong learner, not sidetracked by sizzle."
            </p>
          </div>
        </div>

        {/* WebSpark Portfolio Integration */}
        <div className="from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border-primary-200 dark:border-primary-800 mb-12 rounded-lg border bg-gradient-to-r p-6">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
            🌐 Part of the WebSpark Ecosystem
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            TailwindSpark demonstrates practical application of modern web technologies as part of
            the WebSpark suite, showcasing real-world implementations rather than theoretical
            concepts. Explore other WebSpark applications:
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://webspark.markhazleton.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 hover:bg-primary-200 dark:hover:bg-primary-800 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors"
            >
              🌟 WebSpark Portfolio
            </a>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              🤖 PromptSpark - AI Prompts
            </span>
            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
              🍳 RecipeSpark - Recipe Management
            </span>
            <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800 dark:bg-orange-900 dark:text-orange-200">
              🧠 TriviaSpark - Interactive Quizzes
            </span>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Component Library
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Production-ready UI components built with Tailwind CSS, TypeScript, and accessibility
              best practices.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Dark Mode & Accessibility
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              WCAG compliant components with automatic dark mode support and system preference
              detection.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
              TailwindSpark Dashboard
            </h3>
            <p className="mb-3 text-gray-600 dark:text-gray-400">
              Full-featured SaaS dashboard showcasing modern UI patterns with responsive design and
              interactive analytics.
            </p>
            <Link
              to="/dashboard"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium"
            >
              View Dashboard →
            </Link>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
              E-commerce Store
            </h3>
            <p className="mb-3 text-gray-600 dark:text-gray-400">
              Modern online store with product grids, filtering, shopping cart, and responsive
              checkout flow.
            </p>
            <Link
              to="/ecommerce"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium"
            >
              View Store →
            </Link>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Marketing Landing Page
            </h3>
            <p className="mb-3 text-gray-600 dark:text-gray-400">
              Agency-style landing page with hero sections, testimonials, portfolio gallery, and
              contact forms.
            </p>
            <Link
              to="/marketing"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium"
            >
              View Landing Page →
            </Link>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Animation Showcase
            </h3>
            <p className="mb-3 text-gray-600 dark:text-gray-400">
              Interactive animations, transitions, and micro-interactions demonstrating Tailwind's
              animation utilities.
            </p>
            <Link
              to="/animations"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium"
            >
              View Animations →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-wrap justify-center gap-4">
            <Link to="/design-system">
              <Button variant="primary" size="lg">
                Explore Components
              </Button>
            </Link>
            <Link to="/animations">
              <Button variant="secondary" size="lg">
                View Animations
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="ghost" size="lg">
                SaaS Dashboard Demo
              </Button>
            </Link>
            <Link to="/ecommerce">
              <Button variant="ghost" size="lg">
                E-commerce Store Demo
              </Button>
            </Link>
            <Link to="/marketing">
              <Button variant="ghost" size="lg">
                Marketing Landing Page
              </Button>
            </Link>
          </div>
          <div className="mt-6">
            <a
              href="https://webspark.markhazleton.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
            >
              Visit WebSpark Portfolio →
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
              TailwindSpark Features
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Professional-grade components and patterns for modern web applications
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500">
                  <span className="font-semibold text-white">🎨</span>
                </div>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Professional Design System
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Production-ready component library with buttons, forms, cards, modals, and
                  animations. All components include TypeScript definitions and accessibility
                  features.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500">
                  <span className="font-semibold text-white">⚡</span>
                </div>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Performance & Modern Stack
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Built with React 19, TypeScript 5.3, Tailwind CSS 4.1, and Vite 7 for optimal
                  performance. Monorepo architecture with Turborepo for efficient builds.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-accent-500 flex h-8 w-8 items-center justify-center rounded-lg">
                  <span className="font-semibold text-white">🌙</span>
                </div>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Dark Mode Support
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Seamless dark mode with system preference detection and manual toggle. All
                  components adapt automatically.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500">
                  <span className="font-semibold text-white">📦</span>
                </div>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Monorepo Architecture
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Organized with Turborepo for efficient development. Shared design tokens and UI
                  components across projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
