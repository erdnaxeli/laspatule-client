module.exports = {
  devServer: {
    public: "0.0.0.0:8080"
  },
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true
    })
  }
};
