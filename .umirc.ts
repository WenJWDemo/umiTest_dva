import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {
    hmr: true,
  },
  routes: [
    { path: '/p1', component: '@/pages/index' },
    { path: '/p2', component: '@/pages/P2' },
  ],
  fastRefresh: {},
});
