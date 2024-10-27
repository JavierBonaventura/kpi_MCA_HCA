const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://10.9.8.15:3000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api', // Reescribir la URL
      },
    })
  );
};
