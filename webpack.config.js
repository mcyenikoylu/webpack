var _path = require('path');
var webpack = require('webpack');

module.exports = [
    {
        name : "bundle",
        entry : {
            main : [
                "./src/index.js",
                "webpack-dev-server/client?http://localhost:8080",
                "webpack/hot/dev-server",
                "react-hot-loader/patch"
            ]
        },
        output : {
            path : _path.resolve("./"),
            filename : "bundle.js"
        },
        devtool: 'inline-source-map',
        module : {
            rules : [{
                test : /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ],
        devServer: {
            hot: true,
            contentBase: '/'
        }
    }
]