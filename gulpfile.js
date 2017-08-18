'use strict';
const fs = require('fs');
const gulp = require('gulp');
const less = require('gulp-less');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const csso = require('gulp-csso');
const imagemin = require('gulp-imagemin');
const pump = require('pump');
const plumber = require('gulp-plumber');
const browserify = require('browserify');
const watchify = require('watchify');
const runSequence = require('run-sequence');
const del = require('del');
const stringify = require('stringify');

global.isDeploy = false;

gulp.task('build-js', function () {
  if (!fs.existsSync('./dist')) {
    fs.mkdir('./dist', function () { });
  }
  if (global.isDeploy) {
    var bundler = browserify('./src/main.js');
  } else {
    var bundler = watchify(browserify('./src/main.js', { debug: true }));
  }
  bundler
    .transform(stringify(['.html', '.tmpl.html']))
  var bund = function () {
    return bundler
      .bundle()
      .on('error', function (err) { console.log('Error : ' + err.message); })
      .pipe(fs.createWriteStream('./dist/main.js'));
  };
  if (!global.isDeploy) {
    bundler.on('update', bund);
  }
  return bund();
});

gulp.task('build-css', function () {
  const autoprefix = autoprefixer(
    {
      browsers: ['last 99 versions'],
      cascade: false
    }
  );
  var bundler = gulp
    .src(['./node_modules/sash-layout/**/*.css', './src/less/**/*.less'])
    .pipe(less({
      paths: ['.', './src/less']
    }));

  if (global.isDeploy) {
    bundler = bundler
      .pipe(autoprefix)
      .pipe(csso());
  } else {
    bundler = bundler
      .pipe(autoprefix);
  }
  return bundler
    .pipe(gulp.dest('./dist/'));
});

gulp.task('compile-ts', function () {
  return gulp
    .src('./src/**/*.ts')
    .pipe(plumber())
    .pipe(tsProject({
      out: 'output.js',
      sourceMap: true
    }))
    .js
    .pipe(gulp.dest('./src'));
});

gulp.task('copy-static', function () {
  const destination = gulp.dest('./dist/');
  const bundler = gulp
    .src([
      './src/img/*.png',
      './src/img/*.jpg',
      './src/img/*.gif',
      './src/img/*.ico',
      './src/data/*.*',
      './src/index.html'
    ]);
  if (global.isDeploy) {
    return bundler
      .pipe(imagemin())
      .pipe(destination);
  } else {
    return bundler
      .pipe(destination);
  }
});

gulp.task('copy-html', function () {
  const destination = gulp.dest('./dist/');
  const bundler = gulp
    .src('./src/index.html');
  return bundler
    .pipe(destination);
});

gulp.task('clean', function (cb) {
  return del(['./dist'], cb);
});

gulp.task('default', function (cb) {
  runSequence('compile-ts', 'build-js', 'build-css', 'copy-static', function () {
    const server = require('./server');
    gulp.watch('./src/**/*.ts', ['compile-ts']);
    gulp.watch('./src/**/*.html', ['copy-html']);
    gulp.watch('./src/**/*.less', ['build-css']);
    cb();
  });
});

gulp.task('deploy', function (cb) {
  runSequence('set-deploy', 'compile-ts', 'build-js', 'build-css', 'copy-static', 'compress-js', cb);
});

gulp.task('compress-js', function (cb) {
  pump([
    gulp.src('./dist/**/*.js'),
    uglify(),
    gulp.dest('./dist/')
  ], cb);
});

gulp.task('set-deploy', function () {
  global.isDeploy = true;
});
