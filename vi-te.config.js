import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      // Permite usar '@' para referenciar a pasta src (Ex: '@/components/MovieCard.vue')
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    // Configura o ambiente de testes para simular um navegador
    globals: true,
    environment: 'jsdom',
  }
})
