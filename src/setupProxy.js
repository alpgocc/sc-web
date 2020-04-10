const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/api', {
        target: 'http://127.0.0.1:8000' ,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
        },
    }));

    app.use(createProxyMiddleware('/v2', {
        target: 'http://127.0.0.1:8000' ,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            // "^/v2": "/v1"
        },
    }));
};
