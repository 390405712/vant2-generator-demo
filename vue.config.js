const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    // config.resolve.alias.set('element-ui-generator', resolve(__dirname, './../element-ui-generator/dist'))
  },
  css: {
    // extract: false,
    // sourceMap: false,
    // requireModuleExtension: true,
    loaderOptions: {
      scss: {
        prependData: `
         @import "./src/styles/variable.scss";
         @import "./src/styles/mixin.scss";
        `,
      },
    },
  },
}