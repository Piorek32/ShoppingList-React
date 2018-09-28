const HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require("path")
const webpack = require('webpack');
var bootstrapEntryPoints = require('./webpack.bootstrap.config.js')


var bootstrapconfig = bootstrapEntryPoints.dev;

module.exports = {
    entry: {
       app: './src/index.js',
      //  bootstrap: bootstrapconfig,
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: 'app.bundle.js',

    },
    module: {
        rules: [
            {test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']},
            {test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
                  },
            { test: /\.(woff2?)$/, use: 'url-loader?limit=10000&name=fonts/[name].[ext]' },
            { test: /\.(ttf|eot)$/, use: 'file-loader?name=fonts/[name].[ext]' },
            // Bootstrap 3
            { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, use: 'imports-loader?jQuery=jquery' }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        hot : true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'project',
            // Load a custom template (lodash by default see the FAQ for details)
            template: './src/index.ejs'
        }),
        new webpack.HotModuleReplacementPlugin(),

        new webpack.NamedModulesPlugin(),
    ]

}