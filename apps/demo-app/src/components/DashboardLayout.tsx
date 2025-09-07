import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

// Icons
const IconDashboard = () => <span>📊</span>;
const IconUsers = () => <span>👥</span>;
const IconAnalytics = () => <span>📈</span>;
const IconSettings = () => <span>⚙️</span>;
const IconBell = () => <span>🔔</span>;
const IconSearch = () => <span>🔍</span>;
const IconMenu = () => <span>☰</span>;

interface DashboardLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  pageDescription?: string;
  headerActions?: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  pageTitle,
  pageDescription,
  headerActions,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const sidebarItems = [
    { icon: <IconDashboard />, label: 'Dashboard', href: '/dashboard' },
    { icon: <IconAnalytics />, label: 'Analytics', href: '/analytics' },
    { icon: <IconUsers />, label: 'Users', href: '/users' },
    { icon: <IconSettings />, label: 'Settings', href: '/settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="flex items-center gap-3 border-b border-gray-200 p-6 dark:border-gray-700">
          <Logo size="sm" showText={false} />
          <div>
            <h1 className="font-bold text-gray-900 dark:text-gray-100">TailwindSpark</h1>
            <p className="text-xs text-gray-600 dark:text-gray-400">Dashboard Demo</p>
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Back to Main App */}
          <div className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
            <Link
              to="/"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100"
            >
              <span className="text-lg">🏠</span>
              Back to Main App
            </Link>
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 p-4 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="from-primary-500 to-accent-700 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br text-sm font-medium text-white">
              MH
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-100">
                Mark Hazleton
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">WebSpark Creator</p>
            </div>
          </div>
          <div className="mt-2 border-t border-gray-100 pt-2 dark:border-gray-700">
            <a
              href="https://webspark.markhazleton.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-xs"
            >
              WebSpark Portfolio →
            </a>
          </div>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="rounded-lg bg-gray-100 p-2 transition-colors hover:bg-gray-200 lg:hidden dark:bg-gray-700 dark:hover:bg-gray-600"
                aria-label="Toggle sidebar"
                title="Toggle sidebar"
              >
                <IconMenu />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{pageTitle}</h1>
                {pageDescription && (
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{pageDescription}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Custom header actions */}
              {headerActions}

              {/* Search */}
              <div className="hidden max-w-md items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 md:flex dark:bg-gray-700">
                <IconSearch />
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 border-none bg-transparent text-sm text-gray-900 placeholder-gray-500 outline-none dark:text-gray-100 dark:placeholder-gray-400"
                />
              </div>

              {/* Notifications */}
              <button
                className="relative rounded-lg bg-gray-100 p-2 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                aria-label="View notifications"
                title="View notifications"
              >
                <IconBell />
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
              </button>

              {/* Profile */}
              <div className="flex items-center gap-2">
                <div className="from-primary-500 to-accent-700 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br text-sm font-medium text-white">
                  JD
                </div>
                <span className="hidden text-sm font-medium text-gray-900 md:block dark:text-gray-100">
                  John Doe
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-50 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
};
