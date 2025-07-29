import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  isDark: boolean;
  toggleTheme: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, isDark, toggleTheme }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/design-system', label: 'Design System' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg"></div>
                <div>
                  <h1 className="font-bold text-gray-900 dark:text-gray-100">
                    Tailwind Demo
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    React + TypeScript + Tailwind CSS
                  </p>
                </div>
              </Link>
              
              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded"></div>
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                Tailwind Demo
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Built with React, TypeScript, and Tailwind CSS in a Turborepo monorepo.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/MarkHazleton/tailwind-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Tailwind CSS
              </a>
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                React
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
