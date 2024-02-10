const userSettings = require('../user.settings');
const path = require('path');

const loaders = [
    {
        loader: 'ts-loader',
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
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'ts-loader',
                        },
                        {
                            loader: path.resolve("./webpack/loaders/prettier.js"),
                        }
                    ]
                },
            ],
        },
    }
}
