/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    typecheck: {
      checker: 'typescript',
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@tailwindspark/design-tokens': resolve(__dirname, '../design-tokens'),
    },
  },
});
