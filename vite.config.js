import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/welfare-recruitment-mock/',
  plugins: [vue()],
  server: {
    port: 4000,
    host: 'localhost'
  }
})