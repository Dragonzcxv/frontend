const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const babel = require('./webpack/babel');
const fonts = require('./webpack/fonts');
const scss = require('./webpack/scss');
const source_map = require('./webpack/source-map');
const userSettings = require('./user.settings');
const utils = require('./webpack/utils');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const AssetsPlugin = require('assets-webpack-plugin');

const env = process.env.NODE_ENV || 'dev';
const production = env === 'prod';

function FilenameTemplate(template) {
	if (production) {
		const date = new Date();

		return date.getFullYear()
			+ '/' + (date.getMonth() + 1).toString().padStart(2, '0')
			+ '-' + date.getDate().toString().padStart(2, '0')
			+ '/' + date.getHours().toString().padStart(2, '0')
			+ '-' + date.getMinutes().toString().padStart(2, '0')
			+ '-' + date.getSeconds().toString().padStart(2, '0')
			+ '-' + date.getMilliseconds().toString().padStart(3, '0')
			+ '/' + template;
	}

	return template;
};

const common = merge([
	{
		mode: production ? 'production' : 'development',
		entry: userSettings.entry,
		output: {
			path: utils.BuildPath(env),
			publicPath: utils.PublicPath(env),
			filename: FilenameTemplate('js/[name].js'),
		},
		resolve: {
			extensions: ['.js', '.scss', '.css'],
			modules: [
				path.join(__dirname, 'src'),
				path.join(__dirname, 'node_modules'),
			],
		},
		plugins: [
			new CleanWebpackPlugin(),
			new MiniCssExtractPlugin({
				filename: FilenameTemplate('css/[name].css'),
			}),
			new ESLintPlugin(),
			new StyleLintPlugin(),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
			}),
			new AssetsPlugin({
				filename: path.join('assets', env + '.json'),
				path: __dirname,
				prettyPrint: true,
			}),		
			new DuplicatePackageCheckerPlugin(),
		],
	},
	babel(),
	fonts(),
	scss(),
]);

module.exports = function() {
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
