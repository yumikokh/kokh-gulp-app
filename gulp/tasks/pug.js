const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('../config');
const runSequence = require('run-sequence');
const postman = require('gulp-postman');
const readConfig = require('read-config');

// 静的ページを生成するディレクトリ
const baseDir = 'share'

//// HTML compile
gulp.task('default-pug', () => {
    const locals = readConfig(`${config.src}/config/meta.yml`);

    return gulp.src([`${config.src}/pug/**/[!_]*.pug`, `!${config.src}/pug/${baseDir}/[!_]*.pug`] )
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.pug({
            locals: locals,
            pretty: true,
            basedir: `${config.src}/pug`
        }))
        .pipe(gulp.dest(`${config.dest}/${config.base}`));
});


/* 
  create static pages from json data
*/
// gulp.task('static-html', () => {
//     const locals = readConfig(`${config.src}/config/meta.yml`);

//     return gulp.src(`${config.src}/pug/${baseDir}/[!_]*.pug`)
//         .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
//         .pipe(postman({
//             locals: locals,
//             postParams: readConfig(`${config.src}/config/redirectData.json`),
//             template: `${config.src}/pug/${baseDir}/page.pug`,
//             metaProperty: 'data'
//         }))
//         .pipe($.pug({
//             pretty: true,
//             basedir: `${config.src}/pug`
//         }))
//         .pipe(gulp.dest(`${config.dest}/${config.base}/${baseDir}`));
// });


gulp.task('pug', () => {
    runSequence('default-pug');
});
