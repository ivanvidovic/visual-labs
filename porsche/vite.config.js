import { defineConfig } from 'vite'

export default defineConfig({
  // Matches the new repo name and its specific subfolder
  base: '/visual-labs/porsche/',
  build: {
    // Ensures built files are placed in a separate porsche folder within 'dist'
    outDir: '../dist/porsche',
    emptyOutDir: true
  }
})