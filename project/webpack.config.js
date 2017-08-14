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
      }, {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }, {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=1000',
      }, {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      }
    ]
  },
  output: {
    filename: 'compiled.js',
    path: __dirname + '/build'
  },
  plugins: [HTMLWebpackPluginConfig]
};
