import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import baseConfig from '../../eslint.config.js';

export default [
  ...baseConfig,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // UI components specific rules
      '@typescript-eslint/no-empty-interface': 'off', // Allow empty interfaces for component props
      '@typescript-eslint/ban-types': [
        'error',
        {
          types: {
            '{}': false, // Allow {} type for component props
          },
        },
      ],
    },
  },
];
