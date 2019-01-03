const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        main: './src/index.js',
        // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    plugins:[
        // new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin({
            // Options...
          }),
        // new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            // 无需每个文件导入，全局直接使用Phaser
            Phaser: 'phaser',
        }),
        new CopyWebpackPlugin([
            {
                from: path.join(process.cwd(), './public/'),
                to: path.join(process.cwd(), './dist/'),
                // ignore: ['*.json']
            }
        ])
    ],
    devServer: {
        contentBase: './dist'
    }
}