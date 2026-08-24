import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the app works under GitHub Pages repo subpath
export default defineConfig({
  plugins: [react()],
  base: './',
});
