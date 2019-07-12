const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
module.exports = {
  entry: './example/src/index.js',
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
  },
  output: {
    path: path.join(__dirname, '../', '/dist'),
    publicPath: 'https://kevinisom.info/react-form-elements/',
    filename: 'bundle.js',
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: true,
    }),
    new HtmlWebpackPlugin({
      title: 'React Form Elements',
      // Load a custom template (lodash by default see the FAQ for details)
      template: './example/src/index.html',
    }),
    new CopyPlugin([
      {
        from: path.join(process.cwd(), '/example/src/public'),
        to: path.join(process.cwd(), '/dist'),
      },
    ]),
  ],
  devServer: {
    contentBase: './example/src',
    hot: true,
  },
  optimization: {
    usedExports: true,
    minimizer: [new TerserPlugin()],
  },
}
