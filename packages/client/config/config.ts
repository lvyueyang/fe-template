import { defineConfig } from 'umi';
import router from './router';

export default defineConfig({
  npmClient: 'pnpm',
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7004/',
      changeOrigin: true,
      secure: false,
    },
  },
  routes: router.routes,
  title: '国科环宇',
  mfsu: false,
  // targets: {
  //   ie: 11,
  // },
  // codeSplitting: {
  //   jsStrategy: 'granularChunks',
  // },
});
