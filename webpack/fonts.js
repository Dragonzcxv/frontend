module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(woff(2)?|eot|ttf|otf|)$/,
					type: 'asset/inline',
				},
			],
		},
	}
}