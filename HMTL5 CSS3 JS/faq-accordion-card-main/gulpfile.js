const {src, dest, watch, parallel } = require("gulp"); // workflow creation

// CSS
const sass = require('gulp-sass')(require('sass')); // For compiling scss and sass files into css
const plumber = require('gulp-plumber'); // Prevent workflow crash
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

//Javascript
const terser = require('gulp-terser-js');

function css(done) {
    src('src/scss/**/*.scss')  // identificar el archivo SASS
    .pipe(sourcemaps.init())
    .pipe(plumber()) // Plumber to prevent workflow crash
    .pipe( sass()) //compilarlo
    //.pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/css')) // Almacenar en disco duro
    done();
}

function javascript(done) {
    src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        //.pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/js'));
    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript);

    done();
}

exports.css = css;
exports.js = javascript;
exports.dev = parallel (css, javascript, dev);