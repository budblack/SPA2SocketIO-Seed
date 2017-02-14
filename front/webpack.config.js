var webpack = require('webpack');
var path    = require('path');

module.exports = {
	entry    : __dirname + '/src/index.js',
	output   : {
		filename: 'bundle.js',
		path    : './dist'
	},
	resolve  : {
		extensions: [
			'',
			'.js',
			'.vue'
		]
	},
	module   : {
		loaders: [
			{
				test  : /\.vue$/,
				loader: 'vue'
			},
			{
				test   : /\.js$/,
				loader : 'babel-loader',
				exclude: /node_modules/
			},
			{
				test  : /\.css$/,
				loader: "style-loader!css-loader"
				// loaders: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
				test  : /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				loader: 'url-loader?limit=50000&name=[path][name].[ext]'
			}
		]
	},
	babel    : {
		presets: ['es2015']
	},
	devServer: {
		contentBase       : "./dist",
		host              : "0.0.0.0",
		port              : 3000,
		colors            : true,
		historyApiFallback: true,
		inline            : true
	},
	// 增加一个plugins
	plugins  : [
		// 注册为插件的三方库可作为全局变量, 而不需要再在代码中 require
		new webpack.ProvidePlugin(
			{
				$     : "jquery",
				jQuery: "jquery",
				THREE : "three"
			}
		),
		// new webpack.optimize.UglifyJsPlugin(
		// 	{
		// 		compress: {
		// 			warnings: false
		// 		},
		// 		comments: false
		// 	}
		// )
	],
};