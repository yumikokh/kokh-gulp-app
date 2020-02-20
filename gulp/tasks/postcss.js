const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('../config');
const readConfig = require('read-config');
const browserSync = require('browser-sync').has('myServer') ?
    require('browser-sync').get('myServer') :
    require('browser-sync').create('myServer');

//// PostCSS Plugins
const precss = require('precss');
const assets = require('postcss-assets');
const easyImport = require('postcss-easy-import');
const utils = require('postcss-utilities');
const calc = require('postcss-calc');
const each = require('postcss-each');
const sugarss = require('sugarss');
const autoprefixer = require('autoprefixer');

//// CSS compile
gulp.task('postcss', () => {
    const processors = [
        easyImport({
            prefix: false,
            extensions: ['.sss'],
            glob: true,
        }),
        each(),
        precss(),
        assets({
            basePath: `${config.dest}/${config.base}/`,
            relative: 'css',
            cachebuster: true
        }),
        utils({
            centerMethod: "flexbox"
        }),
        calc(),
        autoprefixer()
    ];

    return gulp.src(`${config.src}/css/style.sss`)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.postcss(processors, { parser: sugarss }))
        .pipe($.rename({extname: '.css'}))
        // .pipe($.pleeease(config.pleeease))
        .pipe(gulp.dest(`${config.dest}/${config.base}/css`))
        .pipe(browserSync.stream());
});
