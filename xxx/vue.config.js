module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  devServer: {
    host: '192.168.191.1'
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  productionSourceMap: false,
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/Bling/'
    : ''
}
