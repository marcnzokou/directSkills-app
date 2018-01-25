const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');

const port = 4000;
const outputPath = path.join(__dirname, "dist");
const ENV = 'development';



module.exports = {
    entry: ['./src/App.jsx', './src/assets/styles/main.scss'],
    devtool: "source-map",
	devServer: {
		port,
		hot: true,
		historyApiFallback: true
	},
	output: {
		path: outputPath,
		filename: 'dist/[name].js'
	},
	resolve: {
		modules: ['node_modules', './src'],
		extensions: ['.js', '.jsx'],
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader!sass-loader'
				}),
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader'
				}),
			},
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("[name][hash].css"),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			inject: true,
			template: path.join(__dirname, '/index.html')
		}),
		new webpack.DefinePlugin({
            ENV:  JSON.stringify(ENV),
            CONFIG: JSON.stringify(config)
        })
	]
}