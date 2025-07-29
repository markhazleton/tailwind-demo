const { tailwindConfig } = require('@tailwind-demo/design-tokens');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...tailwindConfig,
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
};
