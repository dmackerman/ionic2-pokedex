var path = require('path');
var paths = require('./ionic.config').paths;


module.exports = {
  entry: [
    'es6-shim/es6-shim.min',
    'reflect-metadata',
    'zone.js',
    path.join(__dirname, paths.wwwDir, paths.appDir, paths.appSrcModule)
  ],
  output: {
    path: path.join(__dirname, paths.wwwDir, paths.buildDir, paths.buildJSDir),
    filename: paths.appBuildBundle,
    publicPath: path.join(paths.buildDir, paths.buildJSDir),
    pathinfo: false // show module paths in the bundle, handy for debugging
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'awesome-typescript',
        query: {
          'doTypeCheck': false,
          'useWebpackText': true
        },
        include: [path.join(__dirname, paths.wwwDir)],
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript',
        query: {
          'doTypeCheck': false
        },
        include: [path.join(__dirname, paths.wwwDir)],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      'angular2': path.resolve('node_modules/angular2')
    },
    extensions: ["", ".js", ".ts"]
  }
};
