
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin');

/*********loaders***********/

const cssLoader = {
    test: /\.css$/,
    use:  [
        MiniCssExtractPlugin.loader,
        'css-loader'
    ]
};

const lessLoader = {
    test: /\.less$/i,
    use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
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
        }]
};

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

const fileLoader = {
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
    use: 'file-loader?publicPath=./'
};

/*********loaders***********/

/*********plugins***********/
const cleanWebpackPlugin = new CleanWebpackPlugin(['dist']);

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[name].css"
});

const webpackManifestPlugin = new WebpackManifestPlugin();

const definePlugin = new webpack.DefinePlugin({
    "process.env": {
        NODE_ENV: JSON.stringify("production")
    }
});

const htmlWebpackPlugin = new HtmlWebpackPlugin(
    {
        filename: '../index.html',
        template: './template.html',
        hash: true,
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
       app:['@babel/polyfill','whatwg-fetch','./src/index.js']
    },
    //入口文件输出配置
    output: {
        path: path.join(__dirname, 'dist'),//文件的绝对路径
        publicPath: './dist/',//访问路径
        filename: '[name].js',//输出的文件名
        chunkFilename: "[name].chunk.js"
    },
    optimization: {
       minimize: true,
       // minimizer覆盖minimize,因为minimize优化只对js文件有效果,css文件并没有被压缩.
       minimizer: [
           new UglifyJsPlugin(),
           new OptimizeCSSPlugin()
        ],
    },
    resolve: {
        alias: {
            'util': path.resolve(__dirname,'./src/components/common/util'),
            '@':path.resolve(__dirname,'./src')
        }
    },
    module: {
        //加载器配置
        rules: [
            cssLoader,
            lessLoader,
            babelLoader,
            fileLoader
        ]

    },
    //插件配置
    plugins: [
        cleanWebpackPlugin,
        htmlWebpackPlugin,
        webpackManifestPlugin,
        providePlugin,
        // definePlugin,
        miniCssExtractPlugin
    ].concat(dllReferencePlugins),
    mode:'production'
}