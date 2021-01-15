const httpProxyMiddleware = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    httpProxyMiddleware({
      target: "http://localhost:3001",
      changeOrigin: true,
    })
  );
};
