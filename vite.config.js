import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/visual-labs/',
  build: {
    rollupOptions: {
      input: {
        // Points Vite to both entry points so it builds them in parallel
        main: resolve(__dirname, 'porsche/index.html'),
        previz: resolve(__dirname, 'previz/index.html'),
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
})