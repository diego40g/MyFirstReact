import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      manifest: {
        name: "My card app with vite",
        short_name: "Vite and PWA",
        theme_color: "#333333",
        background_color: "#160312",
        description: "Una aplicación simple hecha con vite, react y PWA",
        lang: "es",
        icons: [
          {
            src: "./public/vite.svg",
            sizes: "64x64",
            type: "image/svg+xml",
            purpose: "maskable"
          }
        ]
      }
    })
  ],
})
