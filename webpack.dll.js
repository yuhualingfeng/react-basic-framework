const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*********loaders***********/

/*********loaders***********/

/*********plugins***********/
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var definePlugin = new webpack.DefinePlugin({
    "process.env": {
        NODE_ENV: JSON.stringify("production")
    }
});

var providePlugin = new webpack.ProvidePlugin({
    $: "jquery",
    jquery: "jquery",
    "windows.jQuery": "jquery",
    jQuery: "jquery"
});

const dllPlugin = new webpack.DllPlugin({
    path: path.join(__dirname, 'dll', 'manifest-[name].json'),
    name: '[name]'
});

const htmlWebpackPlugin = new HtmlWebpackPlugin(
    {
        title:"React App",
        filename: '../template.html',
        template: './template-dll.html',
        favicon:"./favicon.ico",
        hash: true,
        chunks:["jquery","react","echarts","bootstrap","redux"]
    }
);


/*********plugins***********/

module.exports = {
    entry: {
        jquery:["jquery"],
        react:["react","react-dom","react-router-dom","react-redux"],
        echarts:["echarts"],
        bootstrap:["bootstrap","bootstrap-datepicker"],
        redux:["redux","redux-saga","redux-saga/effects"]
    },
    output: {
        path: path.join(__dirname, 'dll'),
        publicPath: './dll/',//访问路径
        filename: '[name].js',
        /**
         * output.library
         * 将会定义为 window.${output.library}
         * 在这次的例子中，将会定义为`window.vendor_library`
         */
        library: '[name]'
    },
    // optimization: {
    //    minimizer: [new UglifyJsPlugin()],
    // },
    plugins: [
        providePlugin,
        dllPlugin,
        htmlWebpackPlugin,
        definePlugin //上面压缩文件会产生警告，这个消除警告
    ],
    mode:'production'
};