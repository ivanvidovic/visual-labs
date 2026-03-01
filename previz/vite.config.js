import { defineConfig } from 'vite'

export default defineConfig({
  base: '/visual-labs/previz/',
  build: {
    outDir: '../dist/previz',
    emptyOutDir: true
  }
})