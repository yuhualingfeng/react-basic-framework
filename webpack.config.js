
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
            plugins: [
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-transform-runtime",
                "@babel/plugin-transform-object-assign",
                ["babel-plugin-import", {
                    "libraryName": "antd",
                    "libraryDirectory": "es",
                    "style": true // `style: true` 会加载 less 文件
                  }]
            ]
        }
    }
};
const tsLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
        loader: 'ts-loader',
        options: {
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
            {
                loader:'less-loader',
                options:{
                    modifyVars: {
                        'primary-color': '#23ac38'
                    },
                    javascriptEnabled: true
                }
            }
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
        publicPath:'http://localhost:8083/',
        // publicPath:'http://10.109.18.191:8083/',
        chunkFilename:'[id].[name].chunk.js'
	},
    resolve: {
        alias: {
            'util': path.resolve(__dirname,'./src/components/common/util'),
            '@':path.resolve(__dirname,'./src')
        }
    },
	module:{
		rules:[
            babelLoader,
            tsLoader,
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
        port:8083,
        hot:true,
        compress:true
    },
	devtool: 'eval-source-map'
}