export const configApp = {
  PROD: process.env.node === 'production',
  BASE_PATH: 'https://gorest.co.in/public-api',
  TOKEN: '0b4c0fa225e4e432de7e51fe13691e86e27ac12a360ca251bf714eeb00942325',
  BASE_GRAPH:
    process.env.node === 'development'
      ? 'https://cors-anywhere.herokuapp.com/https://graphqlzero.almansi.me/api'
      : 'https://graphqlzero.almansi.me/api',
};
