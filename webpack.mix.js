const mix = require("laravel-mix");

if (mix.inProduction()) {
    mix.version();
    mix.webpackConfig({
        devtool: "hidden-source-map",
    });
}

mix.sass("resources/sass/app.scss", "public/css/main.css");

if (!mix.inProduction()) {
    mix.sourceMaps(true, "source-map");
}
