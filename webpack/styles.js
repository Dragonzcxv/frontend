const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const userSettings = require('../user.settings');
const path = require('path');

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
    },
};

const sass_loader = {
    loader: 'sass-loader',
    options: {
        sourceMap: true,
    }
};

const post_css_loader = {
    loader: "postcss-loader",
    options: {
        postcssOptions: {
            plugins: [
                [
                    "autoprefixer",
                    {
                        // Options
                    },
                ],
            ],
        },
    }
};

const loaders = [
    MiniCssExtractPlugin.loader,
    css_loader,
    post_css_loader,
    sass_loader,
];

if (userSettings.usePrettier && process.env.NODE_ENV === "dev") {
    loaders.push({
        loader: path.resolve("./webpack/loaders/prettier.js"),
    });
}

// Конфиг
module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    use: loaders
                },
            ],
        },
    }
}
