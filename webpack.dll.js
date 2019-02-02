const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*********loaders***********/

/*********loaders***********/

/*********plugins***********/
var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    },
    output: {
        comments: false,
    }
});
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
        chunks:["jquery","react","echarts","bootstrap","redux"],
        /*chunksSortMode:"dependency",*/

       /* files: {
            "js": [ "./build/dll.react.js","./build/dll.bootstrap.js", "./build/dll.echarts.js","./build/dll.react.js","./build/dll.redux.js"],
        }*/
    }
);


/*********plugins***********/

module.exports = {
    entry: {
        jquery:["jquery"],
        react:["react","react-dom","react-router"],
        echarts:["echarts"],
        bootstrap:["bootstrap","bootstrap-datepicker"],
        redux:["react-redux","redux"]
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
    plugins: [
        providePlugin,
        dllPlugin,
        htmlWebpackPlugin,
        uglifyJsPlugin,//压缩文件
        definePlugin//上面压缩文件会产生警告，这个消除警告
    ]
};