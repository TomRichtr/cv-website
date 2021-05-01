module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_variables.scss";`
      }
    }
  }
};
