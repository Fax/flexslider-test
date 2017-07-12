const path = require('path');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: path.join(__dirname, 'src/boot.ts'),
	resolve: {
		extensions: ['.ts', '.js'],
		alias: {},
	},
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'js'),
		publicPath: 'js'
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: 'raw-loader'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: "file-loader"
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: "file-loader"
			},
			{
				test: /\.css$/,
				use: [{
					loader: "style-loader"
				},
				{
					loader: "css-loader"
				}],
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader"
				}, {
					loader: "sass-loader"
				}]
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					// disable type checker - we will use it in fork plugin
					transpileOnly: true,
				}
			}
		]
	},
	plugins: []
};
