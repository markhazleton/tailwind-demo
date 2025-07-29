import { Button } from '@tailwind-demo/ui-components';
import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Welcome to Tailwind Demo
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A modern React application showcasing Tailwind CSS components with TypeScript.
            Explore our comprehensive design system and component library.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Component Library
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Reusable UI components built with Tailwind CSS and TypeScript.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Dark Mode
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Automatic dark mode support with system preference detection.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              SaaS Dashboard
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Full-featured analytics dashboard for PromptSpark with responsive design.
            </p>
            <Link to="/dashboard" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm">
              View Dashboard →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-wrap gap-4 justify-center">
            <Link to="/design-system">
              <Button variant="primary" size="lg">
                View Design System
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="secondary" size="lg">
                SaaS Dashboard
              </Button>
            </Link>
            <Button variant="ghost" size="lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Features
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Everything you need to build modern web applications
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
                  Design System
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Complete design system with buttons, forms, cards, modals, and more. All components come with multiple variants and states.
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
                  Performance Optimized
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Built with Vite for fast development and optimized production builds. TypeScript for type safety.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
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
