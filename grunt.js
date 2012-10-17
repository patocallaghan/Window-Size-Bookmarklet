/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		meta: {
			version: '0.1.0',
			banner: '/*! PROJECT_NAME - v<%= meta.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'* http://PROJECT_WEBSITE/\n' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
				'YOUR_NAME; Licensed MIT */'
		},
		lint: {
			files: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
		},
		test: {
			files: ['test/**/*.js']
		},
		concat: {
			dist: {
				src: ['<banner:meta.banner>', '<file_strip_banner:src/FILE_NAME.js>'],
				dest: 'dist/FILE_NAME.js'
			}
		},
		compass: {
			dev: {
				src: 'src/css/scss',
				dest: 'src/css',
				outputstyle: 'expanded',
				linecomments: true
			},
			prod: {
				src: 'src/css/scss',
				dest: 'src/css',
				outputstyle: 'compressed',
				linecomments: false,
				forcecompile: true
			}
		},
		min: {
			bootstrap: {
				src: ["src/js/bootstrap.js"],
				dest: 'dist/bootstrap.min.js'
			},
			windowsize: {
				src: ["src/js/windowsize.js"],
				dest: 'dist/windowsize.min.js'
			}
		},
		watch: {
			files: '<config:lint.files>',
			tasks: 'lint test',
			min: {
				files: ['src/js/*.js'],
				tasks: ['min']
			},
			compass: {
				files: ['src/css/scss/**/*.scss'],
				tasks: ['compass:dev']
			}
		},
		jshint: {
			options: {
				/*curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true*/
			},
			globals: {}
		},
		server: {
			port: 8000,
			base: 'src'
		}
	});

	// Default task.
	grunt.registerTask('default', 'lint test concat min compass:dev');

	grunt.loadNpmTasks('grunt-compass');

};
