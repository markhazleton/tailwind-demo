import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useKeyboardShortcuts } from '../hooks/useKeyboardShortcuts';
import { BuildInfo } from './BuildInfo';
import { Logo } from './Logo';
import { SearchComponent } from './SearchComponent';

interface LayoutProps {
  children: React.ReactNode;
  isDark: boolean;
  toggleTheme: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, isDark, toggleTheme }) => {
  const location = useLocation();
  const [isDemosOpen, setIsDemosOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const demosRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcuts
  useKeyboardShortcuts({
    onSearch: () => setIsSearchOpen(true),
    onThemeToggle: toggleTheme,
    onEscape: () => {
      setIsSearchOpen(false);
      setIsDemosOpen(false);
      setIsMobileMenuOpen(false);
    },
  });

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/design-system', label: 'Components' },
    { path: '/animations', label: 'Animations' },
  ];

  const demoItems = [
    { path: '/dashboard', label: 'SaaS Dashboard' },
    { path: '/ecommerce', label: 'E-commerce Store' },
    { path: '/marketing', label: 'Marketing Landing' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (demosRef.current && !demosRef.current.contains(event.target as Node)) {
        setIsDemosOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isDemoPage =
    demoItems.some(item => location.pathname === item.path) || location.pathname === '/demos';

  return (
    <div className="min-h-screen bg-white transition-colors dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
                <Logo size="md" />
              </Link>

              {/* Navigation */}
              <nav className="hidden items-center gap-6 md:flex">
                {navItems.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Demos Dropdown */}
                <div className="relative" ref={demosRef}>
                  <button
                    onClick={() => setIsDemosOpen(!isDemosOpen)}
                    className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isDemoPage
                        ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100'
                    }`}
                  >
                    Demos
                    <svg
                      className={`h-4 w-4 transition-transform ${isDemosOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isDemosOpen && (
                    <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-lg border border-gray-200 bg-white py-2 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                      <Link
                        to="/demos"
                        className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                        onClick={() => setIsDemosOpen(false)}
                      >
                        <div className="font-medium">All Demos Overview</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Compare all examples
                        </div>
                      </Link>
                      <div className="my-2 border-t border-gray-200 dark:border-gray-600"></div>
                      {demoItems.map(demo => (
                        <Link
                          key={demo.path}
                          to={demo.path}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            location.pathname === demo.path
                              ? 'bg-primary-50 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300'
                              : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                          }`}
                          onClick={() => setIsDemosOpen(false)}
                        >
                          {demo.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              {/* Mobile menu button - only visible on small screens */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-lg bg-gray-100 p-2 transition-colors hover:bg-gray-200 md:hidden dark:bg-gray-800 dark:hover:bg-gray-700"
                aria-label="Toggle mobile menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>

              <button
                onClick={() => setIsSearchOpen(true)}
                className="rounded-lg bg-gray-100 p-2 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                aria-label="Search"
              >
                🔍
              </button>
              <button
                onClick={toggleTheme}
                className="rounded-lg bg-gray-100 p-2 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-gray-200 md:hidden dark:border-gray-700">
            <div className="space-y-1 bg-white px-4 pb-3 pt-2 dark:bg-gray-900">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Demos Section */}
              <div className="pt-2">
                <div className="px-3 py-2 text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Demos
                </div>
                <Link
                  to="/demos"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  All Demos Overview
                </Link>
                {demoItems.map(demo => (
                  <Link
                    key={demo.path}
                    to={demo.path}
                    className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                      location.pathname === demo.path
                        ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {demo.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Search Component */}
      <SearchComponent isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-12 dark:border-gray-700 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Logo size="lg" showText={false} />
            </div>
            <h3 className="text-4xl font-bold md:text-5xl">
              <span className="from-primary-600 to-accent-700 bg-gradient-to-r bg-clip-text text-transparent">
                TailwindSpark
              </span>
            </h3>
          </div>
          <p className="mb-4 text-center text-sm text-gray-500 dark:text-gray-500">
            Built with React 19, TypeScript, and Tailwind CSS in a Turborepo monorepo.
          </p>

          {/* Build Information */}
          <div className="mb-4 flex justify-center">
            <BuildInfo className="text-center" />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {/* Links continue below */}
            <a
              href="https://github.com/MarkHazleton/tailwind-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-600 dark:hover:text-primary-400 text-sm text-gray-600 transition-colors dark:text-gray-400"
            >
              GitHub
            </a>
            <a
              href="https://webspark.markhazleton.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-600 dark:hover:text-primary-400 text-sm text-gray-600 transition-colors dark:text-gray-400"
            >
              WebSpark
            </a>
            <a
              href="https://markhazleton.com/articles.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-600 dark:hover:text-primary-400 text-sm text-gray-600 transition-colors dark:text-gray-400"
            >
              Articles
            </a>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-600 dark:hover:text-primary-400 text-sm text-gray-600 transition-colors dark:text-gray-400"
            >
              Tailwind CSS
            </a>
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-600 dark:hover:text-primary-400 text-sm text-gray-600 transition-colors dark:text-gray-400"
            >
              React
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
