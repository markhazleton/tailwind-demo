import baseConfig from '../../eslint.config.js';

export default [
  ...baseConfig,
  {
    files: ['**/*.{ts,tsx,js}'],
    rules: {
      // Design tokens specific rules
      '@typescript-eslint/no-explicit-any': 'off', // Allow any for flexible token definitions
    },
  },
];
