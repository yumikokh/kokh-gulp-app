const gulp = require('gulp');
const config = require('../config');
const del = require('del');

gulp.task('clean', () => {
    return del(`${config.dest}`).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
    });
});
