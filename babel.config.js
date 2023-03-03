module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ['@vue/babel-preset-jsx',
      {
        vModel: false,
        compositionAPI: true,
        injectH: true,
      },
    ],
  ],
}
