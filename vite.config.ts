import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use root base for custom domains (CNAME). If deploying under a subpath,
  // set base to that subpath instead (e.g., '/ractconf/').
  base: '/',
  plugins: [react()],
})