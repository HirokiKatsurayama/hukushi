import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/hukushi/',
  plugins: [vue()],
  server: {
    port: 4000,
    host: 'localhost'
  }
})