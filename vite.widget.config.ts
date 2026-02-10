import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// Widget-specific build configuration
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/widget.tsx'),
      name: 'MediDesk',
      fileName: () => 'medidesk.js',
      formats: ['iife']
    },
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]',
        // Inline all CSS into the JS bundle
        inlineDynamicImports: true,
      }
    },
    outDir: 'dist',
    emptyOutDir: false, // Don't clear dist folder (main app is already there)
  }
})
