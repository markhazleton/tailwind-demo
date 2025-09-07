import { tailwindConfig as baseConfig } from '@tailwindspark/design-tokens';

/**
 * UI Components Tailwind Config (v4) - ESM
 * Inherits shared design tokens; only library-specific additions should be placed here.
 * Keeping content narrowly scoped for faster builds.
 */
export default {
  ...baseConfig,
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...(baseConfig.theme?.extend || {}),
      // library-specific theme extensions go here
    },
  },
};
