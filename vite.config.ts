// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // ← این برای دامنه شخصی سطح ریشه ضروری است
  plugins: [react()],
  // ... سایر پیکربندی‌ها
})
