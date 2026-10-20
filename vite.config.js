import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build` makes a normal static site in dist/ (for GitHub Pages, Netlify, etc.)
//   Two pages: index.html (homepage) and history/index.html (Our story), so /history/ loads directly.
// `npm run build:single` makes one self-contained index.html in dist-single/ for quick previews
export default defineConfig(({ mode }) => ({
  base: './',
  plugins: mode === 'single' ? [react(), viteSingleFile()] : [react()],
  build: mode === 'single'
    ? { outDir: 'dist-single', assetsInlineLimit: 100000000 }
    : {
        outDir: 'dist',
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            history: resolve(__dirname, 'history/index.html'),
          },
        },
      },
}))
