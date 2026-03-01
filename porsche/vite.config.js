import { defineConfig } from 'vite'

export default defineConfig({
  base: '/visual-labs/porsche/',
  build: {
    outDir: '../dist/porsche',
    emptyOutDir: true
  }
})