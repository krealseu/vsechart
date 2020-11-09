var path = require('path')
var webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV;
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        // publicPath: '/dist/',
        // filename: 'vsechart.js',
        // library: 'vsechart',
        // libraryTarget: 'umd',
        // umdNamedDefine: true
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'test',
            filename: 'index.html',
            //  复制模板内容并引入资源
            template: './src/index.html'
        })
    ],
}