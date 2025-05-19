import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
   test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js'
   },
   server: {
    proxy: {
      '/api': 'http://localhost:8080'
    }
  }
})
