import { tailwindConfig } from '@tailwindspark/design-tokens';

/** @type {import('tailwindcss').Config} */
export default {
  ...tailwindConfig,
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui-components/src/**/*.{js,ts,jsx,tsx}',
  ],
};
