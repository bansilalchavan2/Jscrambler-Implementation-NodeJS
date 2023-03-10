var gulp = require('gulp');
var jscrambler = require('gulp-jscrambler');

gulp.task('default', function (done) {
  gulp
    .src('app/**/*.js')
    .pipe(jscrambler({
      keys: {
        accessKey: '1DA0E0A36438419C329E9CEABA974D037BAC2E4D',
        secretKey: 'D0F136D62DDB214932CA861F774733FE7CCDD956'
      },
      applicationId: '640aeb13d866e1001148873e',
      params: [
        
        ]
    }))
    .pipe(gulp.dest('dist/'))
    .on('end', done);
});