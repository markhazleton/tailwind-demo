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
  headerActions 
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
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <div className="flex items-center gap-3 p-6 border-b border-gray-200 dark:border-gray-700">
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
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Back to Main App */}
          <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
            >
              <span className="text-lg">🏠</span>
              Back to Main App
            </Link>
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-700 rounded-full flex items-center justify-center text-white text-sm font-medium">
              MH
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">Mark Hazleton</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">WebSpark Creator</p>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
            <a 
              href="https://webspark.markhazleton.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
            >
              WebSpark Portfolio →
            </a>
          </div>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle sidebar"
                title="Toggle sidebar"
              >
                <IconMenu />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{pageTitle}</h1>
                {pageDescription && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{pageDescription}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Custom header actions */}
              {headerActions}

              {/* Search */}
              <div className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2 max-w-md">
                <IconSearch />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 flex-1 text-sm"
                />
              </div>

              {/* Notifications */}
              <button 
                className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="View notifications"
                title="View notifications"
              >
                <IconBell />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Profile */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-700 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  JD
                </div>
                <span className="hidden md:block text-sm font-medium text-gray-900 dark:text-gray-100">John Doe</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
};
