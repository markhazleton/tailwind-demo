import { Moon, Sun } from 'lucide-react';
import React from 'react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 rounded-lg p-2 transition-colors"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="text-secondary-600 dark:text-secondary-400 h-5 w-5" />
      ) : (
        <Moon className="text-secondary-600 dark:text-secondary-400 h-5 w-5" />
      )}
    </button>
  );
};
