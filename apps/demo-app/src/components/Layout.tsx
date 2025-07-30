import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  isDark: boolean;
  toggleTheme: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, isDark, toggleTheme }) => {
  const location = useLocation();
  const [isDemosOpen, setIsDemosOpen] = useState(false);
  const demosRef = useRef<HTMLDivElement>(null);

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

  const isDemoPage = demoItems.some(item => location.pathname === item.path) || location.pathname === '/demos';

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✨</span>
                </div>
                <div>
                  <h1 className="font-bold text-gray-900 dark:text-gray-100">
                    TailwindSpark
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    WebSpark Portfolio
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
                        ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Demos Dropdown */}
                <div className="relative" ref={demosRef}>
                  <button
                    onClick={() => setIsDemosOpen(!isDemosOpen)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                      isDemoPage
                        ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    Demos
                    <svg 
                      className={`w-4 h-4 transition-transform ${isDemosOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isDemosOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                      <Link
                        to="/demos"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => setIsDemosOpen(false)}
                      >
                        <div className="font-medium">All Demos Overview</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Compare all examples</div>
                      </Link>
                      <div className="border-t border-gray-200 dark:border-gray-600 my-2"></div>
                      {demoItems.map((demo) => (
                        <Link
                          key={demo.path}
                          to={demo.path}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            location.pathname === demo.path
                              ? 'bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
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
              <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs">✨</span>
              </div>
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                TailwindSpark
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Part of the <a
                href="https://webspark.markhazleton.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
              >
                WebSpark Portfolio
              </a> by <a
                href="https://markhazleton.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
              >
                Mark Hazleton
              </a>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
              Built with React 19, TypeScript, and Tailwind CSS in a Turborepo monorepo.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://github.com/MarkHazleton/tailwind-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm"
              >
                GitHub
              </a>
              <a
                href="https://webspark.markhazleton.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm"
              >
                WebSpark
              </a>
              <a
                href="https://markhazleton.com/articles.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm"
              >
                Articles
              </a>
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm"
              >
                Tailwind CSS
              </a>
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm"
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
