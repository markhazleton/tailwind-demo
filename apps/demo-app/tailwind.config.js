import baseConfig from '@tailwindspark/design-tokens/tailwind.config.js';

/**
 * Demo App Tailwind Config (v4)
 * Reuses centralized design tokens. Only app-specific overrides should be added here.
 */
export default {
  ...baseConfig,
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui-components/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...(baseConfig.theme?.extend || {}),
      // Add app-only extensions below if needed
    },
  },
};
