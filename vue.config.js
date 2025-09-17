const {defineConfig} = require("@vue/cli-service");

module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
    chainWebpack: (config) => {
        config.plugin("html").tap((args) => {
            args[0].title = "Mameed | Portflio project";
            return args;
        });
    },
});
