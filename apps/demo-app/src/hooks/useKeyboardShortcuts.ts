import { useEffect } from 'react';

interface KeyboardShortcutsProps {
  onSearch?: () => void;
  onThemeToggle?: () => void;
  onEscape?: () => void;
}

export const useKeyboardShortcuts = ({
  onSearch,
  onThemeToggle,
  onEscape,
}: KeyboardShortcutsProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in input fields
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement
      ) {
        return;
      }

      // Search shortcut: Ctrl/Cmd + K
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        onSearch?.();
      }

      // Theme toggle: Ctrl/Cmd + T
      if ((event.ctrlKey || event.metaKey) && event.key === 't') {
        event.preventDefault();
        onThemeToggle?.();
      }

      // Escape key
      if (event.key === 'Escape') {
        onEscape?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onSearch, onThemeToggle, onEscape]);
};
