import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Minimal config. For GitHub Pages under a project repo, set base to '/<repo>/' if needed.
export default defineConfig({
  plugins: [react()],
})
