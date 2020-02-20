const gulp = require('gulp');
const config = require('../config');
const browserSync = require('browser-sync').has('myServer') ?
    require('browser-sync').get('myServer') :
    require('browser-sync').create('myServer');
const runSequence = require('run-sequence');

const reload = browserSync.reload;

gulp.task('watch', () => {
    gulp.watch([`${config.src}/css/**/*.sss`], ['postcss']);
    gulp.watch([`${config.src}/js/**/*.js`], ['browserify', reload]);
    gulp.watch([`${config.src}/pug/**/*.pug`, `${config.src}/**/*.yml`], ['pug', reload]);
});
