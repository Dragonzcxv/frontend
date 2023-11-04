const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Loaders
const css_loader = {
    loader: 'css-loader',
    options: {
        url: {
            filter: (url, resourcePath) => {
                if (url.startsWith('/')) {
                    return false;
                }
                if (url.startsWith('../')) {
                    return false;
                }

                return true;
            }
        },
        sourceMap: true,
        modules: true
    },
};

// Конфиг
module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(css)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        css_loader,
                        "postcss-loader",
                    ],
                },
            ],
        },
    }
}
