const path = require('path')
module.exports = {
  title: 'React Form Elements',
  components: 'src/*/[a-z]*.js',
  defaultExample: true,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'lib'),
          ],
          loader: 'babel-loader',
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {
        'react-form-elements': path.resolve(__dirname, 'lib'),
      },
    },
  },
}
