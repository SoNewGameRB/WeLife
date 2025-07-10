// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/WeLife/', // ← 這是重點
  plugins: [react()]
})
