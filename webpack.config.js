const path = require( 'path' );
const htmlWebpackPlugin = require( 'html-webpack-plugin' );
const copyWebPackPlugin = require('copy-webpack-plugin');


module.exports = {

  entry: './src/index.js',

  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: 'main.js'
  },

  resolve: {
    extensions: [ '.js' ]
  },

  module: {
    rules: [ {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [ '@babel/preset-env' ]
        }
      }
    } ]
  },

  plugins: [
    new htmlWebpackPlugin(
      {
        inject: true,
        template: './public/index.html',
        filename: './index.html'
      }
    ),

    new copyWebPackPlugin({
      patterns: [
        {
          from: './src/styles/styles.css',
          to: ''
        }
      ]
    })
  ]

}


