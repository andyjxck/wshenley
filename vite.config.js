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

// The prerender step (scripts/prerender.mjs, part of `npm run build`) also builds src/entry-server.jsx
// for Node into dist-ssr/, then writes each page's words into the built HTML.
export default defineConfig(({ mode, isSsrBuild }) => ({
  base: './',
  define: { __BUILD_ID__: JSON.stringify(mode === 'single' ? 'dev' : BUILD_ID) },
  plugins: mode === 'single' ? [react(), viteSingleFile()] : isSsrBuild ? [react()] : [react(), versionFile],
  build: isSsrBuild
    ? { outDir: 'dist-ssr', emptyOutDir: true, copyPublicDir: false }
    : mode === 'single'
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
