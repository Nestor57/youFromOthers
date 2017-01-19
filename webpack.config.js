var path = require('path');

var AggressiveMergingPlugin = require('webpack/lib/optimize/AggressiveMergingPlugin');
var LimitChunkCountPlugin = require('webpack/lib/optimize/LimitChunkCountPlugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpack = require('webpack');
module.exports = {
    entry: {
        js: "./utoApp.js",
    },
    output: {
        path: __dirname,
        filename: "bundle.js",
        publicPath:'./'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
            test: require.resolve("jQuery"),
            loader: "imports?this=>window"
        }, {
            test: /\.(jpg|png)$/,
            loader: "file-loader"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        },{
        test: /\.html$/,
        loader: "html"
      }]
    },
    plugins: [
        new LimitChunkCountPlugin({
            maxChunks: 1
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
              sequences:true,
              properties:true,
              dead_code:true,
              drop_debugger:false,
              conditionals:true,
              booleans:true,
              comparisons:true,
              if_return:true,
              join_vars:true,
              cascade:true,
              warnings:false,
              keep_fargs:false,
              passes:2
            },
            output: {
              comments: false
            },
            sourceMap:true
        }),
        new AggressiveMergingPlugin({
            minSizeReduce: 1.5,
            moveToParents: true
        }),
        new ExtractTextPlugin('/bundle.css'),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'home.htm',
            template: './mainPage.htm',
            minify: {
              collapseWhitespace:true,
              conservativeCollapse: true,
              minifyCSS: true,
              minifyURLs: true,
              removeComments: true,
              removeEmptyAttributes: true,
            //  removeEmptyElements:true,
              removeRedundantAttributes: true
            }
        })
    ],
    root: [
        path.resolve(__dirname + '/'),
    ]
};
