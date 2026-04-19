import path from 'node:path'
import stylex from '@stylexjs/unplugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    stylex.vite({
      useCSSLayers: true,
      // dev: process.env.NODE_ENV === 'development',
      // runtimeInjection: false,
      unstable_moduleResolution: {
        type: 'commonJS',
        rootDir: path.resolve(__dirname, '..'),
      },
    }),
    react(),
  ],
})
