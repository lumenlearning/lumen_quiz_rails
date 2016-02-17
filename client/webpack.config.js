var webpack = require('webpack');

module.exports = {
  entry: ['./App.js'],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    filename: '../public/bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      }
    ],
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ]
  }
}