
const path = require('path');
const webpack = require('webpack');

/*********loaders***********/
const babelLoader = {
    test: /\.js$/,
    loader: 'babel-loader',//这样的话就可以不要.babelrc的配置文件
    exclude: /node_modules/,
    include: __dirname,
    query: {
        "presets": ["react", "env"]
    }

};

const lessLoader = {
    test: /\.less$/,
    loaders: ["style", "css?sourceMap", "less?sourceMap"],
    exclude: /node_modules/,
};

const cssLoader = {
    test: /\.css$/,
    loaders: ["style", "css?sourceMap"],
    //exclude:/node_modules/,
};

const urlLoader = {
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
    loader: 'url-loader?limit=8192'
};

/*********loaders***********/

/*********plugins***********/
const providerPlugin = new webpack.ProvidePlugin({
    $: "jquery",
    jquery: "jquery",
    "windows.jQuery": "jquery",
    jQuery: "jquery",
    React:'react',
    ReactRedux:'react-redux',
    util:'util'
});

/*********plugins***********/


module.exports = {
	entry:{
		app:['whatwg-fetch','./src/index.js']
	},
	output:{
		path:path.join(__dirname,'build'),
		filename:'[name].js',
        publicPath:'http://localhost:8082/'
	},
    resolve: {
        alias: {
            'util': path.resolve(//path.resolve,把当前位置转换为绝对位置
                __dirname,
                './src/components/common/util'
            )
        }
    },
	module:{
		rules:[
			babelLoader,
            lessLoader,
            cssLoader,
            urlLoader
		]
	},
    plugins: [
        providerPlugin
    ],
    devServer: {
        publicPath: 'http://localhost:8082/',
        hot: true,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
        }
    },
	devtool: 'eval-source-map'
}