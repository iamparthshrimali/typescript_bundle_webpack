const path = require('path');

module.exports = {

  entry: './src/main.ts',

  output: {

    filename: 'bundle.js',

    path: path.resolve(__dirname, 'dist'),

  },

  module: {

    rules: [

      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,

      },

    ],

  },

  resolve: {
    extensions: ['.ts', '.js'],
  },
  resolveLoader: {
    modules: [
        path.join(__dirname, 'node_modules')
    ]
},



};