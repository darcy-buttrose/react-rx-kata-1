import gulp from 'gulp';
import typescript from 'gulp-typescript';
import babel from 'gulp-babel';
import mocha from 'gulp-mocha';
import webpack from 'webpack-stream';
import changed from 'gulp-changed';
import 'babel-polyfill';

gulp.task('compile', () => {
    return gulp.src(['./app/**/*.ts*'])
        .pipe(changed('./build',{extension: '.js'}))
        .pipe(typescript(typescript.createProject('./tsconfig.json')))
        .pipe(babel({
            plugins: [
                'transform-es2015-modules-commonjs'
            ],
            presets: [
                'es2016'
            ]
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('movestatic', () => {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./build'));
});

gulp.task('test',['compile'], () => {
    return gulp.src('./build/**/*.spec.js')
        .pipe(mocha({
            reporter: 'spec'
        }));
});

gulp.task('package', ['compile','movestatic'],function() {
    return gulp.src('./build/main.js')
        .pipe(webpack({
            devtool: 'sourse-map',
            output: {
                filename: 'bundle.js'
            }
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch',['package'],function(){
    gulp.watch(['./src/**/*.ts'],['package']);
})

gulp.task('default',['package']);