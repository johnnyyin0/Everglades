import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import http from 'https'
import path from 'path'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './spec/setup.js'
  },
  server: {
    proxy: {
      "/api" : {
        target: `http://ec2-52-201-177-157.compute-1.amazonaws.com:${process.env.PORT}`,
        changeOrigin: true,
        secure: false,
        rewrite: ( path ) => path.replace(/^\/api/, '')
      }
    }
  }
})
