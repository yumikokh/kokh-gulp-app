const gulp = require('gulp');
const config = require('../config');
const browserSync = require('browser-sync').has('myServer') ?
    require('browser-sync').get('myServer') :
    require('browser-sync').create('myServer');

//// Serve
gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: config.dest
        },
        startPath: config.base,
        ghostMode: false,
        open: false
    });
});
