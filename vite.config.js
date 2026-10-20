import { resolve } from 'node:path'
import { execSync } from 'node:child_process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build` makes a normal static site in dist/ (for GitHub Pages, Netlify, etc.)
//   Two pages: index.html (homepage) and history/index.html (Our story), so /history/ loads directly.
// `npm run build:single` makes one self-contained index.html in dist-single/ for quick previews
// Each build gets an id. It is baked into the page and written to version.json, so an open or
// cached copy of the site can tell it is out of date and reload itself (see src/updateCheck.js).
let commit = 'nogit'
try { commit = execSync('git rev-parse --short HEAD', { cwd: __dirname }).toString().trim() } catch (e) {}
const BUILD_ID = `${commit}-${Date.now().toString(36)}`
const versionFile = {
  name: 'version-file',
  apply: 'build',
  generateBundle() {
    this.emitFile({ type: 'asset', fileName: 'version.json', source: JSON.stringify({ build: BUILD_ID }) + '\n' })
  },
}

export default defineConfig(({ mode }) => ({
  base: './',
  define: { __BUILD_ID__: JSON.stringify(mode === 'single' ? 'dev' : BUILD_ID) },
  plugins: mode === 'single' ? [react(), viteSingleFile()] : [react(), versionFile],
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
