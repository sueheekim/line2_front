const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            // target: 'http://was:8080',
            // target: 'http://localhost:8080',
            // target: 'http://tomcat:8080',
            target: 'http://openjdk:8080',
            changeOrigin: true
        })
    )
}