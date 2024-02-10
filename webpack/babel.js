const userSettings = require('../user.settings');
const path = require('path');

const loaders = [
    {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        }
    }
];

if (userSettings.usePrettier && process.env.NODE_ENV === "dev") {
    loaders.push({
        loader: path.resolve("./webpack/loaders/prettier.js"),
    });
}

module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: loaders
                },
            ],
        },
    }
}
