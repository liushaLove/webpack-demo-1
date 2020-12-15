var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: "xiaobangsky",
    template: "./src/assets/index.html"
  })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  }
};