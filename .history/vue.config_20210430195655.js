module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        data: `@import "./src/sass/main.scss";`
      }
    }
  }
};
