// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

export default {
  output: 'export',
  assetPrefix: isProd ? '/banner/' : '',
};
