import { resolve } from 'path';
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  // not work wih hox yet
  fastRefresh: {},
  lessLoader: {},
  chainWebpack(memo) {
    memo.module.rule('ts-in-node_modules').include.clear();
    return memo;
  },
  alias: {
    '@global-state/*': resolve(__dirname, '@next-dev/global-state/src/*'),
  },
});
