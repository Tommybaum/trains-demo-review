import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:3005",
      "/auth": "http://localhost:3005",
    }
  }
})
//proxy servers help with connecting front end to back end
//our back end is running on 3005 but the local host is 5173
//proxies will help to look for back end routes on 3005 as well
