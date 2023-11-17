/* eslint-disable import/no-extraneous-dependencies */

import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
    })],
  base: process.env.NODE_ENV === 'production' ? '/Fangsis/' : '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import 'bootstrap/scss/functions';
        @import '@/assets/scss/helpers/variables';
        @import 'bootstrap/scss/maps';
        @import 'bootstrap/scss/mixins';  
        @import '@/assets/scss/helpers/utilities';
        `,
      },
    },
  },
});
