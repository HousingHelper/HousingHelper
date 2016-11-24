// REQUIRE DEPENDENCIES
// ============================================================
var gulp = require('gulp');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
// var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon')
// DECLARE FILE PATHS
// ============================================================
var paths = {
  jsSource: ['./public/app/**/*.js', '!/public/bundle.js'],
  sassSource: ['./public/app/**/*.sass'],
  server: ['server/index.js']
};
// DEFINE TASKS
// ============================================================
gulp.task('serve', function() {
    nodemon({
        'script': paths.server[0]
    });
});

gulp.task('js', function() {
  return gulp.src(paths.jsSource)
  .pipe(babel()) //Uncomment if using ES6
  .pipe(concat('bundle.js'))
  .pipe(annotate())
  //.pipe(uglify()) //Uncomment when code is production ready
  .pipe(gulp.dest('./public'));
});

gulp.task('sass', function () {
  return gulp.src(paths.sassSource)
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./public'));
});

// WATCH TASK
// ============================================================
gulp.task('watch', function() {
  gulp.watch(paths.jsSource, ['js']);
  gulp.watch(paths.sassSource, ['sass']);
});
// DEFAULT TASK - first thing to run when gulp is called
// ============================================================
gulp.task('default', ['js','sass','watch','serve']);
