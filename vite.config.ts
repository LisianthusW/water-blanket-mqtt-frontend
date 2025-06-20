import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // 基础路径配置 - 根据部署环境调整
  base: './',

  // 构建配置
  build: {
    // 输出目录
    outDir: 'dist',
    // 生成源码映射文件
    sourcemap: false,
    // 资源内联阈值
    assetsInlineLimit: 4096,
    // 启用CSS代码拆分
    cssCodeSplit: true,
    // 构建后清理输出目录
    emptyOutDir: true,
    // Rollup选项
    rollupOptions: {
      output: {
        // 分包策略
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia'],
          ui: ['@headlessui/vue', '@heroicons/vue'],
          charts: ['chart.js', 'vue-chartjs', 'chartjs-adapter-date-fns'],
        },
        // 资源文件命名
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return `assets/[name]-[hash][extname]`

          const info = assetInfo.name.split('.')
          const extType = info[info.length - 1]
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
            return `media/[name]-[hash][extname]`
          }
          if (/\.(png|jpe?g|gif|svg)(\?.*)?$/i.test(assetInfo.name)) {
            return `images/[name]-[hash][extname]`
          }
          if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
            return `fonts/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        // JS文件命名
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
      },
    },
    // 压缩选项
    minify: 'esbuild',
    // 目标浏览器
    target: 'es2015',
  },

  // 开发服务器配置
  server: {
    port: 3000,
    open: true,
    cors: true,
  },

  // 预览服务器配置
  preview: {
    port: 4173,
    open: true,
  },

  // 优化依赖
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'pinia',
      '@headlessui/vue',
      '@heroicons/vue',
      'chart.js',
      'vue-chartjs',
    ],
  },
})