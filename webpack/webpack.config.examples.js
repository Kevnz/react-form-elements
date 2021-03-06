const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  entry: path.resolve(__dirname, '../example', 'src', 'index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'react-form-elements': path.resolve(__dirname, '../src', 'index.js'),
    },
  },
  output: {
    path: path.join(process.cwd(), '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Custom template',
      // Load a custom template (lodash by default see the FAQ for details)
      template: path.resolve(__dirname, '../example', 'src', 'index.html'),
    }),
  ],
  devServer: {
    contentBase: path.join(process.cwd(), './example', '/src', '/public'),
    hot: true,
  },
  optimization: {
    usedExports: true,
    minimizer: [new TerserPlugin()],
  },
}
