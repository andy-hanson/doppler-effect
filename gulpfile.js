var
	babelify = require('babelify'),
	browserify = require('browserify'),
	buffer = require('vinyl-buffer'),
	createServer = require('http-server').createServer,
	eslint = require('gulp-eslint'),
	gulp = require('gulp'),
	gutil = require('gulp-util'),
	jade = require('gulp-jade'),
	rimraf = require('rimraf'),
	sourceStream = require('vinyl-source-stream'),
	sourceMaps = require('gulp-sourcemaps'),
	stylus = require('gulp-stylus'),
	watch = require('gulp-watch'),
	watchify = require('watchify')

gulp.task('clean', function(cb) { rimraf('public', cb) })

gulp.task('default', [ 'view', 'style', 'image', 'lint-script', 'script', 'serve' ])

function simple(name, stream, outName) {
	if (outName === undefined)
		outName = name
	var glob = 'assets/' + name + '/*'
	return gulp.src(glob)
	.pipe(watch(glob, { verbose: true }))
	.pipe(stream)
	.pipe(gulp.dest('public/' + outName))
}

gulp.task('view', function() { return simple('view', jade(), '') })

gulp.task('style', function() { return simple('style', stylus()) })

gulp.task('image', function() { return simple('image', gutil.noop()) })

gulp.task('lint-script', function() {
	return gulp.src(['./assets/script/**/*.js', '!./assets/script/**/*.min.js'])
	.pipe(eslint())
	.pipe(eslint.format())
	.pipe(eslint.failOnError())
})

// https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md
	var bundler = watchify(browserify(watchify.args))
	bundler.add('./assets/script/index.js')
	bundler.transform(babelify)

	function bundle() {
		return bundler.bundle()
		.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(sourceStream('index.js'))
		.pipe(buffer())
		.pipe(sourceMaps.init({ loadMaps: true }))
		.pipe(sourceMaps.write('./'))
		.pipe(gulp.dest('public/script'))
	}

	gulp.task('script', bundle)
	bundler.on('update', bundle)
	bundler.on('log', gutil.log)


gulp.task('serve', function() {
	var port = 8000
	createServer({ root: 'public' }).listen(port)
	console.log('Serving at localhost:' + port + '/')
})
