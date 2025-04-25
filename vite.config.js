import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    })
  ],
  base: '/PortfolioWebseiteReact/',
  build: {
    outDir: 'dist'  // change output folder to "build"
  }
})
