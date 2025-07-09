import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: '/WeLife/', // ← 這行很關鍵！你 repo 名稱是 WeLife
})
