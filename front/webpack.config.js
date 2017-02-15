var webpack           = require('webpack');
var path              = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin       = require('clean-webpack-plugin');

module.exports = {
	entry    : __dirname + '/src/index.js',
	output   : {
		filename     : 'bundle_[chunkhash].js',
		path         : './dist',
		publicPath   : '/',
		chunkFilename: 'chunk/[chunkhash].js'
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
			{test: /\.vue$/, loader: 'vue'},
			{test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
			{test: /\.css$/, loader: "style-loader!css-loader"},
			{test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'},
			{test: /\.json$/, loader: "json-loader"},
		]
	},
	vue      : {
		loaders: {
			css: ExtractTextPlugin.extract('vue-style-loader', 'css-loader', 'sass-loader')
		}
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
				$              : "jquery",
				jQuery         : "jquery",
				"window.jQuery": "jquery",
				THREE          : "three"
			}
		),
		new ExtractTextPlugin(
			'static/css/style.css', {
				allChunks: true,
			}
		),
		new HtmlWebpackPlugin(
			{
				// favicon : './src/img/favicon.ico', //favicon路径
				title   : 'SPA',
				filename: 'index.html',    //生成的html存放路径，相对于 path
				template: __dirname + '/src/static/index.html',    //html模板路径
				inject  : true,    //允许插件修改哪些内容，包括head与body
				hash    : true,    //为静态资源生成hash值
				minify  : {    //压缩HTML文件
					removeComments    : true,    //移除HTML中的注释
					collapseWhitespace: false    //删除空白符与换行符
				}
			}
		),
		new CleanPlugin("dist/*"),
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