var path = require('path');

var APP_DIR = path.resolve(__dirname, 'app')
var BUILD_DIR = path.resolve(__dirname, 'build');


var config = {
  entry: APP_DIR + '/main.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    contentBase: BUILD_DIR,
    port: 3333
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: APP_DIR,
      filename: 'bundle.js',
      loader: 'babel',
      query: {
	presets: ['es2015','react']
	}
    }]
  }
};

module.exports = config;
