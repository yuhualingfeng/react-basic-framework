
const path = require('path');
const webpack = require('webpack');

/*********loaders***********/
const babelLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ["dynamic-import-webpack"]
        }
    }
};

const lessLoader = {
    test: /\.less$/,
    use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader",   // translates CSS into CommonJS
            {
                loader: 'postcss-loader',
                options:{
                            plugins:[require("autoprefixer")("last 100 versions")]
                        }
            },
            "less-loader"  // compiles Less to CSS
        ],
    // exclude: /node_modules/,
};

const cssLoader = {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
    // exclude:/node_modules/,
};

const urlLoader = {
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
    use: 'url-loader?limit=8192'
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
		path:path.join(__dirname,'dist'),
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
    	contentBase: './',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
        },
        port:8082,
        hot:true,
        compress:true
    },
	devtool: 'eval-source-map'
}