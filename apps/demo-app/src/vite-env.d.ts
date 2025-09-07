/// <reference types="vite/client" />

// Build-time constants injected by Vite
declare const __BUILD_DATE__: string;
declare const __BUILD_VERSION__: string;

// Node.js process environment
declare const process: {
  env: {
    NODE_ENV: string;
    [key: string]: string | undefined;
  };
};
