let mix = require('laravel-mix')

// mix.copy('node_modules/bootstrap/dist/css/bootstrap.css', 'public/css/index.css');

mix.sass('resources/sass/index.scss', 'public/css/')
    .js('resources/js/index.js', 'public/js')
    .copy('resources/sass/blog.css', 'public/css/')
    