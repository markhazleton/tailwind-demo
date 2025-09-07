import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock global constants that are injected by Vite
(
  globalThis as typeof globalThis & { __BUILD_DATE__: string; __BUILD_VERSION__: string }
).__BUILD_DATE__ = '2025-01-07T00:00:00.000Z';
(
  globalThis as typeof globalThis & { __BUILD_DATE__: string; __BUILD_VERSION__: string }
).__BUILD_VERSION__ = '2025.01.07.0000';

// Mock localStorage
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
    length: 0,
    key: vi.fn(),
  },
  writable: true,
});

// Mock sessionStorage
Object.defineProperty(window, 'sessionStorage', {
  value: {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
    length: 0,
    key: vi.fn(),
  },
  writable: true,
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
