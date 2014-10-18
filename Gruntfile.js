module.exports = function(grunt){
	grunt.initConfig({
		paths: {
			assets: {
				css: 'public/assets/stylesheets/',
				js: 'public/assets/js/',
				vendor: 'public/assets/vendor/',
			},

			css: 'public/css/',
			js: 'public/js/'
		},

		jsToInject: [
			'<%= paths.assets.vendor %>angular/angular.js',
			'<%= paths.assets.vendor %>angular-bootstrap/ui-bootstrap-tpls.js',
			'<%= paths.assets.vendor %>angular-resource/angular-resource.js',
			'<%= paths.assets.vendor %>angular-ui-router/release/angular-ui-router.js',
			'<%= paths.assets.js %>common/common.module.js',
			'<%= paths.assets.js %>**/*.module.js',
			'<%= paths.assets.js %>app.module.js',
			'<%= paths.assets.js %>**/accessLevels*.js',
			'<%= paths.assets.js %>**/*.js',
		],

		less: {
			dev: {
				options: {
					compress: false
				},
				files: {
					"<%= paths.css %>frontend.css" : "<%= paths.assets.css %>base.less"
				}
			},

			prod: {
				options: {
					compress: true
				},
				files: {
					"<%= paths.css %>frontend.min.css":"<%= paths.assets.css %>base.less",
				}
			}
		},

		concat: {
			options: {
				separator: ';',
			},
			frontend: {
				src: '<%= jsToInject %>',
				dest: '<%= paths.js %>frontend.js'
			}
		},

		uglify: {
			frontend: {
				files: {
					 '<%= paths.js %>frontend.min.js': '<%= paths.js %>frontend.js',
				}
			}
		},

		injector: {
			options: {
				ignorePath: 'public/'
			},
			devJS: {
				files: {
					'app/views/index.php': '<%= jsToInject %>',
				}
			},
			devCSS: {
				files: {
					'app/views/index.php': ['<%= paths.css %>frontend.css']
				}
			},
			prod: {
				files: {
					'app/views/index.php': ['<%= paths.js %>frontend.min.js','<%= paths.css %>frontend.min.css'],
				}
			}
		},

		ngAnnotate: {
			options: {
				remove:true
			},
			dev: { 
				files: [
					{
						src: [ '<%= paths.assets.js %>**/*.js']
					}
				]
			}
		},

		watch: {
			js: {
				files: '<%= jsToInject %>',
				tasks: ['injector:devJS'],
				options: {
					livereload: true
				}
			},
			less: {
				files: ['<%= paths.assets.css %>*.less'],
				tasks: ['less:dev'],
				options: {
					livereload: true
				}
			},
			html: {
				files: ['<%= paths.assets.js %>*.html'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-injector');

	grunt.registerTask('default', ['less:dev','ngAnnotate','injector:devJS','injector:devCSS','watch']);

	grunt.registerTask('prod', ['less:prod', 'ngAnnotate', 'concat', 'uglify','injector:prod']);

}
