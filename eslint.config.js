import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { rules as customRules } from './eslint-rules/no-raw-primary-class.js';

export default [
  // Global ignores
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/.turbo/**',
      '**/.next/**',
      '**/build/**',
      '**/coverage/**',
    ],
  },

  // Base configuration for all JS/TS files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
      'no-raw-primary-class/no-raw-primary-class': 'error',
    },
  },

  // TypeScript configuration
  ...tseslint.configs.recommended,

  // TypeScript-specific rules
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'no-raw-primary-class/no-raw-primary-class': 'error',
    },
  },

  // Plugin injection for custom rule namespace
  {
    plugins: {
      'no-raw-primary-class': { rules: customRules },
    },
  },

  // Configuration files
  {
    files: ['**/*.config.{js,ts}', '**/vite.config.{js,ts}', '**/tailwind.config.{js,ts}'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
];
