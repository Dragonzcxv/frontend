module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'ts-loader',
                    }
                },
            ],
        },
    }
}
