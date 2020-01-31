const webpack = require('webpack');
const path = require('path');

const config = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(ts)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	}
}

module.exports = config;