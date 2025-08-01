import { Button } from '@tailwindspark/ui-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { TailwindSparkBrand } from '../components/TailwindSparkBrand';

export const HomePage: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <TailwindSparkBrand variant="hero" logoTitleTogether={true} />
          <div className="text-center mt-8">
            <p className="text-lg text-gray-500 dark:text-gray-500 italic">
              "Making technology work for business - lifelong learner, not sidetracked by sizzle."
            </p>
          </div>
        </div>

        {/* WebSpark Portfolio Integration */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 p-6 rounded-lg mb-12 border border-primary-200 dark:border-primary-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            🌐 Part of the WebSpark Ecosystem
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            TailwindSpark demonstrates practical application of modern web technologies as part of the WebSpark suite, 
            showcasing real-world implementations rather than theoretical concepts. Explore other WebSpark applications:
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://webspark.markhazleton.com" target="_blank" rel="noopener noreferrer" 
               className="inline-flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors">
              🌟 WebSpark Portfolio
            </a>
            <span className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
              🤖 PromptSpark - AI Prompts
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
              🍳 RecipeSpark - Recipe Management
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
              🧠 TriviaSpark - Interactive Quizzes
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Component Library
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Production-ready UI components built with Tailwind CSS, TypeScript, and accessibility best practices.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Dark Mode & Accessibility
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              WCAG compliant components with automatic dark mode support and system preference detection.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              TailwindSpark Dashboard
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Full-featured SaaS dashboard showcasing modern UI patterns with responsive design and interactive analytics.
            </p>
            <Link to="/dashboard" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm">
              View Dashboard →
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              E-commerce Store
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Modern online store with product grids, filtering, shopping cart, and responsive checkout flow.
            </p>
            <Link to="/ecommerce" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm">
              View Store →
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Marketing Landing Page
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Agency-style landing page with hero sections, testimonials, portfolio gallery, and contact forms.
            </p>
            <Link to="/marketing" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm">
              View Landing Page →
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Animation Showcase
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Interactive animations, transitions, and micro-interactions demonstrating Tailwind's animation utilities.
            </p>
            <Link to="/animations" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm">
              View Animations →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-wrap gap-4 justify-center">
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
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              TailwindSpark Features
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Professional-grade components and patterns for modern web applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">🎨</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Professional Design System
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Production-ready component library with buttons, forms, cards, modals, and animations. 
                  All components include TypeScript definitions and accessibility features.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">⚡</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Performance & Modern Stack
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Built with React 19, TypeScript 5.3, Tailwind CSS 3.4, and Vite 7 for optimal performance. 
                  Monorepo architecture with Turborepo for efficient builds.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">🌙</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Dark Mode Support
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Seamless dark mode with system preference detection and manual toggle. All components adapt automatically.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">📦</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Monorepo Architecture
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Organized with Turborepo for efficient development. Shared design tokens and UI components across projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
