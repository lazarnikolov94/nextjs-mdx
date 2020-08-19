const withImages = require('next-images');

module.exports = withImages({
    distDir: 'dist',
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(jpg|png|gif|svg)$/,
            loader: 'image-webpack-loader',
            enforce: 'pre',
        });

        return config;
    },
});
