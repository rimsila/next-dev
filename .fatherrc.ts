import { readdirSync } from 'fs';
import { join } from 'path';

// utils must build before core
// runtime must build before renderer-react
const headPkgs: string[] = ['provider', 'core', 'hooks'];
const tailPkgs = readdirSync(join(__dirname, 'packages')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgs.includes(pkg),
);

export default {
  // cjs: { type: 'babel', lazy: true }, // use only es
  esm: {
    type: 'babel',
    importLibToEs: true,
    minify: true,
  },
  pkgs: [...headPkgs, ...tailPkgs],
  extraBabelPlugins: [
    ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
  ],
};
