module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/css/variables/_colors.scss";'
      }
    }
  }
};
