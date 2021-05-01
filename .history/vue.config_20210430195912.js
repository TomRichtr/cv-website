module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                @import "./src/sass/_variable.scss.scss";
            `
      }
    }
  }
};
