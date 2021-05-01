module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/sass/_colors.scss";'
      }
    }
  }
};
