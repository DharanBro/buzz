var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var rename = require("gulp-rename");
var watch = require('gulp-watch');

function task_less() {
    return gulp.src('static/less/app.less')
        .pipe(less())
        .pipe(gulp.dest('static/css'));
}

function task_cssmin() {
    return gulp.src('static/css/app.css')
        .pipe(cssmin({
            keepSpecialComments: 0
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('static/css'));
}

function task_watch() {
    return gulp.watch('static/less/**/*.less', ['cssmin']);
}


exports.task_less = task_less;
exports.task_cssmin = task_cssmin;
exports.task_watch = task_watch;
exports.task_build = gulp.series(task_less, task_cssmin);
exports.task_default = task_cssmin;