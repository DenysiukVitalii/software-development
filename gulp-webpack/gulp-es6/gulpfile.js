var gulp = require("gulp");
var babelify = require('babelify');
var browserify = require("browserify");
var connect = require("gulp-connect");
var source = require("vinyl-source-stream");

var uglify = require('gulp-uglify-es').default;
var pump = require('pump');
let rename = require("gulp-rename");

var htmlSources =['src/*.html'];
var jsSources = ['src/*.js'];
var allSources = htmlSources.concat(jsSources);

gulp.task("copyStaticFiles", function(){
    return gulp.src("./src/*.html")
               .pipe(gulp.dest("./build"));
});

gulp.task("build", function(){
    return browserify({
        entries: ["./src/index.js"]
    })
    .transform(babelify.configure({
        presets : ["es2015"]
    }))
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./build"))
    ;
});

gulp.task("server", function(){
    connect.server({
        root : "./build",
        livereload : true,
        port : 9001
    });
});

gulp.task('livereload', function() {
  gulp.src(allSources)
    .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(allSources, ['build', 'livereload']);
});

gulp.task("uglify", function () {
    return gulp.src("build/bundle.js")
        .pipe(rename("bundle.min.js"))
        .pipe(uglify(/* options */))
        .pipe(gulp.dest("build/"));
});

gulp.task("default",["copyStaticFiles", "build", 'uglify']);
