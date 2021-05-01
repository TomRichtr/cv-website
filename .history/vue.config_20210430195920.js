module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                @import "@/sass/_variable.scss.scss";
            `
      }
    }
  }
};
