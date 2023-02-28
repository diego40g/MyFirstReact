import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Salary app',
        short_name: 'r',
        theme_color: '#000000',
        background_color: '#ffffff',
        description: 'des',
        lang: 'es'
      }
    })
  ],
})
