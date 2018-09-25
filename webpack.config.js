const HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require("path")

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']},
            {test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
                  },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'project',
            // Load a custom template (lodash by default see the FAQ for details)
            template: './src/index.ejs'
        })
    ]

}