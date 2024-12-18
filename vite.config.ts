import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@Components': path.resolve(__dirname, './src/components'),
      '@Common': path.resolve(__dirname, './src/components/Common'),
      '@Icons': path.resolve(__dirname, './src/components/Icons'),
      '@ThemedStacks': path.resolve(__dirname, './src/components/ThemedStacks'),
      '@Layouts': path.resolve(__dirname, './src/layouts'),
      '@Pages': path.resolve(__dirname, './src/pages'),
      '@Sections': path.resolve(__dirname, './src/pages/sections'),
      '@Store': path.resolve(__dirname, './src/store'),
      '@Utils': path.resolve(__dirname, './src/utils'),
      '@Hooks': path.resolve(__dirname, './src/hooks'),
      '@Assets': path.resolve(__dirname, './src/assets'),
      '@Router': path.resolve(__dirname, './src/router'),
    },
  },
  optimizeDeps: {
    include: ['@gsap/react', 'locomotive-scroll', 'split-type'],
  },
});
