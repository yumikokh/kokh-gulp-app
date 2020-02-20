const gulp = require('gulp');
const runSequence = require('run-sequence');
const config = require('../config');
const fs = require('fs');
const readConfig = require('read-config');
const sheetLoader = require('sheet-loader');
const _ = require('lodash');


gulp.task('import-question', cb => {
    const sheetConfig = readConfig(`${config.src}/config/sheet-config.yml`);
    const questionSettings = readConfig(`${config.src}/config/question-settings.yml`);
    const combinedConfig = Object.assign({}, sheetConfig, questionSettings);
    const dest = `${config.src}/js/data/question.json`;

    new sheetLoader(combinedConfig).load((err, rows, labels) => {
        if (err) {
            cb(err);
            return;
        }

        fs.writeFile(dest, JSON.stringify(rows), 'utf8', cb);
    })
});

gulp.task('import-result', cb => {
    const sheetConfig = readConfig(`${config.src}/config/sheet-config.yml`);
    const resultSettings = readConfig(`${config.src}/config/result-settings.yml`);
    const combinedConfig = Object.assign({}, sheetConfig, resultSettings);
    const dest = `${config.src}/js/data/result.json`;

    new sheetLoader(combinedConfig).load((err, rows, labels) => {
        if (err) {
            cb(err);
            return;
        }
        
        fs.writeFile(dest, JSON.stringify(rows), 'utf8', cb);
    })
});

gulp.task('import', () => {
    runSequence('import-question', 'import-result');
});
