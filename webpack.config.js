const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './example/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
        options: {
          esModule: false
        }
      }
    ],
  },
  resolve: {
    alias: {
      'my-framework': path.resolve(__dirname, 'lib'),
    },
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/lib/public/index.html",
      inject: 'body'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    hot: true,
  }
};
