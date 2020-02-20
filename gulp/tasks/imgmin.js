const gulp = require('gulp');
const config = require('../config');
const $ = require('gulp-load-plugins')();
const pngquant = require("imagemin-pngquant");
const mozjpeg = require('imagemin-mozjpeg');
const del = require('del');

gulp.task('imgmin', () => {
    return gulp.src(`${config.dest}/${config.base}/images/**/*.{png,jpg,gif,svg}`)
        .pipe($.imagemin([
            pngquant({
                quality: '65-80',
                speed: 1,
                floyd: 0
            }),
            mozjpeg({
                quality: 50,
                progressive: true
            }),
            $.imagemin.svgo(),
            $.imagemin.optipng(),
            $.imagemin.gifsicle()
        ]))
        .pipe(gulp.dest(`${config.dest}/${config.base}/images`));
});
