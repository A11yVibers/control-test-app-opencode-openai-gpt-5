import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use relative base so the site works when served from a subdirectory (e.g., gh-pages/<branch>)
export default defineConfig({
  base: './',
  plugins: [react()],
})
