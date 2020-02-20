const gulp = require('gulp');
const config = require('../config');
const spritesmith = require('gulp.spritesmith-multi');
const runSequence = require('run-sequence');

gulp.task('spritesmith', () => {
    const params = {
        spritesmith: {
          padding: 4,
          algorithm: 'left-right',
          algorithmOpts: {sort: false}
        }
    }
    return gulp.src(`${config.src}/sprite_src/**/*.{png,jpg,gif}`)
        .pipe(spritesmith(params))
        .on('error', err => {
            console.log(err);
        })
        .pipe(gulp.dest(`${config.src}/sprite_dest/`));
});


gulp.task('sprite:copy', () => {
    return gulp.src([
            `${config.src}/sprite_dest/**/*.{png,jpg,gif}`,
        ])
        .pipe(gulp.dest(`${config.dest}/${config.base}/images/sprites`));
});


gulp.task('sprite', () => {
    runSequence('spritesmith', 'sprite:copy');
});


// See: https://github.com/twolfson/gulp.spritesmith
// See: https://github.com/reducejs/gulp.spritesmith-multi
