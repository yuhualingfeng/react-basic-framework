
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var path = require('path');
var webpack = require('webpack');
var jquery = require('jquery/dist/jquery.js');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractCSS = new ExtractTextPlugin('[name]_1.css');
let extractLESS = new ExtractTextPlugin('[name]_2.css');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/*********plugins***********/
const cleanWebpackPlugin = new CleanWebpackPlugin(['dist']);
/*********plugins***********/

//压缩文件
var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    },
    output: {
        comments: false,
    }
});
//使用上面的压缩文件会产生警告，解决警告
var definePlugin = new webpack.DefinePlugin({
    "process.env": {
        NODE_ENV: JSON.stringify("production")
    }
})

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
            {
                test: /\.css$/,
                loader:  extractCSS.extract(['css'])
            },
            {
                test: /\.less$/i,
                loader: extractLESS.extract(['css','less'])
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',//这样的话就可以不要.babelrc的配置文件
                exclude: /(node_modules|bower_components)/,
                //exclude:/node_modules/,//排除某个文件的
                include: __dirname,
                query: {
                    "presets": ["react", "es2015"]
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
                loader: 'file-loader?publicPath=./'
            }
        ]

    },
    //插件配置
    plugins: [
        cleanWebpackPlugin,
        extractCSS,
        extractLESS,
        new WebpackMd5Hash(),
        // new webpack.optimize.CommonsChunkPlugin({names: ["jquery","react","echarts","bootstrap","redux"], filename: '[name].js', minChunks: Infinity}),
        new HtmlWebpackPlugin(
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
        ),
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery",
            "windows.jQuery": "jquery",
            jQuery: "jquery",
            React:"react",
            ReactRedux:'react-redux',
            util:'util'
        }),//
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dll/manifest-bootstrap.json'),
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dll/manifest-echarts.json'),
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dll/manifest-jquery.json'),
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dll/manifest-react.json'),
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dll/manifest-redux.json'),
        }),
        uglifyJsPlugin,//压缩文件
        definePlugin,//上面压缩文件会产生警告，这个消除警告
    ],

    //devtool:'eval-source-map',//它能帮你定位到未压缩的源代码.但它会生成很大的source map文件，所以只建议在开发模式下使用
    //wathc:true//当配置了Watchmode，每当又文件修改的时候，Webpack都会自动重新build。
}