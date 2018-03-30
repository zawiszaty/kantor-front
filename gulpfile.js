let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./sass/**/*.sass', ['sass']);
    gulp.watch('./**/*.html').on('change', browserSync.reload);

});

gulp.task('default', ['sass', 'browser-sync']);

