// filepath: /C:/Users/Asus/Desktop/p/frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: true, // Fail if the port is already in use
    open: true, // Open the browser automatically
    host: '0.0.0.0', // Allow access from network
  }
})