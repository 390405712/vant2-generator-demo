module.exports = {
  lintOnSave: false,
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