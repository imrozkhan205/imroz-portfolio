import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 👇 ADD THIS 'server' BLOCK TO ALLOW THE REPLIT HOST
  server: {
    allowedHosts: [
      '32bbe919-fc6a-47ef-91ae-01374f6e0748-00-2cdxf6m8tf40z.sisko.replit.dev'
    ],
    // 'host: true' is often also needed for Replit/container environments
    host: true, 
  },
})
