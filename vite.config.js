import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative paths keep built assets working on both root and project GitHub Pages sites.
export default defineConfig({
  base: './',
  plugins: [react()],
});
