module.exports = {
  filenameHashing: false,

  devServer: {
    proxy: 'http://mtes-personal.local',
  },

  // output built static files to Laravel's public dir.
  // note the "build" script in package.json needs to be modified as well.
  outputDir: '../',

  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',

  // modify the location of the generated HTML file.
  indexPath: process.env.NODE_ENV === 'production'
    ? './app.blade.php'
    : 'index.html',
};
