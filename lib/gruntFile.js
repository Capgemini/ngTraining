'use strict';

/*global module*/

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		watch: {
			files: ['src/**/*.js', 'test/**/*.js'],
			tasks: 'develop'
		},
		jshint: {
			files: ['src/**/*.js', 'test/**/*.js'],
			options: {
				"node": true,
				"browser": true,
				"esnext": true,
				"bitwise": true,
				"camelcase": false,
				"curly": true,
				"eqeqeq": true,
				"immed": true,
				"indent": 2,
				"latedef": true,
				"newcap": true,
				"noarg": true,
				"nonew": true,
				"quotmark": "single",
				"regexp": true,
				"undef": true,
				"unused": false,
				"strict": false,
				"trailing": true,
				"smarttabs": true,
				"globals": {
					"angular": false,
						"inject": false,
						"$": false,
						"Response": false,
						"BrowserDetect": false,
						"describe": false,
						"it": false,
						"expect": false,
						"beforeEach": false,
						"afterEach": false,
						"spyOn": false
				}
			}
		},
		jasmine_node: {
			specNameMatcher: '', // load only specs containing specNameMatcher
			projectRoot: './test',
			requirejs: false,
			forceExit: false,
			verbose: false,
			jUnit: {
				report: false,
				savePath : './build/reports/jasmine/',
				useDotNotation: true,
				consolidate: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-jasmine-node');

	// Default task.
	grunt.registerTask('develop', ['timestamp', 'jshint', 'test', 'watch']);

	grunt.registerTask('test', 'jasmine_node');

	grunt.registerTask('timestamp', function() {
		grunt.log.subhead(Date());
	});

	grunt.registerTask('build', ['timestamp','jshint', 'test']);
};