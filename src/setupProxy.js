const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/book',
        createProxyMiddleware({
            target: 'http://openjdk:8080',
            // target: 'http://localhost:8080',
            changeOrigin: true
        })
    )
}