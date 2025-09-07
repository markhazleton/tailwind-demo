import React from 'react';

function App() {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
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
    <div className="min-h-screen bg-white transition-colors dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600"></div>
              <div>
                <h1 className="font-bold text-gray-900 dark:text-gray-100">Tailwind Demo</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  React + TypeScript + Tailwind CSS
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
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
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
              Welcome to Tailwind Demo
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400">
              A modern React application showcasing Tailwind CSS components with TypeScript. Click
              the theme toggle to switch between light and dark mode.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Component Library
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Reusable UI components built with Tailwind CSS and TypeScript.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Dark Mode
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Automatic dark mode support with system preference detection.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Monorepo Setup
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Organized with Turborepo for efficient development workflow.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex gap-4">
              <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg transition-colors hover:bg-blue-700 hover:shadow-xl">
                Primary Button
              </button>
              <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-900 shadow-lg transition-colors hover:bg-gray-50 hover:shadow-xl dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700">
                Secondary Button
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-12 dark:border-gray-700 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="h-6 w-6 rounded bg-gradient-to-br from-blue-500 to-blue-600"></div>
              <span className="font-semibold text-gray-900 dark:text-gray-100">Tailwind Demo</span>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Built with React, TypeScript, and Tailwind CSS in a Turborepo monorepo.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/MarkHazleton/tailwind-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                GitHub
              </a>
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                Tailwind CSS
              </a>
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
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
