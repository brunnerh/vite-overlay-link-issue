import { defineConfig } from 'vite';

export default defineConfig(() => ({
  base: 'http://localhost:3001/',
  server: {
    port: 3001,
    strictPort: true,
  },
}));
