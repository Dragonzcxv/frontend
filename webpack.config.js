const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const babel = require('./webpack/babel');
const fonts = require('./webpack/fonts');
const scss = require('./webpack/scss');
const source_map = require('./webpack/source-map');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const env = process.env.NODE_ENV || 'dev';
const production = env === 'prod';

const common = merge([
	{
		mode: production ? 'production' : 'development',
		entry: {
			index: path.resolve(__dirname, './src/index.js'), //Указываем точку входа для вебпака
		},
		output: {
			path: path.resolve(__dirname, './build'),
			filename: '[name].js',
		},
		plugins: [
			new CleanWebpackPlugin(),
			new MiniCssExtractPlugin({
				filename: 'css/[name].css',
			}),
			new ESLintPlugin(),
			new StyleLintPlugin({
				syntax: 'scss',
			}),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
			}),
		],
	},
	babel(),
	fonts(),
	scss(),
]);

module.exports = function(env) {
	if(production) {
		return merge([
			common,
		]);
	} else {
		return merge([
			common,
			source_map()
		]);
	}
};
