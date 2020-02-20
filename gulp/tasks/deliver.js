const gulp = require('gulp');
const config = require('../config');
const $ = require('gulp-load-plugins')();
const runSequence = require('run-sequence');
const pump = require('pump');

const mqpacker = require('css-mqpacker');
const cssnano = require('cssnano');

gulp.task('cssmin', () => {
    const processors = [
        mqpacker(),
        cssnano()
    ];

    return gulp.src(`${config.dest}/${config.base}/css/style.css`)
        .pipe($.postcss(processors))
        .pipe(gulp.dest(`${config.dest}/${config.base}/css`));
});

gulp.task('jsmin', () => {
    const options = {
        preserveComments: 'license',
        drop_code: true,
        drop_debugger: true
    };

    pump([
        gulp.src(`${config.dest}/${config.base}/js/script.js`),
        $.stripDebug(),
        $.uglify(options),
        gulp.dest(`${config.dest}/${config.base}/js`)
    ]);
});

gulp.task('deliver', () => {
    runSequence('build', 'imgmin', ['cssmin', 'jsmin']);
});

// See: https://github.com/hail2u/node-css-mqpacker
// See: https://github.com/ben-eb/cssnano
// See: https://github.com/terinjokes/gulp-uglify
