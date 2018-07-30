const path = require('path');

const APP = path.resolve(__dirname, '../example/src');
const BUILD = path.resolve(__dirname, '../example/lib');

module.exports = {
  mode: 'development',
  entry: {
    bundle: APP,
  },
  output: {
    path: BUILD,
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      //   options: {
      //     fix: true,
      //   },
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, '../example/public'),
    compress: true,
    hot: true,
    port: 8080,
  },
  devtool: 'cheap-module-source-map',
  plugins: [],
};
