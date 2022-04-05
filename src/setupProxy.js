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
    app.use(
        '/user',
        createProxyMiddleware({
            target: 'http://openjdk2:8080',
            // target: 'http://localhost:8081',
            changeOrigin: true
        })
    )
    app.use(
        '/home',
        createProxyMiddleware({
            target: 'http://openjdk3:8080',
            // target: 'http://localhost:8082',
            changeOrigin: true
        })
    )
}