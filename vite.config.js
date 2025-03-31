import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PortfolioWebseiteReact/',  // ensure the base matches your homepage
  build: {
    outDir: 'dist'  // change output folder to "build"
  }
})
