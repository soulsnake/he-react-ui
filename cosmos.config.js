module.exports = {
  exclude: [/dist/],
  webpackConfigPath: './config/webpack.dev',
  proxiesPath: 'config/cosmos-proxies/cosmos.proxies.tsx',
  globalImports: ['./global.css', './config/polyfills.js'],
  port: 8989,
  publicUrl: '/',
};

const { COSMOS_PUBLIC_URL } = process.env;
if (COSMOS_PUBLIC_URL) module.exports.publicUrl = COSMOS_PUBLIC_URL;
