module.exports = (grunt) ->
	grunt.initConfig
		pkg:
			grunt.file.readJSON 'package.json'

		browserify:
			dev:
				files:
					'public/script/index.js':
						[ 'assets/script/index.js' ]
				options:
					extensions: [ '.js' ]

		clean:
			all: [ 'node_modules', 'public' ]
			pre: [ 'public' ]

		exec:
			serve:
				cwd: 'public'
				cmd: 'python -m SimpleHTTPServer'

		watch:
			jade:
				files: 'assets/view/**/*'
				tasks: [ 'jade' ]
			script:
				files: 'assets/script/**/*'
				tasks: [ 'browserify:dev' ]
			style:
				files: 'assets/style/**/*'
				tasks: [ 'stylus' ]
			image:
				files: 'assets/image/**/*'
				tasks: [ 'copy:image' ]

		stylus:
			files:
				expand: yes
				cwd: 'assets/style'
				src: [ 'index.styl' ]
				dest: 'public/style'
				ext: '.css'
			options:
				compress: yes
				linenos: yes
				firebug: yes

		jade:
			files:
				expand: yes
				cwd: 'assets/view'
				src: '**/*'
				dest: 'public/'
				ext: '.html'

		copy:
			image:
				expand: yes
				cwd: 'assets/image/'
				src: '**/*'
				dest: 'public/image/'

		concurrent:
			tasks: [ 'exec:serve', 'watch' ]
			options:
				logConcurrentOutput: true

	(require 'load-grunt-tasks') grunt

	grunt.registerTask 'build', [
		'clean:pre',
		'copy',
		'browserify',
		'stylus',
		'jade'
	]

	grunt.registerTask 'default', [ 'build', 'concurrent' ]
