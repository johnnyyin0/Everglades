import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import http from 'https'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api" : {
        target: `http://localhost:${process.env.PORT}`,
        changeOrigin: true,
        secure: false,
        rewrite: ( path ) => path.replace(/^\/api/, '')
      }
    }
  }
})
