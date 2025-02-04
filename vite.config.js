import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression()
  ],
  root: path.resolve(__dirname, ''),
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
      input: path.resolve(__dirname, 'index.html')
    },
    minify: 'terser',
    cssCodeSplit: true,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true
  }
})
