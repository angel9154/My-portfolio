import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
console.log('Using vite config...')

export default defineConfig({
  base: '/My-portfolio/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})