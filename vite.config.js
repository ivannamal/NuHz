import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/NuHz/',        // <— назва репозиторію
  build: { outDir: 'docs' }  // <— збираємо в /docs
})
