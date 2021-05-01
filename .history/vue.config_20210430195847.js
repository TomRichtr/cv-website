module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                @import "./src/sass/main.scss";
                @import "./src/sass/_variables.scss";
            `
      }
    }
  }
};
