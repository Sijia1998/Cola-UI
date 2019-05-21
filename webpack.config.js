module.exports = (env) => {
  if (env && env.NODE_ENV === 'production') {
    return require('./build/webpack.config.prod.js');
  } else {
    return require('./build/webpack.config.dev.js');
  }
}