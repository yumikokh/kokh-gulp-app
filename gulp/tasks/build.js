const gulp = require('gulp');
const runSequence = require('run-sequence');
const $ = require('gulp-load-plugins')();

gulp.task('build', () => {
    runSequence(['pug', 'postcss', 'browserify'], () => {
        $.notify('[ build compiled. ]');
    });
});

gulp.task('clean-build', () => {
    runSequence('clean', ['pug', 'postcss', 'browserify'], () => {
        $.notify('[ build compiled. ]');
    });
});

gulp.task('default', () => {
    runSequence('build');
});
