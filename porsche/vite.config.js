import { defineConfig } from 'vite'

export default defineConfig({
  // Matches the new repo name and the subfolder
  base: '/visual-labs/porsche/',
  build: {
    // This ensures the build output stays isolated
    outDir: '../dist/porsche',
    emptyOutDir: true
  }
})