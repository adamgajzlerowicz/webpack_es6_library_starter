const webpack = require('webpack');
const path = require('path');

const APP = path.join(__dirname, '../example/src');
const BUILD = path.join(__dirname, '../example/lib');


module.exports = {
    entry: {
        index: APP,
    },
    output: {
        path: BUILD,
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    devServer: {
            historyApiFallback: true,
            inline: true,
            hot: true,
            progress: true,
            stats: 'errors-only',
            host: '0.0.0.0',
            port: '8080',
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        //     }
        // }),
    ]
};
