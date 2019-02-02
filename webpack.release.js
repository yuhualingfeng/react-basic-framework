
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const path = require('path');
const webpack = require('webpack');
const jquery = require('jquery/dist/jquery.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('[name]_1.css');
const extractLESS = new ExtractTextPlugin('[name]_2.css');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/*********loaders***********/

const cssLoader = {
    test: /\.css$/,
    loader:  extractCSS.extract(['css'])
};

const lessLoader = {
    test: /\.less$/i,
    loader: extractLESS.extract(['css','less'])
};

const babelLoader = {
    test: /\.js$/,
    loader: 'babel-loader',//这样的话就可以不要.babelrc的配置文件
    exclude: /(node_modules|bower_components)/,
    //exclude:/node_modules/,//排除某个文件的
    include: __dirname,
    query: {
        "presets": ["react", "es2015"]
    }
};

const fileLoader = {
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
    loader: 'file-loader?publicPath=./'
};

/*********loaders***********/

/*********plugins***********/
const cleanWebpackPlugin = new CleanWebpackPlugin(['dist']);

const uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    },
    output: {
        comments: false,
    }
});

const definePlugin = new webpack.DefinePlugin({
    "process.env": {
        NODE_ENV: JSON.stringify("production")
    }
});

const webpackMd5Hash = new WebpackMd5Hash();

const htmlWebpackPlugin = new HtmlWebpackPlugin(
    {
        title:"LEAP Lenovo Enterprise Analytics Platform",
        filename: '../index.html',
        template: './template.html',
        favicon:"./favicon.ico",
        hash: true,
         //chunks:["jquery","react","echarts","bootstrap","redux","app"],
        chunksSortMode:"dependency",
       /* files: {
            "js": [ "./build/dll.react.js","./build/dll.bootstrap.js", "./build/dll.echarts.js","./build/dll.react.js","./build/dll.redux.js"],
        }*/
    }
);

const providePlugin = new webpack.ProvidePlugin({
    $: "jquery",
    jquery: "jquery",
    "windows.jQuery": "jquery",
    jQuery: "jquery",
    React:"react",
    ReactRedux:'react-redux',
    util:'util'
});

const dlllibs = ['bootstrap', 'jquery', 'react', 'redux','echarts'];
const dllReferencePlugins = dlllibs.map((item) => {
    return new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require(`./dll/manifest-${item}.json`),
    });
});

/*********plugins***********/
module.exports = {
    //页面入口文件配置
    entry: {
       app:['./src/index.js']
    },
    //入口文件输出配置
    output: {
        path: path.join(__dirname, 'dist'),//文件的绝对路径
        publicPath: './dist/',//访问路径
        filename: '[name].js',//输出的文件名
        chunkFilename: "[id].chunk.js?[chunkhash]"
    },
    resolve: {
        alias: {
            'util': path.resolve(//path.resolve,把当前位置转换为绝对位置
                __dirname,
                './src/components/common/util'
            )
        }
    },
    module: {
        //加载器配置
        loaders: [
            cssLoader,
            lessLoader,
            babelLoader,
            fileLoader
        ]

    },
    //插件配置
    plugins: [
        cleanWebpackPlugin,
        extractCSS,
        extractLESS,
        webpackMd5Hash,
        htmlWebpackPlugin,
        providePlugin,
        uglifyJsPlugin,
        definePlugin,
    ].concat(dllReferencePlugins)
}