module.exports = {
  exclude: [/dist/],
  webpackConfigPath: './config/webpack.dev',
  globalImports: [
    './global.css',
    'event-source-polyfill', // Hot reloads for IE11 and Edge
  ],
  port: 8989,
  publicUrl: './',
};
