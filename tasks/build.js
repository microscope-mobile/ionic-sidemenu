// imports
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

// build src
gulp.task('browserify', function () {
    return browserify('./src/app.js', {
        debug: true
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./www/'));
});

// build in release mode
gulp.task('browserify:release', function () {
    return browserify('./src/app.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./www/'));
});

// copy fonts
gulp.task('fonts', function () {
    return gulp.src('node_modules/ionic-npm/fonts/**')
        .pipe(gulp.dest('./www/fonts/'));
});

// copy assets
gulp.task('assets', function () {
    return gulp.src('./assets/**')
        .pipe(gulp.dest('./www/'));
});

// copy templates
gulp.task('templates', function () {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./www/'));
});
