import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tailwind-demo/',
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
  },
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
    __BUILD_VERSION__: JSON.stringify(`${new Date().getFullYear()}.${(new Date().getMonth() + 1).toString().padStart(2, '0')}.${new Date().getDate().toString().padStart(2, '0')}.${new Date().getHours().toString().padStart(2, '0')}${new Date().getMinutes().toString().padStart(2, '0')}`),
  },
});
