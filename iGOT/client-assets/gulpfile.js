"use strict";

const gulp = require("gulp");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const jsonminify = require("gulp-jsonminify");
const del = require("del");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");

// ✅ Image plugins
const imageminJpegtran = require("imagemin-jpegtran");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminOptipng = require("imagemin-optipng");
const imageminSvgo = require("imagemin-svgo");

const outputPath = "./dist/";

// uglify all javascript code
function uglifyScripts() {
    return gulp.src("./assets/**/*.js")
        .pipe(uglify())
        .pipe(gulp.dest(outputPath));
}

// minimize all jsons
function minimizeJSON() {
    return gulp.src("./assets/**/*.json")
        .pipe(jsonminify())
        .pipe(gulp.dest(outputPath));
}

// minimize all css
function minimizeCss() {
    return gulp.src("./assets/**/*.css")
        .pipe(postcss([cssnano()]))
        .pipe(gulp.dest(outputPath));
}

// minimize & optimize image formats: jpg, png, svg, gif
function minimizeImages() {
    return gulp.src("./assets/**/*.{jpg,png,svg,gif}")
        .pipe(
            imagemin([
                imageminJpegtran({ progressive: true }),
                imageminGifsicle({ interlaced: true }),
                imageminOptipng({ optimizationLevel: 5 }),
                imageminSvgo({
                plugins: [
                    {
                        name: "preset-default",
                        params: {
                            overrides: {
                                removeViewBox: false,
                                cleanupIds: false
                            }
                        }
                    }
                ]
                })
            ])
        )
        .pipe(gulp.dest(outputPath));
}

// transfer everything to destination
function transfer() {
    return gulp.src([
        "./assets/**/*",
        "!./assets/**/*.js",
        "!./assets/**/*.json",
        "!./assets/**/*.css",
        "!./assets/**/*.{jpg,png,svg,gif}"
    ])
    .pipe(gulp.dest(outputPath));
}

// clean content inside dist folder
function clean() {
  return del(["dist/**"]);
}

// execute all tasks like transfer, minimizing images
const build = gulp.series(
    clean,
    gulp.parallel(
        transfer,
        uglifyScripts,
        minimizeJSON,
        minimizeCss,
        minimizeImages
    )
);

exports.default = build;