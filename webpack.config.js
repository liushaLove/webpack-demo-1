const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "xiaobangsky",
      template: "./src/assets/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      ignoreOrder:false
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath:'../',
              hmr: process.env.NODE_ENV === 'development',
              //reloadAll: true,
            },
          },
          'css-loader'
        ],
      },
    ],
  }
};