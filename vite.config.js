import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build` makes a normal static site in dist/ (for GitHub Pages, Netlify, etc.)
// `npm run build:single` makes one self-contained index.html in dist-single/ for quick previews
export default defineConfig(({ mode }) => ({
  base: './',
  plugins: mode === 'single' ? [react(), viteSingleFile()] : [react()],
  build: mode === 'single'
    ? { outDir: 'dist-single', assetsInlineLimit: 100000000 }
    : { outDir: 'dist' },
}))
