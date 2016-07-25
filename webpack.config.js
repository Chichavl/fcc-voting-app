var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: './src/index.js',
    output: {
        path: __dirname + '/public/js/',
        publicPath: 'js/',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
          {
            test: /\.js$/,
            loaders: ['eslint'],
            include: [
              path.resolve(__dirname, 'src'),
            ],
          }
        ],
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                exclude: [/node_modules/, /public/]
            }
        ]
    },
  watch: true,
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
}
/*
 * TODO: Ask how to separate development and production webpack configs
 * "scripts": {
 *    "build": "webpack --config webpack.config.js"
 * }
 *
 */