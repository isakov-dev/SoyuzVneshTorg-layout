let gulp = require('gulp'),
    sass = require('gulp-sass'),
    gcmq = require('gulp-group-css-media-queries'),
    include = require('gulp-include');

let path = {
    build: {
        css: 'css/',
        html: './',
    },
    src: {
        css: 'src/scss/style.scss',
        html: 'src/html/*.html',
    },
    watch: {
        css: 'src/scss/**/*.scss',
        html: 'src/html/**/*.html',
    }
};

function styles() {
    return gulp.src(path.src.css)
        .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
        .pipe(gcmq())
        .pipe(gulp.dest(path.build.css))
}

function html() {
    gulp.src(path.src.html)
        .pipe(include())
            .on('error', console.log)
        .pipe(gulp.dest(path.build.html))
}

function watch() {
    gulp.watch(path.watch.css, styles)
    gulp.watch(path.watch.html, html)
}

exports.default = gulp.parallel(styles, html, watch);