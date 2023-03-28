import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import http from 'https'
import path from 'path'

dotenv.config()

export default defineConfig({
<<<<<<< HEAD
	  plugins: [react()],
	  test: {
		      globals: true,
		      environment: 'jsdom',
		      setupFiles: './spec/setup.js'
		    },
	  server: {
		      host:true,
		      proxy: {
			            "/api" : {
					            target: `http://ec2-3-137-181-202.us-east-2.compute.amazonaws.com:${process.env.PORT}`,
					            changeOrigin: true,
					            secure: false,
					            rewrite: ( path ) => path.replace(/^\/api/, '')
					          }
			          }
		    }
=======
  plugins: [react(), viteCompression()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './spec/setup.js'
  },
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
>>>>>>> 4223a2c9feb445a4185894af3d24d67ff8be635a
})

