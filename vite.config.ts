import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: ['0ce9-190-108-93-43.ngrok-free.app', '44e4-190-108-93-43.ngrok-free.app']
  }
})
