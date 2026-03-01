import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/visual-labs/',
  build: {
    rollupOptions: {
      input: {
        // Tells Vite exactly where your two HTML files are
        main: resolve(__dirname, 'porsche/index.html'),
        previz: resolve(__dirname, 'previz/index.html'),
      },
    },
    outDir: 'dist',
  },
})