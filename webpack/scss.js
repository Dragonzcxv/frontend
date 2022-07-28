const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Loaders
const css_loader = {
	loader: 'css-loader',
	options: {
		url: false,
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

// Конфиг
module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(scss)$/,
					use: [
						MiniCssExtractPlugin.loader,
						css_loader,
						post_css_loader,
						'sass-loader'
					],
				},
			],
		},
	}
}