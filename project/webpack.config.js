var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new
HTMLWebpackPlugin({
  template: __dirname + '/src/communityProjects.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports = {
  entry: __dirname + '/src/communityProjects.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'compiled.js',
    path: __dirname + '/build'
  },
  plugins: [HTMLWebpackPluginConfig]
};
