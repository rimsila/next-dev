import { readdirSync } from 'fs';
import chalk from 'chalk';
import { join } from 'path';
const { REACT_APP_ENV } = process.env;

const isSite = REACT_APP_ENV !== 'dev';

const headPkgList = [];
// utils must build before core
// runtime must build before renderer-react
const pkgList = readdirSync(join(__dirname, 'packages')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgList.includes(pkg),
);

const alias = pkgList.reduce((pre, pkg) => {
  pre[`@wetrial/${pkg}`] = join(__dirname, 'packages', pkg, 'src');
  return {
    ...pre,
  };
}, {});

console.log(`🌼 alias list \n${chalk.blue(Object.keys(alias).join('\n'))}`);

const tailPkgList = pkgList
  .map((path) => [join('packages', path, 'src'), join('packages', path, 'docs')])
  .reduce((acc, val) => acc.concat(val), []);

// const isProduction = process.env.NODE_ENV === 'production';

export default {
  title: 'Wetrial',
  mode: 'site',
  // https://github.com/umijs/dumi/blob/master/packages/theme-default/src/style/variables.less
  theme: {
    '@c-primary': '#ff652f',
    '@s-content-margin': '40px',
    // '@s-menu-width': '220px',
  },
  hash: true,
  // history: 'hash',
  base: '/next-dev',
  publicPath: '/next-dev/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],

  cssModulesTypescriptLoader: {
    mode: 'emit',
  },
  alias: {
    // Add other modules that are not exported by index alias
    '@wetrial/core/es': join(__dirname, 'packages', 'core/src'),
    '@wetrial/component/es': join(__dirname, 'packages', 'component/src'),
    ...alias,
  },
  resolve: { includes: [...tailPkgList, 'docs', 'wetrial-doc'] },
  // locales: [['en-Us', '中文']],
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/rimsila/next-dev',
    },
  ],

  // analytics: isProduction
  //   ? {
  //       ga: 'UA-173569162-1',
  //     }
  //   : false,
  hash: true,
  dynamicImport: {},
  styles: [`${isSite ? 'https://rimsila.github.io' : 'http://localhost:4000'}/next-dev/global.css`],
};