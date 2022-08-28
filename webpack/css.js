const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Loaders
const css_loader = {
	loader: 'css-loader',
	options: {
		filter: (url, resourcePath) => {
			if (url.startsWith('/')) {
				return false;
			}
			if (url.startsWith('../')) {
				return false;
			}
			
			return true;
		},
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
						post_css_loader,
					],
				},
			],
		},
	}
}