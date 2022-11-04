const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin')


// compilar sass
function compiledSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

// comprimir js
function jsCompress(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

// comprimir imagens
function imgCompress(){
    return gulp.src('./source/images/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}


exports.default = function(){
    gulp.watch('./source/styles/*.scss', gulp.series(compiledSass));
    gulp.watch('./source/scripts/*.js', gulp.series(jsCompress));
    gulp.watch('./source/images/*.jpg', gulp.series(imgCompress));
}

