const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [new HtmlWebpackPlugin({
  template: 'src/index.html',
  filename: 'index.html',
  inject: 'body'
})]

module.exports = {
    entry: './src/app.js',
        output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader'},
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}
				]
			}
		]
    }
};
