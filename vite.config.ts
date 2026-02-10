import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        // Main app entry
        main: resolve(__dirname, 'index.html'),
        // Widget entry for embedding
        widget: resolve(__dirname, 'src/widget.tsx'),
      },
      output: {
        // Ensure consistent file names for embedding
        entryFileNames: (chunkInfo) => {
          // Widget bundle gets a specific name
          if (chunkInfo.name === 'widget') {
            return 'medidesk.js';
          }
          return 'assets/[name]-[hash].js';
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
