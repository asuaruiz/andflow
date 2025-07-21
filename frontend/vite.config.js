import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',          // 🔓 expone Vite a tu navegador fuera del contenedor
    port: 5173,               // 🎯 asegúrate que coincida con tu docker-compose
    watch: {
      usePolling: true        // 👀 garantiza que detecte cambios dentro de Docker
    }
  }
})
