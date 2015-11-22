var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  gutil = require('gulp-util'),
  less = require('gulp-less'),
  path = require('path'),
  connect = require('gulp-connect'),
  sourcemaps = require('gulp-sourcemaps'),
  minifyHTML = require('gulp-minify-html'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  minifyCss = require('gulp-minify-css');


gulp.task('connect', function() {
  connect.server({
    root: path.resolve('./'),
    livereload: true
  });
});
//Uglifies

gulp.task('uglifying', function() {
  return gulp.src('utoApp.js')
    .pipe(uglify()).on('error', gutil.log)
    .pipe(gulp.dest('dist/'));
});

gulp.task('less', function() {
  return gulp.src('styles/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('styles/'))
    .pipe(connect.reload());
});

gulp.task('minify-css', function() {
  return gulp.src('styles/utoStyle.css')
    .pipe(minifyCss()).on('error', gutil.log)

  .pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
  console.log('runs styles');
});

gulp.task('imagemin', function() {
  return gulp.src('photos/*.jpg')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('minify-html', function() {
  var opts = {
    conditionals: false,
    spare: false
  };

  return gulp.src('pages/ru/*.htm')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
  gulp.watch('utoApp.js', ['uglifying']);
  gulp.watch('styles/utoStyle.css', ['minify-css']);
  gulp.watch('pages/ru/*.htm', ['minify-html']);
})

gulp.task('default', ['connect', 'uglifying', 'watch', 'minify-css', 'minify-html', 'imagemin']);
