mport { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import http from 'https'
import path from 'path'

dotenv.config()

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
					            target: `http://ec2-3-137-181-202.us-east-2.compute.amazonaws.com:${process.env.PORT}`,
					            changeOrigin: true,
					            secure: false,
					            rewrite: ( path ) => path.replace(/^\/api/, '')
					          }
			          }
		    }
})

