const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('../config');
const browserify = require('browserify');
const source = require("vinyl-source-stream");
const watchify = require("watchify");

//// JS compile

const option = {}
// option.cache = {}
// option.packageCache = {}
option.fullPaths = true
option.debug = true

gulp.task('browserify', () => {
    return watchify(browserify(`${config.src}/js/script.js`, option))
        .transform("babelify")
        .bundle()
        .on('error', handleErrors)
        .pipe(source('script.js'))
        .pipe(gulp.dest(`${config.dest}/${config.base}/js`));

});

function handleErrors() {
    const args = Array.prototype.slice.call(arguments);
    $.notify.onError({
        title: "Compile Error",
        message: "<%= error %>"
    }).apply(this, args);
    this.emit('end');
};
