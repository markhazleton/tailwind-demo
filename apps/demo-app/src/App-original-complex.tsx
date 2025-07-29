import React from 'react';

function App() {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900 transition-colors">
      {/* Header */}
      <header className="border-b border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg"></div>
              <div>
                <h1 className="font-bold text-gray-900 dark:text-gray-100">
                  Tailwind Demo
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  React + TypeScript + Tailwind CSS
                </p>
              </div>
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
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Welcome to Tailwind Demo
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A modern React application showcasing Tailwind CSS components with TypeScript.
              Click the theme toggle to switch between light and dark mode.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                Monorepo Setup
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Organized with Turborepo for efficient development workflow.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;a
                href="https://github.com/MarkHazleton/tailwind-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
              </a>
              <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-secondary-100 mb-6">
            Beautiful UI Components
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-400 mb-8 max-w-3xl mx-auto">
            A comprehensive demonstration of reusable React components built with
            TypeScript and styled with Tailwind CSS. Featuring dark mode, responsive
            design, and modern accessibility practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#components"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
            >
              Explore Components
              <ExternalLink size={16} />
            </a>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-secondary-300 dark:border-secondary-600 hover:bg-secondary-50 dark:hover:bg-secondary-800 text-secondary-700 dark:text-secondary-300 font-medium rounded-lg transition-colors"
            >
              Learn Tailwind CSS
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white dark:bg-secondary-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100 mb-4">
              Key Features
            </h2>
            <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              Built with modern web development best practices and designed for
              scalability and maintainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="text-primary-600 dark:text-primary-400 font-bold text-xl">TS</div>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100 mb-2">
                TypeScript First
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                Full type safety with comprehensive interfaces and excellent developer experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-success-100 dark:bg-success-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-6 h-6 text-success-600 dark:text-success-400" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100 mb-2">
                Responsive Design
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                Mobile-first approach with adaptive layouts that work on all devices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-warning-100 dark:bg-warning-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-warning-500 to-warning-600 rounded"></div>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100 mb-2">
                Dark Mode
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                System preference detection with manual toggle and persistent storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Components Showcase */}
      <main id="components" className="py-16 bg-secondary-50 dark:bg-secondary-950">
        <div className="container-custom space-y-24">
          <ButtonShowcase />
          <CardShowcase />
          <ModalShowcase />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-white dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-700">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded"></div>
              <span className="font-semibold text-secondary-900 dark:text-secondary-100">
                Tailwind Demo
              </span>
            </div>
            <p className="text-secondary-600 dark:text-secondary-400 mb-4">
              Built with React, TypeScript, and Tailwind CSS in a Turborepo monorepo.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/MarkHazleton/tailwind-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Tailwind CSS
              </a>
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                React
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
