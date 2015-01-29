## jshint-annoyifier ##

For each error in multiple files, this creates a desktop notification
using `node-notifier` saying how many errors are present in each file.

### Usage ###

**Installation**

`npm install jshint-annoyifier`


**CLI**

`jshint index.html --reporter=jshint-annoyifier`


**gulp**
```
gulp.task('jshint', function() {
  gulp.src('index.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-annoyifier'))
});
```
